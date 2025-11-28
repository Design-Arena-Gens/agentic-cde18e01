export const metadata = {
  title: "About | Frontend Developer"
};

export default function AboutPage() {
  return (
    <div className="prose prose-gray dark:prose-invert">
      <h1>About</h1>
      <p>
        I'm a frontend developer with 3+ years of experience building web applications with React and Angular.
        I focus on developer experience, performance, accessibility, and design systems.
      </p>
      <h2>Highlights</h2>
      <ul>
        <li>Shipped enterprise Angular apps with complex routing and state.</li>
        <li>Built React dashboards with charts, tables, and real-time updates.</li>
        <li>Auth, forms, data fetching, caching, testing, and CI/CD pipelines.</li>
      </ul>
    </div>
  );
}

