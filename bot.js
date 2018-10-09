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

client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('سبام يولد ام الفلة' )
          .then(m => {
            count++;
          })

        }
      }
});



client.login("NDk5MzA3ODA2MTgxMTYzMDE4.Dp6mQA.qVXKrR_OEzUDbkzW-CLdtEffzdQ")

