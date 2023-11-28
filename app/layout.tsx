import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

import SessionProvider from "./SessionProvider";
import UserMenuButton from "@/components/UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Todo",
  description:
    "The Next.js Todo Application is a user-friendly task management platform that enables users to efficiently organize their tasks. Built using Next.js along with Prisma and MongoDB Atlas, this application provides a seamless and responsive experience for managing to-do lists.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html data-theme="light" lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="flex justify-between items-center p-2">
            <Link href={"/"} className="btn btn-ghost">
              <h1 className="text-2xl font-bold">TODO</h1>
            </Link>

            <UserMenuButton session={session} />
          </nav>
          <main className="select-none md:mx-52">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
