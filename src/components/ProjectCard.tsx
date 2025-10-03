import MotionCard from "./MotionCard";
import type { Project } from "../data/projects";

export default function ProjectCard({ title, summary, tech, demoUrl, repoUrl, thumbnail }: Project) {
  return (
    <MotionCard hover="glow">
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="w-full max-h-40 object-contain bg-neutral-900"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/placeholder.jpg";
          }}
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-neutral-300">{summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
        <div className="mt-4 flex gap-4">
          {demoUrl && <a className="link-ux text-sm" href={demoUrl} target="_blank">Demo</a>}
          {repoUrl && <a className="link-ux text-sm" href={repoUrl} target="_blank">Repo</a>}
        </div>
      </div>
    </MotionCard>
  );
}
