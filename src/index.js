require('dotenv').config()
require('./connection')

const path = require('path')
const Commando = require('discord.js-commando')

const { discord } = require('../config/configure')

const bot = new Commando.CommandoClient({
  owner: String(discord.owner),
  commandPrefix: discord.prefix,
})

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

require('./messages/index')(bot)
require('./events/index')(bot, __dirname)

bot.login(discord.token)
