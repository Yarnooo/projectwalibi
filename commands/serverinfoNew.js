const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

    var roles = message.guild.roles.cache.size - 1;

    var embed = new discord.MessageEmbed()
        .setColor("ff0000")
        .setThumbnail(`${message.guild.iconURL({ size: 4096 })}`)
        .setTitle("Serverinfo")
        .setDescription("Dit is de info van de Project Walibi discord server.")
        .addField("ID:", `${message.guild.id}`)
        .addField("Regio:", `${message.guild.region}`, true)
        .addField("Bots:", `${message.guild.members.cache.filter(m => m.user.bot).size}`, true)
        .addField("Spelers:", `${message.guild.memberCount - message.guild.members.cache.filter(m => m.user.bot).size}`, true)
        .addField("Totaal aantal spelers:", message.guild.memberCount, true)
        .addField("Online:", `${message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size}`, true)
        .addField("Tekstkanalen:", `${message.guild.channels.cache.filter(chan => chan.type == "text").size}`, true)
        .addField("Spraakkanalen:", `${message.guild.channels.cache.filter(chan => chan.type == "voice").size}`, true)
        .addField("Gemaakt op:", `${moment(message.guild.createdAt).format('LL')}`)
        .addField("Gejoined op:", `${moment(message.member.joinedAt).format('LL')}`)
        .addField("Website:", "https://projectwalibi.nl/")
        .addField(`Rollen [${roles}]:`, `${message.guild.roles.cache.map(r => r).join(" ")}`)
        .setFooter("YΛЯПӨӨӨ#1673")
        .setTimestamp()

    message.channel.send(embed);

}

module.exports.help = {
    name: "serverinfo"
}