const {env} = require('./env')
const path = require('path')

const UPLOAD_PATH = env === 'dev'? path.join(__dirname, '../public'):path.join(__dirname, '../public')
const UPLOAD_URL = env === 'dev'? 'http://localhost:5000': 'http://localhost:5000'

module.exports = {
  CODE_ERROR: -1,
  CODE_SUCCESS: 0,
  debug: true,
  PWD_SALT: 'admin_imooc_node',
  PRIVATE_KEY: 'admin_imooc_node_test_youbaobao_xyz',
  JWT_EXPIRED: 60 * 60, // token失效时间
  CODE_TOKEN_EXPIRED: -2,
  UPLOAD_PATH,
  UPLOAD_URL,
  MIME_TYPE_EPUB: 'application/epub+zip'
}