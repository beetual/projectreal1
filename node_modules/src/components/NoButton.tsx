import { useState } from "react";
import { motion } from "framer-motion";

const defaultTexts = [
  "No",
  "That's crazy!",
  "Just say yes! 😤",
  "Why not?? 🥺",
  "Click YES already!",
  "I'm running! 🏃‍♀️",
  "You can't catch me!",
  "Pretty please? 🙏",
  "C'mon! 💕",
  "Yes is right there →",
];

export default function NoButton({
  onRunning,
  noButtonTexts = defaultTexts,
}: {
  onRunning: () => void;
  noButtonTexts?: string[];
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);

  const runAway = () => {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 100;
    setPosition({ x, y });
    setTextIndex((prev) => (prev + 1) % noButtonTexts.length);
    onRunning();
  };

  return (
    <motion.button
      animate={{ x: position.x, y: position.y }}
      onMouseEnter={runAway}
      onTouchStart={runAway}
      className="px-12 py-4 bg-gray-200 text-gray-600 text-xl font-semibold rounded-full shadow-lg whitespace-nowrap"
    >
      {noButtonTexts[textIndex]}
    </motion.button>
  );
}
