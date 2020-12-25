const Discord = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv-flow').config()
const client = new Discord.Client();
const prefix = "m!"


client.on('ready', () => {
    console.log(`[INFO]Logged in as ${client.user.tag}!`);

    new WOKCommands(client, 'commands', 'features')
    
    .setDisplayName('Help Commands')
    .setColor('00eaff')
    .setCategoryEmoji('Help', '❓')
    .setCategoryEmoji('Ban', '🔨')
    
})

client.on('message', msg => {

    if(msg.content === prefix + "HELLO"){
        msg.reply(`Hi Friend!`);
    } else if(msg.content === prefix + "Hi"){
        msg.reply(`Hi Friend!`);
    }
    
});




client.login(process.env.TOKEN);

// Bot invite link = https://discord.com/api/oauth2/authorize?client_id=791184153630343198&permissions=268676326&scope=bot


