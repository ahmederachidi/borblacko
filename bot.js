const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('╚[════════════════════════════════════]╝')
});

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
https://discord.gg/Yra674X

https://discord.gg/hU7jZzv 
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 


https://discord.gg/Yra674X

https://discord.gg/hU7jZzv
`) 
}).catch(console.error)
})


client.login('NDc2MDEwNjEyMTU4MjM0NjI0.Dp0hAg.MdaO4KZK3An_nQrWGbvusRMRrsY');
