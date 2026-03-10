import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

import img1 from "@/assets/process/process-1.png";
import img2 from "@/assets/process/process-2.jpg";
import img3 from "@/assets/process/process-3.png";
import img4 from "@/assets/process/process-4.png";
import img5 from "@/assets/process/process-5.png";
import container from "@/assets/container-bg.jpg";

const stepImages = [img1, img2, img3, img4, img5];

export default function StickyProcessSection() {
  const { t } = useTranslation();

  const steps = t("processSection.steps", {
    returnObjects: true,
  }) as { title: string; description: string }[];

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 768) return; // stop on mobile

    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const step = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      );
      setActiveStep(step);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <>
      <div className="text-center bg-white" style={{padding: "70px 0px 50px"}}>
        <h2 className="title">{t("processSection.heading")} <span>{t("processSection.heading2")}</span></h2>
        <p className="text-gray-500 max-w-2xl mx-auto">{t("processSection.subheading")}</p>
      </div>

      <section
        ref={containerRef}
        className="relative bg-white"
        style={{
          ...(window.innerWidth >= 768 && {
            height: `${steps.length * 100}vh`,
          }),
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-[0] md:z-[1]" style={{background: "#00000078"}}></div>
        <img src={container} alt="continer" className="absolute top-0 left-0 w-full h-full sticky-container" />

        {/* Sticky container */}
        <div className="h-[25%] lg:h-screen flex items-center md:sticky md:top-[60px] py-[60px] z-[2]">

          <div className="max-w-7xl mx-auto px-6 flex-wrap md:flex-none flex items-center w-full flex-col-reverse md:flex-row">

            {/* LEFT SIDE */}
            <div className="relative w-full md:w-[60%] lg:w-[55%] sticky-left">

              {/* Progress line */}
              <div className="hidden md:block absolute top-0 h-full" style={{ width: "4px", backgroundColor: "#E5E7EB", left: "30px" }}>

                <motion.div
                  style={{ height: progressHeight }}
                  className="w-full bg-primary rounded-sm"
                />

              </div>

              {/* Steps */}
              <div className="sticky-steps mt-3 md:mt-0">

                {steps.map((step, index) => {

                  const isActive = index === activeStep;

                  return (
                    <motion.div
                      key={index}
                      animate={
                        window.innerWidth >= 768
                          ? {
                              opacity: isActive ? 1 : 0.2,
                              x: isActive ? 0 : -20,
                            }
                          : {
                              opacity: 1,
                              x: 0,
                            }
                      }
                      transition={{ duration: 0.4 }}
                      style={{marginBottom: "2.5rem"}}
                    >

                      <div className="flex gap-2 items-start">
                        <div className="text-lg md:text-sm text-white md:text-gray-300 font-semibold mt-0 mr-3 md:mr-0 md:mt-2 mb-2">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div>
                          <h2 className="text-[20px] leading-5 lg:text-3xl text-white font-bold mb-3 md:mb-2 flex items-center gap-2">

                          <span className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-primary stickyarrow" />

                            {step.title}

                          </h2>

                          <p className="text-white md:text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="hidden md:flex items-center justify-end w-full md:w-[40%] lg:w-[45%]">

              <motion.img
                key={activeStep}
                src={stepImages[activeStep]}
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-[470px] h-60 md:h-[300px] lg:h-[650px] object-cover rounded-2xl shadow-2xl"
              />

            </div>

          </div>

        </div>
      </section>
      <div className="pb-10 bg-white"></div>
    </>
  );
}