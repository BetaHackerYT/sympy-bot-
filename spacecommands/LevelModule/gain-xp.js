module.exports = {
    name: "Gain-XP",
    code: `
  $onlyIf[$getServerVar[LevelModule]==enabled;]
  $cooldown[3s;]
  $setUserVar[Xp;$sum[$getUserVar[Xp];$getUserVar[XpGain]]]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
};