const Discord = require('discord.js');
const a = new Discord.Client();
const b = new Discord.Client();
const c = new Discord.Client();
const d = new Discord.Client();
const e = new Discord.Client();
const f = new Discord.Client();
const g = new Discord.Client();
const h = new Discord.Client();

const myID = '403194852902305805';
a.on('ready', () => {
  console.log(`Logged in as 1!`);
});
b.on('ready', () => {
  console.log(`Logged in as 2!`);
});
c.on('ready', () => {
  console.log(`Logged in as 3!`);
});
d.on('ready', () => {
  console.log(`Logged in as 4!`);
});
e.on('ready', () => {
  console.log(`Logged in as 5!`);
});
f.on('ready', () => {
  console.log(`Logged in as 6!`);
});
g.on('ready', () => {
  console.log(`Logged in as 7!`);
});
h.on('ready', () => {
  console.log(`Logged in as 8!`);
});
//////////////////////////////////////
a.on('ready', async () => {
let ReBeL = ["وين طيزك يامودي","جوني","سينس","طيز","نياشي","جوردي"]
setInterval(() => {
a.channels.get("544321243638398980").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},59000);
});

b.on('ready', async () => {
let ReBeL = ["يامناويش ","سوف ننكح","سوف ننيش","ياقحبه انت وهو","انيكك نيك","طيزي"]
setInterval(() => {
b.channels.get("544321243638398980").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},60000);
});

c.on('ready', async () => {
let ReBeL = ["المنيوش انا","69","نبي كساس","احب طيزك","اموت بطيزك","انيشك نيش مو طبيعي"]
setInterval(() => {
c.channels.get("544321243638398980").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},61000);
});

d.on('ready', async () => {
let ReBeL = ["العم جوردي","حبيبي جوردي","سيرفر جوردي","نياشنا جوردي","ياعرصة","ياطيز "]
setInterval(() => {
d.channels.get("544321243638398980").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},62000);
});

e.on('ready', async () => {
let ReBeL = ["الله اكبر عليكم","ياقحبات","مخنث","شرموط","ايها المنيوش العظيم","ياقحبه"]
setInterval(() => {
e.channels.get("544321243638398980").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},63000);
});

f.on('ready', async () => {
let ReBeL = ["ها","هو فيه ايه","ولك منيوش","زبي","قحبه","ابو تحسين عرصة"]
setInterval(() => {
f.channels.get("544321243638398980").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},64000);
});

g.on('ready', async () => {
let ReBeL = ["امو ل ابو تحسين قحبه","ايري ب ابو تحسين","جوني ناك ابو تحسين","جوردي ناك ابو تحسين","ابو تحسين عرصة","مخنث ابو تحسين"]
setInterval(() => {
g.channels.get("544321243638398980").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},65000);
});

h.on('ready', async () => {
let ReBeL = ["نكنا امو ل ابو تحسين","تم النكح","تم النيك","تمت القحبنا","ايري ب زوجة ابو تحسين","عرصة ابو تحسين"]
setInterval(() => {
h.channels.get("544321243638398980").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},66000);
});
/////////////////////////////////////
a.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s1") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});

b.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s2") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
c.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s3") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
d.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s4") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});

e.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s5") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
f.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s6") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
g.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s7") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
h.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s8") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
////////////////
a.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});

b.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});

c.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
d.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
e.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
f.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
g.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
h.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});


a.login(process.env.BOT_TOKEN1);
b.login(process.env.BOT_TOKEN2);
c.login(process.env.BOT_TOKEN3);
d.login(process.env.BOT_TOKEN4);
e.login(process.env.BOT_TOKEN5);
f.login(process.env.BOT_TOKEN6);
g.login(process.env.BOT_TOKEN7);
h.login(process.env.BOT_TOKEN8);
