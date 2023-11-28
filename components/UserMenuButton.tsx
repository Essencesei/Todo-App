"use client";
import { Session } from "next-auth";
import React from "react";
import Image from "next/image";
import og from "../app/opengraph-image.png";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type UserMenuButtonProps = {
  session: Session | null;
};

const UserMenuButton = ({ session }: UserMenuButtonProps) => {
  const user = session?.user;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
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
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Signed in as {session?.user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {user ? (
            <button
              className="w-full text-start"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Logout
            </button>
          ) : (
            <button className="w-full text-start" onClick={() => signIn()}>
              Login
            </button>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenuButton;
