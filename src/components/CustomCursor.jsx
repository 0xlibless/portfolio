import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) {
      return undefined;
    }

    const setDotPosition = (x, y) => {
      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    const setRingPosition = (x, y) => {
      if (cursorRing.current) {
        cursorRing.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    const showCursor = () => {
      if (cursorDot.current) {
        cursorDot.current.style.opacity = '1';
      }
      if (cursorRing.current) {
        cursorRing.current.style.opacity = '1';
      }
    };

    const hideCursor = () => {
      if (cursorDot.current) {
        cursorDot.current.style.opacity = '0';
      }
      if (cursorRing.current) {
        cursorRing.current.style.opacity = '0';
      }
    };

    const moveCursor = (event) => {
      showCursor();

      setDotPosition(event.clientX, event.clientY);
      setRingPosition(event.clientX, event.clientY);
    };

    window.addEventListener('pointermove', moveCursor, { passive: true });
    window.addEventListener('pointerleave', hideCursor);

    return () => {
      window.removeEventListener('pointermove', moveCursor);
      window.removeEventListener('pointerleave', hideCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorDot} className="cursor-dot" />
      <div ref={cursorRing} className="cursor-ring" />
    </>
  );
}