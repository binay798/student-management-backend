const path = require('path');
// const { constants } = require('perf_hooks');
const sharp = require('sharp');
const Image = require('../modals/imageModal');
const removeFile = require('../utils/removeFile');
const catchAsync = require('../utils/catchAsync');
const getFileUrl = require('../utils/getFileUrl');
const ApiFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/CustomError');

const filePath = path.join(`${__dirname}/../uploads`);

exports.createImage = catchAsync(async (req, res, next) => {
  const { filename, imgUrl } = getFileUrl(req);

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

exports.getAllImages = catchAsync(async (req, res, next) => {
  // const images = await Image.find();
  let images = new ApiFeatures(Image.find(), req.query)
    .filter()
    .sort()
    .fields()
    .pagination();
  images = await images.query;
  return res.status(200).json({
    status: 'success',
    results: images.length,
    images,
  });
});

exports.getImage = catchAsync(async (req, res, next) => {
  const image = await Image.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    image,
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
  if (!image) return next(new AppError('Image not found', 404));
  const name = image.imageUrl.split('/');

  // remove image from the directory
  await removeFile(path.join(`${__dirname}/../uploads`, name[name.length - 1]));

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
