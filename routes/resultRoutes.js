const express = require('express');
const resultController = require('../controllers/resultController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(resultController.createResult)
  .get(resultController.getUserResults);

router.route('/:resultId').delete(resultController.deleteResult);
module.exports = router;
