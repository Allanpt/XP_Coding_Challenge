import React from "react";
import Image from "next/image";

import type { Employee } from "@/app/types/Employee";

import SelectStatusRender from "../selectStatusRender";

type Props = {
  employees: Employee[];
};

function formatDate(isoDate: string) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function daysAgo(isoDate: string) {
  const targetDate = new Date(isoDate);

  if (Number.isNaN(targetDate.getTime())) {
    throw new Error("Invalid date format");
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - targetDate.getTime();

  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays > 365) return `${Math.floor(diffDays / 365)} years ago`;
  if (diffDays > 30) return `${Math.floor(diffDays / 30)} moths ago`;

  return `${diffDays} days ago`;
}

export default function EmployeeRender({ employees }: Props) {
  return (
    <article className="min-w-max">
      {employees.map((emp) => (
        <div key={emp.mail} className="flex border justify-between hover:bg-slate-50">
          <div
            style={{ minWidth: "285px" }}
            className="flex px-4 py-3 gap-[6px]"
          >
            <Image
              src={emp.avatar}
              alt={"photo-employee"}
              width={20}
              height={20}
              className="self-center rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-xs text-black">{emp.employee}</p>
              <p className="text-xs text-[#808080]">{emp.mail}</p>
            </div>
          </div>

          <div
            style={{ minWidth: "191px" }}
            className="flex px-4 py-3 flex-col"
          >
            <p className="text-xs text-black">{formatDate(emp.lastLogin)}</p>
            <p className="text-xs text-[#808080]">{daysAgo(emp.lastLogin)}</p>
          </div>

          <div
            style={{ minWidth: "174px" }}
            className="flex px-4 py-3 items-center"
          >
            <p
              className={`text-black ${
                emp.department === "Research and Development"
                  ? "text-[10px]"
                  : "text-xs"
              }`}
            >
              {emp.department}
            </p>
          </div>

          <SelectStatusRender isActive={emp.isActive} />
        </div>
      ))}
    </article>
  );
}
