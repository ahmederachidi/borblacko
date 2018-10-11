const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {
let channel =     client.channels.get("499394830779285529","499628058018578432")
setInterval(function() {
channel.send(`**سبام يولد ام الفلة**`);
}, 1000)
})



 


client.on('message', async msg=> {
  if (msg.content === 'sp') {
	  msg.channel.send(`@everyone`)
  }
  if (msg.content === 'help') {
	  msg.channel.send(`@everyone`)
  }
});
 
var ServerID = "494162603275452427"; //اي دي السيرفر
var ChannelID = "499394829717864459";// اي دي الروم


client.on('warn', console.warn);

client.on('error', console.error);


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Zeyad,Royale','\n','ProBot credits miner is ready!'));// Codes Server` - iiZeyad , Roýale"1.5k 🍷#1111

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));// Codes server - !.Zeyad' , ♚Roýale#5555


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , ♚Roýale#5555


    });
}

var timer = setTimeout(timerFunc, 1000);

client.on("ready", () => {
let channel =     client.channels.get("499628058018578432")
setInterval(function() {
channel.send(`**سبام يولد ام الفلة**`);
}, 1000)
})

var timer = setTimeout(timerFunc, 1000);

client.on("ready", () => {
let channel =     client.channels.get("499618352290070538")
setInterval(function() {
channel.send(`**سبام يولد ام الفلة**`);
}, 1000)
})

 var timer = setTimeout(timerFunc, 1000);

client.on("ready", () => {
let channel =     client.channels.get("499618353393172491")
setInterval(function() {
channel.send(`**سبام يولد ام الفلة**`);
}, 1000)
})

 

 


client.login(process.env.BOT_TOKEN);


