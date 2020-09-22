const puzzle = [
    ['0', '0', '0', '0', '0', '0', '6', '0', '9'],
    ['0', '0', '9', '0', '7', '0', '0', '5', '0'],
    ['0', '0', '4', '9', '3', '0', '0', '1', '0'],
    ['3', '0', '2', '0', '0', '0', '0', '7', '0'],
    ['0', '0', '7', '2', '8', '3', '9', '0', '0'],
    ['0', '5', '0', '0', '0', '0', '1', '0', '3'],
    ['0', '3', '0', '0', '1', '9', '2', '0', '0'],
    ['0', '2', '0', '0', '5', '0', '7', '0', '0'],
    ['7', '0', '6', '0', '0', '0', '0', '0', '0'],
];
sudokoSolver(puzzle);
function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == num || board[i][col] == num || board[m][n] == num) {
          return false;
        }
    }
    return true;
}
function sudokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '0') {
        for (let num = 1; num <= 9; num++) {
          if (isValid(data, i, j, num)) {
            data[i][j] = `${num}`;
          if (sudokoSolver(data)) {
           return true;
          } else {
           data[i][j] = '0';
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}
console.log(puzzle);