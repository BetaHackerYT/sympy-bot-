module.exports = {
    name: "swearing-disable",
    code: `
  $onlyPerms[admin;:x: You must be an **Administrator** to use this command.]
  $onlyIf[$getServerVar[Swearing]==enabled;:x: This module is already Disabled.]
  $setServerVar[Swearing;disabled]
  $title[Automod Swearing Module]
  $color[$getVar[Colour;$authorID]]
  $description[You have disabled the Automod Swearing Module.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}