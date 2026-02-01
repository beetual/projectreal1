import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import Confetti from "./Confetti";
import NoButton from "./NoButton";

export default function ValentineLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [answered, setAnswered] = useState<"yes" | "running" | null>(null);

  return (
    <div className="flex justify-center relative z-10">
      <div className="w-full max-w-md mx-4">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer perspective-1000"
              onClick={() => setIsOpen(true)}
            >
              {/* Envelope - paper letter look */}
              <motion.div
                className="relative w-full max-w-sm mx-auto"
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.99 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Letter paper (closed/folded) */}
                <div className="bg-[#fef9f3] border-2 border-amber-200/80 rounded-sm shadow-xl shadow-amber-900/10 p-8 pt-16 pb-10 relative overflow-visible min-h-[200px]">
                  {/* Envelope flap - triangular fold at top */}
                  <div
                    className="absolute left-0 right-0 top-0 h-0 overflow-visible"
                    style={{ transformOrigin: "top center" }}
                  >
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[min(160px,45vw)] border-l-transparent border-r-[min(160px,45vw)] border-r-transparent border-t-[50px] border-t-amber-100"
                      style={{
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
                      }}
                    />
                  </div>

                  {/* Wax seal - overlapping the flap */}
                  <motion.div
                    className="absolute top-6 left-1/2 -translate-x-1/2 z-20"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <div className="w-14 h-14 rounded-full bg-rose-700/90 flex items-center justify-center shadow-lg shadow-rose-900/30 border-2 border-rose-800/30">
                      <Heart className="w-7 h-7 text-white fill-white" />
                    </div>
                  </motion.div>

                  {/* Addresses */}
                  <div className="space-y-6 mt-8">
                    <div className="text-left text-amber-800/90 font-serif text-sm">
                      <p className="text-amber-500/80 text-xs uppercase tracking-wider mb-1">To</p>
                      <p className="font-medium">Sukriti</p>
                      <p className="text-amber-700/80">London</p>
                    </div>
                    <div className="text-right text-amber-800/90 font-serif text-sm">
                      <p className="text-amber-500/80 text-xs uppercase tracking-wider mb-1">From</p>
                      <p className="font-medium">Prem</p>
                      <p className="text-amber-700/80">Pune</p>
                    </div>
                  </div>

                  {/* "Open me" text */}
                  <div className="text-center mt-6">
                    <p className="text-amber-600/80 text-sm font-serif italic animate-pulse">
                      Click to open 💕
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              {/* Opened letter - paper with "unfolded" feel */}
              <motion.div
                initial={{ clipPath: "inset(50% 0 50% 0)" }}
                animate={{ clipPath: "inset(0 0 0 0)" }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="bg-[#fefdfb] backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-2xl border-2 border-amber-100/80 relative overflow-hidden"
              >
                {/* Decorative top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
                <Heart className="w-12 h-12 text-rose-500 fill-rose-500 mx-auto mb-6 animate-pulse" />
                <h3 className="text-3xl md:text-4xl font-serif text-rose-800 mb-8 text-center">
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
                    className="text-xl text-rose-600 font-serif mt-4 text-center"
                  >
                    Hehe, there&apos;s no escape! Just say yes! 😘
                  </motion.p>
                )}

                {answered === "yes" && (
                  <>
                    <Confetti />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <p className="text-2xl text-rose-700 font-serif">
                        I knew you&apos;d say yes! 🥰
                      </p>
                      <p className="text-xl text-rose-600 mt-4">
                        You&apos;ve made me the happiest person in the world!
                      </p>
                      <div className="mt-6 flex justify-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                              duration: 0.5,
                              delay: i * 0.1,
                              repeat: Infinity,
                            }}
                          >
                            <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
