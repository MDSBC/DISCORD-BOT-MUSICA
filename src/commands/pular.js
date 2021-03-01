const tocarMusica = require("./tocar").tocarMusica;

const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("não existe nenhuma música para ser pulada.");
  }
  queue.songs.shift();
  bot.queues.set(msg.guild.id, queue);
  tocarMusica(bot, msg, queue.songs[0]);
};

module.exports = {
  name: "pular",
  help: "Pula para a próxima música",
  execute,
};