const express = require('express');
const multer = require('multer');
const imageController = require('../controllers/imageController');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('image'), imageController.createImage);
router.get('/', imageController.getImages);
router.get('/search', imageController.searchImage);
router.delete('/:id', imageController.deleteImage);
module.exports = router;
