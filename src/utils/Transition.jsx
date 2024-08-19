/* eslint-disable react/display-name */
import { motion, AnimatePresence } from 'framer-motion';

// Define the transition props for slide-in and slide-out animations
const slideInTransition = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
  exit: { scaleY: 0 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

const slideOutTransition = {
  initial: { scaleY: 1 },
  animate: { scaleY: 0 },
  exit: { scaleY: 0 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

// Higher-order component for animating components
const transition = (OGComponent) => {
  // Return a new component that renders OGComponent with animations
  return ({ ...props }) => (
    <AnimatePresence>
      <motion.div
        className="slide-in"
        {...slideInTransition}
      >
        <OGComponent {...props} />
      </motion.div>
      <motion.div
        className="slide-out"
        {...slideOutTransition}
      >
        <OGComponent {...props} />
      </motion.div>
    </AnimatePresence>
  );
};

export default transition;
