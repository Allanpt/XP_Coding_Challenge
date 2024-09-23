import React from "react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/componentsShadcn/ui/dropdown-menu";

export default function UserMenu() {
  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src={"/user-img.svg"}
            alt={"user-logo"}
            width={39}
            height={0}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Image
              src={"./icons/profile-icon.svg"}
              alt={"profile-icon"}
              width={20}
              height={20}
              className="self-start"
            />

            <div style={{ gap: "5px" }} className="flex flex-col">
              <p style={{ color: "#4A5568" }}>My Profile</p>
              <p style={{ color: "#A0AEC0" }} className="text-xs">
                Change settings of your account.
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>
            <Image
              src={"./icons/logout-icon.svg"}
              alt={"logout-icon"}
              width={20}
              height={20}
              className="self-start"
            />

            <p style={{ color: "#E53E3E" }}>Logout</p>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
