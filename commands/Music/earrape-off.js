module.exports = {
    name: "earrape-off",
    code: `
  $description[The earrape has been disabled.
    Could you not support it?]
  $color[$getVar[Colour;$authorID]]
  $title[Earrape]
  $volume[75]
  $onlyIf[$getServerVar[MusicModule]==enabled;:x: This module is Disabled.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}

// 10000000000000000 IS THE MAX VALUE FOR VOLUME.