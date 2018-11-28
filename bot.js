const Discord = require('discord.js');
const client = new Discord.Client();
const b = new Discord.Client();
const c = new Discord.Client();
const d = new Discord.Client();
const e = new Discord.Client();

var prefix = "!"



client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('╚[════════════════════════════════════]╝')
});





e.on("ready", () => {
let channel =     e.channels.get("515521668920246272")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 200)
})


b.on("ready", () => {
let channel =     b.channels.get("515521683235405835")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 200)
})

client.on('ready', () => {
    console.log('I am ready!');
});
 
const devs = ["434641589680209932"];
const adminprefix = ["!"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
 
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅ تم تغيير الحالة بنجاح ${argresult}**`)
  } else
     if (message.content === (adminprefix + "lev")) {
    message.guild.leave();
  } else
  if (message.content.startsWith(adminprefix + 'w')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅ تم تغيير الحالة بنجاح ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'l')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅ تم تغيير الحالة بنجاح ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅ تم تغيير الحالة بنجاح **`)
  }
  if (message.content.startsWith(adminprefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**✅ تم تغير الاسم بنجاح ${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'avatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**✅ تم تغير الصور بنجاح ${argresult}** `);
}
});//hamo
 

b.on("ready", () => {
let channel =     b.channels.get("515518957177012227")
setInterval(function() {
channel.send("#rep <@434641589680209932>")
}, 86400000)
})

e.on("ready", () => {
let channel =     e.channels.get("515518957177012227")
setInterval(function() {
channel.send("#rep <@434641589680209932>")
}, 86400000)
})


b.on("ready", () => {
let channel =     b.channels.get("515518957177012227")
setInterval(function() {
channel.send("#daily")
}, 86405550)
})

e.on("ready", () => {
let channel =     e.channels.get("515518957177012227")
setInterval(function() {
channel.send("#daily")
}, 86405550)
})


client.on("ready", () => {
let channel =     client.channels.get("515518957177012227")
setInterval(function() {
channel.send("#daily")
}, 86405550)
})



b.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -say

  if (command === "s1") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});




e.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -say

  if (command === "s2") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});


b.login(process.env.BOT_TOKEN);

client.login(process.env.BOT_TOKE);

e.login(process.env.BOT_TOK);



