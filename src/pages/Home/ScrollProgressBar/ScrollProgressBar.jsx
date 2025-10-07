import { motion, useScroll } from "motion/react";
import React from "react";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
      }}
      className="fixed top-0 left-0 z-[100] bg-secondary w-full h-2"
    ></motion.div>
  );
};

export default ScrollProgressBar;
