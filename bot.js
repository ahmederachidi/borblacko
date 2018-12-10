const Discord = require('discord.js');
const s7 = new Discord.Client();
const s6 = new Discord.Client();
const s5 = new Discord.Client();
const s4 = new Discord.Client();
const s3 = new Discord.Client();
const s2 = new Discord.Client();
const s1 = new Discord.Client();
const s8 = new Discord.Client();
const s15 = new Discord.Client();
const s14 = new Discord.Client();
const s13 = new Discord.Client();
const s12 = new Discord.Client();
const s11 = new Discord.Client();
const s10 = new Discord.Client();
const s9 = new Discord.Client();

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
let channel =     s1.channels.get("521050949733711872")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s2.on("ready", () => {
let channel =     s2.channels.get("521650931331235841")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s3.on("ready", () => {
let channel =     s3.channels.get("521650942295146496")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s4.on("ready", () => {
let channel =     s4.channels.get("521650953783345153")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s5.on("ready", () => {
let channel =     s5.channels.get("521650967909892099")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s6.on("ready", () => {
let channel =     s6.channels.get("521650980622958602")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s7.on("ready", () => {
let channel =     s7.channels.get("521650995131056128")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s8.on("ready", () => {
let channel =     s8.channels.get("521651005826269185")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s5.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -s

  if (command === "s5") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});
s6.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -s

  if (command === "s6") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});
s7.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -s

  if (command === "s7") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});
s8.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -s

  if (command === "s8") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});

s1.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});

s2.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});
s3.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});
s4.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});
s5.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});
s6.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});
s7.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});

s8.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});



s9.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);




  if (command === "s9") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});

s10.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);




  if (command === "s10") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});

s11.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "s11") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});

s12.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);




  if (command === "s12") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});


s9.on("ready", () => {
let channel =     s9.channels.get("521651016668676101")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s10.on("ready", () => {
let channel =     s10.channels.get("521651029872214016")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s11.on("ready", () => {
let channel =     s11.channels.get("521651041524121602")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s12.on("ready", () => {
let channel =     s12.channels.get("521655191435477012")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s13.on("ready", () => {
let channel =     s13.channels.get("521655209110405131")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s14.on("ready", () => {
let channel =     s14.channels.get("521655223693869056")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})

s15.on("ready", () => {
let channel =     s15.channels.get("521655236578770944")
setInterval(function() {
channel.send(Math.random().toString(36).substring(7))
}, 50)
})



s13.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -s

  if (command === "s13") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});
s14.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -s

  if (command === "s14") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});
s15.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -s

  if (command === "s15") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }



});


s9.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});

s10.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});
s11.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});
s12.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});
s13.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});
s14.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});
s15.on('message', msg => {
  if (msg.content === 'فلوس') {
    msg.channel.send('#credits');
  }
});










s1.login(process.env.BOT_1);
s2.login(process.env.BOT_2);
s3.login(process.env.BOT_3);
s4.login(process.env.BOT_4);
s5.login(process.env.BOT_5);
s6.login(process.env.BOT_6);
s7.login(process.env.BOT_7);
s8.login(process.env.BOT_8);
s9.login(process.env.BOT_9);
s10.login(process.env.BOT_10);
s11.login(process.env.BOT_11);
s12.login(process.env.BOT_12);
s13.login(process.env.BOT_13);
s14.login(process.env.BOT_14);
s15.login(process.env.BOT_15);


