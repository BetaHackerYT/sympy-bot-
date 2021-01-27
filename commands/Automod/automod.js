module.exports = {
    name: "automod",
    code: `
  $title[Automod]
  $color[$getVar[Colour;$authorID]]
  $description[<:discord_online:701773785925156934> **is \`Enabled\`**. 
<:discord_dnd:701773824005374014> **is \`Disabled\`**. 
<:discord_offline:701773894683459616> **is \`Unavailable\`**. 
$replaceText[$replaceText[$getServerVar[Links];enabled;<:discord_online:701773785925156934>];disabled;<:discord_dnd:701773824005374014>] Anti Links 
<:discord_offline:701773894683459616> Anti Mass Tag 
<:discord_offline:701773894683459616> Anti Swear]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}