module.exports = {
    name: "volume",
    code: `
  $description[You have set the music volume to **$message[1]** succesfuly.]
  $color[$getVar[Colour;$authorID]]
  $title[Volume]
  $volume[$message[1]]
  $onlyIf[$message[1]>0;:x: Your number must be atleast 1.]
  $onlyIf[$message[1]<501;:x: You must type a number between 1 and **500**.]
  $argsCheck[1;:x: You must specify a number between 1 and **500**.]
  $onlyIf[$getServerVar[MusicModule]==enabled;:x: This module is Disabled.]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}

// 10000000000000000 IS THE MAX VALUE FOR VOLUME.