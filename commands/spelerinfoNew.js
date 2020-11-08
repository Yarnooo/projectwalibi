const discord = require("discord.js");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {

    var member = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));
    if (!member) member = message.member;

    var roles = member.roles.cache.size - 1;
    var roleNames = member.roles.cache.map(r => r).join(" ").replace("@everyone", "");
    if (roles == 0) roleNames = "Geen rollen";

    var status = member.presence.status;

    var nickName = member.nickname;
    if (nickName == null || undefined) nickName = "Geen";

    var embed = new discord.MessageEmbed()
    .setColor("ff0000")
    .setThumbnail(member.user.displayAvatarURL({size : 4096 }))
    .setTitle(`${member.user.tag}`)
    .addField("🏷 ID:", `${member.id}`, true)
    .addField("🔖 Bijnaam:", nickName, true)
    .addField("📅 Account gemaakt:", `${moment(member.user.createdAt).format("LL")}`)
    .addField("📆 Server gejoined:", `${moment(member.joinedAt).format('LL')}`)
    .addField(`📋 Rollen [${roles}]`, `${roleNames}`)
    .setFooter("YΛЯПӨӨӨ#1673")
    .setTimestamp()

message.channel.send(embed);

}

module.exports.help = {
    name: "spelerinfo"
}