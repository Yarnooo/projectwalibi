const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("**Regels**")
        .setDescription("Dit zijn de regels van de Project Walibi discord server.\n\n‼ Als je deze regels niet opvolgt, is er een mogelijkheid dat je van onze server wordt verwijderd door middel van een kick of ban. ‼\n\n------------------------------------------------------------------------------------------")
        .setColor("#ff0000")
        .addField("1️⃣ Behandel elkaar met respect.", "Denk hierbij aan afkomst, geslacht of geloof.")
        .addField("2️⃣ Geen reclame.", "Maak geen reclame in onze discord server en in de privé berichten van andere leden.")
        .addField("3️⃣ Geen 18+ content.", "Het is niet toegestaan om in onze server 18+ content te delen.")
        .addField("4️⃣ Luister naar onze staffleden.", "Onze staffleden hebben het recht om jou aan te spreken. Luister hier ook naar.")
        .addField("5️⃣ Geen voicechangers.", "Het gebruik van voicechangers is niet toegestaan in onze server. Dit omdat dit zwaar irritant kan zijn.")
        .addField("6️⃣ Niet spammen.", "Het is niet toegestaan om te spammen. Denk hierbij aan chatspam en channelspam (spraakkanalen).")
        .addField("7️⃣ Niet onnodig taggen.", "Het is niet toegestaan om iemand van onze server zomaar te taggen. Gebruik de tags waarvoor ze nodig zijn en niet anders.")
        .addField("8️⃣ Niet schelden met ziektes.", "Het is niet toegestaan om te schelden met ziektes in onze server.")
        .setFooter("YΛЯПӨӨӨ#1673")
        .setTimestamp()

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "regels"
}