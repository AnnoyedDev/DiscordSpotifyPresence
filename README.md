# DiscordSpotifyPresence
Spotify Presence for Discord without connecting them !


For thoses who want to show to their friend or member what they are currently listening on Spotify but are lazy or simply don't want to connect Discord and Spotify together.


Pour ceux qui veulent montrer publiquement ce qu'ils sont en train d'écouter sur Spotify mais qui ne veulent pas lier les comptes Spotify et Discord.


# Where's the Source Code / Où est le code source ?
I will share the project when it's finished, it's currently under testing.


Je partegerai le code source lorsque le projet sera terminé, il est actuellement en phase de test. (Oui je sais c'est un tout petit projet mais pour l'instant je veux faire certainnes choses qui ne sont pas possible avec le rich presence. Je vais sans doute devoir écrire un Wrapper pour leurs nouveau système à savoir le GameSDK, tout ça pour afficher "En train d'écouter" au lieu de "En train de jouer", mais meh, je suis un peu flemmard donc si je refais pas le code pour ça je mettrais en ligne).

# English
## Prerequisites:
1. **Git**: Ensure you have [Git](https://git-scm.com/) installed on your machine. For Windows users, alternatives like [GitHub Desktop](https://desktop.github.com/) can also be used.
2. **Node.js**: Ensure you have [Node.js](https://nodejs.org/en/) installed on your machine.
3. **npm packages**: After installing Node.js, run the following command to install the necessary dependencies:
   ```bash
   npm install
   ```
4. **Setting up a Spotify dev application**:
   - Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
   - Click on "Create an App".
   - Fill out the necessary information and note down the client ID and client secret to add to your `config.json` file.
5. **Setting up a Discord dev application**:
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications).
   - Click on "New Application" and fill out the necessary details.
   - Under the "OAuth2" tab, add a redirect and note down the client ID to add to your `config.json` file.
6. **Configuration file `config.json`**: Ensure you have a `config.json` file in the same directory as your `index.js`. This file should contain configuration information for the Spotify and Discord APIs.
7. **Spotify Authorization**: Before you can run the script for the first time, you need to authorize the application via Spotify. Follow the on-screen instructions in the console for this.

## How to run:
1. Open a console or terminal.
2. Navigate to the directory containing `index.js`.
3. Run the following command:
   ```bash
   node index.js
   ```


# Français
#### Prérequis:
1. **Git**: Assurez-vous d'avoir [Git](https://git-scm.com/) installé sur votre machine. Pour les utilisateurs de Windows, vous pouvez également utiliser des alternatives comme [GitHub Desktop](https://desktop.github.com/).
2. **Clonez le projet** à l'endroit où vous souhaitez enregistrer en faisant la commande suivante (Si vous utilisez Github Desktop il vous suffit de copier-coller le lien sur l'application dans copier un projet) :
   ```bash
   git clone https://github.com/AnnoyedDev/DiscordSpotifyPresence.git
  ```
4. **Node.js**: Assurez-vous d'avoir [Node.js](https://nodejs.org/fr/) installé sur votre machine.
5. **Packages npm**: Une fois Node.js installé, exécutez la commande suivante dans le dossier du projet pour installer les dépendances nécessaires:
   ```bash
   npm install
   ```
6. **Création d'une application dev sur Spotify**:
   - Allez sur le [Dashboard des développeurs de Spotify](https://developer.spotify.com/dashboard/applications).
   - Cliquez sur "Create an App".
   - Remplissez les informations nécessaires et notez l'ID du client et le secret du client pour les ajouter à votre fichier `config.json`.
   - Dans la redirection, ajoutez `http://localhost:8888/callback`
   - Lancez l'application avec
     ```bash
     node index.js
     ```
   - L'ID du client va sur `clientId`,
   - Le secret va sur `clientSecret`
   - 
7. **Création d'une application sur Discord**:
   - Allez sur le [Portail des développeurs de Discord](https://discord.com/developers/applications).
   - Cliquez sur "New Application" et remplissez les détails nécessaires.
   - Sous l'onglet "Rich Presence", ajoutez les images et les assets que vous souhaitez utiliser, l'image principale doit se nommer `spotify` et notez l'ID du client pour l'ajouter à votre fichier `config.json` sur `discordClientId`.
8. **
9. **Fichier de configuration `config.json`**: Assurez-vous d'avoir un fichier `config.json` dans le même répertoire que votre `index.js`. Ce fichier doit contenir les informations de configuration pour l'API Spotify et Discord.
10. **Autorisation de Spotify**: Avant de pouvoir exécuter le script pour la première fois, vous devez autoriser l'application via Spotify. Suivez les instructions affichées dans la console pour cela.

## Comment l'exécuter:
1. Ouvrez une console ou un terminal.
2. Naviguez vers le répertoire contenant `index.js`.
3. Exécutez la commande suivante:
   ```bash
   node index.js
   ```
