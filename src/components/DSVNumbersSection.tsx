import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import map from "@/assets/about/about-map.png";

export default function DSVNumbersSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className="relative w-full py-24 bg-[#042863] text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={map}
          alt="World Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <p className="text-lg mb-12 text-gray-200">DSV in numbers</p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Item 1 */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold">
              {inView && <CountUp end={3000} duration={2} separator="," />}+
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Offices and logistics facilities
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold">
              {inView && <CountUp end={90} duration={2} />}+
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Countries worldwide
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold">
              ~
              {inView && (
                <CountUp end={150000} duration={2} separator="," />
              )}
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Employees
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-16">
          <a href="/services/warehouse-storage" className="bg-white text-[#0e2a57] px-8 py-4 font-semibold hover:bg-gray-200 transition">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}