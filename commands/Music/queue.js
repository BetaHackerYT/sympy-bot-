module.exports = {
    name: "queue",
    code: `
$queue[{number}. {song}, {duration}]
I have **$queueLength** Song(**s**) left in the queue :

$cooldown[2s;:x: Please wait **{time}** before you try to see the queue again.]
$onlyIf[$getServerVar[MusicModule]==enabled;:x: This module is Disabled.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}