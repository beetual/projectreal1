import { useState } from "react";
import { motion } from "framer-motion";

const COLORS = ["#e11d48", "#f472b6", "#fecdd3", "#fff"];

export default function Confetti() {
  const [pieces] = useState(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
      color: COLORS[i % COLORS.length],
      size: 8 + Math.random() * 6,
      rotation: Math.random() * 720 - 360,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-sm"
          style={{
            left: `${p.left}%`,
            top: -20,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          initial={{ y: 0, rotate: 0, opacity: 1 }}
          animate={{
            y: "100vh",
            rotate: p.rotation,
            opacity: 0,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
}
