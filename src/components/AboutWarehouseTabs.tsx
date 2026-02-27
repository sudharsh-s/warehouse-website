import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import Language from "@mui/icons-material/Language";

import warehouse1 from "@/assets/about/aboutwarehouse-1.jpg";
import warehouse2 from "@/assets/about/aboutwarehouse-2.jpg";
import warehouse3 from "@/assets/about/aboutwarehouse-3.jpg";
import warehouse4 from "@/assets/about/aboutwarehouse-4.jpg";
import warehouse5 from "@/assets/about/aboutwarehouse-5.jpg";
import warehouse6 from "@/assets/about/aboutwarehouse-6.jpg";
import warehouse7 from "@/assets/about/aboutwarehouse-7.jpg";
import worldMap from "@/assets/about/about-world-map.webp";

const tabs = [
  {
    id: 1,
    title: "New Jersey",
    location: "6 Linden Ave. East Jersey City, NJ 07305",
    image: warehouse2,
  },
  {
    id: 2,
    title: "Georgia",
    location: "46 Artley Road Savannah, GA 31408",
    image: warehouse4,
  },
  {
    id: 3,
    title: "Texas",
    location: "6320 Madden Ln, Houston, TX 77048",
    image: warehouse1,
  },
  {
    id: 4,
    title: "California",
    location: "131 E. Gardena Blvd. Gardena, CA 90248",
    image: warehouse3,
  },
  {
    id: 5,
    title: "California",
    location: "14611 S. Broadway. Gardena CA 90248",
    image: warehouse5,
  },
  {
    id: 6,
    title: "Tacoma",
    location: "1001 E 26th st, Tacoma 98421 WA",
    image: warehouse6,
  },
  {
    id: 7,
    title: "Korea",
    location: "Incheon, Republic of Korea",
    image: warehouse7,
  },
];

export default function AboutWarehouseTabs() {

  const [activeTab, setActiveTab] = useState(0);

  const active = tabs[activeTab];

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 z-[1] relative">

        {/* Header */}
        <div className="grid grid-cols-2 mb-7">

          <div>
            <div className="flex items-center gap-3 text-primary mb-6">

              <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-l-primary border-t-transparent border-b-transparent"/>
              <span className="font-semibold text-base">WHO WE ARE </span>

            </div>
          </div>

          <div className="flex gap-4 items-start -ml-10">

            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-0 h-0 border-t-[10px] border-b-[10px] 
                        border-l-[14px] border-l-primary 
                        border-t-transparent border-b-transparent mt-2"
            />

            <div>
              <h5 className="text-2xl font-semibold leading-8 mb-2">Strategic U.S. Vehicle Yards for Global Export</h5>
              <p className="">
                Our nationwide yard network across the USA supports auction purchases, bulk inventory management, consolidation, and international shipping. Designed for efficiency and scale, our facilities streamline towing, warehousing, loading, and export clearance — ensuring your vehicles move faster from auction floor to global destination.
              </p>
            </div>

          </div>

        </div>

      </div>

        <div className="relative">
          {/* Background Map */}
          <img src={worldMap} className="absolute right-0 top-0 w-full h-full z-[0] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 z-[1] relative">

              {/* Main Grid */}
              <div className="grid grid-cols-2 gap-16 items-center">

                {/* LEFT IMAGE */}
                <div className="relative">

                  {/* Image Animation */}
                  <AnimatePresence mode="wait">

                    <motion.img
                      key={active.image}
                      src={active.image}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-lg shadow-lg w-full h-[450px] object-cover"
                    />

                  </AnimatePresence>


                  {/* Floating + Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute -top-6 -left-7 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-2xl shadow-lg cursor-pointer"
                  >
                    +
                  </motion.div>


                  {/* Image Label */}
                  <motion.div
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
                    </div>

                  </motion.div>

                </div>


                {/* RIGHT TABS */}
                <div>

                  {tabs.map((tab, index) => {

                    const isActive = index === activeTab;

                    return (

                      <motion.div
                        key={tab.id}
                        onClick={() => setActiveTab(index)}
                        whileHover={{ x: 5 }}
                        className="cursor-pointer py-5 border-b last:border-b-0 border-gray-200"
                      >

                        <div className="flex items-start gap-3">

                          {/* Arrow indicator */}
                          <motion.div
                            initial={false}
                            animate={{
                              x: isActive ? 0 : -12,  
                              opacity: isActive ? 1 : 0
                            }}
                            transition={{
                              duration: 0.3,
                              ease: "easeOut"
                            }}
                            className="w-0 h-0 mt-2 border-t-[5px] border-b-[5px]
                                      border-l-[8px] border-l-primary
                                      border-t-transparent border-b-transparent"
                          />

                          <div>

                            <div className={`font-semibold ${
                              isActive ? "text-primary" : "text-gray-700"
                            }`}>
                              {tab.title}
                            </div>

                            <div className={`text-sm ${isActive ? "text-primary" : "text-gray-700"} mt-1`}>
                              {tab.location}
                            </div>

                          </div>

                        </div>

                      </motion.div>

                    );

                  })}

                </div>

              </div>

              {/* Bottom Feature Cards */}
              <div className="grid grid-cols-3 gap-5 mt-10 border-t border-l border-r divide-x divide-grey/10">

                <Feature
                  icon={VerifiedUser}
                  title="Trusted by Industry Leaders"
                  desc="We've earned the confidence of global brands through consistent delivery."
                />

                <Feature
                  icon={WarehouseIcon}
                  title="Expert Handling & Clearance"
                  desc="Seamless documentation and cargo handling from start to finish."
                />

                <Feature
                  icon={Language}
                  title="Digital Logistics Platform"
                  desc="Manage and optimize shipments with real-time tracking."
                />

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

      <div className="text-gray-500 text-sm">
        {desc}
      </div>
    </motion.div>
  );
}