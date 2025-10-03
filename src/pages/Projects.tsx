import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

export default function Projects() {
  // Tech únicas para los chips de filtro
  const allTech = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tech))),
    []
  );

  const [active, setActive] = useState<string | "All">("All");

  // Lista filtrada según chip activo
  const list = active === "All" ? projects : projects.filter((p) => p.tech.includes(active));

  return (
    <section className="container-clip space-y-4">
      <SectionHeader
        title="Projects"
        subtitle="Filter by stack you care about."
      />

      {/* Chips de filtro */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActive("All")}
          className={`chip ${active === "All" ? "border-purple-500 text-purple-300" : ""}`}
        >
          All
        </button>
        {allTech.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`chip ${active === t ? "border-purple-500 text-purple-300" : ""}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid de proyectos con animación */}
      <div className="grid gap-6 sm:grid-cols-2 pt-2">
        {list.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.05 }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
