//找出 憑證return
if (process.env.NODE_ENV == 'production') {
  module.exports = require('./prod')
} else {
  module.exports = require('./dev')
}
