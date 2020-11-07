const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.channel.send("Gebruik **!pm (speler) (bericht)**");

    var member = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));
    if (!member) return message.channel.send("Speler niet gevonden.");

    var text = args.join(" ").slice(args[0].length + 1);
    if (!text) return message.channel.send("Je moet een bericht opgeven.");

    message.member.send(text).then(() => {
        message.channel.send("✅ Het bericht is succesvol verzonden!");
    }).catch(() => {
        message.channel.send("❌ De persoon zijn DM's op privé staan.")
    });

}

module.exports.help = {
    name: "pm"
}