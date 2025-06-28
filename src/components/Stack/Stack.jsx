import StackItem from "./StackItem";
import { useRef } from "react";
import {
  motion as Motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 0], [0, 0], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax w-full">
      <Motion.div
        className="scroller text-white font-bold text-3xl md:text-6xl lg:text-[5em]"
        style={{ x }}
      >
        <span>{children}</span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </Motion.div>
    </div>
  );
}

const Stack = () => {
  return (
    <section
      id="stack"
      className="stack-glow bg-black opacity-90 max-w-7xl  mx-4 flex flex-col items-center justify-center rounded-2xl lg:mt-30 lg:mx-auto"
    >
      <ParallaxText baseVelocity={-5}>
        <h2 className="text-white mb-8">Stack </h2>
      </ParallaxText>
      <StackItem />
      <ParallaxText baseVelocity={5}>
        <h2 className="text-white mb-8">Stack </h2>
      </ParallaxText>
    </section>
  );
};

export default Stack;
