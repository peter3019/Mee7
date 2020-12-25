

module.exports = {
    name: 'ban',
    Category: 'Ban',
    maxArgs: '2',
    Description: 'A testing module for banning people form dsicord servers.',
    aliases: [ process.env.PREFIX + 'ban', 'b'],
    callback: (message) => {
        const { member, mentions } = message

        if(
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('BAN_MEMBERS')
            ) {
                const target = mentions.users.first()
                
                
                if (target) { 
                    const tM = message.guild.members.cache.get(target.id)    
                    tM.ban()
                    message.channel.send(` User <@${target.id}> has been banned`)
                    
                    
                }else{
                    message.channel.send(`<@${member.id}> Please specify who to ban.`)
                }
                
            }else {
                message.channel.send(`<@${member.id}> You do not have permission to use this command.`)
            }
        }
    }
    
    
    
    
    
