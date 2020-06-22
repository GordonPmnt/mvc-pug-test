const express = require('express');
const router = express.Router();

const { postsPage } = require('../controllers/pages-controller')
const { getAllPosts } = require('../controllers/posts-controller')

router.get('/', getAllPosts, postsPage);

module.exports = router;