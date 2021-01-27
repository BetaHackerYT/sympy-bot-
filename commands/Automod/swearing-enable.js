module.exports = {
    name: "swearing-disable",
    code: `
  $onlyPerms[admin;:x: You must be an **Administrator** to use this command.]
  $onlyIf[$getServerVar[Swearing]==disabled;:x: This module is already Enabled.]
  $setServerVar[Swearing;enabled]
  $title[Automod Swearing Module]
  $color[$getVar[Colour;$authorID]]
  $description[You have enabled the Automod Swearing Module.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}