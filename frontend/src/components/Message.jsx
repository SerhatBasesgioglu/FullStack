import { subscribeChat, publishChat } from "@/util/websocket";
import { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("");
  const handleSubscribe = () => {
    subscribeChat();
  };

  const handlePublish = () => {
    publishChat(message);
  };

  return (
    <>
      <div>
        <button onClick={handleSubscribe}>Subscribe</button>
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
