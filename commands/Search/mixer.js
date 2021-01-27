module.exports = {
    name: "mixer",
    code: `
$footer[Requested By $username[]]
$description[**{hyper:Here is your Search Result:https://mixer.com/browse/all?q=$replaceText[$message[]; ;+]}**.]
$color[$getVar[Colour;$authorID]]
$title[Google]
$argsCheck[>1;:x: You must type a channel name to search on mixer.]
$onlyIf[$getServerVar[SearchModule]==enabled;:x: This module is Disabled.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}