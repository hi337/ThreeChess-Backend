/**
 * IMPORTANT:
 * ---------
 * Do not manually edit this file if you'd like to host your server on Colyseus Cloud
 *
 * If you're self-hosting (without Colyseus Cloud), you can manually
 * instantiate a Colyseus Server as documented here:
 *
 * See: https://docs.colyseus.io/server/api/#constructor-options
 */
import { Server } from "@colyseus/core";
import { createServer } from "http";
import { WebSocketTransport } from "@colyseus/ws-transport";
import express from "express";
import { MyRoom } from "./rooms/MyRoom";
import { monitor } from "@colyseus/monitor";

const app = express();
app.use(express.json());
app.use("/colyseus", monitor());
const server = createServer(app);

const gameServer = new Server({
  transport: new WebSocketTransport({
    server: server,
  }),
});

gameServer.define("chess_room", MyRoom);
gameServer.listen(3000, "0.0.0.0");
