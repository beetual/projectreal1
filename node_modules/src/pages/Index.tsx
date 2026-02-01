import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, ChevronLeft } from "lucide-react";
import LoveLetter from "@/components/LoveLetter";
import PhotoGallery from "@/components/PhotoGallery";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineLetter from "@/components/ValentineLetter";

const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 60 : -60,
    opacity: 0,
  }),
};

export default function Index() {
  const [showContent, setShowContent] = useState(false);
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const goToPage = (nextPage: number) => {
    setDirection(nextPage > page ? 1 : -1);
    setPage(nextPage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-100 via-purple-100 to-violet-200 overflow-hidden relative">
      <FloatingHearts />

      <AnimatePresence>
        {!showContent && (
          <motion.div
            className="fixed inset-0 bg-violet-300 flex items-center justify-center z-50"
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
        <div className="min-h-screen flex flex-col">
          {/* Page content */}
          <div className="flex-1 flex flex-col items-center justify-center py-8 md:py-16 px-4 min-h-0 overflow-y-auto">
            <AnimatePresence mode="wait" custom={direction}>
              {page === 1 && (
                <motion.div
                  key="page1"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-2xl"
                >
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <Sparkles className="w-8 h-8 text-amber-400" />
                      <h1 className="text-4xl md:text-6xl font-serif text-rose-800 tracking-wide">
                        For My Dearest
                      </h1>
                      <Sparkles className="w-8 h-8 text-amber-400" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif italic text-rose-600 mt-4">
                      Sukriti
                    </h2>
                  </div>
                  <LoveLetter />
                </motion.div>
              )}

              {page === 2 && (
                <motion.div
                  key="page2"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-4xl"
                >
                  <PhotoGallery />
                </motion.div>
              )}

              {page === 3 && (
                <motion.div
                  key="page3"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <ValentineLetter />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between px-4 py-6 md:px-8">
            {/* Back button - subtle */}
            <motion.button
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              className={`flex items-center gap-1 font-serif text-rose-600/80 text-sm ${
                page === 1 ? "opacity-0 pointer-events-none" : "hover:text-rose-700"
              }`}
              whileHover={page > 1 ? { x: -3 } : {}}
              whileTap={page > 1 ? { scale: 0.98 } : {}}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </motion.button>

            {/* Page dots */}
            <div className="flex gap-2">
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    p === page
                      ? "bg-rose-500 scale-125"
                      : "bg-rose-300/50 hover:bg-rose-300"
                  }`}
                  aria-label={`Go to page ${p}`}
                />
              ))}
            </div>

            {/* Next button - prominent */}
            {page < 3 ? (
              <motion.button
                onClick={() => goToPage(page + 1)}
                className="relative group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full shadow-lg shadow-rose-300/50 group-hover:shadow-xl group-hover:shadow-rose-400/50 transition-shadow">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-white text-lg">
                      {page === 1 ? "See Our Memories" : "Continue"}
                    </span>
                    <Heart className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
                {/* Subtle glow pulse */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-rose-400/30 -z-10"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            ) : (
              <div className="w-[180px]" /> /* Spacer for alignment */
            )}
          </div>

          {/* Footer */}
          <footer className="text-center py-4 pb-6">
            <p className="text-rose-400 font-serif text-sm">Made with 💕 just for you</p>
          </footer>
        </div>
      )}
    </div>
  );
}
