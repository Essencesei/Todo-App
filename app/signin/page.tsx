"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import React, { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";

const SigninPage = () => {
  const [isPending, startTransition] = useTransition();
  const [loading, setloading] = useState(false);
  return (
    <div className="flex flex-col md:flex-row ">
      <div className=" flex-1 flex h-screen justify-center items-center"></div>
      <div className="flex-1 flex h-screen justify-center items-center mt-56 md:mt-0">
        <Button
          disabled={loading}
          className="flex gap-4"
          onClick={() => {
            startTransition(() => {
              setloading(true);
              signIn("google", { callbackUrl: "/" });
            });
          }}
        >
          {loading ? (
            <span className="flex gap-4 items-center w-[170px]">
              <Loader2 className="animate-spin" />
              Hang in there
            </span>
          ) : (
            <span className="flex gap-4 items-center w-[170px]">
              <FcGoogle /> Sign in with Google
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default SigninPage;
