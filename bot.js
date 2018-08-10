const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Savage.");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
السلام عليكم ياعيني..
ابيك بموضوع مهم هنا اذا ما عليك أمر !

  https://discord.gg/tagSsfA

 **`) 

}).catch(console.error)
})


client.login(process.env.BOT_TOKEN); 
