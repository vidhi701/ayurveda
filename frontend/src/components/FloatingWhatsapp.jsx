import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20AYURSUTRA,%20I%20want%20to%20know%20more%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:bg-[#1EBE57] transition-all duration-300"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default FloatingWhatsapp;