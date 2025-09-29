import { motion } from "framer-motion";

export default function Badge({ caption }) {
  return (
    // make the tabs pop on change
    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{duration: 0.3}} 
    className="badge">
      {caption}
    </motion.span>
  );
}
