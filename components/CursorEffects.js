import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorEffects() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 20, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHoverStart = () => setCursorVariant("hover");
    const handleHoverEnd = () => setCursorVariant("default");

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      variants={{
        default: {
          scale: 1,
          backgroundColor: '#3B82F6',
          mixBlendMode: 'normal',
        },
        hover: {
          scale: 1.5,
          backgroundColor: '#9333EA',
          mixBlendMode: 'difference',
        }
      }}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 500 }}
    >
      <div className="absolute inset-0 rounded-full border-2 border-white/30" />
    </motion.div>
  );
}