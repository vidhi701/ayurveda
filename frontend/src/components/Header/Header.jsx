import React from "react";
import Logo from "./Logo";
import NavLinks from "./Navlinks";
import HeaderIcons from "./Headericon";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <>
    <TopBar />
    <header
      className="sticky top-0 z-50
      w-full
      bg-[#FAF8F2]
      border-b border-[#E8DDC9]
      shadow-sm"
    >
      <div
        className="max-w-[1400px]
        mx-auto
        flex
        items-center
        justify-between
        px-8
        py-5"
      >
        <Logo />

        <NavLinks />

        <HeaderIcons />
      </div>
    </header>
    </>
  );
};

export default Header;