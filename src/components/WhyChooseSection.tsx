import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SecurityIcon from "@mui/icons-material/Security";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicIcon from "@mui/icons-material/Public";
import circleBg from "@/assets/global-shipping.jpg";
import abtCircle1 from "@/assets/about-circle-1.webp";
import abtCircle2 from "@/assets/about-circle-2.webp";

const features = [
  {
    icon: LocationOnIcon,
    title: "4 US Warehouse Locations",
    description: "Industry-leading vehicle logistics with proven reliability.",
    color: "from-blue-500 to-indigo-600",
    y: -250,
  },
  {
    icon: SecurityIcon,
    title: "Secure Yards with Surveillance",
    description: "Quick turnaround with efficient dispatch coordination.",
    color: "from-purple-500 to-indigo-600",
    y: -160,
  },
  {
    icon: AccountTreeIcon,
    title: "Integrated Dispatch & Logistics",
    description: "Seamless workflow from storage to final delivery.",
    color: "from-teal-500 to-cyan-600",
    y: -60,
  },
  {
    icon: DirectionsCarIcon,
    title: "Specialized Automotive Handling",
    description: "Reliable logistics partner for companies and individuals.",
    color: "from-gray-500 to-gray-700",
    y: 30,
  },
  {
    icon: GroupsIcon,
    title: "Companies & Individuals",
    description: "Industry-leading vehicle logistics with proven reliability.",
    color: "from-orange-500 to-red-600",
    y: 120,
  },
  {
    icon: PublicIcon,
    title: "Domestic & International",
    description: "Quick turnaround with efficient dispatch coordination.",
    color: "from-green-500 to-emerald-600",
    y: 210,
  },
];

export default function WhyChooseCircularSection() {
  return (
    <section className="pt-20 pb-28 bg-white overflow-hidden">
        <div className="text-center mb-14">
          <h2 className="title">
            Why <span>Choose US</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            We ensure efficient warehouse operations through preparation,
            logistics involvement, and continuous optimization.
          </p>
        </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-16">

        {/* LEFT SIDE */}
        <div className="relative w-[600px] h-[600px] flex items-center justify-center">

          {/* Background Circle */}
          <motion.img
            src={circleBg}
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.06, 1], // zoom in → zoom out
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="absolute w-[600px] h-[600px] rounded-full object-cover"
          />

          {/* Main Circle */}
          <motion.img
            src={abtCircle1}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            animate={{
              y: [0, 25, 0],
              x: [0, 10, 0],
              rotate: [0, -6, 0, 6, 0],
            }}
            transition={{
              scale: { delay: 0.3, duration: 0.8 },
              y: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              },
              x: {
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute -left-20 bottom-5 w-[230px] h-[230px] rounded-full gradient-primary flex items-center justify-center text-white text-center font-bold text-3xl shadow-xl"
          />

          <motion.img
            src={abtCircle2}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            animate={{
              y: [0, -30, 0],
              x: [0, -15, 0],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              scale: { delay: 0.5, duration: 0.8 },
              y: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
              x: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute right-6 top-5 w-[120px] h-[120px] object-cover rounded-full gradient-primary flex items-center justify-center text-white text-center font-bold text-3xl shadow-xl"
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-10 h-[500px] relative">

          {/* Floating Icons */}
          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className={`absolute -left-4 w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg`}
                style={{ top: `calc(50% + ${feature.y}px)` }}
              >
                <Icon />
              </motion.div>
            );
          })}

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-6 ml-16"
              >

                {/* Line */}
                <div className="w-12 h-[2px] bg-gray-300" />

                {/* Text */}
                <div>

                  <div className="text-xl font-semibold text-gray-800">
                    {feature.title}
                  </div>

                  <div className="text-gray-500">
                    {feature.description}
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