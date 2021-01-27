module.exports = {
    name: "level-enable",
    code: `
  $description[You have enabled the Level Module.]
  $color[$getVar[Colour;$authorID]]
  $title[Level Module]
  $setServerVar[LevelModule;enabled]
  $onlyIf[$getServerVar[LevelModule]==disabled;:x: This module is already Enabled.]
  $onlyPerms[admin;:x: You must be an **Administrator** to use this command.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}