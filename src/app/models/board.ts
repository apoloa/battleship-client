import { Point } from './point';
import { Boat } from './boat';

export class Board {
  public board: Point[][];
  public boats: Boat[];
  private size: number;

  constructor(size: number) {
    this.board = [];
    this.boats = [];
    this.size = size;
    for (let _i = 0; _i < size; _i++) {
      const line = [];
      for (let _j = 0; _j < size; _j++) {
        line.push(new Point(0, _i, _j));
      }
      this.board.push(line);
    }
  }

  complete(): boolean {
    console.log(this.boats.length);
    return this.boats.length === 5;
  }

  increaseValue(i: number, j: number, direction: string) {
    console.log(this.board[i][j].value);
    for (let _i = 1; _i < 6; _i++) {
      let exits = false;
      for (const bBoat of this.boats) {
        if (bBoat.id === _i) {
          exits = true;
          break;
        }
      }
      if (!exits) {
        const boat = Boat.GetById(_i);
        if (this.validatePlacement(i, j, direction, boat.length)) {
          this.setOnPlace(i, j, direction, boat.id, boat.length);
          this.boats.push(boat);
        }
      }

    }
  }

  setOnPlace(x: number, y: number, direction: string, newValue: number, size: number) {
    if (direction === 'vertical') {
      for (let _i = 0; _i < size; _i++) {
        this.board[x + _i][y].value = newValue;
      }
    }
    if (direction === 'horizontal') {
      for (let _i = 0; _i < size; _i++) {
        this.board[x][y + _i].value = newValue;
      }
    }
  }

  validatePlacement(x: number, y: number, direction: string, size: number): boolean {
    if (this.board[x][y].value === 0) {
      if (direction === 'vertical') {
        if ((x + size) > this.size) {
          return false;
        } else {
          for (let _i = 0; _i < size; _i++) {
            if (this.board[x + _i][y].value !== 0) {
              return false;
            }
          }
          return true;
        }
      }
      if (direction === 'horizontal') {
        if ((y + size) > this.size) {
          return false;
        } else {
          for (let _i = 0; _i < size; _i++) {
            if (this.board[x][y + _i].value !== 0) {
              return false;
            }
          }
          return true;
        }
      }
    } else {
      return false;
    }
  }

  toArray(): number[][][] {
    const board = [];
    for (let _i = 0; _i < this.size; _i++) {
      const line = [];
      for (let _j = 0; _j < this.size; _j++) {
        line.push(this.board[_i][_j].toArray())
      }
      board.push(line);
    }
    return board;
  }

  applyPoint(point: Point) {
    this.board[point.x][point.y] = point;
  }

}
