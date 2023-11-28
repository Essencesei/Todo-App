import React from "react";

import { timeFormat } from "@/lib/timeFormat";
import { Todo } from "@prisma/client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import DeleteButton from "./DeleteButton";

const CardWrapper = ({
  props,
  children,
}: {
  props: Todo;
  children: React.ReactNode;
}) => {
  return (
    <Card className="flex flex-col justify-around ">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-4">
          <p className="line-clamp-1 w-1/2">{props.title}</p>
          <Badge variant={"outline"} className="w-fit">
            {props.status}
          </Badge>
        </CardTitle>
        <CardDescription className="flex flex-col">
          <span> Created: {timeFormat(props.createdAt)}</span>
          <span>
            {props.status === "DONE" &&
              `Completed: ${timeFormat(props.updatedAt)}`}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="break-words">{props.description}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <DeleteButton id={props.id} />
        {children}
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
