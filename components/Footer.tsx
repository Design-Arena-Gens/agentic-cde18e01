export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 text-sm text-gray-500 dark:border-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <p>
          ? {new Date().getFullYear()} Frontend Developer ? React & Angular. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}

