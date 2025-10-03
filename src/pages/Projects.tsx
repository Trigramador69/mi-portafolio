import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import MotionList from "../components/MotionList";

export default function Projects() {
  return (
    <section className="container-clip">
      <SectionHeader
        title="Projects"
        subtitle="Some things I’ve built."
      />

      <MotionList
        items={projects}
        className="grid gap-6 sm:grid-cols-2"
        renderItem={(p) => <ProjectCard key={p.id} {...p} />}
      />
    </section>
  );
}
