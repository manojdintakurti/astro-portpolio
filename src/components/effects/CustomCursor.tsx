// src/components/effects/CustomCursor.tsx
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const updatePointerType = () => {
      const hoveredElement = document.querySelector(':hover');
      setIsPointer(
        hoveredElement?.tagName === 'A' || 
        hoveredElement?.tagName === 'BUTTON' ||
        getComputedStyle(hoveredElement as Element).cursor === 'pointer'
      );
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', updatePointerType);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', updatePointerType);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <motion.div
        className="h-4 w-4 rounded-full border-2 border-current text-gray-800 dark:text-white"
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  );
}