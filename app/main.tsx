"use client";

import React, { useEffect, useState } from "react";

import type { Employee } from "./types/Employee";
import type { DepartmentQtd } from "./types/DepartmentQtd";

import MainSkeleton from "./mainSkeleton";
import data from "./api/mockjson.json";
import EmployeeTable from "./components/EmployeeTable/employeeTable";
import Chart from "./components/Chart/chart";

function getDepartments(employees: Employee[]) {
  return employees.reduce((att: DepartmentQtd[], current) => {
    const findDepartment = att.find(
      (dep) => dep.name === current.department
    );

    if (!findDepartment) {
      att.push({ name: current.department, quantity: 1 });
    } else {
      findDepartment.quantity += 1;
    }

    return att;
  }, []);
}

export default function Main() {
  const [employees, setEmployees] = useState<Employee[] | null>(null);
  const [departments, setDepartments] = useState<DepartmentQtd[] | null>(null);

  useEffect(() => {
    const fetchData = (): Promise<Employee[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 800);
      });
    };

    fetchData().then((data: Employee[]) => {
      setEmployees(data);
      setDepartments(getDepartments(data));
    });
  }, []);

  if (!departments || !employees) {
    return (
      <MainSkeleton/>
    );
  }

  return (
    <main className="flex flex-col md:flex-row gap-[31px] mt-6 min-h-[440px] mb-10">
      <Chart departments={departments} />
      <EmployeeTable employees={employees} departments={departments}/>
    </main>
  );
}
