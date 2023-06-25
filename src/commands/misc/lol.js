module.exports = {
    name: 'lol',
    description: 'Das ist ein Test',
  
    callback: async (client, interaction) => {
      await interaction.deferReply();
  
      const reply = await interaction.fetchReply();
  
      const ping = reply.createdTimestamp - interaction.createdTimestamp;
  
      interaction.editReply(
        `Pong! Client ${ping}ms | Websocket: ${client.ws.ping}ms`
      );
    },
  };