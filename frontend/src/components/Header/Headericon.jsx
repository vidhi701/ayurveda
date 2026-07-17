import React from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  UserCircle,
} from "lucide-react";

const HeaderIcons = () => {
  return (

    <div className="flex items-center gap-3">

      <button
        className="
        w-11
        h-11
        rounded-full
        bg-background
        hover:bg-primary
        hover:text-white
        transition-all
        duration-300
        flex
        items-center
        justify-center
        "
      >
        <Search size={20} />
      </button>

      <button
        className="
        w-11
        h-11
        rounded-full
        bg-background
        hover:bg-primary
        hover:text-white
        transition-all
        duration-300
        flex
        items-center
        justify-center
        "
      >
        <Heart size={20} />
      </button>

      <button
        className="
        relative
        w-11
        h-11
        rounded-full
        bg-background
        hover:bg-primary
        hover:text-white
        transition-all
        duration-300
        flex
        items-center
        justify-center
        "
      >

        <ShoppingCart size={20} />

        <span
          className="
          absolute
          -top-1
          -right-1
          w-5
          h-5
          rounded-full
          bg-primary
          text-white
          text-[10px]
          flex
          items-center
          justify-center
          "
        >
          0
        </span>

      </button>

      <button
        className="
        w-11
        h-11
        rounded-full
        bg-background
        hover:bg-primary
        hover:text-white
        transition-all
        duration-300
        flex
        items-center
        justify-center
        "
      >
        <UserCircle size={22} />
      </button>

    </div>

  );
};

export default HeaderIcons;