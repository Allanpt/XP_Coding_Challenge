import { cn } from "@/lib/utils";
import React from "react";

const CustomInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "text-[#00000080] placeholder:text-xs placeholder:font-semibold pl-4 h-14 duration-300 hover:bg-slate-50",
        className
      )}
      {...props}
    />
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;
