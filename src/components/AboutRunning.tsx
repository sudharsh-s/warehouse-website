import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";

export default function RunningText() {

  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  const text = t("runningTextAbout.items", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="w-full overflow-hidden bg-white py-6 border border-grey-300">

      <div
        className={`marquee_about group flex whitespace-nowrap
        ${rtl ? "direction-rtl" : ""}`}
      >

        {/* First copy */}
        <div
          className={`marquee_about-track group-hover:[animation-play-state:paused]
          ${rtl ? "animate-marquee-rtl" : "animate-marquee"}`}
        >

          {text.map((item, index) => (
            <span key={index} className="marquee_about-item">
              {item}
              <span className="mx-8">*</span>
            </span>
          ))}

        </div>

        {/* Duplicate for seamless loop */}
        <div
          className={`marquee_about-track group-hover:[animation-play-state:paused]
          ${rtl ? "animate-marquee-rtl" : "animate-marquee"}`}
        >

          {text.map((item, index) => (
            <span key={index} className="marquee_about-item">
              {item}
              <span className="mx-8 text-gray-400">*</span>
            </span>
          ))}

        </div>

        {/* Duplicate for seamless loop */}
        <div
          className={`marquee_about-track group-hover:[animation-play-state:paused]
          ${rtl ? "animate-marquee-rtl" : "animate-marquee"}`}
        >

          {text.map((item, index) => (
            <span key={index} className="marquee_about-item">
              {item}
              <span className="mx-8 text-gray-400">*</span>
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}