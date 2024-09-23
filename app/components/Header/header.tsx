import React from "react";

import NavLink from "./navLink";

export default function Header() {
  return (
    <header className="flex text-white bg-[#1E1ADD] mb-[25px] h-[63px] rounded-[5px]">
      <NavLink />
    </header>
  );
}
