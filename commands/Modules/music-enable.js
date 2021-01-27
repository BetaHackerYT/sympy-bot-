module.exports = {
    name: "music-enable",
    code: `
  $description[You have enabled the Music Module.]
  $color[$getVar[Colour;$authorID]]
  $title[Music Module]
  $setServerVar[MusicModule;enabled]
  $onlyIf[$getServerVar[MusicModule]==disabled;:x: This module is already Enabled.]
  $onlyPerms[admin;:x: You must be an **Administrator** to use this command.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}