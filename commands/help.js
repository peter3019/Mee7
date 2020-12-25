const Discord = require('discord.js');

module.exports = {
    Category: "Help",
    aliases: ['h', 'help'],
    callback: (message) => {
        const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aW_Bxw-wL0MuZziyzy1F7G0u2dxbdXaYCg&usqp=CAU'
        
        const embed = new Discord.MessageEmbed()
        .setTitle(`**Here are my supported commands for now:**`)
        .setAuthor('Mee7 Help')
        .setThumbnail(logo)
        .setColor('#00eaff')
        .setFooter('(More Comming Soon >_<)')
        .addFields(
            { name: '   Help',value: '    **!help** or **!h** - Displays the help menu'},
            { name: '\u200B', value: '\u200B' }, //blank line
            { name: '   Ban',value: '    **!ban**- then tag a person,to ban someone ', inline: true},
            { name: '   Kick',value: '    **!kick** or **!k** - then tag a person, to kick that person',inline: true},
            { name: '\u200B', value: '\u200B' }, //blank line
                )
            
        
        message.channel.send(embed)
    }
}