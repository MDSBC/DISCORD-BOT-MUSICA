const execute = (bot,msg,args) => {
    console.log(args);
    return msg.reply('olá!');
};

module.exports ={
    name: "olá",
    help: "Olá, mundo!",
    execute,
}