import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import warehouseImg from "@/assets/about/about-page-slider.jpeg";

import user1 from "@/assets/user/user-1.png";
import user2 from "@/assets/user/user-2.png";
import user3 from "@/assets/user/user-3.png";

const testimonials = [
  {
    id: 1,
    name: "Ronald Richards",
    role: "Manager",
    image: user1,
    rating: 5,
    text: "A logistic service provider company plays a pivotal role in the global supply chain. Their efficiency and reliability improved our delivery performance significantly.",
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    role: "Director",
    image: user2,
    rating: 5,
    text: "Their warehouse network and fast shipping helped us scale globally. Professional team and excellent service.",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    role: "CEO",
    image: user3,
    rating: 5,
    text: "Reliable logistics partner. Their fulfillment and transport solutions are exceptional.",
  },
];

export default function TestimonialSection() {

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);

  }, []);

  const testimonial = testimonials[index];

  return (

    <section className="py-24 bg-[#011533] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="relative">

          {/* Heading */}
          <div className="mb-10 relative">

            <div className="flex items-center gap-3 text-sm text-white mb-4">

              <div className="w-6 h-[2px] bg-white"/>

              CLIENT TESTIMONIAL ✈

            </div>

            <h2 className="text-[40px] font-bold text-white leading-tight">

              What Our Customers
              <br />

              Say <span className="text-secondary underline">ABOUT US</span>

            </h2>

          </div>


          {/* Testimonial Card */}
          <div className="relative bg-white shadow-md p-10 pl-14">

            {/* Left Orange Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-secondary"/>


            {/* Quote badge */}
            <div className="absolute top-0 right-0 bg-secondary text-white px-6 py-3 rounded-bl-xl text-lg">
              <FormatQuoteIcon />
            </div>


            {/* Animated Content */}
            <AnimatePresence mode="wait">

              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6 }}
              >

                {/* User */}
                <div className="flex items-center gap-4 mb-6">

                  <img
                    src={testimonial.image}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>

                    <div className="font-semibold text-lg text-[#0b2c3d]">
                      {testimonial.name}
                    </div>

                    <div className="text-sm text-gray-500">
                      {testimonial.role}

                      <span className="text-primary ml-3">
                        {"★★★★★"}
                      </span>

                    </div>

                  </div>

                </div>


                {/* Text */}
                <p className="text-gray-500 leading-relaxed">
                  {testimonial.text}
                </p>

              </motion.div>

            </AnimatePresence>

          </div>


          {/* Bottom avatars */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-4">

              <div className="flex -space-x-3">

                {[user1, user2, user3].map((img, i) => (

                  <img
                    key={i}
                    src={img}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />

                ))}

              </div>

              <div>

                <div className="font-semibold text-white">
                  Customer Satisfied
                </div>

                <div className="text-white text-sm">
                  4.8 (15k Reviews)
                </div>

              </div>

            </div>

            {/* Arrows OUTSIDE AnimatePresence */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-secondary hover:text-white transition rounded-full shadow"
              >
                <ChevronLeftIcon />
              </button>

              <button
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-secondary hover:text-white transition rounded-full shadow"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div>

          <motion.img
            src={warehouseImg}

            className="w-[65%] h-full object-cover shadow-lg absolute top-0"
            style={{clipPath: "polygon(7% 0%, 100% 0%, 75% 100%, 0% 100%)"}}
          />

        </div>

      </div>

    </section>

  );
}