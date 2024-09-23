import React from "react";
import Link from "next/link";
import { AlignJustify } from "lucide-react";

import UserMenu from "./userMenu";
import CustomLink from "../link";

export default function NavLink() {
  return (
    <nav className="flex justify-between items-center w-full py-[17px] pl-[39px]">
      <Link href={"/"} className="text-2xl font-bold leading-[29px]">
        LOGO
      </Link>
      <div className="md:flex hidden ml-[92px] gap-[67px]">
        <CustomLink href={"/"}>Menu</CustomLink>
        <CustomLink href={"/"}>Menu</CustomLink>
        <CustomLink href={"/"}>Menu</CustomLink>
        <CustomLink href={"/"}>Menu</CustomLink>
      </div>
      <div className="md:block hidden ml-auto mr-[23px]">
        <UserMenu />
      </div>

      <AlignJustify
        className="md:hidden mr-6 cursor-pointer"
        color="#ffffff"
        strokeWidth={3}
      />
    </nav>
  );
}
