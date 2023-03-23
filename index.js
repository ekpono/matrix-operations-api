const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const MatrixController = require('./src/controller/MatrixController');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res)=> {
    res.send({
        message: 'Welcome!!!'
    })
})

app.post('/echo', upload.single('file'), MatrixController);

app.listen(8080, () => {
    console.log('Server started on port 8080');
});
