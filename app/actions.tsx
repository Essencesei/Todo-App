"use server";
import prisma from "@/lib/db/db";
import { revalidatePath } from "next/cache";

export const markComplete = async (id: string) => {
  await prisma.todo.update({
    where: { id: id },
    data: {
      status: "DONE",
    },
  });

  revalidatePath("/");
};

export const deleteItem = async (id: string) => {
  await prisma.todo.delete({ where: { id: id } });

  revalidatePath("/");
};
