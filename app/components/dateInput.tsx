"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

import type * as React from "react";
import type { DateRange } from "react-day-picker";

import { Button } from "@/componentsShadcn/ui/button";
import { Calendar } from "@/componentsShadcn/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/componentsShadcn/ui/popover";

type Props = {
  date?: DateRange;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
};
export function DateInput({ date, setDate }: Props) {
  return (
    <div className="min-w-[191px]">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"custom"}
            className={cn("", !date && "text-muted-foreground")}
            size={"custom"}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span className="text-[#00000080] text-xs font-semibold">
                Last Login
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            locale={ptBR}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
