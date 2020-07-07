export class Game {
    constructor(x,y) {
      this.board = []
      for (let i = 0; i < x; i++) {
        const col = new Array(y);
        col.fill(0);
        this.board.push(col);
      }
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
      // setInterval(() => {
      //   // NEXT LOOP WILL MOV HERE AFTER TEST
      // }, 1000)
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (this.canBeAlive(i, j)) {
                    this.board[i][j] = 1
                } else {
                    this.board[i][j] = 0
                }
            }
        }
        return this.board;
    }
  
    fill(x, y) {
        this.board[x][y] = 1
    }

    updateBoard(matrix) {
        this.board = matrix;
    }
}