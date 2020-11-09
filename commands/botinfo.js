const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("**Bot info**")
        .setDescription("Dit is de info van de Project Walibi bot.")
        .setColor("#ff0000")
        .addField("🤖 Bot naam:", bot.user.username)
        .addField("📅 Bot aangemaakt:", "06-05-2020")
        .setFooter("YΛЯПӨӨӨ#1673")
        .setTimestamp()

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "botinfo"
}