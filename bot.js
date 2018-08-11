const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Savage.");
 
client.on("guildMemberAdd", member => {
setTimeout(function(){
  member.createDM().then(function (channel) {
  return channel.send(`**
https://media.giphy.com/media/oWjyixDbWuAk8/giphy.gif
السلام عليكم ياعيني..
ابيك بموضوع مهم هنا اذا ما عليك أمر ! :heart: 

https://discord.gg/JjED3VR
https://discord.gg/AqTHHU7

 **`) 
},3000);

client.login(process.env.BOT_TOKEN); 
