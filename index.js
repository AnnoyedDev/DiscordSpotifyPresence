
// 📦 Import necessary modules
const { Client } = require('discord-rpc');  // 🔌 For Discord RPC
const axios = require('axios');             // 🌐 To make HTTP requests
const fs = require('fs');                   // 📂 File system operations

// 🛠 Load the configuration from a JSON file
const configFile = './config.json';         // 📍 Path to the config file
let config = require(configFile);           // 📜 Load the config data

// 🌍 Load translations based on the selected language
const langFile = `./lang/${config.language}.json`;  // 📍 Path to the lang file
const translations = require(langFile);     // 📜 Load the translations

// 📡 Create a new RPC client for Discord
const rpc = new Client({ transport: 'ipc' });// 📞 Inter-process communication

// 🔄 Function to obtain the access token from Spotify
function obtainAccessToken(forceRefresh) {
    // 🚫 If refresh token is not available
    if (!config.refreshToken || forceRefresh == 1) {
        console.log(translations.link_message);
        console.log(`🌍 https://accounts.spotify.com/authorize?client_id=${config.clientId}&response_type=code&redirect_uri=${config.redirectUri}&scope=user-read-currently-playing`);
        console.log(translations.instruction_message);
        process.exit();  // ❌ Exit the process
    } else {
        // 📝 Try to refresh the access token
        axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
                grant_type: 'refresh_token',
                refresh_token: config.refreshToken,
                client_id: config.clientId,
                client_secret: config.clientSecret
            }
        }).then(response => {
            // 🎉 Successfully refreshed the token!
            config.accessToken = response.data.access_token;
            fs.writeFileSync(configFile, JSON.stringify(config, null, 2));  // 📝 Save the new token to the config file
        }).catch(error => {
            // 😢 Something went wrong
            console.error(translations.token_refresh_error, error);
            obtainAccessToken(1)
        });
    }
}


// 🎵 Function to update Discord presence with the currently playing Spotify song
function updatePresence(retry) {
    // 📝 Try to get the currently playing song from Spotify
    axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            'Authorization': `Bearer ${config.accessToken}`
        }
    }).then(response => {
        // 🚫 No song is playing or data is empty
        if(response.status == 204 || response.data == '') return;
        
        // 🔍 Extract relevant data from the response
        const { item, progress_ms, is_playing } = response.data;
        const songName = item.name;
        const artistName = item.artists[0].name;
        const startTimestamp = Math.floor((new Date().getTime() - progress_ms) / 1000);
        const endTimestamp = startTimestamp + Math.floor(item.duration_ms / 1000);
        const albumCoverUrl = `spotify:${item.album.images[0].url.split('://')[1]}`;

        // 🔄 Update Discord presence with the song details
        rpc.setActivity({
            details: item.name.length < 2 ? songName + "." : songName,
            state: `${translations.by_artist_prefix}${artistName}${translations.by_artist_suffix}`,
            type: 2,
            largeImageKey: 'spotify',
            smallImageKey: albumCoverUrl,
            smallImageText: item.album.name.length < 2 ? item.album.name + "." : item.album.name,
            instance: false,
            ...is_playing ? {startTimestamp: startTimestamp, endTimestamp: endTimestamp,} : {},
            buttons: [
                { label: translations.listen_on_spotify, url: item.external_urls.spotify },
                { label: translations.view_on_github, url: "https://github.com/AnnoyedDev/DiscordSpotifyPresence" }
            ]
        });
    }).catch(async error => {
        // 😢 Something went wrong
        console.error(translations.presence_update_error, error);
        obtainAccessToken();
        retry ? retry : retry = 0
        retry++
        if(retry > 3) {
            console.log(error)
            console.log(translations.update_failed);
            process.exit(1);  // ❌ Exit the process with error
        }
        updatePresence(retry);
    });
}

// 🚀 Event listener for when the RPC client is ready
rpc.on('ready', () => {
    console.log(translations.connected_to_discord);
    updatePresence();
    setInterval(updatePresence, 15 * 1000);  // ⏱ Update presence every 15 seconds
});

// 📌 Check if an authorization code is provided as an argument
if (process.argv[2]) {
    const authCode = process.argv[2];
    axios.post('https://accounts.spotify.com/api/token', null, {
        params: {
            grant_type: 'authorization_code',
            code: authCode,
            redirect_uri: config.redirectUri,
            client_id: config.clientId,
            client_secret: config.clientSecret
        }
    }).then(response => {
        config.accessToken = response.data.access_token;
        config.refreshToken = response.data.refresh_token;
        fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
        rpc.login({ clientId: config.discordClientId }).catch(console.error);
    }).catch(error => {
        // 😢 Something went wrong
        console.error(translations.access_token_error, error);
    });
} else {
    // 📌 If no access token is available, obtain one. Else, login to Discord.
    if (!config.accessToken) {
        obtainAccessToken();
    } else {
        rpc.login({ clientId: config.discordClientId }).catch(console.error);  // Error message remains the same as there's no translation in the original code
    }
}
