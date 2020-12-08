const {Schema, model} = require('mongoose')

const trackSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  path: String,
}, {
  timestamps: true,
  versionKey: false,
})

const Track = model('Track', trackSchema)

const TrackModel = {
  addTrack: async (data) => {
    try {
      await Track.create({
        name: data.name,
        path: data.path
      })
    } catch (error) {
      return `La pista ${data.name} ya existe!`
    }
  },
  listAllTracks: async () => {
    return await Track.find()
  },
  findTrack: async (data) => {
    try {
      return await Track.findOne({ _id: data._id })
    } catch (error) {
      return 0
    }
  }
}

module.exports = { TrackModel, Track }
