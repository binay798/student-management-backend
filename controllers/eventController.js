const Event = require('../modals/eventModal');
const CustomError = require('../utils/CustomError');

exports.createEvent = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const createdAt = Date.now();
    const event = await Event.create({ name, description, createdAt });

    return res.status(200).json({
      status: 'success',
      event,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

exports.getEvents = async (req, res, next) => {
  try {
    const events = await Event.find();

    return res.status(200).json({
      status: 'success',
      events,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};
