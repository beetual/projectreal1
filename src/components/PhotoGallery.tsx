import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PhotoImage = {
  id: number;
  src: string;
  label: string;
};

type PhotoEmoji = {
  id: number;
  emoji: string;
  label: string;
  gradient: string;
};

type Photo = PhotoImage | PhotoEmoji;

const PHOTOS: Photo[] = [
  { id: 1, src: "/photos/christmas.png", label: "Christmas together" },
  { id: 2, src: "/photos/subway.png", label: "Subway selfie" },
  { id: 3, src: "/photos/mirror.png", label: "Our embrace" },
  { id: 4, src: "/photos/umbrella.png", label: "Rainy night" },
  { id: 5, src: "/photos/videocall.png", label: "Video call" },
];

export default function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-serif text-rose-800 text-center mb-8">
        Our Journey Together
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`aspect-square rounded-2xl flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow overflow-hidden ${
              "src" in photo ? "" : `bg-gradient-to-br ${photo.gradient}`
            }`}
            onClick={() => setSelected(photo.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {"src" in photo ? (
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-5xl">{photo.emoji}</span>
            )}
          </motion.div>
        ))}
      </div>
      <p className="text-center text-rose-500 text-sm mt-4">
        Click any photo to view full size
      </p>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-md w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-rose-300 to-pink-400"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {(() => {
                const photo = PHOTOS.find((p) => p.id === selected);
                if (!photo) return null;
                return "src" in photo ? (
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-8xl">{photo.emoji}</span>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
