"use client";

import React from "react";
import { Pie, Cell, PieChart, Tooltip } from "recharts";

import type { DepartmentQtd } from "@/app/types/DepartmentQtd";

type Props = {
  departments: DepartmentQtd[];
};

const COLORS = [
  "#E289F2",
  "#855CF8",
  "#263238",
  "#b085ff",
  "#d8cafc",
  "#9e7df9",
  "#503795",
];

export default function PieChartComp({ departments }: Props) {
  return (
    <>
      <PieChart width={233} height={233} className="self-center mb-8 mt-12">
        <Pie
          data={departments}
          cx="50%"
          cy="50%"
          outerRadius={115}
          dataKey={"quantity"}
          strokeWidth={0}
        >
          {departments.map((dep, index) => (
            <Cell key={dep.name} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="flex gap-5 self-center flex-wrap justify-center">
        {departments.map((dep, index) => (
          <div key={dep.name} className="flex flex-col gap-1">
            <span
              style={{ backgroundColor: COLORS[index] }}
              className={"flex rounded-full w-[14px] h-[14px]"}
            />
            <p className="text-[#263238] text-sm">{dep.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
