import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import map from "@/assets/about/about-map.png";
import { Link } from 'react-router-dom';

export default function DSVNumbersSection() {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const items = t("dsvSection.items", {
    returnObjects: true,
  }) as {
    value: number;
    suffix: string;
    label: string;
  }[];

  return (
    <section
      ref={ref}
      className="relative w-full py-16 md:py-24 bg-[#042863] text-white overflow-hidden"
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
        <p className="text-xl mb-12 text-gray-200 font-semibold">{t("dsvSection.badge")}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, index) => (
            <div key={index}>

              <h2 className="text-5xl md:text-6xl font-bold">

                {inView && (
                  <CountUp
                    end={item.value}
                    duration={2}
                    separator=","
                  />
                )}

                {item.suffix}

              </h2>

              <p className="mt-4 text-lg text-gray-300">
                {item.label}
              </p>

            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16">
          <Link
            to="/services/warehouse-storage" className="bg-white text-[#0e2a57] px-8 py-4 font-semibold hover:bg-gray-200 transition">
            {t("dsvSection.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}