const express = require('express');
const gradeController = require('../controllers/gradeController');

const router = express.Router();

router
  .route('/')
  .post(gradeController.createGrade)
  .get(gradeController.getAllGrades);

router
  .route('/:id')
  .patch(gradeController.updateGrade)
  .get(gradeController.getGrade)
  .delete(gradeController.deleteGrade);

// AFTER REFACTOR
// router.post('/update/:id/:type', gradeController.updateGrade);
// test
// router.patch('/:id', gradeController.updateGrade);
// router.patch('/addStudent/:gradeId', gradeController.addStudentInsideGrade);
// router.patch('/removeStudent/:gradeId', gradeController.removeStudentFromGrade);

// router.patch('/addSubject/:gradeId', gradeController.addSubjectInsideGrade);
// router.patch('/removeSubject/:gradeId', gradeController.removeSubjectFromGrade);

// router.patch('/:gradeId/:studentId', gradeController.updateStudentInsideGrade);
// router.get('/:gradeId/:studentId', gradeController.getStudentFromGrade);

// router.get('/', gradeController.getGrade);

module.exports = router;
