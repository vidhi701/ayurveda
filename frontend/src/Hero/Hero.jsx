const Hero = () => {
  return (
    <section className="bg-[#FFFFF0] min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block bg-[#F4E7D3] text-[#8B5E3C] px-5 py-2 rounded-full font-medium shadow-sm">
              🌿 100% Natural & Ayurvedic
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-[#4A3B2F]">
              Discover the
              <br />
              <span className="text-[#8B5E3C]">Healing Power</span>
              <br />
              of Ayurveda
            </h1>

            <p className="mt-8 text-lg leading-8 text-[#6B5A4A] max-w-xl">
              Welcome to <strong>AYURSUTRA</strong>, where ancient Ayurvedic
              wisdom meets modern wellness. Explore our premium herbal
              products crafted with natural ingredients to help you live
              a healthier, happier and balanced life.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-[#8B5E3C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#A47551] transition duration-300 shadow-lg">
                Shop Now
              </button>

              <button className="border-2 border-[#8B5E3C] text-[#8B5E3C] px-8 py-4 rounded-full font-semibold hover:bg-[#8B5E3C] hover:text-white transition duration-300">
                Explore Products
              </button>
            </div>

            {/* Stats */}

            <div className="flex flex-wrap gap-10 mt-14">

              <div>
                <h2 className="text-3xl font-bold text-[#8B5E3C]">10K+</h2>
                <p className="text-[#6B5A4A]">Happy Customers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#8B5E3C]">250+</h2>
                <p className="text-[#6B5A4A]">Herbal Products</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#8B5E3C]">100%</h2>
                <p className="text-[#6B5A4A]">Natural</p>
              </div>

            </div>

          </div>

          {/* Right Image */}

          <div className="flex justify-center">

           <div className="flex justify-center">
  <img
    src="https://images.openai.com/static-rsc-4/anoFt_P0EelOE6JiOEfDCHa2dMyxCWtd3XX8LPDFijLddgjSJJxSWCWq32KplRvqwgs6rlB4wKN0ZKNx02s5v8_4h2CcRvcqGqBc1UOudL-5FCE32h7B9CZ8qzbp7h1jfyEEN-k3mywA9KJLramAEfRl17wnVNkpbqi_U_rdIhPgO81Z_OIvGThzGymzVp3I?purpose=fullsize"
    alt="Ayurveda"
    className="w-full max-w-md h-[550px] rounded-3xl shadow-2xl object-cover"
  />
</div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;