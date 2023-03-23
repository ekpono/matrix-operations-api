function echo(matrix) {
    return matrix.map((row) => row.join(',')).join('\n');
}

function invert(matrix) {
    const inverted = [];
    for (let i = 0; i < matrix.length; i++) {
        inverted[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            inverted[i][j] = matrix[j][i];
        }
    }
    return inverted.map((row) => row.join(',')).join('\n');
}

function flatten(matrix) {
    return matrix.flat().join(',');
}

function sum(matrix) {
    return matrix.flat().reduce((a, b) => a + Number(b), 0);
}

function multiply(matrix) {
    return matrix.flat().reduce((a, b) => a * Number(b), 1);
}

module.exports = {
    echo,
    invert,
    flatten,
    sum,
    multiply
};
