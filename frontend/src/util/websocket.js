import { Client } from "@stomp/stompjs";

const wsClient = new Client({
  brokerURL: "ws://localhost:8080/ws",
  onConnect: () => {
    console.log("Websocket is connected");
  },
});

wsClient.activate();

export default wsClient;
