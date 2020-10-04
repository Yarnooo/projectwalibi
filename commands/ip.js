const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("**Minecraft IP**")
        .setColor("#ff0000")
        .addField("Versie", "1.15.2")
        .addField("Server IP", "server.projectwalibi.nl")
        .addField("Disclaimer", "Op onze minecraft server staat nog een **whitelist!**")
        .setFooter("YΛЯПӨӨӨ#1673")
        .setTimestamp()

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "ip"
}