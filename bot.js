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


https://discord.gg/csx9TYx
  
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 




https://discord.gg/csx9TYx

`) 
}).catch(console.error)
})


client.login('NDk4NTg0MjA5MzA1MzcwNjI1.Dpv2_A.VpKR7aogWx4Nb_72nTA8DwB5qWE');
