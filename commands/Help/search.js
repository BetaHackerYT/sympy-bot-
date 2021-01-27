module.exports = {
    name: "commands-search",
    code: `
$footer[Bot made by $getVar[Owner]#$getVar[OwnerTag].]

$addField[**- KEEP IN MIND -**;Keep in mind this, if the bot stops responding to commands, it means that i'm doing changes to the code, have fun anyway!]

$addField[**$getServerVar[Prefix]youtube {Message}**;Search on YouTuber.]
$addField[**$getServerVar[Prefix]twitter {Message}**;Search on Twitter.]
$addField[**$getServerVar[Prefix]twitch {Message}**;Search on Twitch.]
$addField[**$getServerVar[Prefix]reddit {Message}**;Search on Reddit.]
$addField[**$getServerVar[Prefix]mixer {Channel Name}**;Search on Mixer.]
$addField[**$getServerVar[Prefix]google {Message}**;Search on Google.]

$description[My Search Module commands are these:]
$color[$getVar[Colour;$authorID]]
$title[Search]

$onlyIf[$getServerVar[SearchModule]==enabled;:x: This module is Disabled.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
};