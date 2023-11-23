import React from "react";
import DeleteButton from "./DeleteButton";
import { timeFormat } from "@/libs/timeFormat";
import { Todo } from "@prisma/client";
import { markComplete } from "@/app/actions";

const Card = ({
  props,
  children,
}: {
  props: Todo;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`${
        props.status === "DONE" ? "border-success" : "border-primary"
      } flex flex-col justify-between border p-4 bg-base-100 shadow-md rounded-md min-w-[250px] max-w-[500px] min-h-[250px] max-h-[500px]`}
    >
      <div className="flex propss-center gap-4 justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-xl">{props.title}</h2>
          <span
            className={`badge ${
              props.status === "DONE" ? "badge-success" : "badge-primary"
            }`}
          >
            {props.status}
          </span>
        </div>

        <div className="">
          <DeleteButton id={props.id} />
        </div>
      </div>

      <div className="p-2">
        <p className="break-words">{props.description}</p>
      </div>
      <div className="text-s">
        <div className="">Created: {timeFormat(props.createdAt)}</div>
        {props.status === "DONE" && (
          <div className="">Completed: {timeFormat(props.updatedAt)}</div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
