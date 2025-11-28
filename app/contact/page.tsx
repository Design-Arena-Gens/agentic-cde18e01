export const metadata = {
  title: "Contact | Frontend Developer"
};

export default function ContactPage() {
  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-gray-600 dark:text-gray-400">
        I'm open to new opportunities and collaborations. Reach out via email or LinkedIn.
      </p>
      <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-900">
        <ul className="space-y-3 text-sm">
          <li>
            <span className="font-medium">Email:</span>{" "}
            <a className="text-brand-700 hover:underline dark:text-brand-400" href="mailto:hello@example.com">
              hello@example.com
            </a>
          </li>
          <li>
            <span className="font-medium">LinkedIn:</span>{" "}
            <a className="text-brand-700 hover:underline dark:text-brand-400" href="https://www.linkedin.com">
              linkedin.com/in/frontend-dev
            </a>
          </li>
          <li>
            <span className="font-medium">GitHub:</span>{" "}
            <a className="text-brand-700 hover:underline dark:text-brand-400" href="https://github.com">
              github.com/frontend-dev
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

