// src/components/effects/ParallaxSection.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  offset?: number;
}

export default function ParallaxSection({ children, offset = 50 }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}