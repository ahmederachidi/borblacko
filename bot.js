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
let channel =     client.channels.get("503240014893809684")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 10)
})

client.on("ready", () => {
let channel =     client.channels.get("500336212209303552")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 10)
})

client.on("ready", () => {
let channel =     client.channels.get("500336272125067299")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 10)
})

ahmed.on("ready", () => {
let channel =     ahmed.channels.get("500336457718956062")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 10)
})

ahmed.on("ready", () => {
let channel =     ahmed.channels.get("503218096815996938")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 10)
})


ahmed.login(process.env.BOT_TOKEN);

cilent.login(process.env.BOT_TOKE);


