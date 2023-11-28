import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

import SessionProvider from "./SessionProvider";
import UserMenuButton from "@/components/UserMenuButton";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Todo",
  description:
    "The Next.js Todo Application is a user-friendly task management platform that enables users to efficiently organize their tasks. Built using Next.js along with Prisma and MongoDB Atlas, this application provides a seamless and responsive experience for managing to-do lists.",
};

import { Toaster } from "@/components/ui/toaster";
import { authOptions } from "@/lib/auth";
import { Button } from "@/components/ui/button";
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
          <nav className=" p-2 px-8 fixed w-full backdrop-blur-lg shadow">
            <div className="  flex justify-between items-center">
              <Link href={"/"} className="btn btn-ghost">
                <h1 className="text-2xl font-bold">Todo</h1>
              </Link>

              {session && <UserMenuButton session={session} />}
            </div>
          </nav>
          <main className="select-none md:mx-52">{children}</main>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
