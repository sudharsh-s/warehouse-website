import { motion } from "framer-motion";
import "@/index.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import airImg from "@/assets/services/air-freight.png";
import oceanImg from "@/assets/services/ocean-freight.png";
import roadImg from "@/assets/services/road-freight.png";
import internaltionl from "@/assets/vehicle-inspection.jpg";
import car from "@/assets/services/car-freight.png";

import WarehouseIcon from "@mui/icons-material/Warehouse";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import PublicIcon from "@mui/icons-material/Public";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

import serviceBg1 from "@/assets/services/service-bg-1.png";
import serviceBg2 from "@/assets/services/service-bg-2.png";

const services = [
  {
    slug: "warehouse-storage",
    title: "Warehouse and Storage",
    description: "Secure, flexible warehouse solutions to store and manage your goods efficiently.",
    image: oceanImg,
    icon: WarehouseIcon,
  },
  {
    slug: "road-freight",
    title: "Road Freight",
    description: "Reliable and efficient road freight solutions to move your cargo safely and on time.",
    image: roadImg,
    icon: LocalShippingIcon,
  },
  {
    slug: "ocean-freight",
    title: "Ocean Freight",
    description: "Efficient and reliable ocean freight solutions for global shipping of your goods.",
    image: oceanImg,
    icon: InventoryIcon,
  },
  {
    slug: "air-freight",
    title: "Air Freight",
    description: "Fast and reliable air freight solutions for urgent and international shipments.",
    image: airImg,
    icon: AirportShuttleIcon,
  },
  {
    slug: "car-wrapping",
    title: "Car Wrapping",
    description: "Easily and beautifully transform your vehicle with high-quality, custom car wraps.",
    image: car,
    icon: PublicIcon,
  },
  {
    slug: "inspection-customs",
    title: "Inspection & Customs Clearance",
    description: "Hassle-free inspection and customs clearance for smooth import/export.",
    image: internaltionl,
    icon: DocumentScannerIcon,
  },
];

export default function ServicesSection({ isServicePage = false }) {
  return (
    <section className={`py-20 bg-[#001F3F] overflow-hidden relative ${isServicePage ? "bg-white" : ""}`}>
      <div className="">
        <img src={serviceBg1} alt="Tier" className={`w-1/2 absolute left-0 top-0 ${isServicePage ? "invert" : "filter-none"}`} />
      </div>
      <div>
        <img src={serviceBg2} alt="Tier" className={`w-1/2 absolute right-0 top-0 ${isServicePage ? "invert" : "filter-none"}`} />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className={`title ${isServicePage ? "text-black text-5xl" : "text-white"}`}>
            Our Services
          </h2>

          <p className={`text-white/70 ${isServicePage ? "text-black" : "text-white"}`}>
            Comprehensive logistics and warehouse solutions
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-11">

          {services.map((service, index) => {

            const Icon = service.icon;
            const isFirst = index === 0;

            return (

              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={isFirst ? { y: -10 } : {}}
                transition={{ duration: 0.4 }}
                className="relative group service-card cursor-pointer"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={service.image}
                    className="w-full h-[280px] object-cover"
                  />

                  {/* Hover overlay ONLY first card */}
                  { (
                    <div className="absolute inset-0 bg-[#0c2d48]/60 opacity-0 group-hover:opacity-80 transition duration-500" />
                  )}

                </div>


                {/* CONTENT BOX */}
                <div className={`relative ml-5 -mt-24 p-6 pr-14 shadow-md z-10 service-card-content ${isServicePage ? "bg-white" : "bg-[#f3f4f6]"}`}>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold mb-4 leading-7">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 text-base leading-5 mb-6">
                    {service.description}
                  </p>

                  {/* READ MORE */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-black"
                  >
                    Read More <ArrowRight className="w-5 h-5 mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>

                </div>


                {/* ICON CORNER BOX */}
                <div className="absolute bottom-0 z-10 -right-5">

                  {/* Triangle Fold */}
                  <div className=" absolute right-[2px] -top-[23px] rotate-90 w-0 h-0 border-l-[20px] border-l-transparent border-b-[26px] border-b-[#1f3d8e]"></div>

                  {/* Orange Icon Box */}
                  <div className=" w-20 h-20 gradient-primary flex items-center justify-center shadow-lg">
                    <service.icon sx={{ fontSize: 36 }} className="text-white" />
                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

