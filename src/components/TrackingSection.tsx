import { Truck } from "lucide-react";
import bgImage from "@/assets/International-Shipping.jpg";
import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";
import { Link } from 'react-router-dom';

export default function TrackingSection() {
  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  return (
    <section className="relative w-full min-h-[50vh] flex items-center bg-[#184690] justify-center text-center text-white mt-20">

      {/* Background */}
      {/* <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Shipping"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0B1C2C]/80"></div>
      </div> */}

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl w-full">

        {/* Tracking Label */}
        <div className="flex items-center justify-center gap-2 text-white mb-4 text-sm tracking-widest uppercase">
          <Truck className="w-5 h-5" />
          <span className="font-semibold">{t("tracking.label")}</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          {t("tracking.title")}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8">
          {t("tracking.subtitle")}
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Input */}
          <input
            type="text"
            placeholder={t("tracking.placeholder")}
            className={`w-full sm:w-[420px] md:w-[480px] px-6 py-4 rounded-full text-black outline-none focus:ring-2 focus:ring-orange-500 ${rtl ? "text-right" : "text-left"}`}
          />

          {/* Button */}
          <Link to="/contact" className="bg-secondary hover:bg-black transition px-6 py-3 rounded-full font-semibold">
            {t("tracking.button")} {rtl ? "←" : "→"}
          </Link>

        </div>
      </div>
    </section>
  );
}