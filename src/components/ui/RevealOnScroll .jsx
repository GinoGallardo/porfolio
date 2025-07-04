import { motion as Motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RevealOnScroll({ children, delay = 0, direction = "left" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.1,
    margin: "0px 0px -100px 0px",
  });

  let initial = { opacity: 0 };
  if (direction === "left") initial.x = -50;
  else if (direction === "right") initial.x = 50;
  else if (direction === "top") initial.y = -50;
  else if (direction === "bottom") initial.y = 50;

  return (
    <Motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </Motion.div>
  );
}
