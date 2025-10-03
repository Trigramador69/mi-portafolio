import { motion } from "framer-motion";
import IconPill from "./IconPill";
import type { Item } from "../data/profile";

export default function IconGrid({ items }: { items: Item[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03 }}
        >
          <IconPill icon={it.icon} label={it.label} />
        </motion.div>
      ))}
    </div>
  );
}
