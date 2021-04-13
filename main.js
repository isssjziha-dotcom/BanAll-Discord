const Discord = require("discord.js"),
      client = new Discord.Client(),
      cf = require("./config.json"),
      prefix = cf["prefix"],
      color = require("colors");

const dick = ["384431221024882688", "ID2"];

client.on('ready', function() {
  console.log(`
  ██████╗  █████╗ ███╗   ██╗ █████╗ ██╗     ██╗     
  ██╔══██╗██╔══██╗████╗  ██║██╔══██╗██║     ██║     
  ██████╔╝███████║██╔██╗ ██║███████║██║     ██║     
  ██╔══██╗██╔══██║██║╚██╗██║██╔══██║██║     ██║     
  ██████╔╝██║  ██║██║ ╚████║██║  ██║███████╗███████╗
  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚══════╝
  `.rainbow)
  console.log("Creator : ZeroDr".green)
})

function check(var x){
  var omg = false;
  if(dick.includes(x)){
    omg = true;
  } else {
    omg = false;
  }
}

client.on("message", async message => {
    if(!check(message.author.id)) return;
    if(message.content == `${prefix}banall`){
    if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;

    message.guild.members.cache.forEach(member => {
        if(!check(member.id)){
          member.ban();
        }
      })  
}})
client.login(cf["token"]);
