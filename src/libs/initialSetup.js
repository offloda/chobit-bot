const { Track } = require('../models/Track')
const { Voice } = require('../models/Voice')

module.exports = async () => {
  try {
    const countTracks = await Track.estimatedDocumentCount()
    const countVoices = await Voice.estimatedDocumentCount()
    if (countTracks > 0 || countVoices) return

    const saveTracks = await Promise.all([
      new Track({ name: 'jimmy-join.m4a', path: 'sounds/jimmy-join.m4a' }).save(),
      new Track({ name: 'chobit-join.m4a', path: 'sounds/chobit-join.m4a' }).save(),
      new Track({ name: 'koy-join.m4a', path: 'sounds/koy-join.m4a' }).save(),
      new Track({ name: 'maty-join.m4a', path: 'sounds/maty-join.m4a' }).save(),
      new Track({ name: 'mauri-join.m4a', path: 'sounds/mauri-join.m4a' }).save(),
      new Track({ name: 'panes-join.m4a', path: 'sounds/panes-join.m4a' }).save(),
      new Track({ name: 'silent-wench.m4a', path: 'sounds/silent-wench.m4a' }).save()
    ])

    const saveVoices = await Promise.all([
      new Voice({ id_user: '159822729061597184', name_user: 'Offloda', tracks: saveTracks[5]._id }).save(),
      new Voice({ id_user: '367825641539895296', name_user: '𝓝𝓲𝓪𝓷𝓬𝓪𝓭𝓾', tracks: saveTracks[4]._id }).save(),
      new Voice({ id_user: '225774167751000065', name_user: 'DΞΔN', tracks: saveTracks[3]._id }).save(),
      new Voice({ id_user: '418468604879831062', name_user: 'ChrisKoy', tracks: saveTracks[2]._id }).save(),
      new Voice({ id_user: '304305848602066944', name_user: 'Jimmy', tracks: saveTracks[0]._id }).save()
    ])

    console.log('*SAVE TRACKS*', saveTracks)
    console.log('*SAVE VOICES*', saveVoices)
  } catch (error) {
    console.log('*SEED ERROR TRACKS & VOICES*', error)
  }
}
