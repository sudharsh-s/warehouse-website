import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageBannerSlider({
  slides = [],
  height = "min-h-[500px]",
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[current];

  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>

      {/* ACTIVE SLIDE ONLY */}
      {slides.map((slide, index) => {

        const isActive = index === current;

        return (
          <motion.div
            key={index}
            animate={{
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1.15 : 1,
              zIndex: isActive ? 2 : 1,
            }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 4, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            {slide.type === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={slide.src}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        );

      })}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* TEXT CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        <AnimatePresence mode="wait">
          <motion.div
            key={current + "-text"}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >

            {slide.badge && (
              <div className="inline-block px-4 py-2 mb-4 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-semibold backdrop-blur">
                {slide.badge}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {slide.title}

              {slide.highlight && (
                <span className="block text-primary">
                  {slide.highlight}
                </span>
              )}
            </h1>

            {slide.subtitle && (
              <p className="text-white/80 text-lg">
                {slide.subtitle}
              </p>
            )}

          </motion.div>
        </AnimatePresence>

      </div>

    </section>
  );
}