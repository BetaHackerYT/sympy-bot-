module.exports = {
    name: "help",
    code: `
$footer[Bot made by $getVar[Owner]#$getVar[OwnerTag].]

$addField[**- KEEP IN MIND -**;Keep in mind this, if the bot music randomly stops from playing or it would stop to respond to commands, it means that i'm doing changes to the code, have fun anyway!]

$addField[**$getServerVar[Prefix]commands-modules**;Shows Modules commands.]

$addField[**$getServerVar[Prefix]commands-level**;Shows the Level Module commands.]

$addField[**$getServerVar[Prefix]commands-search**;Shows the Search Module commands.]

$addField[**$getServerVar[Prefix]commands-music**;Shows the Music Module commands.]

$addField[**$getServerVar[Prefix]commands-bot**;Shows the Bot commands.]
$description[My commands are these:]
$color[$getVar[Colour;$authorID]]
$title[Help]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}