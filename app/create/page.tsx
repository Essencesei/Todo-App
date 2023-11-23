import FormSubmitBtn from "@/components/FormSubmitBtn";
import prisma from "@/libs/db/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const createTodo = async (formData: FormData) => {
  "use server";

  const session = await getServerSession(authOptions);

  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const user = session?.user.id;

  if (!title || !description || !user) throw new Error("Fields Invalid");

  const res = await prisma.todo.create({
    data: {
      title,
      status: "OPEN",
      description,
      user,
    },
  });

  if (res) redirect("/");
};

const CreateTodo = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/api/auth/signin");
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl">Create Task</h1>
      <form action={createTodo} className="flex flex-col gap-2 p-4">
        <input
          className="input input-primary"
          type="text"
          name="title"
          placeholder="Title"
          required
        />
        <textarea
          className="textarea textarea-primary"
          name="description"
          placeholder="Description"
          required
        />
        <FormSubmitBtn>Create Task</FormSubmitBtn>
      </form>
    </div>
  );
};

export default CreateTodo;
