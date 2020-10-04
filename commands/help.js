const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("**Commands**")
        .setDescription("Dit zijn de commands van de Project Walibi bot.")
        .setColor("#ff0000")
        .addField("Algemene commands", "!help - alle commands in deze server.\n!hallo - hallo zeggen tegen de bot.\n!ip - het IP en de minecraft versie.\n!serverinfo - ontvang de info van de discord server.\n!botinfo - ontvang de info van de bot.\n!spelerinfo - ontvang jouw info.\n!ticket - maak een ticket aan.")
        .addField("Staff commands", "!kick - verwijderd iemand van de server.\n!ban - verwijderd iemand permanent van de server.\n!close - sluit een ticket.")
        .setFooter("YΛЯПӨӨӨ#1673")
        .setTimestamp()

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "help"
}