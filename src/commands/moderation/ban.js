const {
    Client,
    Interaction,
    ApplicationCommandOptionType,
    PermissionFlagsBits,
  } = require('discord.js');
  
  module.exports = {
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
  
    callback: async (client, interaction) => {
      const targetUserId = interaction.options.get('user').value;
      const reason =
        interaction.options.get('begründung')?.value || 'Kein Grund angegeben';
  
      await interaction.deferReply();
  
      const targetUser = await interaction.guild.members.fetch(targetUserId);
  
      if (!targetUser) {
        await interaction.editReply("Dieser Benutzer existiert auf diesem Server nicht.");
        return;
      }
  
      if (targetUser.id === interaction.guild.ownerId) {
        await interaction.editReply(
          "Sie können diesen Benutzer nicht kicken, weil er der Serverbesitzer ist."
        );
        return;
      }
  
      const targetUserRolePosition = targetUser.roles.highest.position; // Highest role of the target user
      const requestUserRolePosition = interaction.member.roles.highest.position; // Highest role of the user running the cmd
      const botRolePosition = interaction.guild.members.me.roles.highest.position; // Highest role of the bot
  
      if (targetUserRolePosition >= requestUserRolePosition) {
        await interaction.editReply(
          "Sie können diesen Benutzer nicht kicken, weil er die gleiche/höhere Rolle hat als Sie."
        );
        return;
      }
  
      if (targetUserRolePosition >= botRolePosition) {
        await interaction.editReply(
          "Ich kann diesen Benutzer nicht kicken, weil er die gleiche/höhere Rolle hat als ich."
        );
        return;
      }
  
      // Ban the targetUser
      try {
        await targetUser.ban({ reason });
        await interaction.editReply(
          `User ${targetUser} wurde verbannt\nBegründung: ${reason}`
        );
      } catch (error) {
        console.log(`Beim Bannen ist ein Fehler aufgetreten: ${error}`);
      }
    },
  
    name: 'ban',
    description: 'Verbanne einen User von dem Server',
    options: [
      {
        name: 'user',
        description: 'Den User den du bannen möchtest',
        type: ApplicationCommandOptionType.Mentionable,
        required: true,
      },
      {
        name: 'begründung',
        description: 'Was ist deine Begrüngung',
        type: ApplicationCommandOptionType.String,
      },
    ],
    permissionsRequired: [PermissionFlagsBits.BanMembers],
    botPermissions: [PermissionFlagsBits.BanMembers],
  };