const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("**Spelerinfo**")
    .setDescription("Dit is jouw info.")
    .setColor("#ff0000")
    .addField("Naam", message.author.username)
    .addField("ID", message.author.id)
    .addField("Joindatum", message.member.joinedAt)
    .setFooter("YΛЯПӨӨӨ#1673")
    .setTimestamp()

return message.channel.send(botEmbed);

}
    
module.exports.help = {
    name: "spelerinfoold"
}