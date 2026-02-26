import { motion } from "framer-motion";

import GavelIcon from "@mui/icons-material/Gavel";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";

const clients = [
  {
    title: "Auto Auction Buyers",
    icon: GavelIcon,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Car Dealers",
    icon: StorefrontIcon,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Exporters",
    icon: ImportExportIcon,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Fleet Operators",
    icon: AirportShuttleIcon,
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Logistics Companies",
    icon: BusinessIcon,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Private Vehicle Owners",
    icon: PersonIcon,
    gradient: "from-pink-500 to-rose-600",
  },
];

export default function WhoWeServeModern() {
  return (
    <section className="pt-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="title">
            Who We <span>Serve</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Strategically located warehouses for seamless logistics
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {clients.map((client, index) => {

            const Icon = client.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >

                {/* Glow (FIXED) */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${client.gradient}
                  opacity-0 group-hover:opacity-20 blur-2xl transition duration-300 z-0`}
                />

                {/* Content wrapper (important) */}
                <div className="relative z-10">

                  {/* Icon */}
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${client.gradient}
                  flex items-center justify-center text-white shadow-md`}>
                    <Icon sx={{ fontSize: 28 }} />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-gray-800">
                    {client.title}
                  </h3>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}