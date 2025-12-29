import { useEffect, useRef } from "react";

type ShapeType = "circle" | "square" | "triangle" | "hex" | "cloud";

interface Shape {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  type: ShapeType;
  color: string;
}

const SHAPE_COUNT = 9; // ✅ intentionally low

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<Shape[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const randomShape = (): Shape => {
      const isCloud = Math.random() < 0.25; // ☁️ 25% clouds
      const size = isCloud
        ? Math.random() * 40 + 70   // 🌥️ medium-sized clouds (70–110)
        : Math.random() * 30 + 25;  // other shapes (25–55)

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.4, // 🐢 very slow
        dy: (Math.random() - 0.5) * 0.4,
        size,
        type: isCloud
          ? "cloud"
          : (["circle", "square", "triangle", "hex"][
              Math.floor(Math.random() * 4)
            ] as ShapeType),
        color: isCloud
          ? "rgba(96,165,250,0.12)" // Salesforce blue cloud
          : "rgba(129,140,248,0.10)", // subtle indigo
      };
    };

    shapesRef.current = Array.from({ length: SHAPE_COUNT }, randomShape);

    const drawCloud = (x: number, y: number, s: number) => {
      ctx.beginPath();
      ctx.arc(x, y, s * 0.25, Math.PI * 0.5, Math.PI * 1.5);
      ctx.arc(x + s * 0.25, y - s * 0.25, s * 0.3, Math.PI, Math.PI * 2);
      ctx.arc(x + s * 0.55, y - s * 0.15, s * 0.35, Math.PI, Math.PI * 2);
      ctx.arc(x + s * 0.75, y, s * 0.25, Math.PI * 1.5, Math.PI * 0.5);
      ctx.closePath();
      ctx.fill();
    };

    const drawShape = (s: Shape) => {
      ctx.fillStyle = s.color;
      ctx.beginPath();

      switch (s.type) {
        case "circle":
          ctx.arc(s.x, s.y, s.size / 2, 0, Math.PI * 2);
          break;

        case "square":
          ctx.rect(s.x, s.y, s.size, s.size);
          break;

        case "triangle":
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x + s.size, s.y);
          ctx.lineTo(s.x + s.size / 2, s.y - s.size);
          break;

        case "hex":
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 3) * i;
            const px = s.x + Math.cos(a) * (s.size / 2);
            const py = s.y + Math.sin(a) * (s.size / 2);
            if (i === 0) {
              ctx.moveTo(px, py);
            } else {
              ctx.lineTo(px, py);
            }
          }
          break;

        case "cloud":
          drawCloud(s.x, s.y, s.size);
          return;
      }

      ctx.closePath();
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapesRef.current.forEach((s) => {
        s.x += s.dx;
        s.y += s.dy;

        // ✅ edge collision bounce
        if (s.x < 0 || s.x + s.size > canvas.width) s.dx *= -1;
        if (s.y < 0 || s.y + s.size > canvas.height) s.dy *= -1;

        drawShape(s);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}