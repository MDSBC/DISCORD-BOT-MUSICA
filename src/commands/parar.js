const execute = (bot,msg,args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
        return msg.reply("não há fila para ser parada :/");
    }
    queue.songs = [];
    bot.queues.set(msg.guild.id, queue);
    queue.dispatcher.end();
};

module.exports = {
    name: "parar",
    help: "Para a reprodução da música do servidor.",
    execute,
};