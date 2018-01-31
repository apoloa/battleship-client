export class Point {
  public x: number;
  public y: number;
  public value: number;
  public selected: boolean;

  constructor(value: number, x: number, y: number) {
    this.value = value;
    this.selected = false;
    this.x = x;
    this.y = y;
  }

  toArray(): number[] {
    return [this.value, this.selected ? 1 : 0];
  }

  fromArray(data: number[]) {
    this.value = data[0];
    this.selected = data[1] === 1;
  }

  static fromJSON(json: any): Point {
    const p = new Point(
      json.value[0],
      json.x,
      json.y
    );
    p.selected = true;
    return p
  }
}
