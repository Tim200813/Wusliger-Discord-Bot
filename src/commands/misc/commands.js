module.exports = {
    name: 'commands',
    description: 'Hier sind alle Commands gelistet die ich alle kann.',
    callback: async (client, interaction) => {
      await interaction.deferReply();
  
      const commands = client.slashcommands; // Hier den entsprechenden Befehls-Array einfügen
  
      
  
      interaction.editReply({
        content: 'Befehlsliste:',
        embeds: [
          {
            color: 3355442, // Farbwert als Ganzzahl
            title: 'Commands',
            description: 'Hi ich bin der Wuslige Bot und möchte dir helfen wo ich nur kann. Ich kann noch nicht viel, aber was ich schon kann, habe ich dir unten aufgelistet. Probier einfach mal die Befehle aus 😉',
            fields: [
              { name: '**Befehle:**', value: '```wer bist du?\n/help\n/ping\n/hey\n/about-me\n/youtube-syrox\n/kick\n/ban\nsigma\nnigger\ndisney```' }
            ],
          },
        ],
      });
    },
  };
  
