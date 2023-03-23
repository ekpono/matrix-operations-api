const matrixFunctions = require('../functions/matrix-functions');
const fs = require('fs');
const csv = require('csv-parser');

function MatrixController(req, res){
    const validOps = ['multiply', 'sum', 'invert', 'flatten', 'echo'];
    if (!req.query.op || !validOps.includes(req.query.op) || !req.file) {
        return res.status(400).send({errors: 'Invalid or missing parameters'});
    }

    const results = [];
    fs.createReadStream(req.file.path)
        .pipe(csv({headers: false}))
        .on('data', (data) => results.push(data))
        .on('end', () => {
            const matrix = results.map(obj => Object.values(obj));
            const operation = req.query.op;
            switch (operation) {
                case 'invert':
                    res.send(matrixFunctions.invert(matrix));
                    break;
                case 'flatten':
                    res.send(matrixFunctions.flatten(matrix));
                    break;
                case 'sum':
                    res.json({sum: matrixFunctions.sum(matrix)});
                    break;
                case 'multiply':
                    res.json({multiply: matrixFunctions.multiply(matrix)});
                    break;
                default:
                    res.send(matrixFunctions.echo(matrix));
                    break;
            }
        });
}

module.exports = MatrixController;
