import React from "react";

import type { DepartmentQtd } from "../../types/DepartmentQtd";

import PieChartComp from "../Chart/pieChart";

type Props = {
  departments: DepartmentQtd[];
}


export default function Chart({departments}:Props) {
  return (
    <section className="flex flex-col md:min-w-[425px] md:max-w-[32%] p-[18px] rounded-md shadow-xl">
      <article>
        <h2 className="text-lg tracking-[0.5px] text-[#4A5568]">
          Employees by department
        </h2>
        <p className="text-base tracking-[0.28px] text-[#A0AEC0]">
          Departments
        </p>
      </article>

      <PieChartComp departments={departments}/>
    </section>
  );
}
