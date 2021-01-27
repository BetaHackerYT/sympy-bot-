module.exports = {
    name: "Level-Up",
    code: `
  $setUserVar[Xp;0]
  $setUserVar[Level;$sum[$getUserVar[Level];1]]
  $setUserVar[XpRequired;$sum[$getUserVar[XpRequired];30]]
  $setUserVar[XpGain;$sum[$getUserVar[XpGain];1]]
  $description[$username[], you just leveled up!
Your level now is **$getUserVar[Level]**.]
$color[$getVar[Colour;$authorID]]
$title[Level]
$onlyIf[$getUserVar[Xp]>$getUserVar[XpRequired];]
$onlyIf[$getServerVar[LevelModule]==enabled;]
$cooldown[3s;]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
};