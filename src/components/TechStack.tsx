import { motion } from "framer-motion";

const tech = [
  "React", "TypeScript", "Tailwind", "Vite",
  "Spring Boot", "Node", "MySQL",
  "Firebase", "Android/Kotlin", "Git/GitHub",
  "Docker (basic)", "Web3 (basic)"
];

export default function TechStack() {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <motion.span
          key={t}
          className="chip"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03 }}
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}
