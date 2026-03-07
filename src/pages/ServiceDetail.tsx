import { useParams } from "react-router-dom";
import { servicesData } from "@/data/services";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Check } from "lucide-react";
import ServicePageHeader from "@/components/ServicePageHeader";
import ServiceAccordion from "@/components/ServiceAccordion";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  const params = useParams();

  const service = servicesData.find(s => s.slug === slug);

  if (!service) return null;

  return (
    <>

      <ServicePageHeader />

      {/* SERVICE DETAIL CONTENT */}
      <section className="pt-14 md:pt-20 pb-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">

          {/* LEFT MAIN */}
          <div className="lg:col-span-2">

            {/* TITLE */}
            <h2 className="text-[30px] md:text-[35px] leading-8 md:leading-10 font-bold mb-5">
              {service.title}
            </h2>

            {/* HERO IMAGE */}
            {/* <img
              src={service.heroImage}
              className="w-full h-[450px] object-cover rounded-xl mb-6"
            /> */}

            {/* TEXT */}
            <p className="text-gray-500 text-base leading-6 mb-6">
              {service.introText}
            </p>

            {/* FEATURES */}
            <h3 className="text-xl text-gray-600 font-bold mb-4">
              We Offer:
            </h3>

            <ul className="space-y-3 mb-8">
              {service.features.map((item, i) => (
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

            {/* HIGHLIGHTS */}
            <h3 className="text-xl font-bold text-gray-600 mb-4">
              Facility Highlights
            </h3>

            <ul className="space-y-3 mb-8">
              {service.highlights.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="text-gray-500 text-base leading-6">{item}</span>
                </li>
              ))}
            </ul>

            {/* Enclosed */}
            <h3 className="text-xl text-gray-600 font-bold mb-4">
              What’s Included in This Service
            </h3>

            <ul className="space-y-3">
              {service.enclosed.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-gray-500 text-base leading-6">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <ServiceAccordion items={service.accordion} />
            </div>
          </div>


          {/* RIGHT GALLERY */}
          <div className="space-y-4">

            {service.gallery.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition"
              />
            ))}

          </div>

        </div>

      </section>

    </>
  );
}