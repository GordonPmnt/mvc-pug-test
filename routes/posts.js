const express = require('express');
const router = express.Router();

const { postsPage } = require('../controllers/pages-controller')
const { getAllPosts, createPost } = require('../controllers/posts-controller')

router.get('/', getAllPosts, postsPage);
router.post('/', createPost, getAllPosts, postsPage);

module.exports = router;