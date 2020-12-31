const Commando = require('discord.js-commando');
const { VoiceModel } = require('../../models/Voice.js');
module.exports = class JoinCommand extends Commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'updatesong',
      group: 'mod',
      memberName: 'updatesong',
      description: 'Comando para actualizar tu alerta con un link de youtube o un archivo mp4a',
      argsType: 'single',
    });
  }

  async run(message, args) {
    args = args.includes('youtube') ? args : `${args}.m4a`;
    const userVoice = await VoiceModel.updateSound({
      userID: message.author.id,
      trackObject: {
        name_track: args,
        source_track: args.includes('.m4a') ? `sounds/${args}` : args,
      },
    });
    if (!userVoice) {
      message.reply(
        'No estas registrado (っ °Д °;)っ \n favor registrate con \n !c registervoice [name][nombre cancion]'
      );
      return;
    }
    message.reply(
      args.includes('.m4a')
        ? `La cancion ${args} fue registrada con exito en sounds/${args}`
        : `La cancion ${args} fue registrada con exito`
    );
  }
};
