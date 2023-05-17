import { Schema, Context, type, ArraySchema } from "@colyseus/schema";

export class Position extends Schema {
  @type("number")
  x: number;

  @type("number")
  z: number;

  constructor(x: number = 0, z: number = 0) {
    super();
    this.x = x;
    this.z = z;
  }
}

export class Piece extends Schema {
  @type(Position)
  pos: Position;

  @type("string")
  piece_name: string;

  @type("string")
  team: string;

  constructor(pos: Position, team: string, piece_name: string) {
    super();
    this.pos = new Position();
    this.team = team;
    this.piece_name = piece_name;
  }
}

export class MyRoomState extends Schema {
  @type([Piece])
  pieces_array: Piece[];

  @type("string")
  turn: string;

  @type("number")
  number_connected: number;

  @type("boolean")
  started: boolean;

  constructor() {
    super();
    this.number_connected = 0;
    this.started = false;
    this.turn = "white";
    this.pieces_array = new ArraySchema<Piece>(
      new Piece(new Position(70, 50), "white", "white_pawn_1"),
      new Piece(new Position(50, 50), "white", "white_pawn_2"),
      new Piece(new Position(30, 50), "white", "white_pawn_3"),
      new Piece(new Position(10, 50), "white", "white_pawn_4"),
      new Piece(new Position(-10, 50), "white", "white_pawn_5"),
      new Piece(new Position(-30, 50), "white", "white_pawn_6"),
      new Piece(new Position(-50, 50), "white", "white_pawn_7"),
      new Piece(new Position(-70, 50), "white", "white_pawn_8"),
      new Piece(new Position(70, -50), "black", "black_pawn_1"),
      new Piece(new Position(50, -50), "black", "black_pawn_2"),
      new Piece(new Position(30, -50), "black", "black_pawn_3"),
      new Piece(new Position(10, -50), "black", "black_pawn_4"),
      new Piece(new Position(-10, -50), "black", "black_pawn_5"),
      new Piece(new Position(-30, -50), "black", "black_pawn_6"),
      new Piece(new Position(-50, -50), "black", "black_pawn_7"),
      new Piece(new Position(-70, -50), "black", "black_pawn_8"),
      new Piece(new Position(70, 70), "white", "white_rook_1"),
      new Piece(new Position(-70, 70), "white", "white_rook_2"),
      new Piece(new Position(70, -70), "black", "black_rook_1"),
      new Piece(new Position(-70, -70), "black", "black_rook_2"),
      new Piece(new Position(50, 70), "white", "white_knight_1"),
      new Piece(new Position(-50, 70), "white", "white_knight_2"),
      new Piece(new Position(50, -70), "black", "black_knight_1"),
      new Piece(new Position(-50, -70), "black", "black_kngiht_2"),
      new Piece(new Position(30, 70), "white", "white_bishop_1"),
      new Piece(new Position(-30, 70), "white", "white_bishop_2"),
      new Piece(new Position(30, -70), "black", "black_bishop_1"),
      new Piece(new Position(-30, -70), "black", "black_bishop_2"),
      new Piece(new Position(10, 70), "white", "white_king"),
      new Piece(new Position(-10, 70), "white", "white_queen"),
      new Piece(new Position(10, -70), "black", "black_king"),
      new Piece(new Position(-10, -70), "black", "black_queen")
    );
  }
}
