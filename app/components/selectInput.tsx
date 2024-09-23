import type * as React from "react";

import type { DepartmentQtd } from "@/app/types/DepartmentQtd";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTriggerNoIcon,
  SelectValue,
} from "@/componentsShadcn/ui/select";

type Props = {
  departments?: DepartmentQtd[];
  typeSelect: "Departments" | "Status";
  setSearchStatus?: React.Dispatch<React.SetStateAction<string>>;
  setSearchDepatment?: React.Dispatch<React.SetStateAction<string>>;
};

export function SelectInput({
  departments,
  typeSelect,
  setSearchStatus,
  setSearchDepatment,
}: Props) {
  function handleSelectChange(value: string) {
    if (setSearchDepatment) setSearchDepatment(value);
    if (setSearchStatus) setSearchStatus(value);
  }

  return (
    <div className="min-w-[174px]">
      <Select onValueChange={handleSelectChange}>
        <SelectTriggerNoIcon className="text-[#00000080] text-xs font-semibold pl-4 h-14 w-full duration-300 hover:bg-slate-50">
          {typeSelect === "Departments" && (
            <SelectValue placeholder="Department" />
          )}
          {typeSelect === "Status" && <SelectValue placeholder="Status" />}
        </SelectTriggerNoIcon>
        <SelectContent>
          <SelectGroup>
            {departments && (
              <>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map((dep) => (
                  <SelectItem key={dep.name} value={dep.name}>
                    {dep.name}
                  </SelectItem>
                ))}
              </>
            )}
            {typeSelect === "Status" && (
              <>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="true">Active</SelectItem>
                <SelectItem value="false">Inactive</SelectItem>
              </>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
