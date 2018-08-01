const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
السلام عليكم ياعيني..
ابيك بموضوع مهم هنا اذا ما عليك أمر !

  [ https://discord.gg/HunzvKc ] 

الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN); 
