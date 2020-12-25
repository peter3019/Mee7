


module.exports = (client) => {
    client.on('message', (message) =>{
        console.log(`.${message.author.tag}`+`.${message.content}`+`.${message.guild}`)

    })
}
