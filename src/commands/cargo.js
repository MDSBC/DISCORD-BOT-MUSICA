const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    if (args.length === 0) {
        const embed = new MessageEmbed();
        embed.setTitle("Para escolher sua área de interesse, reaja à essa mensagem com o respectivo emoji da área.");
        embed.setDescription(
            ""
        );
        /*embed.addFields([{name: "FFA", value: "⛔️"}]);
        embed.addFields([{name: "Instant", value: "💀"}]);
        embed.addFields([{name: "Gigasplit", value: "⚡️"}]);
        embed.addFields([{name: "Megasplit", value: "💥"}]);
        embed.addFields([{name: "Crazy", value: "💫"}]);
        embed.addFields([{name: "1v1 Self Feed", value: "🗡"}]);
        embed.addFields([{name: "Self Feed", value: "🔥"}]); */
        embed.setAuthor(
            "TBR Clã",
            `https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`,
            "https://github.com/MDSBC"
        );
        embed.addFields([
            {name: "FFA", value: "🌚", inline: true},
            {name: "Instant", value: "💀", inline: true},
            {name: "Gigasplit", value: "🍉", inline: true},
            {name: "Megasplit", value: "💥", inline: true},
            {name: "Crazy", value: "💫", inline: true},
            {name: "1v1 Self Feed", value: "🗡", inline: true},
            {name: "Self Feed", value: "🔥", inline: true},
        ]);
        msg.member.send({ embed }).then(async (embed) => {
            try {
                await embed.react("🌚");
                await embed.react("💀");
                await embed.react("🍉");
                await embed.react("💥");
                await embed.react("💫");
                await embed.react("🗡");
                await embed.react("🔥");
            const collector = embed.createReactionCollector(
                (reaction, user) => 
                    ["🌚","💀","🍉","💥","💫","🗡","🔥",].includes(reaction.emoji.name) && !user.bot,
                    {
                        time: 600000,
                    });
            collector.on("collect",(reaction,user) => {
                let role;
                switch (reaction.emoji.name) {
                    case "🌚":
                        role = msg.guild.roles.cache.find((r) => r.name === "FFA");
                        if (role) msg.member.roles.add(role);
                        else console.error("Cargo não encontrado!");
                        break;

                    case "💀":
                        role = msg.guild.roles.cache.find((r) => r.name === "Instant");
                        if (role) msg.member.roles.add(role);
                        else console.error("Cargo não encontrado!");
                        break;

                    case "🍉":
                        role = msg.guild.roles.cache.find((r) => r.name === "Gigasplit");
                        if (role) msg.member.roles.add(role);
                        else console.error("Cargo não encontrado!");
                        break;

                    case "💥":
                        role = msg.guild.roles.cache.find((r) => r.name === "Megasplit");
                        if (role) msg.member.roles.add(role);
                        else console.error("Cargo não encontrado!");
                        break;

                    case "💫":
                        role = msg.guild.roles.cache.find((r) => r.name === "Crazy");
                        if (role) msg.member.roles.add(role);
                        else console.error("Cargo não encontrado!");
                        break;

                    case "🗡":
                        role = msg.guild.roles.cache.find((r) => r.name === "1v1 Self Feed");
                        if (role) msg.member.roles.add(role);
                        else console.error("Cargo não encontrado!");
                        break;

                    case "🔥":
                        role = msg.guild.roles.cache.find((r) => r.name === "Self Feed");
                        if (role) msg.member.roles.add(role);
                        else console.error("Cargo não encontrado!");
                        break;
                    default:
                        break;
                }
            });
        } catch(e) {
            console.error(e);
        }
        });
    } else {
        if (!msg.member.hasPermission("MANAGE_ROLES")) 
            return msg.reply("Você não tem permissão para executar essa ação!");
        const [mention, roleArg] = args;
        const member = msg.mentions.members.first();
        if(!member) return("você precisa mencionar alguém para dar o cargo.");
        if (!roleArg) return msg.reply("você precisa escolher um cargo!");
        const role = msg.guild.roles.cache.find((r) => (r.name === roleArg));
        if (!role) return msg.reply(`não encontrei o cargo \`${roleArg}\``);
        member.roles.add(role);
    }
};

module.exports ={
    name: "cargo",
    help: "Atribui cargos a um usuário",
    execute,
};