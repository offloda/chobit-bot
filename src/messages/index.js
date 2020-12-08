const { MessageAttachment  } = require('discord.js')

module.exports = async (bot) => {
  bot.on('message', msg => {
    if (msg.content === 'VEN PA ACA BOT QLO') {
      msg.reply('OBLIGAME PERRO! 🔪')
    }
  })
  
  bot.on('message', msg => {
    if (msg.content === 'ta malo 💥') {
      const attachment = new MessageAttachment('https://scontent.fscl11-2.fna.fbcdn.net/v/t1.0-9/128717112_198352648531563_1040055127051596060_n.jpg?_nc_cat=107&ccb=2&_nc_sid=dbeb18&_nc_ohc=qaTwUPI-p0kAX97fMjc&_nc_oc=AQlWK3YubJhY0KI_eGAS094-TQfk6sS0rSCEB4BxR0DO3olYKdV8urJYv1Ucegl6XJU&_nc_ht=scontent.fscl11-2.fna&oh=310d2b3dda3cf24cf07afdb62203ae3d&oe=5FF45730')
      msg.reply('CODEA BIEN PO AWEONAO 💣', attachment)
    }
  })
}
