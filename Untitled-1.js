import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import LoveLetter from "@/components/LoveLetter";
import PhotoGallery from "@/components/PhotoGallery";
import FloatingHearts from "@/components/FloatingHearts";

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const [answered, setAnswered] = useState<"yes" | "running" | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100 overflow-hidden relative">
      <FloatingHearts />
      
      {/* Entrance Animation */}
      <AnimatePresence>
        {!showContent && (
          <motion.div
            className="fixed inset-0 bg-rose-200 flex items-center justify-center z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-24 h-24 text-rose-500 fill-rose-500" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-amber-400" />
              <h1 className="text-4xl md:text-6xl font-serif text-rose-800 tracking-wide">
                For My Dearest
              </h1>
              <Sparkles className="w-8 h-8 text-amber-400" />
            </div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-5xl md:text-7xl font-serif italic text-rose-600 mt-4"
            >
              Sukriti
            </motion.h2>
          </motion.div>

          {/* Love Letter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <LoveLetter />
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-16"
          >
            <PhotoGallery />
          </motion.div>

          {/* The Big Question */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto border border-rose-200">
              <Heart className="w-16 h-16 text-rose-500 fill-rose-500 mx-auto mb-6 animate-pulse" />
              <h3 className="text-3xl md:text-4xl font-serif text-rose-800 mb-8">
                Will you be my Valentine?
              </h3>
              
              {answered !== "yes" && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center min-h-[60px]">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAnswered("yes")}
                    className="px-12 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Yes! 💕
                  </motion.button>
                  <NoButton onRunning={() => setAnswered("running")} />
                </div>
              )}

              {answered === "running" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xl text-rose-600 font-serif mt-4"
                >
                  Hehe, there's no escape! Just say yes! 😘
                </motion.p>
              )}
              
              {answered === "yes" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <p className="text-2xl text-rose-700 font-serif">
                    I knew you'd say yes! 🥰
                  </p>
                  <p className="text-xl text-rose-600 mt-4">
                    You've made me the happiest person in the world!
                  </p>
                  <div className="mt-6 flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity }}
                      >
                        <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="text-center mt-16 pb-8"
          >
            <p className="text-rose-400 font-serif">
              Made with 💕 just for you
            </p>
          </motion.footer>
        </div>
      )}
    </div>
  );
};

// Fun "No" button that runs away with changing text
const noButtonTexts = [
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

const NoButton = ({ onRunning }: { onRunning: () => void }) => {
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
};

export default Index;
