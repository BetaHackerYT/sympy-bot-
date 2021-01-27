module.exports = {
    name: "xp",
    code: `
  $description[You have **$getUserVar[Xp]** xp.
You need **$getUserVar[XpRequired]** xp to level up again.]
  $color[$getVar[Colour;$authorID]]
  $title[Xp]
  $onlyIf[$getServerVar[LevelModule]==enabled;:x: This module is Disabled.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}