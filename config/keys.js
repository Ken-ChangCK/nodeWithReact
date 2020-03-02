//找出 憑證return
if (process.env.NODE_ENV == 'production') {
  moudle.exports = require('./prod')
} else {
  moudle.exports = require('./dev')
}
