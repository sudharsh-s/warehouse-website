import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

import prepareImg from "@/assets/warehouse-prepare.jpg";
import envolveImg from "@/assets/warehouse-envolve.jpg";
import optimizeImg from "@/assets/warehouse-optimize.jpg";

const tabs = [
  {
    id: "prepare",
    title: "Prepare",
    heading: "Efficient Warehouse Preparation",
    description:
      "We prepare your inventory with structured storage, labeling, and optimized placement. Our advanced warehouse systems ensure fast access, accurate tracking, and seamless handling.",
    points: [
      "Inventory inspection and verification",
      "Barcode labeling and system entry",
      "Organized storage planning",
      "Fast intake processing",
    ],
    image: prepareImg,
  },
  {
    id: "envolve",
    title: "Envolve",
    heading: "Complete Logistics Envolvement",
    description:
      "Our team manages full logistics coordination including storage, container handling, and shipment preparation for smooth global operations.",
    points: [
      "Container loading & unloading",
      "Shipment coordination",
      "Global logistics handling",
      "Real-time tracking",
    ],
    image: envolveImg,
  },
  {
    id: "optimize",
    title: "Optimize",
    heading: "Warehouse Optimization",
    description:
      "We continuously optimize warehouse operations using technology, analytics, and workflow improvements for maximum efficiency.",
    points: [
      "Smart space utilization",
      "Process automation",
      "Performance monitoring",
      "Cost optimization",
    ],
    image: optimizeImg,
  },
];

export default function WarehouseProcessTabs() {
  const [active, setActive] = useState("prepare");

  const activeTab = tabs.find((tab) => tab.id === active);

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="title">
            Our Warehouse <span>Process</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            We ensure efficient warehouse operations through preparation,
            logistics involvement, and continuous optimization.
          </p>
        </div>

        {/* Tabs */}
        <div className="relative border-b-1 border-grey-400">

          <div className="flex justify-center gap-16">

            {tabs.map((tab) => {
              const isActive = active === tab.id;

              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative py-4 text-lg font-medium"
                >

                  {/* Tab Text */}
                  <span
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "gradient-primary text-white px-4 py-2 rounded-full"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {tab.title}
                  </span>

                  {/* Arrow Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="tabArrow"
                      className="absolute left-1/2 -translate-x-1/2 bottom-[-9px]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    >
                      <div className="w-4 h-4 bg-white border-b-2 border-r-2 border-grey-400 rotate-45"></div>
                    </motion.div>
                  )}

                </motion.button>
              );
            })}

          </div>

        </div>

        {/* Content */}
        <div className="py-16 px-10 rounded-lg border-2">

          <AnimatePresence mode="wait">

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >

              {/* LEFT CONTENT */}
              <div>

                <h3 className="text-3xl font-bold mb-4">
                  {activeTab?.heading}
                </h3>

                <p className="text-gray-500 mb-6">
                  {activeTab?.description}
                </p>

                <ul className="space-y-3 mb-8">

                  {activeTab?.points.map((point, index) => (
                    <li key={index} className="flex items-center gap-3">

                      <CheckCircle className="w-5 h-5 text-primary" />

                      <span className="text-gray-700">
                        {point}
                      </span>

                    </li>
                  ))}

                </ul>

                {/* Animated Button with Arrow */}
                <motion.button
                  whileHover="hover"
                  className="group flex items-center gap-2 gradient-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-semibold"
                >

                  Learn More

                  <motion.div
                    variants={{
                      hover: { x: 6 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>

                </motion.button>

              </div>

              {/* RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >

                <img
                  src={activeTab?.image}
                  alt={activeTab?.title}
                  className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                />

                {/* Accent glow */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/10 rounded-2xl blur-2xl"></div>

              </motion.div>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}