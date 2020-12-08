module.exports = {
  mongoDB: {
    host: process.env.DB_MONGO_HOST || 'localhost',
    port: process.env.DB_MONGO_PORT || '27017',
    username: process.env.DB_MONGO_USERNAME,
    password: process.env.DB_MONGO_PASSWORD,
    name: process.env.DB_MONGO_NAME,
    authSource: process.env.DB_MONGO_AUTH_SOURCE
  },
  discord: {
    prefix: process.env.PREFIX_COMMANDER || '',
    owner: process.env.OWNER || '',
    token: process.env.TOKEN_DISCORD || ''
  }
}
