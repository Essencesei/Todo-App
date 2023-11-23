"use client";
import { Session } from "next-auth";
import React from "react";
import Image from "next/image";
import og from "../app/opengraph-image.png";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

type UserMenuButtonProps = {
  session: Session | null;
};

const UserMenuButton = ({ session }: UserMenuButtonProps) => {
  const user = session?.user;
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost">
        {user ? (
          <Image
            src={user.image || og}
            alt={user.name || "not logged in"}
            height={40}
            width={40}
            className="w-10 rounded-full"
          ></Image>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        )}
      </label>
      <ul tabIndex={0} className="dropdown-content menu bg-base-200">
        <li>{user && <Link href={"/create"}>Create</Link>}</li>
        <li>
          {user ? (
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Logout
            </button>
          ) : (
            <button onClick={() => signIn()}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default UserMenuButton;
