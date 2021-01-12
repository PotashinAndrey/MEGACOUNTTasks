export default function spiral(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }

  let vector = { row: 0, col: 1 };

  vector.rotate = function () {
    const row = this.row;
    this.row = this.col;
    this.col = -row;
  }

  let col = 0;
  let row = 0;

  for (let i = 0; i < n ** 2; i++) {
    matrix[row][col] = i + 1;
    if (matrix[row + vector.row] && matrix[row + vector.row][col + vector.col] === 0) {
      row += vector.row;
      col += vector.col;
    } else {
      vector.rotate();
      row += vector.row;
      col += vector.col;
    }
  }

  return matrix;
}

console.log('result: ', spiral(5))