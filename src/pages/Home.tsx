import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <div className="container-clip space-y-12">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="card text-center px-6 py-10"
      >
        <h1 className="text-4xl font-bold">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Diego Trigo
          </span>
        </h1>
        <p className="mt-3 text-neutral-300">
          Systems Engineer — Full-Stack. I work with React, Spring Boot,
          Android/Kotlin and Web3/AI. I build reliable products with clean
          architectures and quality practices.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <a className="btn-outline" href="/projects">
            View projects
          </a>
          <a
            className="btn-primary"
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </motion.section>

      {/* Tech stack */}
      <section>
        <SectionHeader
          title="Tech I use"
          subtitle="Tools I feel productive with."
          center
        />
        <TechStack />
      </section>
    </div>
  );
}
