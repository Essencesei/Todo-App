"use client";
import React, {
  ComponentProps,
  startTransition,
  useState,
  useTransition,
} from "react";
import { markComplete } from "@/app/actions";
import { useFormStatus } from "react-dom";
import { start } from "repl";

type CardButtonProps = {
  children: React.ReactNode;
  id: string;
  classNames: string;
} & ComponentProps<"button">;

const CardButton = ({ children, id, classNames }: CardButtonProps) => {
  const { pending } = useFormStatus();
  const [isPending, startTransition] = useTransition();
  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await markComplete(id);
        });
      }}
      className={`btn w-full ${classNames}`}
    >
      {isPending && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
};

export default CardButton;
