function getFileUrl(req) {
  const originalName = req.file.originalname.split('.')[0];
  const filename = `${Date.now()}-${originalName}.webp`;
  const imgUrl = `http://${req.get('host')}/static/images/${filename}`;
  return { filename, imgUrl };
}

module.exports = getFileUrl;
