const { Voice } = require('../models/Voice');

module.exports = async () => {
  try {
    const countVoices = await Voice.estimatedDocumentCount();
    if (countVoices > 0) return;

    const saveVoices = await Promise.all([
      new Voice({
        id_user: '159822729061597184',
        name_user: 'Offloda',
        track: {
          name_track: 'panes-join-sephiroth.m4a',
          source_track: 'sounds/panes-join-sephiroth.m4a'
        },
      }).save(),
      new Voice({
        id_user: '367825641539895296',
        name_user: '𝓝𝓲𝓪𝓷𝓬𝓪𝓭𝓾',
        track: {
          name_track: 'mauri-join.m4a',
          source_track: 'sounds/mauri-join.m4a'
        },
      }).save(),
      new Voice({
        id_user: '225774167751000065',
        name_user: 'DΞΔN',
        track: {
          name_track: 'maty-join.m4a',
          source_track: 'sounds/maty-join.m4a'
        },
      }).save(),
      new Voice({
        id_user: '418468604879831062',
        name_user: 'ChrisKoy',
        track: {
          name_track: 'koy-join.m4a',
          source_track: 'sounds/koy-join.m4a'
        },
      }).save(),
      new Voice({
        id_user: '304305848602066944',
        name_user: 'Jimmy',
        track: {
          name_track: 'jimmy-join.m4a',
          source_track: 'sounds/jimmy-join.m4a'
        },
      }).save(),
      new Voice({
        id_user: '344220396276678658',
        name_user: 'Akoyagu',
        track: {
          name_track: 'silent-wench.m4a',
          source_track: 'sounds/silent-wench.m4a'
        },
      }).save(),
    ]);

    console.log('*SAVE VOICES*', saveVoices);
  } catch (error) {
    console.log('*SEED ERROR TRACKS & VOICES*', error);
  }
};
