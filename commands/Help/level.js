module.exports = {
    name: "commands-level",
    code: `
$footer[Bot made by $getVar[Owner]#$getVar[OwnerTag].]

$addField[**- KEEP IN MIND -**;Keep in mind this, if the bot stops responding to commands, it means that i'm doing changes to the code, have fun anyway!]

$addField[**$getServerVar[Prefix]xp**;Shows your xp and the xp required for the next level.]
$addField[**$getServerVar[Prefix]level**;Shows your level.]

$description[My Level Module commands are these:]
$color[$getVar[Colour;$authorID]]
$title[Level]

$onlyIf[$getServerVar[LevelModule]==enabled;:x: This module is Disabled.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
};