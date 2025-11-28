import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-start gap-6 rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-900 dark:bg-gray-950">
      <span className="inline-flex items-center rounded-full border border-brand-200 px-3 py-1 text-xs text-brand-700 dark:border-brand-800 dark:text-brand-300">
        3+ years ? Frontend Developer
      </span>
      <h1 className="text-3xl font-bold md:text-5xl">
        Building modern web apps with{" "}
        <span className="text-gradient">React</span> &{" "}
        <span className="text-gradient">Angular</span>.
      </h1>
      <p className="max-w-2xl text-base text-gray-600 dark:text-gray-400">
        I craft fast, accessible, and engaging user experiences. I love design
        systems, performance, and clean code. Based in remote-friendly locations.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}

