const Commando = require('discord.js-commando');
const ascii_text_generator = require('ascii-text-generator');

module.exports = class AsciiCommand extends Commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'ascii',
      group: 'fun',
      memberName: 'ascii',
      description: 'Transforma tu palabra en ascii',
      argsType: 'single',
    });
  }

  async run(message, args) {
    let ascii_text = ascii_text_generator(String(args), '3');
    message.reply(ascii_text, {
      code: true,
    });
  }
};
