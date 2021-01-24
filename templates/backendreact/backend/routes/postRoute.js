const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


router.post('/', postController.createPost)
router.get('/', postController.getAll)
router.put('/:id', postController.editPost)
router.get('/:id', postController.getOne)
router.delete('/:id', postController.deleteOne)



module.exports = router;
