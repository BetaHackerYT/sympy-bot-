module.exports = {
    name: "announce",
    code: `
    $deletecommand[2s]
    $footer[Announced by $getVar[Owner]#$getVar[OwnerTag]]
    $description[$message[]]
    $color[$getVar[Colour;$authorID]]
    $title[New Announcement]
    <@&705692712497578025>
    `
}