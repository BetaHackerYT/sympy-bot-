module.exports = {
    name: "google",
    code: `
$footer[Requested By $username[]]
  $description[**{hyper:Here is your Search Result:https://google.com/search?q=$replaceText[$message[]; ;+]}**.]
  $color[$getVar[Colour;$authorID]]
  $title[Google]
$argsCheck[>1;:x: You must type a message to search on google.]
$onlyIf[$getServerVar[SearchModule]==enabled;:x: This module is Disabled.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}