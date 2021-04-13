const Discord = require("discord.js");
const client = new Discord.Client();
const ZeroCf = require("./config.json");
const token = ZeroCf["token"];
const prefix = ZeroCf["prefix"];
const color = require("colors");

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
client.on("message", async message => {
    if(message.content == `${prefix}banall`){
    if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;

    message.guild.members.cache.forEach(member => {
        if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
          member.ban();
        }
      })  
}})
client.login(token);
