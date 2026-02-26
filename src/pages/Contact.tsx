import { AnimatePresence, motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import EditIcon from "@mui/icons-material/Edit";
import EastIcon from '@mui/icons-material/East';

import contactImg from "@/assets/contact/contact-form.jpg";
import { useEffect, useState } from "react";

import contactImg1 from "@/assets/contact/contact-1.jpg";
import contactImg2 from "@/assets/contact/contact-2.jpg";

const slides = [
  contactImg1,
  contactImg2,
];

export default function ContactSection() {

    const [index, setIndex] = useState(0);
  
    // Auto slide change
    useEffect(() => {
  
      const interval = setInterval(() => {
  
        setIndex((prev) => (prev + 1) % slides.length);
  
      }, 3000);
  
      return () => clearInterval(interval);
  
    }, []);

  return (
    <>
      <section className="relative h-[500px] overflow-hidden">

        {/* Background Image Slider */}
        <AnimatePresence mode="wait">

          <motion.div
            key={index}

            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 4, ease: "linear" },
            }}
            className="absolute inset-0"
          >

            <img
              src={slides[index]}
              className="w-full h-full object-cover"
            />

          </motion.div>

        </AnimatePresence>

        {/* Left Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r
        from-[#000]/85
        via-[#000]/70
        to-transparent"/>

        {/* Optional world map overlay */}
        <div className="
          absolute inset-0 opacity-10
          bg-[url('/src/assets/world-map-dotted.webp')]
          bg-left bg-no-repeat
        "/>


        {/* Content */}
        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="pl-12 relative">

            {/* Vertical Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 80 }}
              transition={{ duration: 1 }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-[4px] bg-primary"
            />

              {/* Title */}
              <motion.h1
                key={index + "-title"}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-white text-6xl font-bold mb-4"
              >
                Contact
              </motion.h1>


              {/* Breadcrumb */}
              <motion.div
                key={index + "-breadcrumb"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg"
              >

                <a href="/">
                  <span className="text-white underline font-semibold">
                    Home
                  </span>
                </a>

                <span className="text-white mx-2">
                  →
                </span>

                <span className="text-white">
                  Contact
                </span>

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      <section className="py-16 bg-[#f4f7fb]">

        <div className="max-w-7xl mx-auto px-6">

          {/* CENTER HEADING */}
          <div className="text-center mb-12">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium mb-4"
            >
              Contact Us »
            </motion.div>

            <h2 className="text-4xl font-bold text-[#0b2c3d]">
              Reach out anytime for help!
            </h2>

          </div>

          {/* MAIN FORM AREA */}
          <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-lg overflow-hidden">

            {/* FORM */}
            <div className="p-10 rounded-3xl bg-white -mr-5 z-[1]">

              <div className="grid gap-5">

                <Input icon={<PersonIcon />} placeholder="Your Name" />

                <div className="grid grid-cols-2 gap-4">

                  <Input icon={<EmailIcon />} placeholder="Your Email" />

                  <Input icon={<PhoneIcon />} placeholder="Phone No:" />

                </div>

                <div className="grid grid-cols-2 gap-4">

                  <Select placeholder="Freight Type" />

                  <Select placeholder="Load" />

                </div>

                <Textarea icon={<EditIcon />} placeholder="Message" />

                {/* BUTTON */}
                <button className="
                  gradient-primary text-white py-4 rounded-full
                  font-semibold hover:scale-[1.02]
                  transition
                ">
                  APPOINTMENT NOW <EastIcon />
                </button>

              </div>

            </div>


            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative h-full"
            >
              <img
                src={contactImg}
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>

          {/* TOP INFO CARDS */}
          <div className="grid md:grid-cols-3 gap-6 mt-20 mb-5">

            <InfoCard
              icon={<LocationOnIcon />}
              title="Our Address"
              text="235 Camden St, United States"
              text2="33454, NY"
            />

            <InfoCard
              icon={<ContactPhoneIcon />}
              title="Contact Number"
              text="Phone: +165-920-6677"
              text2="Email: info@tranzit.com"
            />

            <InfoCard
              icon={<AccessTimeIcon />}
              title="Opening Hour"
              text="Monday - Saturday: 9:00 - 18:00"
              text2="Sunday: Closed"
            />

          </div>

        </div>

      </section>
    </>
  );
}


function InfoCard({ icon, title, text, text2 }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="
        flex items-center gap-4
        bg-white p-6 rounded-2xl
        border border-gray-200
      "
    >
      <div className="gradient-primary text-white p-3 rounded-xl">
        {icon}
      </div>

      <div>
        <div className="font-semibold text-[#0b2c3d]">
          {title}
        </div>
        <div className="text-gray-500 text-sm">{text}</div>
        <div className="text-gray-500 text-sm">{text2}</div>
      </div>
    </motion.div>
  );
}


function Input({ icon, placeholder }) {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className="
          w-full bg-gray-100
          rounded-full px-5 py-3
          outline-none focus:ring-2 focus:ring-primary border
        "
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary">
        {icon}
      </div>
    </div>
  );
}


function Select({ placeholder }) {
  return (
    <select
      className="
        w-full bg-gray-100
        rounded-full px-5 py-3
        outline-none focus:ring-2 focus:ring-primary border
      "
    >
      <option>{placeholder}</option>
      <option>Air Freight</option>
      <option>Road Freight</option>
      <option>Ocean Freight</option>
    </select>
  );
}


function Textarea({ icon, placeholder }) {
  return (
    <div className="relative">
      <textarea
        placeholder={placeholder}
        rows={4}
        className="
          w-full bg-gray-100
          rounded-2xl px-5 py-3
          outline-none focus:ring-2 focus:ring-primary border
        "
      />
      <div className="absolute right-4 top-4 text-primary">
        {icon}
      </div>
    </div>
  );
}