"use client";
import React, { ComponentProps } from "react";
import { useFormState, useFormStatus } from "react-dom";

type FormSubmitBtnProps = {
  children: React.ReactNode;
} & ComponentProps<"button">;

const FormSubmitBtn = ({ children }: FormSubmitBtnProps) => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary" disabled={pending}>
      {pending && <span className="loading loading-spinner"></span>} {children}
    </button>
  );
};

export default FormSubmitBtn;
