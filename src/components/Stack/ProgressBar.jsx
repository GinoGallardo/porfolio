import { useRef, useEffect } from "react";

export function ProgressBar({ intervalTime, currentIndex }) {
  const progressRef = useRef();

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.classList.remove("animate-progress");
      void progressRef.current.offsetWidth;
      progressRef.current.classList.add("animate-progress");
    }
  }, [currentIndex]);

  return (
    <div className="w-full flex items-center justify-center mt-6">
      <div className="h-1 w-6/12 bg-white/20 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-[#f97e3e] animate-progress rounded-full"
          style={{ animationDuration: `${intervalTime}ms` }}
        />
      </div>
    </div>
  );
}
