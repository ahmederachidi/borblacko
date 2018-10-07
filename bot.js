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


https://discord.gg/pfVYHFc
  
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 



https://discord.gg/pfVYHFc

`) 
}).catch(console.error)
})


client.login('NDk4NTg1ODU2OTExNjA1Nzgw.DpwBdA.MgubJE5D-mBF32fKjUYioe_C3SQ');
