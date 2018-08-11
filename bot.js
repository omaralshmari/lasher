const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`
https://media.giphy.com/media/oWjyixDbWuAk8/giphy.gif
السلام عليكم ياعيني..
ابيك بموضوع مهم هنا اذا ما عليك أمر ! :heart: 
https://discord.gg/JjED3VR
https://discord.gg/AqTHHU7`]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

client.login(process.env.BOT_TOKEN); 
