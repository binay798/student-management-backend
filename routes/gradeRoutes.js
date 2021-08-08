const express = require('express');
const gradeController = require('../controllers/gradeController');

const router = express.Router();

router.post('/', gradeController.createGrade);
router.post('/update/:id/:type', gradeController.updateGrade);
router.patch('/:gradeId/:studentId', gradeController.updateStudentInsideGrade);
router.get('/:gradeId/:studentId', gradeController.getStudentFromGrade);

router.get('/', gradeController.getGrade);

module.exports = router;
