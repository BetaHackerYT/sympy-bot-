module.exports = {
    name: "search-enable",
    code: `
  $description[You have enabled the Search Module.]
  $color[$getVar[Colour;$authorID]]
  $title[Search Module]
  $setServerVar[SearchModule;enabled]
  $onlyIf[$getServerVar[SearchModule]==disabled;:x: This module is already Enabled.]
  $onlyPerms[admin;:x: You must be an **Administrator** to use this command.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}