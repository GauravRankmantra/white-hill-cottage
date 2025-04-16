// components/AnimatedOnScroll.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedOnScroll = ({ children, delay = 0, duration = 0.6, y = 40 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
