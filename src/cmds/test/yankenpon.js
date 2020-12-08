const Commando = require('discord.js-commando')

module.exports = class JoinCommand extends Commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'yankenpon',
      group: 'test',
      memberName: 'yankenpon',
      description: 'Yan Ken Pon @chobit te desafia! 😎',
      argsType: 'single'
    })
  }

  async run(message, args) {
    const botPool = Math.floor(Math.random() * (3 - 1 + 1) ) + 1
    const personPool = String(args).toLowerCase().replace(/\s/g, '') === 'tijera'
      ? 1
      : String(args).toLowerCase().replace(/\s/g, '') === 'piedra'
        ? 2
        : String(args).toLowerCase().replace(/\s/g, '') === 'papel'
          ? 3
          : 0
    if (!personPool) {
      message.reply(`${String(args).toLowerCase()} no es valido 😫`)
      return
    }
    message.reply(`Tiraste ${emojiPool(personPool)} @Chobit, tiro ${emojiPool(botPool)}`)
    switch (personPool) {
      case 1:
        botPool === 1
          ? message.reply('Empate')
          : botPool === 3
            ? message.reply('Ganaste')
            : message.reply('Perdiste')
        break
      case 2:
        botPool === 2
          ? message.reply('Empate')
          : botPool === 1
            ? message.reply('Ganaste')
            : message.reply('Perdiste')
        break
      case 3:
        botPool === 3
          ? message.reply('Empate')
          : botPool === 2
            ? message.reply('Ganaste')
            : message.reply('Perdiste')
        break
    }
  }
}

function emojiPool (pool) {
  return pool == 1
    ? '✌'
    : pool == 2
      ? '👊'
      : '🖐'
}
