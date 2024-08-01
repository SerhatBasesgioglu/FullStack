import wsClient from "@/util/websocket";

const Message = () => {
  const handleSubscribe = () => {
    wsClient.subscribe("/topic/greetings", (message) => {
      console.log(`This is the message: ${message.body}`);
    });
  };

  const handlePublish = () => {
    wsClient.publish({
      destination: "/app/hello",
      body: "Hello fellas",
    });
  };
  return (
    <>
      <div>
        <button onClick={handleSubscribe}>Subscribe</button>
        <button onClick={handlePublish}>Publish</button>
      </div>
      <p>This is the message field</p>
    </>
  );
};
export default Message;
