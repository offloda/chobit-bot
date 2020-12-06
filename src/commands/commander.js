const PREFIX = process.env.PREFIX_COMMANDER

module.exports = (client, aliases, callback) => {
  if (typeof aliases == 'string') {
    aliases = [aliases]
  }

  client.on('message', (message) => {
    const { content } = message

    aliases.forEach((alias) => {
      const command = `${PREFIX} ${alias}`
      if (content.startsWith(`${command}`) || command === content) {
        console.log('Commando ',  command)
        callback(message)
      }
    })
  })
}
