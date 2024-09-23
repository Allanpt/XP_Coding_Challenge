import type React from "react";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/componentsShadcn/ui/select";

type Props = {
  isActive: boolean;
};

export default function SelectStatusRender({ isActive }: Props) {
  const [selectedValue, setSelectedValue] = useState(isActive);

  const handleSelectChange = (value: string) => {
    if (value === "true") setSelectedValue(true);
    if (value === "false") setSelectedValue(false);
  };

  return (
    <div className="px-4 min-w-[174px]">
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger
          className={`font-semibold text-xs ${
            selectedValue ? "text-[#3CC13B]" : "text-[#F03738]"
          }`}
        >
          <SelectValue placeholder={selectedValue ? "Active" : "Inactive"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="true" className="text-[#3CC13B]">
              Active
            </SelectItem>
            <SelectItem value="false" className="text-[#F03738]">
              Inactive
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
