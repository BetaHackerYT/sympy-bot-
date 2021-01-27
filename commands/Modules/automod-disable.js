module.exports = {
    name: "automod-disable",
    code: `
  $description[You have disabled the Automod Module.]
  $color[$getVar[Colour;$authorID]]
  $title[Automod Module]
  $setServerVar[AutomodModule;disabled]
  $onlyIf[$getServerVar[AutomodModule]==enabled;:x: This module is already Disabled.]
  $onlyPerms[admin;:x: You must be an **Administrator** to use this command.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}