const postsPage = (req, res, next) => {
    res.render('posts', req);
 }
 
 module.exports = { postsPage };