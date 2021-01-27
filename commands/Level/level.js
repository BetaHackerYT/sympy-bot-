module.exports = {
    name: "level",
    code: `
  $description[Your level is **$getUserVar[Level]**.]
  $color[$getVar[Colour;$authorID]]
  $title[Level]
  $onlyIf[$getServerVar[LevelModule]==enabled;:x: This module is Disabled.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}