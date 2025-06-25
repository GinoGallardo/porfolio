import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import stackItems from "../../data/stack.json";
import { StackItemMe } from "./StackItemMe";
import { StackNavigation } from "./StackNavigation";
import { ProgressBar } from "./ProgressBar";

const intervalTime = 6000;

export default function StackItemByType() {
  const groupedByType = stackItems.reduce((acc, tech) => {
    if (!acc[tech.type]) acc[tech.type] = [];
    acc[tech.type].push(tech);
    return acc;
  }, {});

  const typeKeys = Object.keys(groupedByType);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

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

  return (
    <div
      className="w-full max-w-7xl mx-auto py-10 text-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className="text-3xl font-bold text-[#f97e3e] mb-6 tracking-widest font-[crimson]">
        {currentType}
      </h2>
      <div className="relative flex items-center justify-between w-full overflow-hidden px-2">
        <StackNavigation onPrev={handlePrev} onNext={handleNext} />
        <div className="flex-1 h-[300px] flex justify-center">
          <AnimatePresence mode="wait">
            <Motion.div
              key={currentType}
              initial={{ x: direction === 1 ? 200 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 1 ? -300 : 200, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full flex justify-center items-center gap-6 flex-wrap"
            >
              {currentItems.map((tech, index) => (
                <StackItemMe key={index} tech={tech} />
              ))}
            </Motion.div>
          </AnimatePresence>
        </div>
      </div>
      <ProgressBar intervalTime={intervalTime} currentIndex={currentIndex} />
    </div>
  );
}
