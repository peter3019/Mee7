module.exports = {
    name: 'kick',
    Category: 'Ban',
    Description: 'A testing module for KICK people form dsicord servers.',
    aliases: [process.env.PREFIX + 'kick', 'k'],
    callback: (message) => {
        const { member, mentions } = message

        if(
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('KICK_MEMBERS')
            ) {
                const target = mentions.users.first()
                if (target) { 
                    const tM = message.guild.members.cache.get(target.id)
                    tM.kick()
                    message.channel.send(`<@${member.id}> This user has been kicked`)
                }else{
                    message.channel.send(`<@${member.id}> Please specify someone to kick.`)
                }
            }else {
                message.channel.send(`<@${member.id}> You do not have permission to use this command.`)
            }
        }
    }