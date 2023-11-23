import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo",
  description:
    "The Next.js Todo Application is a user-friendly task management platform that enables users to efficiently organize their tasks. Built using Next.js along with Prisma and MongoDB Atlas, this application provides a seamless and responsive experience for managing to-do lists.",
  openGraph: {
    url: "https://todo-app-essencesei.vercel.app/",
    title: "Todo-App",
    description:
      "The Next.js Todo Application is a user-friendly task management platform that enables users to efficiently organize their tasks. Built using Next.js along with Prisma and MongoDB Atlas, this application provides a seamless and responsive experience for managing to-do lists.",
    images: [
      {
        url: "/todoapp.png",
        width: 800,
        height: 600,
        alt: "Todo App",
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" lang="en">
      <body className={inter.className}>
        <nav className="flex justify-between items-center p-2">
          <Link href={"/"} className="btn btn-ghost">
            <h1 className="text-2xl font-bold">TODO</h1>
          </Link>

          <Link href={"/create"} className="btn btn-ghost">
            <div>Create</div>
          </Link>
        </nav>
        <main className="select-none">{children}</main>
      </body>
    </html>
  );
}
