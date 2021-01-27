module.exports = {
    name: "twitter",
    code: `
$footer[Requested By $username[]]
$description[**{hyper:Here is your Search Result:https://twitter.com/search?q=$replaceText[$message[]; ;%20]&src=typed_query}**.]
$color[$getVar[Colour;$authorID]]
$title[twitter]
$argsCheck[>1;:x: You must type a message to search on twitter.]
$onlyIf[$getServerVar[SearchModule]==enabled;:x: This module is Disabled.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}