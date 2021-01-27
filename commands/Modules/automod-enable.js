module.exports = {
    name: "automod-enable",
    code: `
  $description[You have enabled the Automod Module.]
  $color[$getVar[Colour;$authorID]]
  $title[Automod Module]
  $setServerVar[AutomodModule;enabled]
  $onlyIf[$getServerVar[AutomodModule]==disabled;:x: This module is already Enabled.]
  $onlyPerms[admin;:x: You must be an **Administrator** to use this command.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}