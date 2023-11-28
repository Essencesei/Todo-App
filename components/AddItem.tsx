import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import FormSubmitBtn from "./FormSubmitBtn";
import { redirect } from "next/navigation";
import prisma from "@/libs/db/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

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

const AddItem = () => {
  return (
    <Card className="flex h-[250px] justify-center items-center">
      <CardContent>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"}>Create</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Task</DialogTitle>
            </DialogHeader>
            <form action={createTodo} className="flex flex-col gap-4">
              <Input type="text" name="title" placeholder="Title" required />
              <Textarea name="description" placeholder="Description" required />
              <FormSubmitBtn>Create Task</FormSubmitBtn>
            </form>
          </DialogContent>
          <DialogFooter></DialogFooter>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default AddItem;
