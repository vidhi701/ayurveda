import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS } from "../../constants/Navigation";

const NavLinks = () => {
  return (
    <nav className="flex items-center gap-10">
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          className={({ isActive }) =>
            `flex items-center gap-1 text-[15px] font-medium transition-all duration-300 ${
              isActive
                ? "text-[#2E7D32]"
                : "text-[#3E2C23] hover:text-[#C98A2E]"
            }`
          }
        >
          {link.title}

          {link.title === "Membership" && <ChevronDown size={16} />}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;