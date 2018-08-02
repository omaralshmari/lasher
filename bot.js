const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Savage.");
 
client.on("guildMemberAdd", member => {
setTimeout(function(){
  member.createDM().then(function (channel) {
  return channel.send(`**
قد تكون نهاية اشياء بداية لأشياء أجمل https://discord.gg/tagSsfA :sparkles:..# 

 **`) 
},3000);

}).catch(console.error)
})
client.login(process.env.BOT_TOKEN); 
