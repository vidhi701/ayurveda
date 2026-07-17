import React from "react";
import { Phone, Truck, Leaf } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-background border-b border-border">

      <div
        className="
        max-w-7xl
        mx-auto
        h-11
        px-8
        flex
        items-center
        justify-between
        text-sm
        text-text
        "
      >

        {/* Left */}

        <div className="flex items-center gap-4">

          <a
            href="#"
            className="hover:text-primary transition duration-300"
          >
            <FaInstagram size={17} />
          </a>

          <a
            href="#"
            className="hover:text-primary transition duration-300"
          >
            <FaYoutube size={17} />
          </a>

          <a
            href="#"
            className="hover:text-primary transition duration-300"
          >
            <FaFacebookF size={16} />
          </a>

        </div>

        {/* Center */}

        <div className="hidden lg:flex items-center gap-8">

          <div className="flex items-center gap-2">

            <Leaf
              size={15}
              className="text-success"
            />

            <span>
              Free Ayurvedic Consultation
            </span>

          </div>

          <div className="w-px h-4 bg-border" />

          <div className="flex items-center gap-2">

            <Truck
              size={15}
              className="text-primary"
            />

            <span>
              Free Shipping Above ₹999
            </span>

          </div>

        </div>

        {/* Right */}

        <a
          href="tel:+919876543210"
          className="
          flex
          items-center
          gap-2
          hover:text-primary
          transition
          duration-300
          "
        >

          <Phone
            size={15}
          />

          <span className="font-medium">
            +91 98765 43210
          </span>

        </a>

      </div>

    </div>
  );
};

export default TopBar;