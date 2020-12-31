const Commando = require('discord.js-commando');

module.exports = class AddCommand extends Commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'suma',
      group: 'fun',
      memberName: 'suma',
      description: 'Suma varios numeros',
      argsType: 'multiple',
    });
  }

  async run(message, args) {
    let sum = 0;
    for (let arg of args) {
      sum += Number(arg);
    }
    message.reply(`Wena pao qlo no sabi sumar, pero aqui esta el resultado: ${sum} 🤣`);
  }
};
