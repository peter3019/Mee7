const prefix = process.env.PREFIX

module.exports = {
    name: 'clear',
    Category:'Clear',
    Description: 'Clear a certan chat',
    maxARGS: '1',
    minArgs: '1',
    aliases: ['c'],
    callback: (message) => {
        const { member } = message
        const args = args[1];
        if(!member.hasPermission('ADMINISTRATOR') ||!member.hasPermission('MANAGE_MESSAGES')) {return message.channel.send('But Why, Why do you want to do this.') };
        if(!args[1]) return message.channel.send('This is treason then.');
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`Cleared ${args[0]} messages.`)
            .then(message => message.delete(10000))
        });

            
        }
    }

