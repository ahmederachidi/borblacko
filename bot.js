const Discord = require('discord.js');
const client = new Discord.Client();
const ahmed = new Discord.Client();





client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('╚[════════════════════════════════════]╝')
});

client.on("ready", () => {
let channel =     client.channels.get("509848741511954454")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
},10)
})



ahmed.on("ready", () => {
let channel =     ahmed.channels.get("509848767168643092")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
},10)
})




ahmed.login(process.env.BOT_TOKEN);

client.login(process.env.BOT_TOKE);




