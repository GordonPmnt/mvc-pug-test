const Post = require('../models/Post');

const getAllPosts = (req, res, next) => {
   Post.getAll((err, resuslts) => {
       req.posts = results;
       next();
   })
}

module.exports = { getAllPosts };