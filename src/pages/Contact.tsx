import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";

import EastIcon from '@mui/icons-material/East';
import ChatIcon from '@mui/icons-material/ChatBubbleOutline';

import { useEffect, useState } from "react";

import contactImg from "@/assets/contact/contact.jpg";
import SouthIcon from '@mui/icons-material/South';

import AboutRunning from "@/components/AboutRunning";

// const slides = [
//   contactImg1,
//   contactImg2,
// ];

export default function ContactSection() {
  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  const [index, setIndex] = useState(0);
  
    // Auto slide change
    // useEffect(() => {
  
    //   const interval = setInterval(() => {
  
    //     setIndex((prev) => (prev + 1) % slides.length);
  
    //   }, 3000);
  
    //   return () => clearInterval(interval);
  
    // }, []);

  return (
    <>
      {/* <section className="relative h-[500px] overflow-hidden">

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

          <div className="absolute inset-0 bg-gradient-to-r
          from-[#000]/85
          via-[#000]/70
          to-transparent"/>

          <div className="
            absolute inset-0 opacity-10
            bg-[url('/src/assets/world-map-dotted.webp')]
            bg-left bg-no-repeat
          "/>

          <div className="relative z-10 h-full flex items-center">

            <div className="max-w-7xl mx-auto px-6 w-full">

              <div className="pl-12 relative">

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 80 }}
                transition={{ duration: 1 }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-[4px] bg-primary"
              />

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

      </section> */}

      <section className="relative w-full overflow-hidden bg-[#011533]">
      
        {/* Main Container */}
        <div className="grid md:grid-cols-2 pt-28 pb-14 md:pb-20 relative">

          {/* World Map Background */}
          <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/about/about-map.png')] bg-cover bg-center" />
          
          {/* LEFT RED PANEL */}
          <div className="relative flex items-end px-10 md:px-16 lg:px-20">

            <div className="relative z-10 text-white mb-10 md:mb-14">

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                {t("contactPage.heroTitle")}
              </motion.h1>

              {/* Small Heading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="uppercase tracking-widest text-sm mt-6"
              >
                {t("contactPage.heroSubtitle")}
              </motion.p>

              {/* Scroll Down */}
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-3 mt-16 cursor-pointer"
              >
                <span className="text-lg">Scroll Down</span>

                <motion.div
                  animate={{ 
                    y: [0, 10, 0], 
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="-mt-3"
                >
                  <SouthIcon fontSize="small" />
                </motion.div>
              </motion.div> */}

            </div>
          </div>

          {/* RIGHT IMAGE PANEL */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-end px-10 md:px-0"
          >
            <img
              src={contactImg}
              alt="Logistics"
              className="w-full h-[250px] md:h-[400px] pr-0 md:pr-20 object-cover"
            />
          </motion.div>

        </div>
      </section>

      <AboutRunning />

      <section className="bg-gray-50 py-12 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12"
        >

          {/* ================= LEFT SIDE ================= */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:col-span-3"
          >

            {/* FORM CARD */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-6">{t("contactPage.formTitle")}</h2>

              <form className="space-y-6">

                {/* FULL NAME */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">
                    {t("contactPage.fullName")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("contactPage.fullNamePlaceholder")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition"
                  />
                </motion.div>

                {/* EMAIL + PHONE */}
                <div className="grid md:grid-cols-2 gap-5">

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      {t("contactPage.email")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("contactPage.emailPlaceholder")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      {t("contactPage.phone")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("contactPage.phonePlaceholder")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition"
                    />
                  </motion.div>

                  {/* SERVICE SELECT */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      {t("contactPage.service")}
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition">
                      <option>{t("contactPage.selectService")}</option>
                      <option>Warehouse</option>
                      <option>Transport</option>
                      <option>Air Freight</option>
                      <option>Ocean Freight</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      {t("contactPage.subject")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("contactPage.subjectPlaceholder")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition"
                    />
                  </motion.div>

                </div>

                {/* MESSAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">
                    {t("contactPage.message")}
                  </label>
                  <textarea
                    rows={4}
                    maxLength={500}
                    placeholder={t("contactPage.messagePlaceholder")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition"
                  />
                </motion.div>

                {/* SUBMIT BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="px-8 py-3 rounded-lg gradient-primary text-white font-semibold shadow-md transition"
                >
                  {t("contactPage.submit")} <EastIcon />
                </motion.button>

              </form>
            </motion.div>

            {/* GOOGLE MAP */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.967194706422!2d-95.31930742426026!3d29.633696037914735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409522f034cdbb%3A0x2d62b02c848dec5b!2sNejoum%20Express!5e0!3m2!1sen!2sin!4v1772183403500!5m2!1sen!2sin"
                className="w-full h-64 invert hue-rotate-180"
                loading="lazy"
              />
            </motion.div>

          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 60 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-6">{t("contactPage.contactInfoTitle")}</h2>

            <div className="space-y-5">

              {[
                {
                  icon: <MapPin size={20} />,
                  title: t("contactPage.office"),
                  text: t("contactPage.officeAddress"),
                },
                {
                  icon: <Phone size={20} />,
                  title: t("contactPage.mainPhone"),
                  text: t("contactPage.mainPhoneText"),
                },
                {
                  icon: <Mail size={20} />,
                  title: t("contactPage.emailTitle"),
                  text: t("contactPage.emailText"),
                },
                {
                  icon: <Clock size={20} />,
                  title: t("contactPage.availability"),
                  text: t("contactPage.availabilityText"),
                },
                {
                  icon: <ChatIcon fontSize="small" />,
                  title: t("contactPage.responseTime"),
                  text: t("contactPage.responseText"),
                },
                {
                  icon: <Clock size={20} />,
                  title: t("contactPage.workingHours"),
                  text: t("contactPage.workingHoursText"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true }}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start transition"
                >
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* SUPPORT CARD */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 text-center mt-6"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <MessageCircle />
                </div>

                <h4 className="font-semibold text-lg mb-2">
                  {t("contactPage.supportTitle")}
                </h4>

                <p className="text-gray-500 text-sm mb-4">
                  {t("contactPage.supportDesc")}
                </p>

                <a href="tel:+1-505-289-9797">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-lg gradient-primary text-white font-semibold shadow-md transition"
                  >
                    {t("contactPage.supportButton")}
                  </motion.button>
                </a>
              </motion.div>

            </div>
          </motion.div>

        </motion.div>
      </section>

     </>
  );
}