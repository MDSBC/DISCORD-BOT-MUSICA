const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
  const embed = new MessageEmbed()
    .setColor("#7FFFD4")
    .setTitle(
      `Seja bem-vindo, ${msg.author.username}#${msg.author.discriminator}!`
    )
    .setDescription("TBR Clã, temos grupo no whatsapp, chame algum adm para te adicionar.")
    .setThumbnail(
      msg.author.avatar
        ? `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`
        : `https://cdn.discordapp.com/embed/avatars/${
            msg.author.discriminator % 5
          }.png`
    )
    .setURL("https://vanis.io")
    .setAuthor(
      "TBR Clã",
      `https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`,
      "https://github.com/MDSBC"
    )
    .addFields([
      {
        name: "Você é membro nº",
        value: msg.guild.memberCount,
        inline: true,
      },
      {
        name: "Teste Fields",
        value: "teste",
        inline: true,
      },
    ])
    .setTimestamp()
    .setFooter(
      "ZéDoArroz 2021. Todos os direitos reservados",
      `https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`
    );
  msg.channel.send({ embed });
};

module.exports = {
  name: "embed",
  help: "Retorna uma MessageEmbed",
  execute,
};