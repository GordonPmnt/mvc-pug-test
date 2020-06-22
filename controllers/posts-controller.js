const Post = require('../models/Post');

const getAllPosts = (req, res, next) => {
   Post.getAll((err, results) => {
       req.posts = results;
       next();
   })
}

const createPost = (req, res, next) => {
    Post.postOnePost(req, (err, results) => {
        next()
    })
}

module.exports = { getAllPosts, createPost };