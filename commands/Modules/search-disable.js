module.exports = {
    name: "search-disable",
    code: `
  $description[You have disabled the Search Module.]
  $color[$getVar[Colour;$authorID]]
  $title[Search Module]
  $setServerVar[SearchModule;disabled]
  $onlyIf[$getServerVar[SearchModule]==enabled;:x: This module is already Disabled.]
  $onlyPerms[admin;:x: You must be an **Administrator** to use this command.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}