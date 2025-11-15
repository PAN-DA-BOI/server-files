const { Client, IntentsBitField, PermissionsBitField } = require('discord.js');
const fs = require('fs');

// Replace these with your actual IDs
const FREAK_ROLE_ID = '1342651227745288222';
const EXPLORER_ROLE_ID = '1339019995555954708';
const ADMIN_CHANNEL_ID = '1339025302780645407';

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  // Command: "urbeus, ban @user" (Admin only)
  if (message.content.startsWith('urbeus, ban')) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return message.reply('You do not have permission to use this command.');
    }
    const member = message.mentions.members.first();
    if (!member) {
      return message.reply('Please mention a user to ban.');
    }
    try {
      await member.roles.remove(EXPLORER_ROLE_ID);
      await member.roles.add(FREAK_ROLE_ID);
      message.reply(`${member.user.tag} has been given the FREAK role and lost the explorer role.`);
    } catch (err) {
      message.reply('I could not update that user\'s roles.');
      console.error(err);
    }
  }
  // Command: "urbeus, unban @user" (Admin only)
  else if (message.content.startsWith('urbeus, unban')) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return message.reply('You do not have permission to use this command.');
    }
    const member = message.mentions.members.first();
    if (!member) {
      return message.reply('Please mention a user to unban.');
    }
    try {
      await member.roles.remove(FREAK_ROLE_ID);
      await member.roles.add(EXPLORER_ROLE_ID);
      message.reply(`${member.user.tag} has been unbanned and given back the explorer role.`);
    } catch (err) {
      message.reply('I could not update that user\'s roles.');
      console.error(err);
    }
  }
  // Command: "urbeus, make a custom kit item %item"
  else if (message.content.startsWith('urbeus, make a custom kit item')) {
    const item = message.content.replace('urbeus, make a custom kit item', '').trim();
    const adminChannel = client.channels.cache.get(ADMIN_CHANNEL_ID);
    if (adminChannel) {
      adminChannel.send(`Custom kit item requested: ${item}`);
    }
    message.reply('Your custom kit item request has been sent to the admins!');
  }
  // Command: "urbeus, do something dumb"
  else if (message.content === 'urbeus, do something dumb') {
    fs.readFile('dumb.txt', 'utf8', (err, data) => {
      if (err) {
        return message.reply('The dumb.txt file is missing or empty!');
      }
      const dumbThings = data.split('\n').filter(line => line.trim() !== '');
      if (dumbThings.length === 0) {
        return message.reply('The dumb.txt file is empty!');
      }
      const dumbThing = dumbThings[Math.floor(Math.random() * dumbThings.length)];
      message.reply(`${dumbThing}`);
    });
  }
  else if (message.content === 'urbeus, do something freaky') {
    fs.readFile('freak.txt', 'utf8', (err, data) => {
      if (err) {
        return message.reply('The freak.txt file is missing or empty!');
      }
      const dumbThings = data.split('\n').filter(line => line.trim() !== '');
      if (dumbThings.length === 0) {
        return message.reply('The freak.txt file is empty!');
      }
      const dumbThing = dumbThings[Math.floor(Math.random() * dumbThings.length)];
      message.reply(`${dumbThing}`);
    });
  }
  // Listen for messages containing "custom" and "kit"
  else if (message.content.toLowerCase().includes('custom') && message.content.toLowerCase().includes('kit')) {
    const adminChannel = client.channels.cache.get(ADMIN_CHANNEL_ID);
    if (adminChannel) {
      adminChannel.send(`Custom kit item mentioned: ${message.content}`);
    }
  }
});

client.login('YOUR_BOT_TOKEN_HERE');
