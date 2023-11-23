"use client";
import React, { ComponentProps, startTransition, useTransition } from "react";
import { markComplete } from "@/app/actions";

type CardButtonProps = {
  children: React.ReactNode;
  id: string;
  classNames: string;
} & ComponentProps<"button">;

const CardButton = ({ children, id, classNames }: CardButtonProps) => {
  return (
    <form
      action={async (formData) => {
        await markComplete(id);
      }}
    >
      <button className={`btn w-full ${classNames}`}>{children}</button>
    </form>
  );
};

export default CardButton;
