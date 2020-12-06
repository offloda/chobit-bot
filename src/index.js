require('dotenv').config()
const PREFIX = process.env.PREFIX_COMMANDER
const OWNER = process.env.OWNER
const tokenDiscord = process.env.TOKEN_DISCORD

// const Discord = require('discord.js')
// const bot = new Discord.Client()
const path = require('path')
const Commando = require('discord.js-commando')
const bot = new Commando.CommandoClient({
  owner: String(OWNER),
  commandPrefix: PREFIX,
})

// const command = require('./commands/commander')

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
  bot.registry
    .registerGroups([
      ['test', 'test commands'],
      ['legacy', 'legacy commands']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'))
})

bot.on('voiceStateUpdate', (oldMember, newMember) => {
  try {
    const newUserChannel = newMember.channelID
    const textChannel = newMember.guild.channels.cache.find(channel => channel.name === 'test-bot-chobit')
    console.log(newMember.id)
    if(newUserChannel === '598697935873769522') {
      switch (newMember.id) {
        case '159822729061597184':
          newMember.member.voice.channel.join()
            .then(connection => {
              connection.play(path.join(__dirname, 'cmds/test/panes-join.m4a'), { volume: 0.3 })
            })
          break
        case '367825641539895296':
          newMember.member.voice.channel.join()
            .then(connection => {
              connection.play(path.join(__dirname, 'cmds/test/mauri-perrowuaton.m4a'), { volume: 0.3 })
            })
          break
        case '225774167751000065':
          newMember.member.voice.channel.join()
            .then(connection => {
              connection.play(path.join(__dirname, 'cmds/test/maty-join.m4a'), { volume: 0.3 })
            })
          break
        case '418468604879831062':
          newMember.member.voice.channel.join()
            .then(connection => {
              connection.play(path.join(__dirname, 'cmds/test/koy-join.m4a'), { volume: 0.3 })
            })
          break
        case '304305848602066944':
          newMember.member.voice.channel.join()
            .then(connection => {
              connection.play(path.join(__dirname, 'cmds/test/jimmy-join.m4a'), { volume: 0.3 })
            })
          break
        default:
          textChannel.send(`${newMember.member} pidele al panes que te configure ψ(｀∇´)ψ`)
          break
      }
    }
  } catch (error) {
    console.log(error)
  }
})
bot.login(tokenDiscord)
