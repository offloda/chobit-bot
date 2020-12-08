const path = require('path')
const { VoiceModel } = require('../models/Voice')
const { TrackModel } = require('../models/Track')

module.exports = async (bot, basePath) => {
  bot.on('voiceStateUpdate', async (oldMember, newMember) => {
    try {
      const newUserChannel = newMember.channelID
      const textChannel = newMember.guild.channels.cache.find(channel => channel.name === 'test-bot-chobit')
      console.log('id user', newMember.id)
      
      if(newUserChannel === '598697935873769522') {
        const getVoice = await VoiceModel.findSound({ userID: String(newMember.id) })
        if(!getVoice) {
          textChannel.send(`${newMember.member} pidele al @Offloda que te configure ψ(｀∇´)ψ`)
          return
        }
        const getTrack = await TrackModel.findTrack({ _id: getVoice.tracks[0] })
        if(!getTrack) {
          textChannel.send(`${newMember.member} pidele al @Offloda que te asigne un tema (～￣▽￣)～`)
          return
        }
        newMember.member.voice.channel.join()
          .then(connection => {
            connection.play(path.join(basePath, getTrack.path), { volume: 0.4 })
          })
      }
    } catch (error) {
      console.log(error)
    }
  })
}
