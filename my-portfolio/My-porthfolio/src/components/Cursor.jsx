import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Don't render custom cursor on mobile/touch devices
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    if (isMobile) return;

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px';
        dotRef.current.style.top = mouseY + 'px';
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px';
        ringRef.current.style.top = ringY + 'px';
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move, { passive: true });
    animate();

    const hoverElements = document.querySelectorAll(
      "a, button, .hoverable"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        ringRef.current?.classList.add("expand");
      });

      el.addEventListener("mouseleave", () => {
        ringRef.current?.classList.remove("expand");
      });
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* SMALL DOT */}
      <div
        ref={dotRef}
        className="
          fixed
          top-0
          left-0
          z-[9999]
          w-2.5
          h-2.5
          rounded-full
          bg-violet-400
          pointer-events-none
          -translate-x-1/2
          -translate-y-1/2
          shadow-[0_0_18px_rgba(139,92,246,0.9)]
          mix-blend-screen
        "
      />

      {/* OUTER RING */}
      <div
        ref={ringRef}
        className="
          cursor-ring
          fixed
          top-0
          left-0
          z-[9998]
          w-10
          h-10
          rounded-full
          border
          border-violet-400/40
          bg-violet-500/5
          backdrop-blur-sm
          pointer-events-none
          -translate-x-1/2
          -translate-y-1/2
          transition-all
          duration-300
          ease-out
          shadow-[0_0_40px_rgba(139,92,246,0.25)]
        "
      />

      {/* STYLE */}
      <style>
        {`
          .cursor-ring.expand {
            width: 72px;
            height: 72px;

            border-color: rgba(139,92,246,0.8);

            background: rgba(139,92,246,0.12);

            box-shadow:
              0 0 60px rgba(139,92,246,0.45),
              0 0 120px rgba(59,130,246,0.25);
          }

          @media (max-width: 768px) {
            .cursor-ring,
            .cursor-dot {
              display: none;
            }
          }

          body {
            cursor: none;
          }

          a,
          button,
          .hoverable {
            cursor: none;
          }
        `}
      </style>
    </>
  );
}