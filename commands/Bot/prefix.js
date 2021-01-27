module.exports = {
    name: "prefix",
    code: `
$setServerVar[Prefix;$message[1]]
$footer[Have Fun]
$description[The new prefix has been set to **$message[1]** succesfuly.]
$color[$getVar[Colour;$authorID]]
$title[Prefix]
$onlyIf[$charCount<11;:x: Your new prefix must be under 10 characters.]
$onlyIf[$message[1]!=$getServerVar[Prefix];:x: You must specify a different Prefix than the current one.]
$argsCheck[1;:x: You must specify a new prefix.]
$cooldown[1m;:x: Please wait **{time}** before you change the prefix again.]
$onlyPerms[admin;:x: You must be an **Administrator** to use this command.]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
}