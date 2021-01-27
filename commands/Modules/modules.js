module.exports = {
    name: "modules",
    code: `
$description[<:discord_online:701773785925156934> **is \`Enabled\`**. 
<:discord_dnd:701773824005374014> **is \`Disabled\`**. 
<:discord_offline:701773894683459616> **is \`Unavailable\`**.

$replaceText[$replaceText[$getServerVar[SearchModule];enabled;<:discord_online:701773785925156934>];disabled;<:discord_dnd:701773824005374014>] **Search Module**

$replaceText[$replaceText[$getServerVar[MusicModule];enabled;<:discord_online:701773785925156934>];disabled;<:discord_dnd:701773824005374014>] **Music Module** 

$replaceText[$replaceText[$getServerVar[LevelModule];enabled;<:discord_online:701773785925156934>];disabled;<:discord_dnd:701773824005374014>] **Level Module** ]
  $color[$getVar[Colour;$authorID]]
  $title[Modules]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}