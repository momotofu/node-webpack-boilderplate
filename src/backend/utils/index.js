/*
 * Takes a folderPath and the depth of the
 * file with an unknown or variable name.
 * Returns the filename.
 */
const getFileName = (folderPath, depth) => {
  const fs = require('fs')
  const path = require('path')

  const fileNames = fs.readdirSync(path.resolve(__dirname, folderPath))

  if (depth > fileNames.length - 1)
    return
  return fileNames[depth]
}

module.exports = {
  getFileName
}
