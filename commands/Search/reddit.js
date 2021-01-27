module.exports = {
    name: "reddit",
    code: `
$footer[Requested By $username[]]
$description[**{hyper:Here is your Search Result:https://www.reddit.com/search/?q=$replaceText[$message[]; ;+]}**.]
$color[$getVar[Colour;$authorID]]
$title[Reddit]
$argsCheck[>1;:x: You must type a message to search on reddit.]
$onlyIf[$getServerVar[SearchModule]==enabled;:x: This module is Disabled.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}