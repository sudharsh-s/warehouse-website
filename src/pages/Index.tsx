import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import heroImg from '@/assets/hero-warehouse.jpg';
import warehouseInterior from '@/assets/warehouse-interior.jpg';
import containerLoading from '@/assets/container-loading.jpg';
import SecurityIcon from '@mui/icons-material/Security';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LanguageIcon from '@mui/icons-material/Language';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import GroupsIcon from '@mui/icons-material/Groups';
import GavelIcon from '@mui/icons-material/Gavel';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import WarehouseProcessTabs from "@/components/WarehouseProcessTabs";
import RunningText from "@/components/RunningText";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import LocationSection from "@/components/LocationSection";
import WhoWeServe from "@/components/WhoWeServe";
import StickyProcessSection from "@/components/StickyProcessSection";
import BrandSlider from "@/components/BrandSlider";
import AboutWarehouseTabs from "@/components/AboutWarehouseTabs";

const Index = () => {
  const { t } = useTranslation();

  const whyChooseUs = [
    { icon: SecurityIcon, key: 'secure' },
    { icon: EngineeringIcon, key: 'experienced' },
    { icon: LanguageIcon, key: 'global' },
    { icon: IntegrationInstructionsIcon, key: 'integrated' },
    { icon: GroupsIcon, key: 'reliable' },
  ];

  const whoWeServe = [
    { icon: GavelIcon, key: 'auction' },
    { icon: StorefrontIcon, key: 'dealers' },
    { icon: ImportExportIcon, key: 'exporters' },
    { icon: AirportShuttleIcon, key: 'fleet' },
    { icon: BusinessIcon, key: 'logistics' },
    { icon: PersonIcon, key: 'private' },
  ];

  const slides = [
    {
      type: "video",
      src: "/videos/home_slider_1.mp4",
      badge: "Trusted Global Warehouse Solutions",
      title: "Smart Warehouse",
      highlight: "Storage & Logistics",
      subtitle:
        "Secure, scalable, and technology-driven warehouse solutions for global logistics.",
    },
    {
      type: "video",
      src: "/videos/home_slider_2.mp4",
      badge: "Global Shipping Experts",
      title: "Fast & Secure",
      highlight: "Vehicle Logistics",
      subtitle:
        "Reliable vehicle storage, shipping, and distribution worldwide.",
    },
    {
      type: "video",
      src: "/videos/home_slider_3.mp4",
      badge: "Modern Infrastructure",
      title: "Advanced",
      highlight: "Warehouse Facilities",
      subtitle:
        "State-of-the-art facilities for secure storage and logistics operations.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section with Background Video */}
      <section className="relative h-[30vh] md:h-[50vh] lg:h-[80vh]  flex items-center justify-center overflow-hidden">

        {/* Slides */}
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {slide.type === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={slide.src}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl px-6">

          <motion.div
            key={current + "-content"}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
            <div className="inline-block px-4 py-2 mb-4 rounded-full bg-white/20 border border-white/40 text-white text-sm font-semibold backdrop-blur">
              {slides[current].badge}
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-[65px] font-black text-white mb-6">
              {slides[current].title}
              <span className="block text-secondary">
                {slides[current].highlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/80 mb-8">
              {slides[current].subtitle}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center">

              <Link
                to="/contact"
                className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Get Started
              </Link>

              <Link
                to="/services/warehouse-storage"
                className="border border-white/40 bg-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition"
              >
                View Services
              </Link>

            </div>

          </motion.div>

        </div>

        {/* Dots */}
        {/* <div className="absolute bottom-8 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-primary" : "bg-white/40"
              }`}
            />
          ))}
        </div> */}

      </section>

      <RunningText />

      {/* <WarehouseProcessTabs /> */}

      <AboutWarehouseTabs />

      {/* <WarehouseNetwork /> */}

      {/* <Indicators /> */}

      <StatsSection />

      <ServicesSection />

      {/* <LocationSection /> */}

      <WhoWeServe />

      <StickyProcessSection />

      {/* <WhyChooseSection /> */}

      <BrandSlider />


      {/* Services Preview */}
      {/* <section className="section-padding">
        <div className="container-enterprise">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('services.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden h-72 group">
                <img src={warehouseInterior} alt="Warehouse" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-6 start-6 end-6">
                  <h3 className="text-xl font-bold text-navy-foreground mb-1">{t('services.storage.title')}</h3>
                  <p className="text-sm text-navy-foreground/80">{t('services.storage.description')}</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden h-72 group">
                <img src={containerLoading} alt="Container Loading" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-6 start-6 end-6">
                  <h3 className="text-xl font-bold text-navy-foreground mb-1">{t('services.container.title')}</h3>
                  <p className="text-sm text-navy-foreground/80">{t('services.container.description')}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default Index;
