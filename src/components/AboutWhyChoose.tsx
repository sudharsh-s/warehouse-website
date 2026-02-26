import { motion } from "framer-motion";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PublicIcon from "@mui/icons-material/Public";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsIcon from "@mui/icons-material/Settings";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import bgWorld from "@/assets/about/about-map.png";
import logisticsImg from "@/assets/International-Shipping.jpg";
import avatar1 from "@/assets/germany.jpg";
import avatar2 from "@/assets/germany.jpg";
import avatar3 from "@/assets/germany.jpg";
import avatar4 from "@/assets/germany.jpg";

export default function WhyChooseUsHero() {
  return (
    <section className="relative overflow-hidden">

      {/* LEFT DARK SECTION */}
      <div className="bg-[#011533] text-white relative">

        <div className="flex">

          {/* LEFT CONTENT */}
          <div className="relative w-[50%] pl-32 pr-20 pt-20 pb-28 z-[0]">

            {/* World map background */}
            <img
              src={bgWorld}
              className="absolute inset-0 w-full h-full object-cover opacity-10 z-[-1]"
            />

            {/* small heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-sm text-white font-semibold mb-4"
            >
              — WHY CHOOSE US ✈
            </motion.div>


            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              Transportation Services We <br />
              Are Often{" "}
              <span className="text-secondary underline underline-offset-4">
                CONSIDERED
              </span>
            </motion.h2>


            {/* description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 mb-10 max-w-lg"
            >
              Logistic service provider company plays a pivotal role in the
              global supply chain ecosystem by efficiently managing movement.
            </motion.p>


            {/* Happy clients */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6"
            >
              {/* avatars */}
              <div className="flex -space-x-3">

                <img src={avatar1} className="w-10 h-10 rounded-full border-2 border-white"/>
                <img src={avatar2} className="w-10 h-10 rounded-full border-2 border-white"/>
                <img src={avatar3} className="w-10 h-10 rounded-full border-2 border-white"/>
                <img src={avatar4} className="w-10 h-10 rounded-full border-2 border-white"/>

              </div>

              {/* text */}
              <div>
                <div className="text-3xl font-bold">1500+</div>
                <div className="text-white/80">Happy Clients</div>
              </div>

            </motion.div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="relative w-[45%] mx-auto pt-20 pb-28">

            <motion.img
              src={logisticsImg}
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="rounded-lg shadow-xl"
            />


            {/* Play button */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
                <PlayArrowIcon className="text-white" fontSize="large"/>
              </div>
            </motion.div>

          </div>

        </div>
      </div>


      {/* FEATURE CARDS */}
      <div className="max-w-3xl mx-auto relative -mt-24 mb-20 z-20">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 bg-white shadow-2xl"
        >

          <Feature icon={PublicIcon} title="Global Logistics Operation"/>
          <Feature icon={SecurityIcon} title="Safety & Security Delivery"/>
          <Feature icon={SettingsIcon} title="Professional Logistics Management"/>
          <Feature icon={LocationOnIcon} title="Real Time Location Tracking"/>

        </motion.div>

      </div>

    </section>
  );
}



function Feature({ icon: Icon, title }) {
  return (
    <div className="p-8 border">

      <div className="flex items-center gap-4 mb-3">

        <Icon className="text-secondary"/>

        <div className="font-bold text-gray-800">
          {title}
        </div>

      </div>

      <div className="text-gray-500 text-sm">
        A logistic service provider company plays a role in global chain
      </div>

    </div>
  );
}