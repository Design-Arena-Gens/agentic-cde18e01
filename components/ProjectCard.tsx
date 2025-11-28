import { Badge } from "./Badge";
import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  tech: ("React" | "Angular" | "TypeScript" | "Node" | "Tailwind")[];
  year: string;
  href?: string;
  repo?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-900 dark:bg-gray-950">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span className="text-xs text-gray-500">{project.year}</span>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t} variant={t === "React" ? "react" : t === "Angular" ? "angular" : "default"}>
            {t}
          </Badge>
        ))}
      </div>
      {(project.href || project.repo) && (
        <div className="mt-4 flex gap-3 text-sm">
          {project.href && (
            <Link
              href={project.href}
              className="text-brand-700 hover:underline dark:text-brand-400"
            >
              Live
            </Link>
          )}
          {project.repo && (
            <Link
              href={project.repo}
              className="text-gray-600 hover:underline dark:text-gray-400"
            >
              Code
            </Link>
          )}
        </div>
      )}
    </article>
  );
}

