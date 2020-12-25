const Discord = require('discord.js');

module.exports = {
    name: 'invte',
    Category:'invtion',
    Description: 'invite discordbot to your discord server.',
    aliases: ['i'],
    callback: (message) => {
        const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aW_Bxw-wL0MuZziyzy1F7G0u2dxbdXaYCg&usqp=CAU'
        
        const embed = new Discord.MessageEmbed()
        .setTitle(`**Discord Invation**`)
        .setAuthor(`Mee7`)
        .setThumbnail(logo)
        .setColor('#00eaff')
        .addFields(
            { name: '   Invite',value: 'https://discord.com/api/oauth2/authorize?client_id=791184153630343198&permissions=8&scope=bot'},
            { name: '\u200B', value: '\u200B' }, //blank line
                )
            
        
        message.channel.send(embed) 
    }
}