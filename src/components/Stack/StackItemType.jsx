import { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import stackItems from "../../data/stack.json";

const intervalTime = 6000;

function StackItemCarousel() {
  const groupedByType = stackItems.reduce((acc, tech) => {
    if (!acc[tech.type]) acc[tech.type] = [];
    acc[tech.type].push(tech);
    return acc;
  }, {});

  const typeKeys = Object.keys(groupedByType);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef();

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % typeKeys.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? typeKeys.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % typeKeys.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPaused, typeKeys.length]);

  const currentType = typeKeys[currentIndex];
  const currentItems = groupedByType[currentType];

  // Reset animation for progress bar
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.classList.remove("animate-progress");
      void progressRef.current.offsetWidth; // trigger reflow
      progressRef.current.classList.add("animate-progress");
    }
  }, [currentIndex]);

  return (
    <div
      className="relative w-full max-w-7xl mx-auto py-10 text-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className="text-3xl font-bold text-[#f97e3e] mb-6 tracking-widest font-[crimson]">
        {currentType}
      </h2>

      <div className="relative h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentType}
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full flex justify-center gap-6 flex-wrap"
          >
            {currentItems.map((tech, index) => (
              <div
                key={index}
                className="relative group flex flex-col items-center"
              >
                <span
                  className="absolute w-[100px] -top-8 text-sm opacity-0 group-hover:opacity-100 transition duration-300 text-center font-[mada]"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
                <div className="w-[70px] lg:w-[100px] h-[70px] lg:h-[100px] flex items-center justify-center">
                  <Icon
                    icon={tech.icon}
                    width="100%"
                    height="100%"
                    className="transition duration-300 group-hover:scale-110 object-contain"
                    color={tech.color}
                    style={{
                      filter: `drop-shadow(0 0 0px transparent)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = `drop-shadow(0 0 12px ${tech.color})`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = `drop-shadow(0 0 0px transparent)`;
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="w-full flex items-center justify-center ">
        <div className="h-1 w-6/12 bg-white/20 mb-4">
        <div
          ref={progressRef}
          className="h-full animate-progress origin-left stack-glow rounded-full"
          style={{ animationDuration: `${intervalTime}ms` }}
        />
      </div>
      </div>
      {/* Flechas */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 left-4 text-[#f97e3e] bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/40 transition"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 right-4 text-[#f97e3e] bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/40 transition"
      >
        ›
      </button>
    </div>
  );
}

export default StackItemCarousel;
