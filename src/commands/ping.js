const execute = (bot,msg,args) => {
    return msg.channel.send('pong');
};

module.exports ={
    name: "ping",
    help: "ping pong",
    execute,
}