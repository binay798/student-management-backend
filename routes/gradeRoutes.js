const express = require('express');
const gradeController = require('./../controllers/gradeController')
const router = express.Router();

router.post('/create', gradeController.createGrade)
router.post('/update/:id/:type', gradeController.updateGrade)
router.get('/', gradeController.getGrade)



module.exports = router;