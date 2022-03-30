const express = require('express');
const app = express();
const port = 3000;
const myAppRouter = require('./src/routes/myApp.route');

app.use(express.json());
app.use('/', myAppRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        code : statusCode,
        message : err.message
    });
    
});

app.listen(port,() => {
    console.log(`Example App listening at http:localhost:${port}`)
})