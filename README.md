# DiscordSpotifyPresence
Spotify Presence for Discord without connecting them !

This project displays what you're listening to on Spotify on Discord without connecting the two accounts. It's designed for those who want to share their current tunes with friends or members but don't want to directly link Spotify and Discord because of the known drawback of that (for example if you don't want to let people know what you're listening sometimes or outside with your phone, with linked account you must go to your profile settings each time...).

Ce projet permet d'afficher ce que vous écoutez sur Spotify sur Discord sans avoir à lier les deux comptes. Il a été créé pour ceux qui souhaitent partager leur musique avec leurs amis ou membres des serveurs sur lesquels vous êtes sans pour autant connecter directement Spotify à Discord, pour éviter les désavantages comme si par exemple vous ne voulez pas montrer que vous écoutez spotify quand vous êtes sur votre téléphone ou simplement parfois ne pas montrer. Ici il suffira de fermer l'application ou de ne pas la lancer.
# Lang Supported :
- English (英語, Inglés, Anglais, Inglese)
- Español (Spanish, Espagnol, Spagnolo, スペイン語)
- Français (French, Francés, Francese, フランス語)
- Italiano (Italian, Italien, Italiano, イタリア語)
- 日本語 (Japanese, Japonés, Japonais, Giapponese)
- Secret Language 🤫


# English

## Prerequisites

1. **Git** (Optional if downloaded as ZIP): Ensure you have [Git](https://git-scm.com/) installed on your machine. For Windows users, you can also use alternatives like [GitHub Desktop](https://desktop.github.com/).
2. **Clone the Project** or **Download the project as ZIP** : Clone the project to the location where you want to save it using the following command. If you're using Github Desktop, simply copy-paste the link into the application under "Clone a repository".
   ```bash
   git clone https://github.com/AnnoyedDev/DiscordSpotifyPresence.git
   ```
3. **Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
4. **npm Packages**: Once Node.js is installed, run the following command in the project folder to install the necessary dependencies.
   ```bash
   npm install
   ```
5. **Creating a Spotify dev application**:
   - Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
   - Click on "Create an App".
   - Fill out the required information and note down the Client ID and Client Secret to add to your `config.json` file.
   - The Client ID goes under `clientId`.
   - The Secret goes under `clientSecret`.
   - For the redirect, add `http://localhost:8888/callback`.
   - Start the application with:
     ```bash
     node index.js
     ```
   - Click the link, authorize, and then note the URL returned in your address bar.
   - Start again the application with the code in the returned URL `node index.js {CODE}`.

6. **Creating a Discord application**:
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications).
   - Click on "New Application" and fill out the necessary details.
   - Under the "Rich Presence" tab, add the images and assets you wish to use. The main image should be named `spotify` and note down the Client ID to add to your `config.json` under `discordClientId`.

7. **Configuration file `config.json`**: Ensure you have a `config.json` file in the same directory as your `index.js`. This file should contain configuration information for the Spotify and Discord APIs.

8. **Spotify Authorization**: Before you can run the script for the first time, you must authorize the application through Spotify. Follow the instructions displayed in the console for this.
   
**DO NOT TOUCH OR MODIFY `accessToken` AND `refreshToken` IN THE `config.json` FILE !**
   
## How to run

1. Open a console or terminal.
2. Navigate to the directory containing `index.js`.
3. Run the following command:
   ```bash
   node index.js
   ```



# Français

## Prérequis

1. **Git** (Optionnel si vous téléchargez le code en ZIP) : Assurez-vous d'avoir [Git](https://git-scm.com/) installé sur votre machine. Pour les utilisateurs de Windows, vous pouvez également utiliser des alternatives comme [GitHub Desktop](https://desktop.github.com/).
2. **Clonez le projet** **Ou téléchargez le code en ZIP** : Clonez le projet à l'endroit où vous souhaitez l'enregistrer en utilisant la commande suivante. Si vous utilisez Github Desktop, il vous suffit de copier-coller le lien sur l'application dans "copier un projet".
   ```bash
   git clone https://github.com/AnnoyedDev/DiscordSpotifyPresence.git
   ```
3. **Node.js** : Assurez-vous d'avoir [Node.js](https://nodejs.org/fr/) installé sur votre machine.
4. **Packages npm** : Une fois Node.js installé, exécutez la commande suivante dans le dossier du projet pour installer les dépendances nécessaires.
   ```bash
   npm install
   ```
5. **Création d'une application dev sur Spotify** :
   - Allez sur le [Dashboard des développeurs de Spotify](https://developer.spotify.com/dashboard/applications).
   - Cliquez sur "Create an App".
   - Remplissez les informations nécessaires et notez l'ID du client et le secret du client pour les ajouter à votre fichier `config.json`.
   - Dans la redirection, ajoutez `http://localhost:8888/callback`.
   - L'ID du client va sur `clientId`.
   - Le secret va sur `clientSecret`.
   - Lancez l'application avec :
     ```bash
     node index.js
     ```
   - Cliquez sur le lien, autorisez, puis notez l'URL retournée dans votre barre d'adresse.
   - Relanceez l'application avec comme argument le code retournée sur l'URL `node index.js {code}`.

6. **Création d'une application sur Discord** :
   - Allez sur le [Portail des développeurs de Discord](https://discord.com/developers/applications).
   - Cliquez sur "New Application" et remplissez les détails nécessaires.
   - Sous l'onglet "Rich Presence", ajoutez les images et les assets que vous souhaitez utiliser. L'image principale doit se nommer `spotify` et notez l'ID du client pour l'ajouter à votre fichier `config.json` sur `discordClientId`.

7. **Fichier de configuration `config.json`** : Assurez-vous d'avoir un fichier `config.json` dans le même répertoire que votre `index.js`. Ce fichier doit contenir les informations de configuration pour l'API Spotify et Discord.

8. **Autorisation de Spotify** : Avant de pouvoir exécuter le script pour la première fois, vous devez autoriser l'application via Spotify. Suivez les instructions affichées dans la console pour cela.
   
**NE PAS MODIFIER / TOUCHER `accessToken` ET `refreshToken` DANS LE FICHIER `config.json` !**
   
## Comment l'exécuter

1. Ouvrez une console ou un terminal.
2. Naviguez vers le répertoire contenant `index.js`.
3. Exécutez la commande suivante :
   ```bash
   node index.js
   ```

