import { useParams } from "react-router-dom";
import { servicesData } from "@/data/services";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Check } from "lucide-react";
import ServicePageHeader from "@/components/ServicePageHeader";
import ServiceAccordion from "@/components/ServiceAccordion";

import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";

export default function ServiceDetail() {
  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  const { slug } = useParams<{ slug: string }>();

  const params = useParams();

  const serviceImages = servicesData.find(s => s.slug === slug);

  const serviceContent = t(`services.${slug}`, {
    returnObjects: true,
  }) as any;

if (!slug || !serviceImages || !serviceContent) return null;

  return (
    <>

      <ServicePageHeader />

      {/* SERVICE DETAIL CONTENT */}
      <section className="pt-14 md:pt-20 pb-14 md:pb-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 block lg:flex gap-8">

          {/* RIGHT GALLERY */}
          <div className="space-y-4 w-full lg:w-[45%]">

            {serviceImages.gallery.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition"
              />
            ))}

          </div>

          {/* LEFT MAIN */}
          <div className="w-full lg:w-[55%]">

            {/* TITLE */}
            <h2 className="text-2xl md:text-[35px] leading-7 md:leading-10 font-bold mt-5 lg:mt-0 mb-3 md:mb-5">
              {serviceContent.title}
            </h2>

            {/* HERO IMAGE */}
            {/* <img
              src={service.heroImage}
              className="w-full h-[450px] object-cover rounded-xl mb-6"
            /> */}

            {/* TEXT */}
            <p className="text-gray-500 text-base leading-6 mb-6">
              {serviceContent.introText}
            </p>

            {/* FEATURES */}
            <h3 className="text-xl text-gray-600 font-bold mb-4">
              {t("serviceDetail.weOffer")}
            </h3>

            <ul className="space-y-3 mb-8">
              {serviceContent.features.map((item: any, i: number) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />

                  {typeof item === "string" ? (
                    <span>{item}</span>
                  ) : (
                    <span>
                      <span className="font-bold text-gray-600">{item.title}</span> – <span className="text-gray-500 text-base leading-6">{item.description}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>

          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10">

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              {/* HIGHLIGHTS */}
              <h3 className="text-xl font-bold text-gray-600 mb-4">
                {t("serviceDetail.facilityHighlights")}
              </h3>

              <ul className="space-y-3 mb-8">
                {serviceContent.highlights.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 items-start">
                    <ArrowRight className="w-5 h-5 text-primary" />
                    <span className="text-gray-500 text-base leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Enclosed */}
              <h3 className="text-xl text-gray-600 font-bold mb-4">
                {t("serviceDetail.included")}
              </h3>

              <ul className="space-y-3">
                {serviceContent.enclosed.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-gray-500 text-base leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-7 md:mt-2">
            {serviceContent.accordion && (
              <ServiceAccordion items={serviceContent.accordion} />
            )}
          </div>
        </div>

      </section>

    </>
  );
}