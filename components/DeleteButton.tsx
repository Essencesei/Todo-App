"use client";
import { deleteItem } from "@/app/actions";
import React, { useState, useTransition } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const { pending } = useFormStatus();
  const [isPending, startTransition] = useTransition();
  return (
    <button
      onClick={() => {
        startTransition(async () => {
          await deleteItem(id);
        });
      }}
    >
      {isPending ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <MdOutlineDeleteOutline className="cursor-pointer btn-circle btn-xs btn-ghost" />
      )}
    </button>
  );
};

export default DeleteButton;
