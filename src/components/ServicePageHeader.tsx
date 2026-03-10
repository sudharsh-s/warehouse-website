import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";

import truckRoad from "@/assets/services/service-header-truck.png"; 
import warehouse from "@/assets/services/warehouse-page-header.png"; 
import ocean from "@/assets/services/ocean-page-header.png"; 
import air from "@/assets/services/air-page-header.png"; 
import car from "@/assets/services/car-page-header.png"; 
import inspection from "@/assets/services/inspection-page-header.png"; 
import smallImg from "@/assets/services/service-header-img1.jpg";
import shape1 from "@/assets/services/service-shape1.png";
import shape2 from "@/assets/services/service-shape2.png";

import warehouseImg7 from "@/assets/services/warehouse-stroage-7.jpg";


export default function TransportHero() {
    const { t, i18n } = useTranslation();
    const rtl = isRTL(i18n.language);

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
        label: t("servicesHero.tabs.warehouse.label"),
        title: t("servicesHero.tabs.warehouse.title"),
        outline: t("servicesHero.tabs.warehouse.outline"),
        content: t("servicesHero.tabs.warehouse.content"),
      },
      {
        id: "road",
        slug: "road-freight",
        label: t("servicesHero.tabs.road.label"),
        title: t("servicesHero.tabs.road.title"),
        outline: t("servicesHero.tabs.road.outline"),
        content: t("servicesHero.tabs.road.content"),
      },
      {
        id: "sea",
        slug: "ocean-freight",
        label: t("servicesHero.tabs.sea.label"),
        title: t("servicesHero.tabs.sea.title"),
        outline: t("servicesHero.tabs.sea.outline"),
        content: t("servicesHero.tabs.sea.content"),
      },
      {
        id: "air",
        slug: "air-freight",
        label: t("servicesHero.tabs.air.label"),
        title: t("servicesHero.tabs.air.title"),
        outline: t("servicesHero.tabs.air.outline"),
        content: t("servicesHero.tabs.air.content"),
      },
      {
        id: "car",
        slug: "car-wrapping",
        label: t("servicesHero.tabs.car.label"),
        title: t("servicesHero.tabs.car.title"),
        outline: t("servicesHero.tabs.car.outline"),
        content: t("servicesHero.tabs.car.content"),
      },
      {
        id: "inspection",
        slug: "inspection-customs",
        label: t("servicesHero.tabs.inspection.label"),
        title: t("servicesHero.tabs.inspection.title"),
        outline: t("servicesHero.tabs.inspection.outline"),
        content: t("servicesHero.tabs.inspection.content"),
      },
    ];

  const truckImages = {
    "warehouse-storage": { src: warehouseImg7, className: "w-[65%] md:w-[35%] bottom-8 -left-3" },
    "road-freight": { src: truckRoad, className: "w-[65%] md:w-[30%] bottom-8 -left-3" },
    "ocean-freight": { src: ocean, className: "w-[95%] md:w-[45%] bottom-10 md:bottom-0 -left-20 md:-left-36" },
    "air-freight": { src: air, className: "w-full md:w-[45%] bottom-0 -left-32" },
    "car-wrapping": { src: car, className: "w-[85%] md:w-[40%] bottom-0 -left-20" },
    "inspection-customs": { src: inspection, className: "w-full md:w-[50%] bottom-0 -left-14 md:-left-36" },
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
      <section className="relative service-page-header min-h-[650px] md:min-h-[800px] overflow-hidden flex items-center pt-24">

        {/* RIGHT FLOAT IMAGE */}
        <motion.div
          animate={{ y: [ -10, 10 ] }} 
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className={`absolute top-20 hidden lg:block z-[2] ${
            rtl ? "-left-20" : "-right-20"
          }`}
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
          animate={{
            x: [-10, 10],
            scaleX: rtl ? -1 : 1
          }}
          transition={{
            x: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            },
            scaleX: {
              duration: 0
            }
          }}
          className={`absolute block z-[1] ${
            rtl
              ? currentTruck.className
                  .replace(/-left/g, "-right")
                  .replace(/left/g, "right")
              : currentTruck.className
          }`}
        />

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 items-center -mt-16 md:-mt-0">

          <img src={shape2} alt="Shape 2" className="absolute opacity-25 z-0" />

          <div className={`text-white absolute top-32 transform md:-translate-x-1/2 z-10 ${
            rtl ? "right-4 md:right-1/2 text-right" : "left-4 md:left-1/2 text-left"
          }`}>

            {/* Main Heading */}
            <motion.h1
              key={activeTab} 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] lg:text-5xl font-bold !leading-[1.1] whitespace-pre-line"
            >
              {activeTabData.title}
            </motion.h1>


            {/* OUTLINE TEXT */}
            <motion.div
              key={activeTab + "-outline"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ duration: 0.8 }}
              className={`absolute text-[45px] md:text-[70px] font-bold 
                top-16 md:top-24 
                ${rtl ? "right-0 text-right" : "left-0 text-left"} 
                text-transparent select-none pointer-events-none`}
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
            initial={{ opacity: 0, x: rtl ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white mt-0 md:mt-10 ml-0 md:-ml-20"
          >

            <p className="text-white/80 mb-6 max-w-md">
              {t("servicesHero.heroDescription")}
            </p>

            {/* Tabs */}
            <div className={`hidden md:flex w-fit rounded overflow-hidden shadow-md relative z-10 ${
              rtl ? "flex-row-reverse" : ""
            }`}>
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

        <section className={`absolute hidden md:block w-[55%] bottom-0 overflow-hidden ${
          rtl ? "left-0" : "right-0"
        }`}>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

            {/* 1 */}
            <div>
              <h2 className="text-5xl font-bold text-primary">
                <Counter to={1500} />k+
              </h2>
              <p className="mt-2 text-lg font-semibold text-gray-700">
                {t("servicesHero.stats.vehicles")}
              </p>
              <div className="w-24 h-[2px] bg-gray-300 mx-auto mt-3" />
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-5xl font-bold text-primary">
                <Counter to={23} />+
              </h2>
              <p className="mt-2 text-lg font-semibold text-gray-700">
                {t("servicesHero.stats.experience")}
              </p>
              <div className="w-24 h-[2px] bg-gray-300 mx-auto mt-3" />
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-5xl font-bold text-primary">
                <Counter to={57} />+
              </h2>
              <p className="mt-2 text-lg font-semibold text-gray-700">
                {t("servicesHero.stats.countries")}
              </p>
              <div className="w-24 h-[2px] bg-gray-300 mx-auto mt-3" />
            </div>

          </div>
        </section>

      </section>

      <section className="block bg-white pt-3 md:hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

            {/* 1 */}
            <div>
              <h2 className="text-5xl font-bold text-primary">
                <Counter to={1500} />k+
              </h2>
              <p className="mt-2 text-base md:text-lg font-semibold text-gray-700">
                {t("servicesHero.stats.vehicles")}
              </p>
              <div className="w-24 h-[2px] bg-gray-300 mx-auto mt-3" />
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-5xl font-bold text-primary">
                <Counter to={23} />+
              </h2>
              <p className="mt-2 text-base md:text-lg font-semibold text-gray-700">
                {t("servicesHero.stats.experience")}
              </p>
              <div className="w-24 h-[2px] bg-gray-300 mx-auto mt-3" />
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-5xl font-bold text-primary">
                <Counter to={57} />+
              </h2>
              <p className="mt-2 text-base md:text-lg font-semibold text-gray-700">
                {t("servicesHero.stats.countries")}
              </p>
              <div className="w-24 h-[2px] bg-gray-300 mx-auto mt-3" />
            </div>

          </div>
        </section>

    </>

  );

}