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

            <div className="flex flex-col gap-[5px]">
              <p className="text-[#4A5568]">My Profile</p>
              <p className="text-xs text-[#A0AEC0]">
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

            <p className="text-#E53E3E">Logout</p>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
