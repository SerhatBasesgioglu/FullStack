import { subscribeChat, publishChat } from "@/util/websocket";

const Message = () => {
  const handleSubscribe = () => {
    subscribeChat();
  };

  const handlePublish = (message) => {
    publishChat(message);
  };
  return (
    <>
      <div>
        <button onClick={handleSubscribe}>Subscribe</button>
        <button onClick={() => handlePublish("This is the published message")}>
          Publish
        </button>
      </div>
      <p>This is the message field</p>
    </>
  );
};
export default Message;
