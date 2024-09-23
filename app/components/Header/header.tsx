import React from "react";

import NavLink from "./navLink";


export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#1E1ADD",
        height: "63px",
        borderRadius: "5px",
        marginBottom: "25px"
      }}
      className="flex text-white"
    >
      <NavLink/>
    </header>
  );
}
