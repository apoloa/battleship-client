export class Boat {
  constructor(public id: number, public length: number, public name: string) {
  }


  public static readonly CARRIER = new Boat(1, 5, 'Carrier');
  public static readonly BATTLESHIP = new Boat(2, 4, 'Battleship');
  public static readonly CRUISER = new Boat(3, 3, 'Cruiser');
  public static readonly SUBMARINE = new Boat(4, 3, 'Submarine');
  public static readonly DESTROYER = new Boat(5, 2, 'Destroyer');

  public static GetById(id: number): Boat {
    switch (id) {
      case 1:
        return this.CARRIER;
      case 2:
        return this.BATTLESHIP;
      case 3:
        return this.CRUISER;
      case 4:
        return this.SUBMARINE;
      case 5:
        return this.DESTROYER;
    }
    return this.CARRIER;
  }
}

