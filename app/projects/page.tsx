import { projects } from "../../lib/projects";
import { ProjectCard } from "../../components/ProjectCard";

export const metadata = {
  title: "Projects | React & Angular"
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Selected work across React and Angular ecosystems.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}

