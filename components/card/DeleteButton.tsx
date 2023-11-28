"use client";
import { deleteItem } from "@/app/actions";
import React, { useTransition } from "react";
import { useFormStatus } from "react-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "../ui/use-toast";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      disabled={isPending}
      className="w-full"
      variant={"destructive"}
      onClick={() => {
        startTransition(async () => {
          await deleteItem(id);
          toast({
            variant: "destructive",
            description: "Deletion Complete!",
          });
        });
      }}
    >
      {isPending ? <Loader2 className="animate-spin "></Loader2> : "Delete"}
    </Button>
  );
};

export default DeleteButton;
