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
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type CardButtonProps = {
  children: React.ReactNode;
  id: string;
  classNames: string;
} & ComponentProps<"button">;

const CardButton = ({ children, id, classNames }: CardButtonProps) => {
  const { pending } = useFormStatus();
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      variant={"default"}
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await markComplete(id);
        });
      }}
      className={`btn w-full ${classNames}`}
    >
      {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};

export default CardButton;
