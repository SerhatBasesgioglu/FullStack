import { Client } from "@stomp/stompjs";

import { WebSocket } from "ws";
Object.assign(global, { WebSocket });

const Message = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert("Helloworld");
    const client = new Client({
      brokerURL: "ws://localhost:8080/websocket",
      onConnect: () => {
        client.subscribe("/topic/greetings", (message) =>
          console.log(`Received: ${message.body}`)
        );
        client.publish({ destination: "/app/hello", body: "First Message" });
      },
    });

    client.activate();
  };
  return (
    <>
      <div>
        <button onClick={handleClick}>Submit message</button>
      </div>
      <p>This is the message field</p>
    </>
  );
};
export default Message;
