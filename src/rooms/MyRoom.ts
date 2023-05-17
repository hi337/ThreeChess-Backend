import { Room, Client } from "colyseus";
import { MyRoomState } from "./schema/MyRoomState";

export class MyRoom extends Room<MyRoomState> {
  onCreate(options: any) {
    this.setState(new MyRoomState());

    this.onMessage("started", (client, message) => {
      this.state.started = true;
    });
    this.onMessage("move", (client, message) => {
      let input = JSON.parse(message);
      this.state.recentMove = input.piece_name;
      for (let i = 0; i < this.state.pieces_array.length; ++i) {
        if (this.state.pieces_array[i].piece_name == input.piece_name) {
          this.state.pieces_array[i].x = input.x;
          this.state.pieces_array[i].z = input.z;
        }
      }
    });
    this.onMessage("turn_change", (client, message) => {
      this.state.turn == "white"
        ? (this.state.turn = "black")
        : (this.state.turn = "white");
    });

    this.onMessage("collide", (client, message) => {
      for (let i = 0; i < this.state.pieces_array.length; i++) {
        if (message == this.state.pieces_array[i].piece_name) {
          delete this.state.pieces_array[i];
        }
      }
    });
  }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    this.state.number_connected += 1;
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }
}
