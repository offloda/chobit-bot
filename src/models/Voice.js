const {Schema, model} = require('mongoose')

const voiceSchema = new Schema({
  id_user: {
    type: String,
    required: true,
    unique: true
  },
  name_user: String,
  tracks: [{
    ref: 'Track',
    type: Schema.Types.ObjectId,
  }]
}, {
  timestamps: true,
  versionKey: false,
})

const Voice = model('Voice', voiceSchema)

const VoiceModel = {
  addSound: async (data) => {
    try {
      await Voice.create({
        id_user: data.idUser,
        name_user: data.nameUser,
        tracks: data.trackID
      })
    } catch (error) {
      return `El usuario ${data.nameUser} ya tiene asignado una cancion, si quieres cambiarlas usa el comando !c updateSong`
    }
  },
  updateSound: async (data) => {
    try {
      await Voice.findOneAndUpdate({ id_user: data.idUser }, { tracks: data.trackID })
    } catch (error) {
      return 'No se pudo relacionar la pista'
    }
  },
  findSound: async (data) => {
    try {
      return await Voice.findOne({ id_user: data.userID })
    } catch (error) {
      return 0
    }
  }
}

module.exports = { VoiceModel, Voice }
