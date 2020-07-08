export class Game {
    constructor(x,y) {
      this.board = []
      for (let i = 0; i < x; i++) {
        const col = new Array(y);
        col.fill(0);
        this.board.push(col);
      }
      this.status = 'pause'
    }
  
    canBeAlive(i, j) {
        let aliveNeighbor = 0;
        for (let x = Math.max(i-1, 0); x <= Math.min(i+1, this.board.length-1); x ++) {
            for (let y = Math.max(j-1, 0); y <= Math.min(j+1, this.board[0].length-1); y ++) {
                if (this.board[x][y]  && !(i === x && j === y)) {
                    aliveNeighbor += 1;
                }
            }
        }
      
        if (aliveNeighbor === 3 || (aliveNeighbor === 2 && this.board[i][j])) {
            return true
        }
        return false
    }
  
    // displayBoard () {
    //     for (let i = 0; i < this.board.length; i++) {
    //         console.log(this.board[i])
    //     }
    // }
  
    nextMove() {
        const matrix = [];
        for (let arr of this.board) {
            matrix.push([...arr]);
        }
      
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (this.canBeAlive(i, j)) {
                    matrix[i][j] = 1
                } else {
                    matrix[i][j] = 0
                }
            }
        }
        this.board = matrix;
        // return matrix;
    }
  
    toggleSquare(x, y) {
        this.board[x][y] = this.board[x][y] ? 0 : 1
    }

    updateBoard(matrix) {
        this.board = matrix;
    }
}