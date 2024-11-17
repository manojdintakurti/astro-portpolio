// src/components/effects/FloatingElement.tsx
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  intensity?: number;
}

export default function FloatingElement({ children, intensity = 20 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({ left: 0, top: 0, width: 0, height: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const translateX = useSpring(useTransform(mouseX, [0, bounds.width], [-intensity, intensity]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [0, bounds.height], [-intensity, intensity]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = bounds;
    const xPosition = (event.clientX - left) / width;
    const yPosition = (event.clientY - top) / height;
    
    mouseX.set(xPosition * width);
    mouseY.set(yPosition * height);
  };

  const handleMouseEnter = () => {
    if (ref.current) {
      const bounds = ref.current.getBoundingClientRect();
      setBounds(bounds);
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      style={{
        translateX,
        translateY,
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}