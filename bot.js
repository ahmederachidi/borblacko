const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
let channel =     client.channels.get("500336272125067299")
setInterval(function() {
channel.send(`**سبام يولد ام الفلة**`);
}, 1000)
})

client.on('message', msg => {
  if(msg.content === 'هلا')
              setTimeout(function() {  
msg.reply('هلا فيك')
              }, 10000)
});



client.on('message', msg => {
  if(msg.content === 'السلام عليكم')
              setTimeout(function() {  
msg.reply('وعليكم السلام')
              }, 10000)
});


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



var ServerID = "500335405359693824"; //اي دي السيرفر
var ChannelID = "500336212209303552";// اي دي الروم



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
let channel =     client.channels.get("500640270300348427")
setInterval(function() {
channel.send(`**سبام يولد ام الفلة**`);
}, 1000)
})
 
 client.on("ready", () => {
let channel =     client.channels.get("500640216823103488")
setInterval(function() {
channel.send(`**سبام يولد ام الفلة**`);
}, 1000)
})

client.on("ready", () => {
let channel =     client.channels.get("500336457718956062")
setInterval(function() {
channel.send(`**سبام يولد ام الفلة**`);
}, 1000)
})


client.on('ready', function(){
    client.user.setStatus("dnd");
    var ms = 100 ;
    var setGame = [`ابيع كل شي`,`فل داتا 7 الاف كريديت`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);

});

client.login(process.env.BOT_TOKEN);


