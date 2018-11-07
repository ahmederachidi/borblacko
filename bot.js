const Discord = require('discord.js');
const client = new Discord.Client();
const ahmed = new Discord.Client();
const b = new Discord.Client();
const c = new Discord.Client();
const d = new Discord.Client();
const e = new Discord.Client();
const s = new Discord.Client();



client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('╚[════════════════════════════════════]╝')
});

client.on("ready", () => {
let channel =     client.channels.get("503240014893809684")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})



ahmed.on("ready", () => {
let channel =     ahmed.channels.get("503218096815996938")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})

d.on("ready", () => {
let channel =     ahmed.channels.get("509848713599123476")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})

e.on("ready", () => {
let channel =     ahmed.channels.get("509848741511954454")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})

b.on("ready", () => {
let channel =     ahmed.channels.get("509848767168643092")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})

c.on("ready", () => {
let channel =     ahmed.channels.get("509848786743328768")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})

s.on("ready", () => {
let channel =     ahmed.channels.get("509848800576143374")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})


ahmed.login(process.env.BOT_TOKEN);

client.login(process.env.BOT_TOKE);

b.login(process.env.BOT_b);

c.login(process.env.BOT_c);

d.login(process.env.BOT_d);

e.login(process.env.BOT_e);

s.login(process.env.BOT_s);

