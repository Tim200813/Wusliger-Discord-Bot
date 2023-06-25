require('dotenv').config();
const { Client, IntentsBitField, ActivityType, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

let status = [
    {
        name: "Ist in der Entwicklungsphase",
        type: ActivityType.Playing,
    },
    {
        name: "Nichts",
        type: ActivityType.Watching,
    },
    {
        name: "gerne Musik",
        type: ActivityType.Listening,
    },
    {
        name: "Über mich",
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=YkE3WuU1DT8',
    },
    {
        name: "/help",
        type: ActivityType.Playing,
    },

]

client.on('ready', (c) => {
    console.log('Der Bot ist online');

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
    }, 10000);
});

client.on('messageCreate', (message) => {
    if (message.content == 'hallo') {
        message.reply('Moin! Schön dich zu sehen');
    }
});

client.on('messageCreate', (message) => {
    if (message.content == 'sigma') {
        
            const options = [
                "https://www.youtube.com/shorts/759ixcN5btA",
                "https://youtube.com/shorts/6wqnMNSMm7o?feature=share",
                "https://youtube.com/shorts/1bt8pMnRGZg?feature=share",
                "https://www.youtube.com/watch?v=CBg6YwrXGJU",
                "https://www.youtube.com/shorts/AMeWpy0XDBI",
                "https://www.youtube.com/shorts/4tSt9DK1UxA",
                "https://www.youtube.com/shorts/3wxDQXqMlDI",
                "https://www.youtube.com/shorts/DCErwwyvzxs",
                "https://www.youtube.com/shorts/0m-NDpJG0K8"
            ]
            
            const random = options[Math.floor(Math.random() * options.length)]
    
            message.reply(`${random}`)
        }}),

client.on('messageCreate', (message) => {
    if (message.content == 'disney') {
        
            const options = [
                "https://www.youtube.com/watch?v=rsNJSarpyw0",
                "https://www.youtube.com/watch?v=di8CMCiwoak",
                "https://www.youtube.com/watch?v=QQ9XTSgomZw"
             
            ]
            
            const random = options[Math.floor(Math.random() * options.length)]
    
            message.reply(`${random}`)
        }}),

client.on('messageCreate', (message) => {
    if (message.content == 'hi') {
        message.reply('Moin! Schön dich zu sehen');
    }
});

client.on('messageCreate', (message) => {
    if (message.content == 'nigger') {
        message.reply('**Solche Wörter werden hier auf dem Server nicht geduldet:bangbang:** https://tenor.com/view/discord-meme-spooked-scared-mod-gif-18361254');
    }
});

client.on('messageCreate', (message) => {
    if (message.content == 'wer bist du?') {
        message.reply('https://www.youtube.com/watch?v=YkE3WuU1DT8');
    }
});

client.on('messageCreate', (message) => {
    if (message.content == 'on') {
        message.reply('@here ich bin jetzt online');
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hey') {
        interaction.reply('moin!');
    }
    if (interaction.commandName === 'ping') {
        interaction.reply('Pong!');
    }
    if (interaction.commandName === 'help') {
       const embed = new EmbedBuilder().setTitle('Willkommen')
       .setDescription('Hi ich bin der Wuslige Bot und möchte dir helfen wo ich nur kann. Ich kann noch nicht viel, aber was ich schon kann, habe ich dir unten aufgelistet. Probier einfach mal die Befehle aus 😉')
       .addFields(
        { name: '**Befehle:**', value: '```wer bist du?\n/help\n/ping\n/hey\n/about-me\n/youtube-syrox\nsigma\nnigger\ndisney```' },
       )

       interaction.reply({ embeds: [embed]  });
    }
    if (interaction.commandName === 'about-me') {
        interaction.reply('https://www.youtube.com/watch?v=YkE3WuU1DT8');
    }
    if (interaction.commandName === 'youtube-syrox') {
        interaction.reply('Das letzte YouTube Video was von _Syr0x hochgeladen wurde: https://www.youtube.com/watch?v=ixsku8w-8vE');
    }
    if (interaction.commandName === 'entwickler') {
        interaction.reply('Petercarsten hat mich erschaffen. Momentan kann ich dir nicht viel über ihn erzählen. Wenn du mehr über ihn wissen möchtest, er hat eine eigene Webseite: http://petercarsten.epizy.com/?i=1');
    }
    
});

//neu






client.login(process.env.TOKEN);
