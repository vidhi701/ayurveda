import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "https://loremflickr.com/1600/700/herbs",
    title: "Pure Herbal Collection",
    subtitle: "100% Natural Ingredients",
  },
  {
    image: "https://loremflickr.com/1600/700/ayurveda",
    title: "Ancient Ayurvedic Wisdom",
    subtitle: "Healthy Life Starts Here",
  },
  {
    image: "https://loremflickr.com/1600/700/medicinal-plants",
    title: "Medicinal Plants",
    subtitle: "Nature's Best Remedies",
  },
  {
    image: "https://loremflickr.com/1600/700/tulsi",
    title: "Tulsi & Herbal Care",
    subtitle: "Traditional Healing",
  },
  {
    image: "https://loremflickr.com/1600/700/neem",
    title: "Neem & Natural Wellness",
    subtitle: "Pure Ayurvedic Products",
  },
];

const HeroCarousel = () => {
  return (
    <section className="bg-[#FFFFF0] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[320px] md:h-[450px] object-cover"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                  <h2 className="text-4xl font-bold">
                    {slide.title}
                  </h2>

                  <p className="mt-4 text-lg">
                    {slide.subtitle}
                  </p>

                  <button className="mt-6 bg-[#8B5E3C] hover:bg-[#A47551] px-8 py-3 rounded-full font-semibold">
                    Explore Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroCarousel;