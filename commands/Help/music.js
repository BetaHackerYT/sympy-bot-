module.exports = {
    name: "commands-music",
    code: `
$footer[Bot made by $getVar[Owner]#$getVar[OwnerTag].]

$addField[**- KEEP IN MIND -**;Keep in mind this, if the bot music randomly stops from playing or it would stop to respond to commands, it means that i'm doing changes to the code, have fun anyway!]

$addField[**$getServerVar[Prefix]resume**;Makes the music play again.]
$addField[**$getServerVar[Prefix]pause**;Pauses the Music from playing, per Song.]
$addField[**$getServerVar[Prefix]songinfo**;Gives you informations about the song that's being played.]
$addField[**$getServerVar[Prefix]earrape-off**;Disables the earrape mode, for every song.]
$addField[**$getServerVar[Prefix]earrape-on**;Enables the earrape mode, per song.]
$addField[**$getServerVar[Prefix]volume {1 / 500}**;Changes the music volume, per song.]
$addField[**$getServerVar[Prefix]queue**;Shows the queue of songs, if there are any songs in queue.]
$addField[**$getServerVar[Prefix]skip**;Skips a music and plays the next music if there's one.]
$addField[**$getServerVar[Prefix]play {Music Name / Link}**;Plays a music from YouTube only.]

$description[My Music Module commands are these:]
$color[$getVar[Colour;$authorID]]
$title[Music]

$onlyIf[$getServerVar[MusicModule]==enabled;:x: This module is Disabled.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
};