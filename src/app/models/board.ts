import {Point} from './point';

export class Board {
  public board: Point[][];

  constructor(size: number) {
    this.board = [];
    for (let _i = 0; _i < size; _i++) {
      this.board.push(new Array<Point>(10));
    }
    this.board.forEach(arr => arr.fill(new Point(0)));
  }

  increaseValue(i: number, j: number) {
    if (this.board[i][j] >= 5) {
      this.board[i][j].value += 1;
    } else {
      this.board[i][j].value += 1;
    }
  }

}
