module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    if (!interaction.isCommand()) return;
    console.log(
      `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`
    );
    if (interaction.commandName === "ping") {
      await interaction.reply("Pong!");
    }
  },
};
