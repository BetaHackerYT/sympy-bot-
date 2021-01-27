module.exports = {
    name: "uptime",
    code: `
  $description[Hello $username[]! My uptime is **$uptime**.]
  $color[$getVar[Colour;$authorID]]
  $title[Uptime]
  $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}