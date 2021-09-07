const Event = require('../modals/eventModal');
// const CustomError = require('../utils/CustomError');
const catchAsync = require('../utils/catchAsync');

exports.createEvent = catchAsync(async (req, res, next) => {
  const { name, description } = req.body;
  const createdAt = Date.now();
  const event = await Event.create({ name, description, createdAt });

  return res.status(200).json({
    status: 'success',
    event,
  });
});

exports.getEvents = catchAsync(async (req, res, next) => {
  // todo: make query more general rather than always defaulting to the below given params.
  const events = await Event.find().sort({ createdAt: 'desc' }).limit(10);

  return res.status(200).json({
    status: 'success',
    events,
  });
});
