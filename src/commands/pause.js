const execute = (bot,msg,args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
        return msg.reply("não há música sendo reproduzida cara :/");
    }
    queue.dispatcher.pause();
};

module.exports = {
    name: "pause",
    help: "Pausa a reprodução da música atual.",
    execute,
};