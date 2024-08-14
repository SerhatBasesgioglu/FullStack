import { Client, StompSubscription } from "@stomp/stompjs";
import { stringify } from "querystring";

let isConnected = false;
const subscriptions: Record<string, StompSubscription> = {};

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
  onStompError: () => {
    console.error("Websocket error");
  },
});

const ensureConnected = () => {
  if (!isConnected) {
    console.log("Websocket is not connected");
    return false;
  }
  return true;
};

const subscribe = (topic: string, callback: any) => {
  if (!ensureConnected()) {
    return;
  }
  if (subscriptions[topic]) {
    console.log(`You have already subscribed to ${topic}`);
    return;
  }
  const subscription = wsClient.subscribe(topic, callback);
  subscriptions[topic] = subscription;
  console.log(`Subscribed to topic: ${topic}`);
};

const publish = (destination: string, message: any) => {
  if (!ensureConnected()) {
    return;
  }
  wsClient.publish({
    destination: destination,
    body: message,
  });
};

const unsubscribe = (topic: string) => {
  if (!ensureConnected()) {
    return;
  }
  const subscription = subscriptions[topic];
  if (subscription) {
    subscription.unsubscribe();
    delete subscriptions[topic];
    console.log(`Unsubscribed from ${topic}`);
  } else {
    console.log(`There is not a subscription for ${topic}`);
  }
};

const subscribeMovement = (onMovement) => {
  if (isConnected) {
    wsClient.subscribe("/topic/movement", (message) => {
      const coordinates = JSON.parse(message.body);
      console.log(message.body);
      onMovement({ x: coordinates.x, y: coordinates.y });
    });
  } else {
    console.log("Websocket is not connected yet");
  }
};

const publishMovement = (message) => {
  if (isConnected) {
    wsClient.publish({
      destination: "/app/movement",
      body: message,
    });
  } else {
    console.log("Websocket is not connected yet");
  }
};

wsClient.activate();

export { subscribeMovement, publishMovement, subscribe, publish, unsubscribe };
