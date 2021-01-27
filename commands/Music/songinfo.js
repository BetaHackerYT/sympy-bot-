module.exports = {
    name: "songinfo",
    code: `
  $description[Song name: $songInfo[name]
Song Duration: $songInfo[duration]
Song Link: **{hyper:Click Here:$songInfo[url]}**]
  $color[$getVar[Colour;$authorID]]
  $title[Song Info]
  Informations for the song $songInfo[name]:
  $onlyIf[$getServerVar[MusicModule]==enabled;:x: This module is Disabled.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}