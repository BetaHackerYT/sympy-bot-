// START of FILE

// IMPORTANT
const api = require("discord-script");

// DISCORD BOT INFO
const bd = new api({
  token: "Nzk4Mjg4MTE1MjczMDM5ODgz.X_y1vg.vB3Q4ZpDzdiri7DfbfcnlG4JiOQ",
  prefix: ["$getServerVar[Prefix]"]
});

// VARIABLES
bd.Variables({
  // IMPORTANT BOT VARIABLES
  Prefix: "-",
  Colour: "6A0DAD",

  // OPTIONAL BOT VARIABLES
  CommandsUsed: 0,
  BotName: "Sympy Bot",
  Version: "0.0.1",
  ReleaseDate: "None Yet",

  // $setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]

  // OWNER VARIABLES
  Owner: "BetaDv",
  OwnerTag: "0097",

  // MODULES VARIABLES
  AutomodModule: "disabled",
  FunModule: "disabled",
  LevelModule: "disabled",
  SearchModule: "disabled",
  MusicModule: "disabled",
  ModerationModule: "disabled",

  // LEVEL MODULE VARIABLES
  Level: 0,
  Xp: 1,
  XpRequired: 10,
  XpGain: 1,

  // MODERATION MODULE VARIABLES
  Warns: 0,

  // AUTOMOD MODULE VARIABLES
  // AUTOMOD - AUTOMOD FEATURES
  Swearing: "disabled",
  Links: "disabled",
  SpamTags: "disabled",

  // AUTOMOD - COMMANDS SETTINGS
  BadWords: "fuck"
});

// IMPORTANT for COMMANDS
bd.MessageEvent();

// START - COMMANDS - START

// LOOPS

// AUTOMOD - SPACECOMMANDS

// ANTI LINKS
bd.SpaceCommand({
  name: "AntiLinks",
  code: `
$onlyIf[$getServerVar[Links]==enabled;]
$onlyIfMessageContains[$toLowercase[$message[]];discord.gg;https://;http://;]
$title[No Invite Links]
$color[$getVar[Colour;$authorID]]
$description[Hey! $username[], Server Invites Aren't Allowed.]
$deletecommand[0s]
$onlyIf[f==ff;]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
});

// ANTI SWEAR
bd.SpaceCommand({
  name: "AntiSwear",
  code: `
$onlyIf[$getServerVar[Swearing]==enabled;]
$onlyIfMessageContains[$toLowercase[$message[]];ThisIsTotallyAVeryBadWordThanksThisIsTotallyAVeryBadWordThanksThisIsTotallyAVeryBadWordThanksThisIsTotallyAVeryBadWordThanksThisIsTotallyAVeryBadWordThanksoofooafababdybqaydgtba8ydtgyadbt8ybhsybdgfysbda8gbyastbhbuane08g7ysa0dnb08st$getServerVar[BadWords]]
$title[Swearing]
$color[$getVar[Colour;$authorID]]
$description[Hey! $username[], Swearing Isn't Allowed]
$deletecommand[0s]
$onlyIf[f==ff;]
$setVar[CommandsUsed;$sum[$getVar[CommandsUsed];1]]
`
});

// FOLDERS - MULTIPLE
const fs = require("fs");

// COMMANDS
const folders = fs.readdirSync("./commands/");

for (const files of folders) {
  const folder = fs
    .readdirSync(`./commands/${files}/`)
    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`);
    bd.Command({
      name: command.name,
      code: command.code
    });
  }
}

// SPACECOMMANDS
const spacecommands = fs.readdirSync("./spacecommands/");

for (const files of spacecommands) {
  const folder = fs
    .readdirSync(`./spacecommands/${files}/`)
    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {
    const command = require(`./spacecommands/${files}/${commands}`);
    bd.SpaceCommand({
      name: command.name,
      code: command.code
    });
  }
}

// EVENTS

// END - COMMANDS - END

// STATUS
bd.Status(
  {
    0: {
      description: "In $serverCount Servers",
      type: "STREAMING"
    },
    1: {
      description: "Over $allMembersCount Users",
      type: "STREAMING"
    }
  },
  13000
);

// HOSTING
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " The Ping has been Succesfuly Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://sympy-bot.glitch.me/`);
}, 280000);

// END of FILE
