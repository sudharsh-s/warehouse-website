import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from "framer-motion";
import PublicIcon from "@mui/icons-material/Public";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import aboutContainer1 from "@/assets/global-shipping.jpg";
import aboutContainer2 from "@/assets/container-loading.jpg";

import aboutImg1 from "@/assets/about/about-page-slider-1.jpg";
import aboutImg2 from "@/assets/about/about-page-slider-3.jpg";
import aboutShape from "@/assets/about/about-v1-shape3.png";

import BrandSlider from "@/components/BrandSlider";
import WarehouseNetwork from "@/components/WarehouseNetwork"; 
import TestimonialSection from "@/components/TestimonialSection"; 
import WhyChooseSection from "@/components/WhyChooseSection";
import DSVNumbersSection from "@/components/DSVNumbersSection";
import { useEffect, useState } from 'react';

const slides = [
  aboutImg1,
  aboutImg2,
];

const About = () => {

  const [index, setIndex] = useState(0);

  // Auto slide change
  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) => (prev + 1) % slides.length);

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <>
      <section className="relative h-[500px] overflow-hidden">

        {/* Background Image Slider */}
        <AnimatePresence mode="wait">

          <motion.div
            key={index}

            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 4, ease: "linear" },
            }}
            className="absolute inset-0"
          >

            <img
              src={slides[index]}
              className="w-full h-full object-cover"
            />

          </motion.div>

        </AnimatePresence>

        {/* Left Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r
        from-[#000]/85
        via-[#000]/70
        to-transparent"/>

        {/* Optional world map overlay */}
        <div className="
          absolute inset-0 opacity-10
          bg-[url('/src/assets/world-map-dotted.webp')]
          bg-left bg-no-repeat
        "/>


        {/* Content */}
        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="pl-12 relative">

            {/* Vertical Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 80 }}
              transition={{ duration: 1 }}
              className="absolute left-6 top-1/2 -translate-y-1/2
                        w-[4px] bg-primary"
            />

              {/* Title */}
              <motion.h1
                key={index + "-title"}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-white text-6xl font-bold mb-4"
              >
                About Company
              </motion.h1>


              {/* Breadcrumb */}
              <motion.div
                key={index + "-breadcrumb"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg"
              >

                <a href="/">
                  <span className="text-white underline font-semibold">
                    Home
                  </span>
                </a>

                <span className="text-white mx-2">
                  →
                </span>

                <span className="text-white">
                  About Company
                </span>

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      <div>

        <section className="pt-16 pb-24 bg-white overflow-hidden relative">

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-26 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Badge */}
              <div className="flex items-center gap-3 mb-4">

                <div className="w-8 h-[2px] bg-primary"></div>

                <span className="uppercase tracking-widest text-gray-500 font-semibold text-sm">
                  Our Company ✈
                </span>

              </div>


              {/* Heading */}
              <h2 className="text-[50px] font-bold text-black leading-tight mb-6">

                Our Expertise Stands in

                <span className="block text-primary underline decoration-primary decoration-4 underline-offset-4">
                  Logistics Solutions
                </span>

              </h2>


              {/* Description */}
              <p className="text-gray-500 text-lg mb-10 max-w-xl">
                Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently managing the movement of goods from origin to final destination.
              </p>


              {/* Feature Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">

                {/* Card 1 */}
                <div className="bg-white p-6 border-l-4 border-primary shadow-sm">

                  <PublicIcon className="text-primary mb-3" />

                  <h4 className="font-semibold text-lg text-[#0b2c3d] mb-2">
                    Worldwide Service
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Logistic service provider company plays a pivotal role in the global
                  </p>

                </div>


                {/* Card 2 */}
                <div className="bg-white p-6 border-l-4 border-primary shadow-sm">

                  <SupportAgentIcon className="text-primary mb-3" />

                  <h4 className="font-semibold text-lg text-[#0b2c3d] mb-2">
                    24/7 Online Support
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Logistic service provider company plays a pivotal role in the global
                  </p>

                </div>

              </div>


              {/* Buttons Row */}
              <div className="flex items-center gap-8">

                <a href='/services/warehouse-storage' className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
                  Expolre Our Services →
                </a>


                {/* Phone */}
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
                    <PhoneIcon className="text-primary" />
                  </div>

                  <div>

                    <div className="text-primary font-semibold">
                      Make A Phone Call
                    </div>

                    <div className="font-bold text-[#0b2c3d]">
                      +1-734-496-3761
                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT SIDE IMAGES */}
            <div className="relative flex justify-center pl-11">

              {/* Top Image */}
              <motion.img
                src={aboutContainer1}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-[360px] h-[400px] object-cover shadow-xl"
              />

              {/* Bottom Image */}
              <motion.img
                src={aboutContainer2}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-[-100px] right-0 w-[260px] h-[340px] shadow-xl border-8 border-white"
              />


             <motion.img
              src={aboutShape}
              alt=""
              className="absolute bottom-[-120px] about-flight"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

              {/* Circle Badge */}
              <div className="relative w-[900px] h-[170px] top-56 right-[200px] flex items-center justify-center">

                {/* Rotating Text Circle */}
                <motion.svg
                  viewBox="0 0 200 200"
                  className="absolute w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Orange circle */}
                  <circle cx="100" cy="100" r="85" fill="#013089"
                  />

                  {/* White inner circle */}
                  <circle cx="100" cy="100"  r="55" fill="white"
                  />

                  {/* Circular Text Path */}
                  <path 
                    id="circlePath" 
                    d="M 100,100 m -65,0 
                      a 65,65 0 1,1 130,0 
                      a 65,65 0 1,1 -130,0" 
                    fill="none"
                  />

                  {/* Text */}
                  <text
                    fill="white"
                    fontSize="14"
                    fontWeight="bold"
                    letterSpacing="2"
                  >
                    <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                      • WELCOME TO NEJOUM EXPRESS •
                    </textPath>
                  </text>

                </motion.svg>

                {/* Center Icon */}
                <div className="absolute w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center">

                  <LocationOnIcon
                    sx={{ fontSize: 36 }}
                    className="text-[#013089]"
                  />

                </div>

              </div>

              {/* Decorative Dots */}
              <motion.div
                className="absolute right-[20px] top-[30px] grid grid-cols-6 gap-3 opacity-80"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {[...Array(42)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-primary rounded-full"></div>
                ))}
              </motion.div>

            </div>

          </div>

        </section>
        
      </div>

      <WhyChooseSection />

      <DSVNumbersSection />

      <TestimonialSection />

      <div className='pt-12 bg-white'>
        <BrandSlider />
      </div>

      {/* <WarehouseNetwork /> */}

    </>
  );
};

export default About;
