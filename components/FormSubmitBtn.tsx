"use client";
import React, { ComponentProps } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

type FormSubmitBtnProps = {
  children: React.ReactNode;
} & ComponentProps<"button">;

const FormSubmitBtn = ({ children }: FormSubmitBtnProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {pending && <Loader2 className="animate-spin"></Loader2>} {children}
    </Button>
  );
};

export default FormSubmitBtn;
