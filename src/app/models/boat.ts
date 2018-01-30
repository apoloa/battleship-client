export class Boat {
  constructor(public id: number, public length: number, public name: string) {}


  public static readonly CARRIER = new Boat(1, 5, 'Carrier');
  public static readonly BATTLESHIP = new Boat(2, 4, 'Battleship');
  public static readonly CRUISER = new Boat(3, 3, 'Cruiser');
  public static readonly SUBMARINE = new Boat(4, 3, 'Submarine');
  public static readonly DESTROYER = new Boat(5, 2, 'Destroyer');

}

