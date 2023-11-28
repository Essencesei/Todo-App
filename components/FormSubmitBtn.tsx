"use client";
import React, { ComponentProps, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "./ui/use-toast";

type FormSubmitBtnProps = {
  children: React.ReactNode;
} & ComponentProps<"button">;

const FormSubmitBtn = ({ children }: FormSubmitBtnProps) => {
  const { pending } = useFormStatus();
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      disabled={pending}
      onClick={() => {
        startTransition(() => {
          toast({
            description: "Task Created!",
          });
        });
      }}
    >
      {pending && <Loader2 className="animate-spin"></Loader2>} {children}
    </Button>
  );
};

export default FormSubmitBtn;
