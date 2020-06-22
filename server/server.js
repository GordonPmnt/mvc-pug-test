const express = require('express');
const app = express();
const router = require('../routes');
const formidable = require('express-formidable');

app.use(formidable());
app.use('/', router);

app.set('views', './views');
app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});