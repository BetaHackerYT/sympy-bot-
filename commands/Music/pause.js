module.exports = {
    name: "pause",
    code: `
$description[You've Paused the Music.]
$color[$getVar[Colour]]
$title[Music Paused]
$pause
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}