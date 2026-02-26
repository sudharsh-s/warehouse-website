import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import houstonImg from "@/assets/usa.webp";
import dubaiImg from "@/assets/dubai.avif";
import germanyImg from "@/assets/germany.jpg";
import saudi from "@/assets/saudi.avif";

const locations = [
  { title: "New Jersey", subTitle: "6 Linden Ave. East Jersey City, NJ 07305", image: houstonImg, icon: LocationOnIcon },
  { title: "Georgia", subTitle: "46 Artley Road Savannah, GA 31408", image: dubaiImg, icon: LocationOnIcon },
  { title: "Texas", subTitle: "6320 Madden Ln, Houston, TX 77048", image: germanyImg, icon: LocationOnIcon },
  { title: "California", subTitle: "131 E. Gardena Blvd. Gardena, CA 90248", image: saudi, icon: LocationOnIcon },
  { title: "California", subTitle: "14611 S. Broadway. Gardena CA 90248", image: saudi, icon: LocationOnIcon },
  { title: "Tacoma", subTitle: "1001 E 26th st, Tacoma 98421 WA", image: saudi, icon: LocationOnIcon },
  { title: "Korea", subTitle: "Incheon, Republic of Korea", image: saudi, icon: LocationOnIcon },
];

export default function LocationSection() {

  return (
    <section className="pt-20 bg-white relative">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-7">
          <h2 className="title">
            Our Global <span>Locations</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Strategically located warehouses for seamless logistics
          </p>
        </div>
        <div className="relative">

          {/* Custom Arrows */}
          <div className="swiper-button-prev-custom absolute -left-[5rem] top-1/2 z-10 -translate-y-1/2 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur border border-gray-300 shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
              <ChevronLeftIcon className="group-hover:scale-125 transition" />
            </div>
          </div>

          <div className="swiper-button-next-custom absolute -right-[5rem] top-1/2 z-10 -translate-y-1/2 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur border border-gray-300 shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
              <ChevronRightIcon className="group-hover:scale-125 transition" />
            </div>
          </div>


          {/* Swiper */}
          <Swiper

            modules={[Navigation, Autoplay]}

            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}

            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}

            speed={500}

            loop={true}

            spaceBetween={30}

            slidesPerView={1}

            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}

          >

            {locations.map((location, index) => {

              const Icon = location.icon;

              return (

                <SwiperSlide key={index}>

                  <motion.div
                    whileHover={{
                      y: -12,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="group transition-all duration-500 mt-5"
                  >

                    {/* Image */}
                    <div className="overflow-hidden rounded-3xl">

                      <img
                        src={location.image}
                        className="w-full h-[250px] object-cover rounded-3xl transition duration-700 group-hover:scale-110"
                      />

                    </div>


                    {/* Content */}
                    <div className="relative bg-white rounded-3xl px-6 pb-6 pt-10 w-[95%] -mt-10 shadow-md mb-4 transition duration-500 group-hover:shadow-xl">

                      {/* Icon */}
                      <div className="absolute -top-8 left-6 gradient-primary p-4 rounded-xl shadow-lg group-hover:scale-110 transition">

                        <Icon className="text-white" sx={{ fontSize: 28 }} />

                      </div>


                      <h3 className="text-xl font-bold text-gray-900">
                        {location.title}
                      </h3>

                      <p className="text-sm mt-1 text-gray-600 h-[40px]">
                        {location.subTitle}
                      </p>

                    </div>

                  </motion.div>

                </SwiperSlide>

              );

            })}

          </Swiper>
        </div>

      </div>

    </section>
  );

}