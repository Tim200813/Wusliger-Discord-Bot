module.exports = {
  name: 'news',
  description: 'Hier sind alle Commands gelistet die ich alle kann.',
  callback: async (client, interaction) => {
    await interaction.deferReply();

    const commands = client.slashcommands; // Hier den entsprechenden Befehls-Array einfügen

    

    interaction.editReply({
      embeds: [
        {
          color: 3355442, // Farbwert als Ganzzahl
          title: 'Release',
          description: 'Das sind die neusten Änderungen bei mir:',
          fields: [
            { name: '**Neu:**', value: '▶️ Der **kick Command** ist da\n\n▶️ Der **ban Command** ist da\n\n▶️ Für Entwickler (Mein Command Handler funktioniert jetzt super)\n\n▶️ mein 24/7 Host funktiert fast immer' }
          ],
        },
      ],
    });
  },
};

