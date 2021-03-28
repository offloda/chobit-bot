const mongoose = require('mongoose');
const { mongoDB } = require('../config/configure');
const seedTracks = require('./libs/initialSetup');

mongoose
  .connect(`mongodb://${mongoDB.host}:${mongoDB.port}/${mongoDB.name}`, {
    poolSize: 10,
    authSource: mongoDB.authSource,
    user: mongoDB.username,
    pass: mongoDB.password,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(async (db) => {
    console.log('😎 Connection has been established successfully');
    await seedTracks();
  })
  .catch((err) => console.log('🕵️‍♂️ Unable to connect to the database:', err));
