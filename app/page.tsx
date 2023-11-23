import Card from "@/components/Card";
import CardButton from "@/components/CardButton";
import prisma from "@/libs/db/db";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";
import React from "react";
import { markComplete } from "./actions";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const getTodoItems = async () => {
  "use server";

  const session = await getServerSession(authOptions);

  const todoData = await prisma.todo.findMany({
    where: { user: session?.user.id },
    orderBy: { createdAt: "desc" },
  });

  return todoData;
};

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/api/auth/signin");
  const data = await getTodoItems();

  return (
    <div className="grid  gap-2 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((item: Todo) => {
        return (
          <Card key={item.id} props={item}>
            <CardButton
              classNames={
                item.status === "OPEN" ? "btn-primary" : "btn-success"
              }
              id={item.id}
            >
              {item.status === "OPEN" ? "Mark Done" : "Done"}
            </CardButton>
          </Card>
        );
      })}
      {data.length === 0 && "List is Empty"}
    </div>
  );
};

export default Dashboard;
