module.exports = {
    name: "level-disable",
    code: `
  $description[You have disabled the Level Module.]
  $color[$getVar[Colour;$authorID]]
  $title[Level Module]
  $setServerVar[LevelModule;disabled]
  $onlyIf[$getServerVar[LevelModule]==enabled;:x: This module is already Disabled.]
  $onlyPerms[admin;:x: You must be an **Administrator** to use this command.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}