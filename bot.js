const Discord = require('discord.js');
const client = new Discord.Client();
const b = new Discord.Client();
const c = new Discord.Client();
const d = new Discord.Client();
const e = new Discord.Client();





client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('╚[════════════════════════════════════]╝')
});


client.on("ready", () => {
let channel =     client.channels.get("515521656954028043")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})




e.on("ready", () => {
let channel =     e.channels.get("515521668920246272")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})


b.on("ready", () => {
let channel =     b.channels.get("515521683235405835")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})


b.login(process.env.BOT_TOKEN);

client.login(process.env.BOT_TOKE);

e.login(process.env.BOT_TOK);



