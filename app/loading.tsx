import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="grid  gap-8 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {"asdf".split("").map((char) => {
        return (
          <div key={char} className="flex flex-col gap-4 p-4">
            <Skeleton className="w-[100px] h-[30px]" />
            <div className="flex flex-col gap-4">
              <Skeleton className="w-[250px] h-[15px]" />
              <Skeleton className="w-[250px] h-[15px]" />
            </div>
            <div>
              <Skeleton className="w-[250px] h-[60px]" />
            </div>
            <div className="flex gap-4">
              <Skeleton className="w-[250px] h-[40px]" />
              <Skeleton className="w-[250px] h-[40px]" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Loading;
