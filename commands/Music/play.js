module.exports = {
    name: "play",
    code: `
$play[$message[]]
Currently playing $songInfo[name].
$cooldown[5s;:x: Please wait **{time}** before you try to play a music again, either add one to the queue.]
$volume[75]
$onlyIf[$getServerVar[MusicModule]==enabled;:x: This module is Disabled.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}