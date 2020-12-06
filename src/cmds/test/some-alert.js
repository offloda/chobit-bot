const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class JoinCommand extends Commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'join',
      group: 'test',
      memberName: 'join',
      description: 'Invita al bot al canal de voz'
    })
  }

  async run(message) {
    const { voice } = message.member
    if (!voice.channelID) {
      message.reply('Tienes que estar dentro de un canal para usarme, GIL!')
      return
    }

    voice.channel.join()
      .then(connection => {
        connection.play(path.join(__dirname, 'join.m4a'), { volume: 0.3 })
      })
  }
}
