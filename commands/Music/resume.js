module.exports = {
    name: "resume",
    code: `
$description[You've Resumed the Music.]
$color[$getVar[Colour]]
$title[Music Resumed]
$resume
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}