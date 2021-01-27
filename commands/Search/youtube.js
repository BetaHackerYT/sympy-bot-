module.exports = {
    name: "youtube",
    code: `
$footer[Requested By $username[]]
$description[**{hyper:Here is your Search Result:https://www.youtube.com/results?search_query=$replaceText[$message[]; ;+]}**.]
$color[$getVar[Colour;$authorID]]
$title[YouTube]
$argsCheck[>1;:x: You must type a message to search on youtube.]
$onlyIf[$getServerVar[SearchModule]==enabled;:x: This module is Disabled.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}