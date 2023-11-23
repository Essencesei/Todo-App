"use client";
import { deleteItem } from "@/app/actions";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  return (
    <>
      <form
        action={async (formData) => {
          await deleteItem(id);
        }}
      >
        <button>
          <MdOutlineDeleteOutline className="cursor-pointer btn-circle btn-xs btn-ghost" />
        </button>
      </form>
    </>
  );
};

export default DeleteButton;
