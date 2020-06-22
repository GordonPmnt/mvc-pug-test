const connection = require('../db/config');

const Post = {};

Post.getAll = (callback) => {
   connection.query(
       'SELECT * FROM posts',
       (err, results, fields) => {
           callback(err, results, fields);
       }
   )
}

Post.postOnePost = (req, callback) => {
    const formData = req.fields
    connection.query(
        'INSERT INTO posts SET ?',
        formData,
        (err, results, fields) => {
            callback(err, results, fields)
        }
    )
}

module.exports = Post;