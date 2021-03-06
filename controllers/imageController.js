const path = require('path');
// const { constants } = require('perf_hooks');
const sharp = require('sharp');
const Image = require('../modals/imageModal');
const removeFile = require('../utils/removeFile');
const catchAsync = require('../utils/catchAsync');

const filePath = path.join(`${__dirname}/../uploads`);

exports.createImage = catchAsync(async (req, res, next) => {
  const originalName = req.file.originalname.split('.')[0];
  const filename = `${Date.now()}-${originalName}.webp`;
  const imgUrl = `http://${req.get('host')}/static/images/${filename}`;

  // upload and save file to webp format
  await sharp(req.file.buffer)
    .resize({
      height: 600,
      fit: sharp.fit.contain,
    })
    .webp()
    .toFile(`${filePath}/${filename}`);

  const image = await Image.create({
    name: req.body.name,
    imageUrl: imgUrl,
    createdAt: req.body.createdAt,
  });

  return res.status(200).json({
    status: 'success',
    image,
  });
});

exports.getImages = catchAsync(async (req, res, next) => {
  const images = await Image.find();
  return res.status(200).json({
    status: 'success',
    images,
  });
});

exports.searchImage = catchAsync(async (req, res, next) => {
  const { name } = req.query;
  const images = await Image.find({
    name: { $regex: new RegExp(name, 'i') },
  });
  return res.status(200).json({
    status: 'success',
    images,
  });
});

exports.deleteImage = catchAsync(async (req, res, next) => {
  const image = await Image.findByIdAndDelete(req.params.id);
  const name = image.imageUrl.split('/');

  // remove image from the directory
  await removeFile(path.join(`${__dirname}/../uploads`, name[name.length - 1]));

  res.status(200).json({
    status: 'success',
    image,
  });
});
