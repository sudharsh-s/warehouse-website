import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PublicIcon from "@mui/icons-material/Public";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import aboutContainer1 from "@/assets/services/shipping-3.jpeg";
import aboutContainer2 from "@/assets/container-loading.jpg";

import aboutImg1 from "@/assets/about/about-page-slider.jpg";
import aboutImgMap from "@/assets/about/about-map.png";
import aboutShape from "@/assets/about/about-v1-shape3.png";

import BrandSlider from "@/components/BrandSlider";
import WarehouseNetwork from "@/components/WarehouseNetwork"; 
import TestimonialSection from "@/components/TestimonialSection"; 
import WhyChooseSection from "@/components/WhyChooseSection";
import DSVNumbersSection from "@/components/DSVNumbersSection";
import AboutRunning from "@/components/AboutRunning";
import SouthIcon from '@mui/icons-material/South';


const About = () => {

  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  const features = t("aboutPage.features", { returnObjects: true }) as {
    title: string;
    desc: string;
  }[];

  return (
    <>
      
      <section className="relative w-full overflow-hidden bg-[#011533]">
      
        {/* Main Container */}
        <div className="grid md:grid-cols-2 pt-28 pb-14 md:pb-20 relative">

          {/* World Map Background */}
          <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/about/about-map.png')] bg-cover bg-center" />
          
          {/* LEFT RED PANEL */}
          <div className="relative flex items-end px-5 md:px-16 lg:px-20">

            <div className="relative z-10 text-white mb-10 md:mb-14">

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                {t("aboutPage.heroTitle")}
              </motion.h1>

              {/* Small Heading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="uppercase tracking-widest text-xs mt-6"
              >
                {t("aboutPage.heroSubtitle")}
              </motion.p>

              {/* Scroll Down */}
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-3 mt-16 cursor-pointer"
              >
                <span className="text-lg">Scroll Down</span>

                <motion.div
                  animate={{ 
                    y: [0, 10, 0],   
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="-mt-3"
                >
                  <SouthIcon fontSize="small" />
                </motion.div>
              </motion.div> */}

            </div>
          </div>

          {/* RIGHT IMAGE PANEL */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-end px-5 md:px-0"
          >
            <img
              src={aboutImg1}
              alt="Logistics"
              className="w-full h-[250px] md:h-[400px] pr-0 md:pr-20 object-cover object-bottom"
            />
          </motion.div>

        </div>
      </section>

      <AboutRunning />

      <div>

        <section className="pt-10 md:pb-20 lg:pb-32 mb-10 md:mb-0 bg-white overflow-hidden relative">

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-26 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Badge */}
              <div className="flex items-center gap-3 mt-4 mb-4">

                <div className="w-8 h-[2px] bg-primary"></div>

                <span className="uppercase tracking-widest text-gray-500 font-semibold text-sm">
                  {t("aboutPage.companyBadge")}
                </span>

              </div>


              {/* Heading */}
              <h2 className="text-3xl md:text-[35px] font-bold text-black leading-tight mb-6">

                {t("aboutPage.mainHeadingLine1")}

                <span className="block text-primary underline decoration-primary decoration-4 underline-offset-4">
                  {t("aboutPage.mainHeadingLine2")}
                </span>

              </h2>


              {/* Description */}
              <p className="text-gray-500 text-base leading-5 mb-10 max-w-xl">
                {t("aboutPage.description")}
              </p>


              {/* Feature Cards */}
              <div className="grid lg:grid-cols-2 gap-6 mb-10">

                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 border-l-4 border-primary shadow-sm">

                    {index === 0 ? (
                      <PublicIcon className="text-primary mb-3" />
                    ) : (
                      <SupportAgentIcon className="text-primary mb-3" />
                    )}

                    <h4 className="font-semibold text-lg text-[#0b2c3d] mb-2">
                      {feature.title}
                    </h4>

                    <p className="text-gray-500 text-base leading-5">
                      {feature.desc}
                    </p>

                  </div>
                ))}

              </div>


              {/* Buttons Row */}
              <div className="block lg:flex items-center gap-8">

                <Link to='/services/warehouse-storage' 
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
                  {t("aboutPage.exploreButton")}
                </Link>


                {/* Phone */}
                <div className="flex items-center gap-4 mt-10 lg:mt-0">

                  <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
                    <PhoneIcon className="text-primary" />
                  </div>

                  <div>

                    <div className="text-primary font-semibold">
                      {t("aboutPage.phoneLabel")}
                    </div>

                    <div className="font-bold text-[#0b2c3d]">
                      +1-505-289-9797
                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT SIDE IMAGES */}
            <div
              className={`relative flex justify-center mt-10 md:mt-0
              ${rtl ? "md:mr-11" : "md:pl-11"}`}
            >

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
                className="absolute bottom-[-100px] right-auto left-0 md:left-auto md:right-0 w-[260px] h-[340px] shadow-xl border-8 border-white"
              />


             <motion.img
              src={aboutShape}
              alt=""
              className="absolute bottom-[-120px] about-flight hidden md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

              {/* Circle Badge */}
              <div
                className={`relative w-full md:w-[900px] h-[170px] top-56 flex items-center justify-center
                ${
                  rtl
                    ? "left-[100px] md:left-[200px]"
                    : "right-[100px] md:right-[200px]"
                }`}
              >

                {/* Rotating Text Circle */}
                <motion.svg
                  viewBox="0 0 200 200"
                  className="absolute w-auto xl:w-full h-full"
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
                    letterSpacing="6"
                  >
                    <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                      • WELCOME TO NEJOUM EXPRESS
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
                className={`absolute top-[30px] md:grid grid-cols-6 gap-3 opacity-80 hidden ${rtl ? "left-[20px]" : "right-[20px]"}`}
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

      <DSVNumbersSection />

      <WhyChooseSection />

      <TestimonialSection />

      <div className='pt-12 bg-white'>
        <BrandSlider />
      </div>

      {/* <WarehouseNetwork /> */}

    </>
  );
};

export default About;
