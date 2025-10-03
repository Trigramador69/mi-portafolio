import { motion } from "framer-motion";
import { stagger, childUp } from "../lib/motion";

type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  eachDelay?: number;
  delayChildren?: number;
};

export default function MotionList<T>({
  items,
  renderItem,
  className = "",
  eachDelay = 0.08,
  delayChildren = 0.1,
}: Props<T>) {
  return (
    <motion.div
      variants={stagger(eachDelay, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {items.map((item, i) => (
        <motion.div key={i} variants={childUp}>
          {renderItem(item, i)}
        </motion.div>
      ))}
    </motion.div>
  );
}
