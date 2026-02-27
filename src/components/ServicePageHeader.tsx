import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";

import truckRoad from "@/assets/services/service-header-truck.png"; 
import warehouse from "@/assets/services/warehouse-page-header.png"; 
import ocean from "@/assets/services/ocean-page-header.png"; 
import air from "@/assets/services/air-page-header.png"; 
import car from "@/assets/services/car-page-header.png"; 
import inspection from "@/assets/services/inspection-page-header.png"; 
import smallImg from "@/assets/services/service-header-img1.jpg";
import shape1 from "@/assets/services/service-shape1.png";
import shape2 from "@/assets/services/service-shape2.png";


export default function TransportHero() {

  const detailRef = useRef(null);

  const { slug } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("warehouse");

    useEffect(() => {

      if (!slug) return;

      const matchedTab = tabs.find(tab => tab.slug === slug);

      if (matchedTab) {
        setActiveTab(matchedTab.id);
      }

    }, [slug]);

    const handleTabChange = (tabId) => {

      const tab = tabs.find(t => t.id === tabId);

      if (!tab) return;

      setActiveTab(tabId);

      // Update URL
      navigate(`/services/${tab.slug}`);

      // Scroll after animation
      setTimeout(() => {

        if (detailRef.current) {

          const topPos =
            detailRef.current.getBoundingClientRect().top + window.scrollY;

          const offset = 50;

          window.scrollTo({
            top: topPos - offset,
            behavior: "smooth",
          });

        }

      }, 1000);

    };

    const tabs = [
    {
      id: "warehouse",
      slug: "warehouse-storage",
      label: "Warehouse",
      title: "POWERING\nYOUR STORAGE",
      outline: "WAREHOUSE",
      content: "Secure and efficient warehouse and storage solutions.",
    },
    {
      id: "road",
      slug: "road-freight",
      label: "Road",
      title: "PROFESSIONAL\nROAD FREIGHT",
      outline: "ROAD",
      content: "Efficient ground transportation across regions.",
    },
    {
      id: "sea",
      slug: "ocean-freight",
      label: "Ocean",
      title: "GLOBAL\nOCEAN FREIGHT",
      outline: "OCEAN",
      content: "Cost-effective international sea shipping solutions.",
    },
    {
      id: "air",
      slug: "air-freight",
      label: "Air",
      title: "INTERNATIONAL\nAIR FREIGHT",
      outline: "AIR",
      content: "Fast and reliable air cargo solutions worldwide.",
    },
    {
      id: "car",
      slug: "car-wrapping",
      label: "Wrapping",
      title: "PROFESSIONAL\nWRAPPING",
      outline: "WRAPPING",
      content: "High-quality packaging and wrapping solutions to protect your goods.",
    },
    {
      id: "inspection",
      slug: "inspection-customs",
      label: "Customs",
      title: "THOROUGH\nINSPECTION",
      outline: "CLEARANCE",
      content: "Comprehensive inspection services ensuring compliance and safety.",
    },
  ];

  const truckImages = {
    "warehouse-storage": { src: warehouse, className: "w-[35%] bottom-8 -left-3" },
    "road-freight": { src: truckRoad, className: "w-[35%] bottom-0 -left-3" },
    "ocean-freight": { src: ocean, className: "w-[45%] bottom-0 -left-36" },
    "air-freight": { src: air, className: "w-[45%] bottom-0 -left-32" },
    "car-wrapping": { src: car, className: "w-[40%] bottom-0 -left-20" },
    "inspection-customs": { src: inspection, className: "w-[50%] bottom-0 -left-36" },
  };

  const currentTruck = truckImages[slug] || { src: truckRoad, className: "bottom-0 -left-3 w-[35%]" };

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  function Counter({ from = 0, to }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const count = useMotionValue(from);
    const rounded = useTransform(count, latest => Math.floor(latest));

    useEffect(() => {
      if (isInView) {
        animate(count, to, {
          duration: 2,
          ease: "easeOut"
        });
      }
    }, [isInView, to, count]);

    return (
      <motion.span ref={ref}>
        {rounded}
      </motion.span>
    );
  }

  return (
    <>
      <section className="relative service-page-header min-h-[800px] overflow-hidden flex items-center pt-24">

        {/* RIGHT FLOAT IMAGE */}
        <motion.div
          animate={{ y: [ -10, 10 ] }} 
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-20 -right-20 hidden lg:block z-[2]"
        >
          <div className="service-page-img-1">
            <img
              src={smallImg}
              className="w-56 h-60 object-cover rounded relative"
            />
          </div>
          <img src={shape1} alt="Shape 1" className="absolute top-8 -left-20 z-[-1] w-3/4" />
        </motion.div>

        {/* LEFT TRUCK IMAGE */}
        <motion.img
          src={currentTruck.src}
          animate={{ x: [ -10, 10 ] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className={`absolute hidden lg:block z-[1] ${currentTruck.className}`}
        />

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 items-center">

          <img src={shape2} alt="Shape 2" className="absolute opacity-25 z-0" />

          <div className="text-white absolute top-32 left-1/2 transform -translate-x-1/2 z-10">

            {/* Main Heading */}
            <motion.h1
              key={activeTab} 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line"
            >
              {activeTabData.title}
            </motion.h1>


            {/* OUTLINE TEXT */}
            <motion.div
              key={activeTab + "-outline"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ duration: 0.8 }}
              className="absolute text-[90px] font-bold top-24 left-0 text-transparent select-none pointer-events-none"
              style={{
                WebkitTextStroke: "1px white",
              }}
            >
              {activeTabData.outline}
            </motion.div>

          </div>

          {/* LEFT TEXT */}
          <div className="text-white relative z-10"></div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white mt-10 -ml-20"
          >

            <p className="text-white/80 mb-6 max-w-md">
              If you have a parcel and want to know its latest update,
              then check the latest update with your parcel ID.
            </p>

            {/* Tabs */}
            <div className="flex w-fit rounded overflow-hidden shadow-md relative z-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-6 py-3 text-sm font-semibold transition-all duration-300
                    ${
                      activeTab === tab.id
                        ? "gradient-primary text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-white/80 max-w-md"
            >
              {tabs.find(tab => tab.id === activeTab)?.content}
            </motion.div>

          </motion.div>

        </div>

        <section className="absolute right-0 w-[55%] bottom-0 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

            {/* 1 */}
            <div>
              <h2 className="text-5xl font-bold text-primary">
                <Counter to={541} />+
              </h2>
              <p className="mt-2 text-lg font-semibold text-gray-700">
                Distribution Center
              </p>
              <div className="w-24 h-[2px] bg-gray-300 mx-auto mt-3" />
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-5xl font-bold text-primary">
                <Counter to={54} />+
              </h2>
              <p className="mt-2 text-lg font-semibold text-gray-700">
                Years Of Experience
              </p>
              <div className="w-24 h-[2px] bg-gray-300 mx-auto mt-3" />
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-5xl font-bold text-primary">
                <Counter to={50} />+
              </h2>
              <p className="mt-2 text-lg font-semibold text-gray-700">
                Countries & Regions
              </p>
              <div className="w-24 h-[2px] bg-gray-300 mx-auto mt-3" />
            </div>

          </div>
        </section>

      </section>

    </>

  );

}