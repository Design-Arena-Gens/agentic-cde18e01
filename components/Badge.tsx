import { clsx } from "clsx";

export function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "react" | "angular" }) {
  const styles = clsx(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs",
    variant === "react" && "border-cyan-300/40 text-cyan-600 dark:border-cyan-800 dark:text-cyan-300",
    variant === "angular" && "border-red-300/40 text-red-600 dark:border-red-800 dark:text-red-300",
    variant === "default" && "border-gray-300 text-gray-600 dark:border-gray-800 dark:text-gray-300"
  );
  return <span className={styles}>{children}</span>;
}

