"use client";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { useState } from "react";

const flip: AnimationProps["variants"] = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: {
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    opacity: 0,
    rotateX: 90,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const Perspective = () => {
  const [active, setActive] = useState(false);
  const [perspectiveOrigin, setPerspectiveOrigin] = useState("left");
  const [perspectiveValue, setPerspectiveValue] = useState("120px");

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <div className="flex gap-5">
        perspective-origin:
        {["left", "center", "right", "bottom"].map((origin) => (
          <button
            className={perspectiveOrigin === origin ? "font-bold" : ""}
            key={origin}
            onClick={() => setPerspectiveOrigin(origin)}
          >
            {origin}
          </button>
        ))}
      </div>
      <div className="flex gap-5">
        perspective value:
        {["20px", "120px", "400px", "800px"].map((value) => (
          <button
            className={perspectiveValue === value ? "font-bold" : ""}
            key={value}
            onClick={() => setPerspectiveValue(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <button onClick={() => setActive(!active)}>toggle</button>
      <AnimatePresence>
        {active && (
          <div
            className="absolute top-[10vh]"
            style={{ perspective: perspectiveValue, perspectiveOrigin }}
          >
            {" "}
            <motion.div
              variants={flip}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              <h1 className="text-[3.5vw]">Perspective</h1>
            </motion.div>{" "}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Perspective;
