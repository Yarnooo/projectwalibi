const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

        var botEmbed = new discord.MessageEmbed()
            .setTitle("**Serverinfo**")
            .setDescription("Dit is de info van de Project Walibi discord server.")
            .setColor("#ff0000")
            .addField("Server naam", bot.user.username)
            .addField("Website", "https://projectwalibi.nl/")
            .addField("Aantal leden", message.guild.memberCount)
            .setFooter("YΛЯПӨӨӨ#1673")
            .setTimestamp()

        return message.channel.send(botEmbed);
    
    }

module.exports.help = {
    name: "serverinfo"
}