module.exports = {
    name: "info",
    code: `
    $addField[Owner Informations;Discord : **$getVar[Owner]**#**$getVar[OwnerTag]**]
    $description[Bot Name : **$getVar[BotName]**
    Prefix : **$getServerVar[Prefix]**
    Version: ** $getVar[Version] **
        Release Date: ** $getVar[ReleaseDate] **
        Code Language: **Discord Script** **\`\`(Discord.Js)\`\`**
    Total Servers : **$serverCount**
    Total Users : **$allMembersCount**
    Commands Used in Total : **$getVar[CommandsUsed]**]
    $color[$getVar[Colour;$authorID]]
    $title[Informations]
    $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
    `
}