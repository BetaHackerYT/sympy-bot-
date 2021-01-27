module.exports = {
    name: "commands-bot",
    code: `
$footer[Bot made by $getVar[Owner]#$getVar[OwnerTag].]

$addField[**- KEEP IN MIND -**;Keep in mind this, if the bot stops responding to commands, it means that i'm doing changes to the code, have fun anyway!]

$addField[**$getServerVar[Prefix]uptime**;Shows the bot uptime.]
$addField[**$getServerVar[Prefix]ping**;Shows the bot ping in ms.]
$addField[**$getServerVar[Prefix]help**;Shows the commands that this bot has.]
$addField[**$getServerVar[Prefix]prefix {New Prefix}**;Changes the bot prefix.]

$description[My Bot commands are these:]
$color[$getVar[Colour;$authorID]]
$title[Bot]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
};