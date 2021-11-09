const Discord = require("discord.js"); //discord.js v13
const config = require(`./config.json`);
const client = new Discord.Client({
    shards: "auto",
    allowedMentions: { parse: [ ], repliedUser: false },
    intents: [ 
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ],
});
//Start the Bot
client.login(config.token)

//we gotta adjust this, so we only require the file once the bot is ready!
client.on("ready", () => {
    console.log(`Logged in ${client.user.tag}`)
    //first we need to require the global.js file which we gonna create!
    require("./betterglobal.js")(884114936622637136); //pass in client to pull the file
})