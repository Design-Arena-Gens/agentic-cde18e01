import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio | React & Angular",
  description:
    "Portfolio of a frontend developer with 3 years experience building React and Angular applications.",
  metadataBase: new URL("https://agentic-cde18e01.vercel.app"),
  openGraph: {
    title: "Frontend Developer | React & Angular",
    description:
      "3 years experience building performant React and Angular apps.",
    url: "https://agentic-cde18e01.vercel.app",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer | React & Angular",
    description: "3 years experience in React and Angular",
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <div className="flex min-h-dvh flex-col">
            <Navbar />
            <main className="container mx-auto w-full max-w-6xl flex-1 px-4 py-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

