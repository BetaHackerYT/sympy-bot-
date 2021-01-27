module.exports = {
    name: "twitch",
    code: `
$footer[Requested By $username[]]
$description[**{hyper:Here is your Search Result:https://www.twitch.tv/search?term=$replaceText[$message[]; ;%20]}**.]
$color[$getVar[Colour;$authorID]]
$title[Twitch]
$argsCheck[>1;:x: You must type a message to search on twitch.]
$onlyIf[$getServerVar[SearchModule]==enabled;:x: This module is Disabled.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}