module.exports = {
    name: "clear",
    code: `
    $deleteIn[0s]
    $footer[Cleared by $username[]]
    $description[You cleared $message[1] message(**s**).
This message will be deleted in once the messages get deleted.]
    $color[$getVar[Colour;$authorID]]
    $title[Cleared]
    $clear[$message[1]]
    $onlyIf[$message[1]>0;:x: You must use a number bigger than 1.]
    $onlyPerms[managemessages;:x: You must have the permission Manage Messages to do this.]
    $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
    `
}