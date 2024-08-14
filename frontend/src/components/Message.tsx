import { subscribe, unsubscribe, publish } from "@/util/websocket";
import { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("");
  const handleSubscribe = () => {
    subscribe("/topic/chat", (message: any) => {
      const messageBody: Message = JSON.parse(message.body);
      console.log(messageBody.content);
    });
  };

  const handleUnsubscribe = () => {
    unsubscribe("/topic/chat");
  };

  const handlePublish = () => {
    const _message: Message = {
      content: message,
      playerName: "Serhat",
    };

    publish("/app/chat", JSON.stringify(_message));
  };

  return (
    <>
      <div>
        <button onClick={handleSubscribe}>Subscribe</button>
        <button onClick={handleUnsubscribe}>Unsubscribe</button>
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button onClick={handlePublish}>Send</button>
      </div>
      <p>This is the message field</p>
    </>
  );
};
export default Message;
