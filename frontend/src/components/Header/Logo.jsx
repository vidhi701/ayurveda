import React from "react";
import { Leaf } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">

      <div
        className="
        w-14
        h-14
        rounded-full
        bg-primary
        shadow-button
        flex
        items-center
        justify-center
        "
      >

        <Leaf
          size={28}
          className="text-white"
        />

      </div>

      <div>

        <h2
          className="
          text-3xl
          font-bold
          tracking-wide
          text-primaryDark
          "
        >
          AYURSUTRA
        </h2>

        <p
          className="
          text-sm
          italic
          text-primary
          "
        >
          Nature • Wellness • Tradition
        </p>

      </div>

    </div>
  );
};

export default Logo;