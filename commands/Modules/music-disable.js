module.exports = {
    name: "music-disable",
    code: `
  $description[You have disabled the Music Module.]
  $color[$getVar[Colour;$authorID]]
  $title[Music Module]
  $setServerVar[MusicModule;disabled]
  $onlyIf[$getServerVar[MusicModule]==enabled;:x: This module is already Disabled.]
  $onlyPerms[admin;:x: You must be an **Administrator** to use this command.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}