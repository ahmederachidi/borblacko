

const Discord = require('discord.js');
const client = new Discord.Client();


var ServerID = "500335405359693824"; //اي دي السيرفر
var ChannelID = "500336457718956062";// اي دي الروم


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



  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('اسمار')){
if(!message.author.id === '434641589680209932') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});




client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('hjghjghj ')
          .then(m => {
            count++;
          })

        }
      }
});

client.on('message', message => {
if (message.content === '!spam1') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('hjghjghjghe ')
          .then(m => {
            count++;
          })

        }
      }
});

client.on('message', message => {
if (message.content === '!spam2') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('')
          .then(m => {
            count++;
          })

        }
      }
});

client.on('message', message => {
if (message.content === '3') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('afdgm ')
          .then(m => {
            count++;
          })

        }
      }
});

client.on('message', message => {
if (message.content === '!spam4') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('dfffgf ')
          .then(m => {
            count++;
          })

        }
      }
});



client.login(process.env.BOT_TOKE);


