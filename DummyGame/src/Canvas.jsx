import { useEffect, useRef, useState } from "react";
const Canvas = (props) => {
  const canvasRef = useRef(null);
  const [pos, setPos] = useState({ x: 250, y: 200 });

  useEffect(() => {
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
      const step = 10;
      switch (event.key) {
        case "w":
          setPos((prev) => ({ ...prev, y: Math.max(prev.y - step, 0) }));
          break;
        case "s":
          setPos((prev) => ({ ...prev, y: Math.min(prev.y + step, height) }));
          break;
        case "a":
          setPos((prev) => ({ ...prev, x: Math.max(prev.x - step, 0) }));
          break;
        case "d":
          setPos((prev) => ({ ...prev, x: Math.min(prev.x + step, width) }));
          break;
        default:
          break;
      }
    };
    drawPlayer();
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pos]);
  return <canvas ref={canvasRef} width={500} height={400} {...props} style={{ border: "1px solid black" }} />;
};

export default Canvas;
