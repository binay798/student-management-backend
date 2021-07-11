const fs = require('fs').promises;

async function removeFile(filePath) {
  await fs.unlink(filePath);
}

module.exports = removeFile;
