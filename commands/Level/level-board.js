module.exports = {
    name: "level-board",
    code: `
  $description[$userLeaderboard[Level;asc;**{top}**. **{username}** with level **{value}**]]
  $color[$getVar[Colour;$authorID]]
  $title[Level Leaderboard]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
};