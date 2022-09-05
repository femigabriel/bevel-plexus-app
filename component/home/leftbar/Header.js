import React from "react";
import MenuItems from "./MenuItems";
const logo = "/images/logo.svg";

function Header() {
  return (
    <div className="bg-white drop-shadow-md h-screen pt-10 pl-5 pr-10 max-w-xs">
      <div className="pt-10 pb-10 pr-10 pl-10 ">
        <img src={logo} alt="logo" />
      </div>
      <MenuItems />
    </div>
  );
}

export default Header;
