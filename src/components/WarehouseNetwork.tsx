import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import worldMap from "@/assets/maps/world-map-dotted.webp";

import njMap from "@/assets/maps/newjersey.webp";
import gaMap from "@/assets/maps/georgia.jpg";
import txMap from "@/assets/maps/texas.webp";
import ca1Map from "@/assets/maps/california.webp";
import ca2Map from "@/assets/maps/california.webp";
import waMap from "@/assets/maps/tacoma.png";
import krMap from "@/assets/maps/korea.webp";

const locations = [
  {
    id: 1,
    top: "40%",
    left: "22%",
    city: "New Jersey, USA",
    address: "6 Linden Ave. East Jersey City, NJ 07305",
    map: njMap
  },

  {
    id: 2,
    top: "48%",
    left: "20%",
    city: "Georgia, USA",
    address: "46 Artley Road Savannah, GA 31408",
    map: gaMap
  },

  {
    id: 3,
    top: "52%",
    left: "18%",
    city: "Texas, USA",
    address: "6320 Madden Ln, Houston, TX 77048",
    map: txMap
  },

  {
    id: 4,
    top: "48%",
    left: "12%",
    city: "California, USA",
    address: "131 E. Gardena Blvd. Gardena, CA 90248",
    map: ca1Map
  },

  {
    id: 5,
    top: "50%",
    left: "12%",
    city: "California, USA",
    address: "14611 S. Broadway. Gardena CA 90248",
    map: ca2Map
  },

  {
    id: 6,
    top: "40%",
    left: "10%",
    city: "Tacoma, USA",
    address: "1001 E 26th St, Tacoma, WA 98421",
    map: waMap
  },

  {
    id: 7,
    top: "42%",
    left: "84%",
    city: "Incheon, South Korea",
    address: "Incheon, Republic of Korea",
    map: krMap
  }
];

export default function WarehouseNetwork() {

  const [active, setActive] = useState(null);

  return (
    <section className="relative pt-16 pb-10 bg-[#f8f8f8]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-1"
        >

          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full"/>
            <span className="text-gray-600 font-medium">
              Warehouse Map
            </span>
          </div>

          <h2 className="text-5xl font-bold text-gray-900">
            Our Worldwide <br />
            Warehouse Network
          </h2>

        </motion.div>


        {/* Map */}
        <div className="relative">

          <motion.img
            src={worldMap}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.35 }}
            transition={{ duration: 1 }}
            className="w-full"
          />


          {/* Locations */}
          {locations.map((loc, index) => (

            <motion.div
              key={loc.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="absolute"
              style={{
                top: loc.top,
                left: loc.left
              }}
              onMouseEnter={() => setActive(loc.id)}
              onMouseLeave={() => setActive(null)}
            >

              {/* Pulse Layer 1 */}
              <motion.div
                animate={{
                  scale: [1, 2],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute w-5 h-5 bg-primary rounded-full"
                style={{ top: "-2px", left: "-2px" }}
              />

              {/* Pulse Layer 2 (delay for smooth continuous effect) */}
              <motion.div
                animate={{
                  scale: [1, 2],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1
                }}
                className="absolute w-5 h-5 bg-primary rounded-full"
                style={{ top: "-2px", left: "-2px" }}
              />


              {/* Dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="relative w-4 h-4 bg-primary rounded-full cursor-pointer z-10 shadow-md"
              />


              {/* Tooltip */}
              <AnimatePresence>

                { active === loc.id &&  (

                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 
                              bg-white shadow-2xl rounded-xl overflow-hidden flex items-start p-3
                              w-56 z-50"
                  >

                    {/* Map Image */}
                    <div className="h-9 rounded-full overflow-hidden" style={{width: "49px"}}>
                      <img
                        src={loc.map}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="px-3">

                      <div className="text-sm font-semibold text-gray-900">
                        {loc.city}
                      </div>

                      <div className="text-xs text-gray-500 mt-1">
                        {loc.address}
                      </div>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}