import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFF0] border-t border-[#E5D8C3]">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-4xl font-extrabold tracking-wide text-[#8B5E3C]">
              AYURSUTRA
            </h2>

            <p className="text-[#A47551] italic mt-2">
              Nature • Wellness • Tradition
            </p>

            <p className="mt-5 text-[#6B5A4A] leading-8">
              Discover the ancient wisdom of Ayurveda with premium herbal
              products crafted from nature. Experience purity, wellness
              and holistic healthcare every day.
            </p>

            {/* Newsletter */}

            <div className="mt-8">

              <h4 className="font-semibold text-[#8B5E3C] mb-3">
                Subscribe Newsletter
              </h4>

              <div className="flex overflow-hidden rounded-full border border-[#C8A27A]">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white outline-none text-[#4A3B2F]"
                />

                <button className="bg-[#8B5E3C] text-white px-6 hover:bg-[#A47551] transition">
                  Join
                </button>

              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="bg-[#C8A27A] text-white p-3 rounded-full shadow-lg hover:scale-110 hover:bg-[#8B5E3C] transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-[#C8A27A] text-white p-3 rounded-full shadow-lg hover:scale-110 hover:bg-[#8B5E3C] transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-[#C8A27A] text-white p-3 rounded-full shadow-lg hover:scale-110 hover:bg-[#8B5E3C] transition-all duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="bg-[#C8A27A] text-white p-3 rounded-full shadow-lg hover:scale-110 hover:bg-[#8B5E3C] transition-all duration-300"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <div className="mb-6">

              <h3 className="text-xl font-bold text-[#8B5E3C]">
                Quick Links
              </h3>

              <div className="w-14 h-1 bg-[#C8A27A] rounded-full mt-2"></div>

            </div>

            <ul className="space-y-4 text-[#6B5A4A]">

              <li>
                <a href="/" className="hover:text-[#A47551] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-[#A47551] transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="/products" className="hover:text-[#A47551] transition">
                  Products
                </a>
              </li>

              <li>
                <a href="/blogs" className="hover:text-[#A47551] transition">
                  Blogs
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-[#A47551] transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Products */}

          <div>

            <div className="mb-6">

              <h3 className="text-xl font-bold text-[#8B5E3C]">
                Herbal Products
              </h3>

              <div className="w-14 h-1 bg-[#C8A27A] rounded-full mt-2"></div>

            </div>

            <ul className="space-y-4 text-[#6B5A4A]">

              <li>🌿 Herbal Tea</li>

              <li>🌿 Ayurvedic Oils</li>

              <li>🌿 Natural Capsules</li>

              <li>🌿 Skin Care</li>

              <li>🌿 Immunity Booster</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <div className="mb-6">

              <h3 className="text-xl font-bold text-[#8B5E3C]">
                Contact Us
              </h3>

              <div className="w-14 h-1 bg-[#C8A27A] rounded-full mt-2"></div>

            </div>

            <div className="space-y-5">

              <div className="flex items-center gap-4 bg-[#F7F1E8] p-4 rounded-xl shadow-sm">

                <FaMapMarkerAlt className="text-[#8B5E3C] text-xl" />

                <p className="text-[#6B5A4A]">
                  Sirsa, Haryana, India
                </p>

              </div>

              <div className="flex items-center gap-4 bg-[#F7F1E8] p-4 rounded-xl shadow-sm">

                <FaPhoneAlt className="text-[#8B5E3C] text-xl" />

                <p className="text-[#6B5A4A]">
                  +91 98765 43210
                </p>

              </div>

              <div className="flex items-center gap-4 bg-[#F7F1E8] p-4 rounded-xl shadow-sm">

                <FaEnvelope className="text-[#8B5E3C] text-xl" />

                <p className="text-[#6B5A4A]">
                  support@ayursutra.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-[#E5D8C3] bg-[#FAF6ED]">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-[#6B5A4A] text-sm">
            © 2026 AYURSUTRA • Crafted with 🌿 for Natural Wellness
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <a
              href="#"
              className="text-[#6B5A4A] hover:text-[#A47551] transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[#6B5A4A] hover:text-[#A47551] transition"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;