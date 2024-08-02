import { Client } from "@stomp/stompjs";

let isConnected = false;

const wsClient = new Client({
  brokerURL: "ws://localhost:8080/ws",
  onConnect: () => {
    console.log("Websocket is connected");
    isConnected = true;
  },
  onDisconnect: () => {
    console.log("Websocket is disconnected");
    isConnected = false;
  },
});

const subscribeChat = () => {
  if (isConnected) {
    wsClient.subscribe("/topic/chat", (message) => {
      console.log(message.body);
    });
  } else {
    console.log("Websocket is not connected yet");
  }
};

const publishChat = (message) => {
  if (isConnected) {
    wsClient.publish({
      destination: "/app/chat",
      body: message,
    });
  } else {
    console.log("Websocket is not connected yet");
  }
};

const subscribeMovement = () => {
  if (isConnected) {
    wsClient.subscribe("/topic/movement", (message) => {
      console.log(message.body);
    });
  } else {
    console.log("Websocket is not connected yet");
  }
};

const publishMovement = (message) => {
  if (isConnected) {
    wsClient.publish({
      destination: "/app/movememnt",
      body: message,
    });
  } else {
    console.log("Websocket is not connected yet");
  }
};

wsClient.activate();

export { subscribeChat, publishChat, subscribeMovement, publishMovement };
