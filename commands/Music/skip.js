module.exports = {
    name: "skip",
    code: `
$skip[everyone;:x: You don't have permissions to use this command.]
Skipped $songInfo[name] succesfuly..
$cooldown[2s;:x: Please wait **{time}** before you skip a music again.]
$onlyIf[$getServerVar[MusicModule]==enabled;:x: This module is Disabled.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}