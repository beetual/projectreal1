import { motion } from "framer-motion";

export default function LoveLetter() {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto border border-rose-200"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-rose-800 font-serif space-y-6 text-lg md:text-xl leading-relaxed">
        <p>
          My dearest Sukriti,
        </p>
        <p>
          From the moment you came into my life, everything has felt a little brighter. 
          Your smile lights up my darkest days, and your laughter is my favorite sound.
        </p>
        <p>
          You've shown me what it means to truly care for someone—the little things you do, 
          the way you listen, the way you understand me even when I can't find the words.
        </p>
        <p>
          So here I am, wearing my heart on my sleeve, asking you the most important question...
        </p>
        <p className="text-rose-600 italic pt-4">
          Will you make me the luckiest person and be my Valentine?
        </p>
        <p className="text-right pt-8 text-rose-700">
          With all my love, forever and always 💕
        </p>
      </div>
    </motion.div>
  );
}
