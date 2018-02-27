module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
  SECRET_TOKEN: 'asd345#5%$token'
}
