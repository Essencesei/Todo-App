import FormSubmitBtn from "@/components/FormSubmitBtn";
import prisma from "@/libs/db/db";
import { redirect } from "next/navigation";
import React from "react";

const createTodo = async (formData: FormData) => {
  "use server";

  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();

  if (!title || !description) throw new Error("Fields Invalid");

  const res = await await prisma.todo.create({
    data: {
      title,
      status: "OPEN",
      description,
    },
  });
  if (res) redirect("/");
};

const CreateTodo = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl">Create Task</h1>
      <form action={createTodo} className="flex flex-col gap-2 p-4">
        <input
          className="input input-primary"
          type="text"
          name="title"
          placeholder="Title"
        />
        <textarea
          className="textarea textarea-primary"
          name="description"
          placeholder="Description"
        />
        <FormSubmitBtn>Create Task</FormSubmitBtn>
      </form>
    </div>
  );
};

export default CreateTodo;
