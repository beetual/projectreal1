import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const HEART_COUNT = 12;
const HEARTS = Array.from({ length: HEART_COUNT }, (_, i) => ({
  id: i,
  left: `${10 + (i * 8) % 80}%`,
  delay: i * 2.5,
  duration: 12 + Math.random() * 8,
  size: 16 + Math.random() * 12,
}));

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {HEARTS.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose-300/40"
          style={{
            left: heart.left,
            bottom: -30,
            width: heart.size,
            height: heart.size,
          }}
          animate={{
            y: [-30, -1200],
            rotate: [0, 360],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <Heart className="w-full h-full fill-current" />
        </motion.div>
      ))}
    </div>
  );
}
