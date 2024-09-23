"use client";
import type { Employee } from "@/app/types/Employee";
import type { DepartmentQtd } from "@/app/types/DepartmentQtd";
import type { DateRange } from "react-day-picker";
import React, { useMemo, useState } from "react";
import CustomInput from "../input";
import { DateInput } from "../dateInput";
import { SelectInput } from "../selectInput";
import EmployeeRender from "./employeeRender";

type Props = {
  employees: Employee[];
  departments: DepartmentQtd[];
};

export default function EmployeeTable({ employees, departments }: Props) {
  const [searchEmployee, setSearchEmployee] = useState("");
  const [searchDate, setSearchDate] = React.useState<DateRange | undefined>();
  const [searchDepatment, setSearchDepatment] = useState("all");
  const [searchStatus, setSearchStatus] = useState("all");

  const filteredEmployee = useMemo(() => {
    const searchEmployeeLower = searchEmployee.toLowerCase();
    console.log(searchStatus);

    return employees.filter((el) => {
      const employeeLastLogin = new Date(el.lastLogin);

      if (!el.employee.toLowerCase().includes(searchEmployeeLower)) {
        return false;
      }

      if (searchDate?.from && employeeLastLogin <= searchDate.from) {
        return false;
      }
      if (searchDate?.to && employeeLastLogin >= searchDate.to) {
        return false;
      }

      if (searchDepatment !== "all" && el.department !== searchDepatment) {
        return false;
      }

      if (searchStatus === "all") {
        return true;
      }

      if (searchStatus === "true" && !el.isActive) {
        return false;
      }
      if (searchStatus === "false" && el.isActive) {
        return false;
      }

      return true;
    });
  }, [
    searchEmployee,
    employees,
    searchDate?.from,
    searchDate?.to,
    searchDepatment,
    searchStatus,
  ]);

  return (
    <section className="relative flex flex-col w-full px-4 pb-10 rounded-md shadow-xl max-h-[440px] overflow-y-auto">
      <h2 className="text-lg text-[#4A5568] pb-4 pt-[18px] bg-white sticky z-[1] top-0 min-w-[826px]">
        Employees
      </h2>
      <article className="border border-[#0000001A] bg-white rounded-t-md sticky z-[1] w-full top-14 min-w-[826px]">
        <div className="flex justify-between ">
          <CustomInput
            className="min-w-[285px]"
            type="text"
            placeholder="Employee"
            onChange={(e) => setSearchEmployee(e.target.value)}
          />
          <DateInput date={searchDate} setDate={setSearchDate} />
          <SelectInput
            departments={departments}
            typeSelect={"Departments"}
            setSearchDepatment={setSearchDepatment}
          />
          <SelectInput
            typeSelect={"Status"}
            setSearchStatus={setSearchStatus}
          />
        </div>
      </article>
      <EmployeeRender employees={filteredEmployee} />
    </section>
  );
}
