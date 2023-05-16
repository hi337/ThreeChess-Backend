import { Schema, Context, type, ArraySchema } from "@colyseus/schema";

export class Position extends Schema {
  @type("number")
  x: number;

  @type("number")
  y: number;

  constructor(x: number = 0, y: number = 0) {
    super();
    this.x = x;
    this.y = y;
  }
}

export class Piece extends Schema {
  @type(Position)
  pos: Position;

  @type("string")
  team: string;

  constructor(pos: Position) {
    super();
    this.pos = new Position();
  }
}

export class MyRoomState extends Schema {
  @type([Piece])
  pieces_array: Piece[];

  constructor() {
    super();
  }
}
