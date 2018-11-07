const Discord = require('discord.js');
const client = new Discord.Client();
const ahmed = new Discord.Client();

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




ahmed.login(process.env.BOT_TOKEN);

client.login(process.env.BOT_TOKE);



s.login(process.env.BOT_S);

