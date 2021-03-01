const execute = (bot,msg,args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
        return msg.reply("não há música ser retomada :/");
    }
    queue.dispatcher.resume();
};

module.exports = {
    name: "retomar",
    help: "Retoma a reprodução da música atual.",
    execute,
};