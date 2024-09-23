import React from "react";
import { Skeleton } from "@/componentsShadcn/ui/skeleton";

export default function MainSkeleton() {
  return (
    <main className="flex gap-[31px] mt-6 min-h-[440px] flex-col md:flex-row mb-10">
      <div className="flex flex-col min-w-[425px] p-[18px] rounded-md shadow-xl gap-3 md:max-w-[32%]">
        <Skeleton className="h-5 w-[250px]" />
        <Skeleton className="h-4 w-[100px]" />
        <div className="space-y-2 self-center mb-8 mt-12">
          <Skeleton className="h-[233px] w-[233px] rounded-full " />
        </div>
        <div className="flex gap-5 self-center flex-wrap justify-center w-full h-10">
          {new Array(3).fill(1).map((dep) => (
            <div key={dep} className="flex flex-col gap-1">
              <Skeleton className="flex rounded-full w-[14px] h-[14px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full px-4 pb-10 rounded-md shadow-xl max-h-[440px]">
        <Skeleton className="h-5 mt-4 w-[130px]" />
        <div className="flex flex-col mt-4 gap-4">
          {new Array(5).fill(1).map((dep) => (
            <Skeleton key={dep} className="w-full h-[56px]" />
          ))}
        </div>
      </div>
    </main>
  );
}
