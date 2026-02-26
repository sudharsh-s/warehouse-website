import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

import logo1 from "@/assets/partner/partner-1.png";
import logo2 from "@/assets/partner/partner-2.png";
import logo3 from "@/assets/partner/partner-3.png";
import logo4 from "@/assets/partner/partner-4.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo1,
  logo2,
  logo3,
  logo4,
  logo1,
  logo2,
  logo3,
  logo4,
];

export default function BrandSlider() {
  return (
    <section className="bg-white pt-5 pb-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="text-center mb-10">
          <h2 className="title">Our <span>Partners</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Connecting businesses globally through strong and reliable partnerships.</p>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={4}
          spaceBetween={60}
          loop={true} // infinite loop
          freeMode={{ 
            enabled: true, 
            momentum: false // disables snapping/momentum
          }}
          speed={4000} // scroll speed
          autoplay={{
            delay: 0, // continuous movement
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 30 },
            768: { slidesPerView: 3, spaceBetween: 40 },
            1024: { slidesPerView: 4, spaceBetween: 60 },
          }}
          className="!py-10"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-20">
                <img
                  src={logo}
                  alt="partner"
                  className="h-40 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}