const path = require('path');
const { VoiceModel } = require('../models/Voice');

const role = process.env.ROLE_EXCLUDE || '401570731151982603';

module.exports = async (bot, basePath) => {
  bot.on('voiceStateUpdate', async (oldState, newState) => {
    try {
      const newStateChannel = newState.channelID;
      const oldStateChannel = oldState.channelID;
      const textChannel = newState.guild.channels.cache.find(
        (channel) => channel.name === 'test-bot-chobit'
      );

      if ((!oldStateChannel && newStateChannel) || oldStateChannel !== newStateChannel) {
        console.log(`${newState.member.nickname} ingreso con el id ${newState.id}`);
        const botRole = newState.member._roles.includes(String(role));
        if (newStateChannel === '598697935873769522' && !botRole) {
          const getVoice = await VoiceModel.findSound({ userID: String(newState.id) });
          if (!getVoice) {
            textChannel.send(`${newState.member} pidele al @Offloda que te configure ψ(｀∇´)ψ`);
            return;
          }
          newState.member.voice.channel.join().then((connection) => {
            connection.play(path.join(basePath, getVoice.track.source_track), { volume: 0.4 });
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};
