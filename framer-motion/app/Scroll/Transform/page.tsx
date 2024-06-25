"use client";
import {
    motion,
    useScroll,
    useTransform,
    type MotionValue,
} from "framer-motion";

const ScrollTransform = () => {
  const { scrollYProgress } = useScroll();
  return (
    <main className="h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
};

const Section1 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  // map scrollYProgress from inputRange to outputRange ,
  // y = 0 => scale = 1
  // y = 0.5 => scale = 0.9
  // y = 1 => scale = 0.8
  // lessen the section1 with scroll down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    // Motion components are DOM primitives optimised for 60fps animation and gestures.
    <motion.div
      style={{ scale }}
      // why add sticky here?
      // sticky section1 will keep in eyes when scroll down , when transform added to section1/2 , latter section will show over the first section. ref: https://juejin.cn/post/7258483700815527996
      // it makes a overlap effect only when scroll down
      className="top-0 sticky h-screen bg-red-500 flex justify-center items-center"
    >
      <h1 className="text-[3.5vw]">Section 1</h1>
    </motion.div>
  );
};
const Section2 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  // y = 0 => scale = 0.8
  // y = 0.5 => scale = 0.9
  // y = 1 => scale = 1
  // magnify the section2 with scroll down
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      style={{ scale }}
      // why add relative here?
      // when scroll over , transform scale will be one , yet framer-motion will set transform to null becuase transform do nothing in this time.
      // in this way , the section2 will not overlap with section1,because section2 over section1 only when both are transformed element
      // to make section2 over section1, we set section2 to relative.
      // relative layout weight equal to layout sticky, and both z-index equal 0, like transform rules, the latter element show over the former.
      className="relative h-screen bg-blue-500 flex justify-center items-center"
    >
      <h1 className="text-[3.5vw]">Section 2</h1>
    </motion.div>
  );
};

export default ScrollTransform;
