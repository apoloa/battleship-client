export class Board {
  public board: number[][];

  constructor(size: number) {
    this.board = [];
    for (let _i = 0; _i < size; _i++) {
      this.board.push(new Array<number>(10));
    }
    this.board.forEach(arr => arr.fill(0));
  }

  increaseValue(i: number, j: number) {
    if (this.board[i][j] >= 5){
      this.board[i][j] = 0;
    }else{
      this.board[i][j] += 1;
    }
  }

}
