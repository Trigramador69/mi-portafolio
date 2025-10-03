import { motion, type Variants } from "framer-motion";
import { fadeUp, onceViewport, hoverGlow, hoverLift } from "../lib/motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;      // entrada (por defecto fadeUp)
  hover?: "lift" | "glow" | false; // efecto hover
  as?: "article" | "div" | "section";
};

export default function MotionCard({
  children,
  className = "",
  variants = fadeUp,
  hover = "glow",
  as = "article",
}: Props) {
  const Comp = as === "div" ? motion.div
            : as === "section" ? motion.section
            : motion.article;

  return (
    <Comp
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={onceViewport}
      whileHover={hover === "glow" ? hoverGlow : hover === "lift" ? { y: -5, scale: 1.02 } : undefined}
      className={`card overflow-hidden transition ${className}`}
    >
      {children}
    </Comp>
  );
}
