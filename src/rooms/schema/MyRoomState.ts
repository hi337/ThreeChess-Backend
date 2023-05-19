import { Schema, Context, type, ArraySchema } from "@colyseus/schema";

export class Piece extends Schema {
  @type("number")
  x: number;

  @type("number")
  z: number;

  @type("string")
  piece_name: string;

  @type("string")
  team: string;

  constructor(x: number, z: number, team: string, piece_name: string) {
    super();
    this.x = x;
    this.z = z;
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

  @type("string")
  recentMove: string;

  constructor() {
    super();
    this.number_connected = 0;
    this.started = false;
    this.turn = "white";
    this.recentMove = "";
    this.pieces_array = new ArraySchema<Piece>(
      new Piece(70, 50, "white", "white_pawn_1"),
      new Piece(50, 50, "white", "white_pawn_2"),
      new Piece(30, 50, "white", "white_pawn_3"),
      new Piece(10, 50, "white", "white_pawn_4"),
      new Piece(-10, 50, "white", "white_pawn_5"),
      new Piece(-30, 50, "white", "white_pawn_6"),
      new Piece(-50, 50, "white", "white_pawn_7"),
      new Piece(-70, 50, "white", "white_pawn_8"),
      new Piece(70, -50, "black", "black_pawn_1"),
      new Piece(50, -50, "black", "black_pawn_2"),
      new Piece(30, -50, "black", "black_pawn_3"),
      new Piece(10, -50, "black", "black_pawn_4"),
      new Piece(-10, -50, "black", "black_pawn_5"),
      new Piece(-30, -50, "black", "black_pawn_6"),
      new Piece(-50, -50, "black", "black_pawn_7"),
      new Piece(-70, -50, "black", "black_pawn_8"),
      new Piece(70, 70, "white", "white_rook_1"),
      new Piece(-70, 70, "white", "white_rook_2"),
      new Piece(70, -70, "black", "black_rook_1"),
      new Piece(-70, -70, "black", "black_rook_2"),
      new Piece(50, 70, "white", "white_knight_1"),
      new Piece(-50, 70, "white", "white_knight_2"),
      new Piece(50, -70, "black", "black_knight_1"),
      new Piece(-50, -70, "black", "black_knight_2"),
      new Piece(30, 70, "white", "white_bishop_1"),
      new Piece(-30, 70, "white", "white_bishop_2"),
      new Piece(30, -70, "black", "black_bishop_1"),
      new Piece(-30, -70, "black", "black_bishop_2"),
      new Piece(10, 70, "white", "white_king"),
      new Piece(-10, 70, "white", "white_queen"),
      new Piece(10, -70, "black", "black_king"),
      new Piece(-10, -70, "black", "black_queen")
    );
  }
}
