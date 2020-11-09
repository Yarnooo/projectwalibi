const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("**Bot info**")
        .setDescription("Dit is de info van de Project Walibi bot.")
        .setColor("#ff0000")
        .addField("🏷 ID:", `${member.id}`, true)
        .addField("🤖 Bot naam:", bot.user.username)
        .addField("📅 Bot aangemaakt", `${moment(bot.user.createdAt).format("LL")}`)
        .addField("📆 Server gejoind:", `${moment(bot.joinedAt).format('LL')}`)
        .setFooter("YΛЯПӨӨӨ#1673")
        .setTimestamp()

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "botinfo"
}