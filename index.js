const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 4000;
const myAppRouter = require('./src/routes/myApp.route');

app.use(morgan('tiny'));
app.set('view engine','ejs');
app.use(express.json());
app.use('/', myAppRouter);
app.all('*',(req,res) => {
    res.status(404).render('404_error_template', {title: "Sorry, page not found"});
});
/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const statusMessage = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        code : statusCode,
        message : statusMessage
    });
    
});

app.listen(port,() => {
    console.log(`Example App listening at http:localhost:${port}`)
});