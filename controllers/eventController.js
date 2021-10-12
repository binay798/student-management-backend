const Event = require('../modals/eventModal');
const CustomError = require('../utils/CustomError');
const catchAsync = require('../utils/catchAsync');
const ApiFeatures = require('../utils/apiFeatures');

exports.createEvent = catchAsync(async (req, res, next) => {
  const { name, description } = req.body;
  const createdAt = Date.now();
  const event = await Event.create({ name, description, createdAt });

  return res.status(200).json({
    status: 'success',
    event,
  });
});

exports.getAllEvents = catchAsync(async (req, res, next) => {
  let events = new ApiFeatures(Event.find(), req.query)
    .filter()
    .sort()
    .fields()
    .pagination();
  events = await events.query;

  return res.status(200).json({
    status: 'success',
    events,
  });
});

exports.getEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findById(req.params.id);
  if (!event) return next(new CustomError('Event not found', 404));
  res.status(200).json({
    status: 'success',
    event,
  });
});

exports.deleteEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  if (!event) return next(new CustomError('Event not found', 404));
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.deleteAllEvents = catchAsync(async (req, res, next) => {
  await Event.deleteMany();

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
