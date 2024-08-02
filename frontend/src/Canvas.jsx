import { useEffect, useRef, useState } from "react";
import { subscribeMovement, publishMovement } from "./util/websocket";
const Canvas = (props) => {
  const canvasRef = useRef(null);
  const [pos, setPos] = useState({ x: 250, y: 200 });

  subscribeMovement();
  useEffect(() => {
    // wsClient.subscribe("/topic/coordinates", (message) => {
    //   const coordinates = JSON.parse(message.body);
    //   const x = coordinates.x;
    //   const y = coordinates.y;
    //   setPos({ x: x, y: y });
    //   console.log(`x: ${x}, y: ${y}`);
    // });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const drawPlayer = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 20, 0, 2 * Math.PI);
      ctx.fillStyle = "blue";
      ctx.fill();
    };
    const handleKeyDown = (event) => {
      publishMovement(event.key);
      console.log(event.key);
    };
    drawPlayer();
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pos]);
  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={400}
      {...props}
      style={{ border: "1px solid black" }}
    />
  );
};

export default Canvas;
