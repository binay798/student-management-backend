const express = require('express');
const eventController = require('../controllers/eventController');

const router = express.Router();

router
  .route('/')
  .get(eventController.getAllEvents)
  .post(eventController.createEvent)
  .delete(eventController.deleteAllEvents);

router
  .route('/:id')
  .get(eventController.getEvent)
  .delete(eventController.deleteEvent);
// router.get('/', eventController.getAllEvents);
// router.post('/', eventController.createEvent);

module.exports = router;
