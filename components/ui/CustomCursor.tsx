"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const squareRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const squarePos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    }

    function update() {
      // lerp the square towards the mouse
      const lerp = (start: number, end: number, amt: number) => start + (end - start) * amt;
      squarePos.current.x = lerp(squarePos.current.x, mouse.current.x, 0.12);
      squarePos.current.y = lerp(squarePos.current.y, mouse.current.y, 0.12);

      if (squareRef.current) {
        squareRef.current.style.transform = `translate3d(${squarePos.current.x}px, ${squarePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(update);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // initial styles rely on CSS in JS here for isolation
  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 8,
          height: 8,
          background: "white",
          borderRadius: "0%",
          transform: "translate3d(0px, 0px, 0) translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />

      <div
        ref={squareRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 50,
          height: 50,
          opacity:"50%",
          border: "2px solid rgba(255,255,255,0.85)",
          background: "transparent",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate3d(0px, 0px, 0) translate(-50%, -50%)",
          boxSizing: "border-box",
          willChange: "transform",
        }}
      />
    </>
  );
}
