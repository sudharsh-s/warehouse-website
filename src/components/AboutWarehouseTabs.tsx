import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import Language from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import {
  Phone,
  Mail,
} from "lucide-react";

import warehouse1 from "@/assets/about/aboutwarehouse-1.jpg";
import warehouse2 from "@/assets/about/aboutwarehouse-2.jpg";
import warehouse3 from "@/assets/about/aboutwarehouse-3.jpg";
import warehouse4 from "@/assets/about/aboutwarehouse-4.jpg";
import warehouse5 from "@/assets/about/aboutwarehouse-5.jpg";
import warehouse6 from "@/assets/about/aboutwarehouse-6.jpg";
import warehouse7 from "@/assets/about/aboutwarehouse-7.jpg";
import worldMap from "@/assets/about/about-world-map.webp";

import side from "@/assets/about/about-page-slider.jpg";

const tabs = [
  { id: 1, image: side },
  { id: 2, image: side },
  { id: 3, image: side },
  { id: 4, image: side },
  { id: 5, image: side },
  { id: 6, image: side },
  { id: 7, image: side },
];

export default function AboutWarehouseTabs() {

  const { t } = useTranslation();
  const mailTitle = t("aboutWarehouse.mailTitle");
  const phoneTitle = t("aboutWarehouse.phoneTitle");
  const locations = t("aboutWarehouse.locations", {
    returnObjects: true,
  }) as {
    title: string;
    location: string;
    name?: string;
    phone?: string;
    mail?: string;
  }[];

  const features = t("aboutWarehouse.features", {
    returnObjects: true,
  }) as { title: string; desc: string }[];

  const [activeTab, setActiveTab] = useState(0);

  const active = {
    ...tabs[activeTab],
    ...locations[activeTab],
  };

  return (
    <section className="relative py-14 md:py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 z-[1] relative">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-7">

          <div>
            <div className="flex items-center gap-3 text-primary mb-3 md:mb-6">

              <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-l-primary border-t-transparent border-b-transparent"/>
              <span className="text-base md:text-2xl font-semibold leading-8">{t("aboutWarehouse.badge")}</span>

            </div>
          </div>

          <div className="flex gap-4 items-start ml-0 md:-ml-10">

            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-0 h-0 border-t-[10px] border-b-[10px] 
                        border-l-[14px] border-l-primary 
                        border-t-transparent border-b-transparent mt-2 hidden md:block"
            />

            <div>
              <h5 className="text-2xl md:text-[35px] font-semibold leading-7 md:leading-10 mb-2">{t("aboutWarehouse.title")}</h5>
              <p className="text-gray-500 text-base leading-[22px]">
                {t("aboutWarehouse.description")}
              </p>
            </div>

          </div>

        </div>

      </div>

        <div className="relative">
          {/* Background Map */}
          <img src={worldMap} className="absolute right-0 top-0 w-full h-full z-[0] pointer-events-none hidden md:block" />

            <div className="max-w-7xl mx-auto px-6 z-[1] relative">

              {/* Main Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-16 items-center mt-12 md:mt-0">

                {/* LEFT IMAGE */}
                <div className="relative">

                  {/* Image Animation */}
                  {/* <AnimatePresence mode="wait">

                    <motion.img
                      key={active.image}
                      src={active.image}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-lg shadow-lg w-full h-[300px] md:h-[450px] object-cover"
                    />

                  </AnimatePresence> */}

                  <motion.img
                    src={side}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg shadow-lg w-full h-[300px] md:h-[450px] object-cover"
                  />


                  {/* Floating + Button */}
                  {/* <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute -top-6 -left-4 md:-left-7 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-2xl shadow-lg cursor-pointer"
                  >
                    +
                  </motion.div> */}


                  {/* Image Label */}
                  {/* <motion.div
                    key={active.id + "-label"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-6 left-6 bg-black/40 text-white px-4 py-3 rounded"
                  >

                    <div className="text-sm font-semibold">
                      {active.title}
                    </div>

                    <div className="text-xs opacity-80">
                      {active.location}
                      {locations[0]?.location}
                    </div>

                  </motion.div> */}

                </div>


                {/* RIGHT TABS */}
                <div>

                  {locations.map((translated, index) => {

                    const isActive = index === activeTab;

                    return (

                      <motion.div
                        key={index}
                        onClick={() => setActiveTab(index)}
                        whileHover={{ x: 5 }}
                        className="cursor-pointer py-3 md:py-4 border-b last:border-b-0 border-gray-200"
                      >

                        <div className="flex items-start gap-3">

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">

                            <div>
                              <div className="font-semibold text-md text-gray-700">
                                {translated.title}
                              </div>

                              <div className="text-sm font-medium text-gray-700 mt-1">
                                {translated.location}
                              </div>
                            </div>

                            {/* <div>
                              <div className="font-semibold text-md text-gray-700">
                                {translated.name}
                              </div>

                              <div className="text-sm font-medium text-gray-700 mt-1">
                                <p><span className="font-semibold text-black">{phoneTitle}:</span> {translated.phone}</p>
                                <p><span className="font-semibold text-black">{mailTitle}:</span> {translated.mail}</p>
                              </div>
                            </div> */}

                          </div>

                        </div>

                      </motion.div>

                    );
                  })}
                  <div className="flex gap-4 items-center mt-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-primary flex justify-center items-center rounded-full">
                        <Mail size={20} className="text-white"/>
                      </div>
                      info@nejoumexpress.com
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-primary flex justify-center items-center rounded-full">
                        <Phone size={20} className="text-white"/>
                      </div>
                      +1-505-289-9797
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5 mt-5 md:mt-10 border-t border-l border-r divide-y md:divide-y-0 md:divide-x divide-grey/10">

                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    icon={[VerifiedUser, WarehouseIcon, Language][index]}
                    title={feature.title}
                    desc={feature.desc}
                  />
                ))}

              </div>
            </div>
        </div>

    </section>
  );
}


function Feature({ icon: Icon, title, desc }) {
  return (
    <motion.div className="p-6">
      <div className="text-primary text-2xl mb-3">
        <Icon fontSize="medium" />
      </div>

      <div className="font-semibold mb-2">
        {title}
      </div>

      <div className="text-gray-500 text-base leading-[22px]">
        {desc}
      </div>
    </motion.div>
  );
}