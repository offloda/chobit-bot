const { Schema, model } = require('mongoose');

const voiceSchema = new Schema(
  {
    id_user: {
      type: String,
      required: true,
      unique: true,
    },
    name_user: String,
    track: {
      name_track: String,
      source_track: String, //link de youtube o el path de la musica
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Voice = model('Voice', voiceSchema);

const VoiceModel = {
  registerVoice: async (data) => {
    try {
      await Voice.create({
        id_user: data.userID,
        name_user: data.nameUser,
        tracks: data.trackObject,
      });
    } catch (error) {
      return `El usuario ${data.nameUser} ya tiene asignado una cancion, si quieres cambiarlas usa el comando !c updateSong`;
    }
  },
  updateSound: async (data) => {
    try {
      return await Voice.findOneAndUpdate(
        { id_user: data.userID },
        { track: data.trackObject, updated_at: new Date() }
      );
    } catch (error) {
      return null;
    }
  },
  findSound: async (data) => {
    try {
      return await Voice.findOne({ id_user: data.userID });
    } catch (error) {
      return 0;
    }
  },
};

module.exports = { VoiceModel, Voice };
