require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Test Command',
    },
    {
        name: 'ping',
        description: 'Pong!',
    },
    {
        name: 'help',
        description: 'Benutze diesen Command, wenn du Hilfe brauchst',
    },
    {
        name: 'about-me',
        description: 'lerne mich kenne',
    },
    {
        name: 'youtube-syrox',
        description: 'hier wird das letzte Youtube Video von _Syr0x angezeigt',
    },
    {
        name: 'entwickler',
        description: 'Erfahre was über den Entwickler von mir',
    },
];


const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash coammds...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.
            GUILD_ID),
            { body: commands }
        );
      console.log('Slash commands were registered successfully!');
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();

//um neue Commands zu regristrieren verwende den Commands im Terminal: node src/register-commands.js
