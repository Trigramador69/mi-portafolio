import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import SectionHeader from "../components/SectionHeader";
import IconGrid from "../components/IconGrid";
import { roles, techs, tools } from "../data/profile";

export default function Home() {
  return (
    <>
      <div className="bg-blobs" />

      <div className="container-clip space-y-12">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="card text-center px-6 py-10 glow"
        >
          <h1 className="text-4xl font-bold">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Diego Trigo
            </span>
          </h1>

          {/* Typewriter */}
          <h2 className="mt-2 text-xl font-medium text-purple-300">
            <Typewriter
                words={roles.map(r => r.label)}
                loop={0}           // infinito
                cursor
                cursorStyle="|"    // solo este, sin cursorClassName
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
            />
           </h2>

          <p className="mt-4 text-neutral-300">
            Systems Engineer — Full-Stack. I work with React, Spring Boot,
            Android/Kotlin and Web3/AI. I build reliable products with clean
            architectures and quality practices.
          </p>

          <div className="mt-5 flex justify-center gap-3">
            <a className="btn-outline" href="/projects">View projects</a>
            <a className="btn-primary" href="/cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </div>
        </motion.section>

        {/* Roles */}
        <section>
          <SectionHeader title="Who I am" subtitle="What I do and how I can help." />
          <IconGrid items={roles} />
        </section>

        {/* Tech */}
        <section>
          <SectionHeader title="Tech I use" subtitle="Languages, frameworks and databases." />
          <IconGrid items={techs} />
        </section>

        {/* Tools */}
        <section>
          <SectionHeader title="Tools" subtitle="Daily drivers." />
          <IconGrid items={tools} />
        </section>
      </div>
    </>
  );
}
