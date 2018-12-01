const Discord = require('discord.js');
const s7 = new Discord.Client();
const s6 = new Discord.Client();
const s5 = new Discord.Client();
const s4 = new Discord.Client();
const s3 = new Discord.Client();
const s2 = new Discord.Client();
const s1 = new Discord.Client();
const s8 = new Discord.Client();

var prefix = "!"



s1.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('╚[════════════════════════════════════]╝')
});





s1.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);




  if (command === "s1") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});

s2.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);




  if (command === "s2") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});

s3.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "s3") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});

s4.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);




  if (command === "s4") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});


s1.on("ready", () => {
let channel =     s1.channels.get("516687187274629120")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})

s2.on("ready", () => {
let channel =     s2.channels.get("515521668920246272")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})

s3.on("ready", () => {
let channel =     s3.channels.get("515521683235405835")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})

s4.on("ready", () => {
let channel =     s4.channels.get("518056222826692608")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})

s5.on("ready", () => {
let channel =     s5.channels.get("518056236952846337")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})

s6.on("ready", () => {
let channel =     s6.channels.get("518056251930968075")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})

s7.on("ready", () => {
let channel =     s7.channels.get("518446633583771648")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})

s8.on("ready", () => {
let channel =     s8.channels.get("518446711186915330")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 100)
})


s1.login(process.env.BOT_1);
s2.login(process.env.BOT_2);
s3.login(process.env.BOT_3);
s4.login(process.env.BOT_4);
s5.login(process.env.BOT_5);
s6.login(process.env.BOT_6);
s7.login(process.env.BOT_7);
s8.login(process.env.BOT_8);

