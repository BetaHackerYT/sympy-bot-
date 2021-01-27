module.exports = {
    name: "ping",
    code: `
$description[My ping is **$ping**ms.]
$color[$getVar[Colour;$authorID]]
$title[Ping]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}