import { Hero } from "../components/Hero";
import { projects } from "../lib/projects";
import { ProjectCard } from "../components/ProjectCard";

export default function Page() {
  return (
    <div className="space-y-8">
      <Hero />
      <section className="rounded-2xl border border-gray-200 p-6 dark:border-gray-900">
        <h2 className="text-xl font-semibold">Featured Projects</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
      <section className="rounded-2xl border border-gray-200 p-6 dark:border-gray-900">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400 md:grid-cols-4">
          <li>React</li>
          <li>Angular</li>
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>Jest / Testing Library</li>
          <li>Storybook</li>
        </ul>
      </section>
    </div>
  );
}

