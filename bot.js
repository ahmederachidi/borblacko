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

console.log("Welcome Again !");
 





var aaa = "500335405359693824"; //اي دي السيرفر
var aa = "500336457718956062";// اي دي الروم


client.on('warn', console.warn);

client.on('error', console.error);


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Zeyad,Royale','\n','ProBot credits miner is ready!'));// Codes Server` - iiZeyad , Roýale"1.5k 🍷#1111

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));// Codes server - !.Zeyad' , ♚Roýale#5555


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(aaa).channels.get(aa).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , ♚Roýale#5555


    });
}

var timer = setTimeout(timerFunc, 1000);


    client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) 
        message.channel.send(Math.random().toString(36).substring(7))
          .then(m => {
            count++;
          })

        
      }
});


var ServerID = "500335405359693824"; //اي دي السيرفر
var ChannelID = "503218096815996938";// اي دي الروم


ahmed.on('warn', console.warn);

ahmed.on('error', console.error);


ahmed.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Zeyad,Royale','\n','ProBot credits miner is ready!'));// Codes Server` - iiZeyad , Roýale"1.5k 🍷#1111

ahmed.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

ahmed.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));// Codes server - !.Zeyad' , ♚Roýale#5555


function timerFunc() {
    ahmed.on('message', msg => {
        ahmed.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , ♚Roýale#5555


    });
}

var timer = setTimeout(timerFunc, 1000);


    ahmed.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) 
        message.channel.send(Math.random().toString(36).substring(7))
          .then(m => {
            count++;
          })

        
      }
});

client.login(process.env.BOT_TOKEN);

ahmed.login(process.env.BOT_TOKE);


