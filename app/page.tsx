import React from "react";
import prisma from "@/libs/db/db";

import { Todo } from "@prisma/client";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import AddItem from "@/components/AddItem";
import { authOptions } from "@/lib/auth";
import CardWrapper from "../components/card/CardWrapper";
import CardButton from "../components/card/CardButton";

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
    <div className="grid  gap-8 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-20">
      <AddItem></AddItem>
      {data?.map((item: Todo) => {
        return (
          <CardWrapper key={item.id} props={item}>
            <CardButton
              classNames={
                item.status === "OPEN" ? "btn-primary" : "btn-success"
              }
              id={item.id}
            >
              {item.status === "OPEN" ? "Mark Done" : "Done"}
            </CardButton>
          </CardWrapper>
        );
      })}
    </div>
  );
};

export default Dashboard;
