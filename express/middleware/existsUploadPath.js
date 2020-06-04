const fs = require('fs')
const { UPLOAD_PATH } = require('../utils/constant')

function existsUploadPath(req, res, next) {
  const path = `${UPLOAD_PATH}/book`
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }
  next()
}



module.exports = {
  existsUploadPath,
}