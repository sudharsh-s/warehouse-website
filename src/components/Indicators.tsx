import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate
} from "framer-motion";

function Counter({ value, duration = 2 }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);

  const rounded = useTransform(
    motionValue,
    latest => Math.floor(latest).toLocaleString()
  );

  useEffect(() => {

    if (isInView) {

      animate(motionValue, value, {
        duration,
        ease: "easeOut"
      });

    }

  }, [isInView]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
}

export default function Indicators() {

  return (

    <section className="bg-[#f1f2f9] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">

          <div className="flex items-center gap-3 mb-6">

            <motion.div
  className="w-4 h-4 rounded-full bg-primary"
  animate={{ opacity: [1, 0, 1], scale: [1, 1.3, 1] }}
  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
/>

            <span className="text-primary uppercase text-sm tracking-wider font-medium">
              Indicator
            </span>

          </div>

        </div>


        {/* Grid */}
        <div className="grid grid-cols-2 border border-[#c4c4c4]">

          {/* Left Top */}
          <div className="p-12 border-r border-b border-[#c4c4c4]">

            <p className="text-xl font-semibold text-gray-900 max-w-md leading-relaxed">
              From global reach to local efficiency, Apexus operates a reliable warehouse network built on scale, precision, and proven performance.
            </p>

          </div>


          {/* Right Top */}
          <div className="p-12 border-b border-[#c4c4c4]">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-8 h-8 bg-primary font-semibold text-white flex items-center justify-center text-sm">
                1
              </div>

              <span className="text-gray-500 uppercase text-sm tracking-wider">
                Total Warehouse Capacity (SQM)
              </span>

            </div>

            <div className="text-7xl font-semibold">
              <Counter value={275000} />
            </div>

          </div>


          {/* Left Bottom */}
          <div className="p-12 border-r border-[#c4c4c4]">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-8 h-8 bg-primary font-semibold text-white flex items-center justify-center text-sm">
                2
              </div>

              <span className="text-gray-500 uppercase text-sm tracking-wider">
                Active Warehouse Facilities Worldwide
              </span>

            </div>

            <div className="text-7xl font-semibold">
              <Counter value={1200} />
            </div>

          </div>


          {/* Right Bottom */}
          <div className="p-12">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-8 h-8 bg-primary font-semibold text-white flex items-center justify-center text-sm">
                3
              </div>

              <span className="text-gray-500 uppercase text-sm tracking-wider">
                On-Time Fulfillment Rate
              </span>

            </div>

            <div className="text-7xl font-semibold">
              <Counter value={97} />%
            </div>

          </div>

        </div>

      </div>

    </section>

  );
}