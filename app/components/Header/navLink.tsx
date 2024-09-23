import React from "react";
import Link from "next/link";
import { AlignJustify } from 'lucide-react';

import UserMenu from "./userMenu";
import CustomLink from "../link";


export default function NavLink() {
  return (
    <nav
      style={{ paddingBlock: "17px", paddingLeft: "39px" }}
      className="flex justify-between items-center w-full"
    >
      <Link
        href={"/"}
        style={{ lineHeight: "29px" }}
        className="text-2xl font-bold "
      >
        LOGO
      </Link>
      <div style={{ marginLeft: "92px", gap: "67px" }} className="md:flex hidden">
        <CustomLink href={"/"}>Menu</CustomLink>
        <CustomLink href={"/"}>Menu</CustomLink>
        <CustomLink href={"/"}>Menu</CustomLink>
        <CustomLink href={"/"}>Menu</CustomLink>
      </div>
      <div style={{ marginRight: "23px" }} className="md:block hidden ml-auto">
        <UserMenu />
      </div>

      <AlignJustify className="md:hidden mr-6 cursor-pointer" color="#ffffff" strokeWidth={3}/>
    </nav>
  );
}
