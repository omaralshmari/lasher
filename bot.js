const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Savage.");
 
client.on("guildMemberAdd", member => {
setTimeout(function(){
  member.createDM().then(function (channel) {
  return channel.send(`**
قد تكون نهاية اشياء بداية لأشياء أجمل :sparkles:..# 

 **`) 
},3000);


})
client.login(process.env.BOT_TOKEN); 
