module.exports = {
    name: "commands-fun",
    code: `
$footer[Bot made by $getVar[Owner]#$getVar[OwnerTag].]

$addField[**- KEEP IN MIND -**;Keep in mind this, if the bot stops responding to commands, it means that i'm doing changes to the code, have fun anyway!]

$addField[**$getServerVar[Prefix]music-disable**;Disables the Music Module.]
$addField[**$getServerVar[Prefix]music-enable**;Enables the Music Module.]
$addField[**$getServerVar[Prefix]level-disable**;Disables the Level Module.]
$addField[**$getServerVar[Prefix]level-enable**;Enables the Level Module.]
$addField[**$getServerVar[Prefix]modules**;View the Modules status, all the Modules disabled by default.]

$description[My Fun Module commands are these:]
$color[$getVar[Colour;$authorID]]
$title[Fun]

$onlyIf[$getServerVar[FunModule]==enabled;:x: This module is Disabled.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
};