import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import img1 from "@/assets/process/process-1.png";
import img2 from "@/assets/process/process-2.jpg";
import img3 from "@/assets/process/process-3.png";
import img4 from "@/assets/process/process-4.png";
import img5 from "@/assets/process/process-5.png";
import container from "@/assets/container-bg.jpg";

const steps = [
  {
    number: "01",
    title: "Discovery & Booking",
    subtitle: "Plan the Movement. Secure the Space. Define the Process.",
    description:
      "Share your shipment details — vehicles, containers, bulk cargo, origin and destination. We assess handling requirements, compliance needs, and transport mode.",
    image: img1,
  },
  {
    number: "02",
    title: "Receive & Store",
    subtitle: "Controlled Entry. Secure Storage. Full Visibility.",
    description:
      "Cargo arrives via port transfer or truck. Our team unloads, inspects, documents, and registers everything into the system.",
    image: img2,
  },
  {
    number: "03",
    title: "Manage & Add Services",
    subtitle: "More Than Storage. Operational Support.",
    description:
      "We provide value-added services to optimize your supply chain and prepare cargo for export or dispatch.",
    image: img3,
  },
  {
    number: "04",
    title: "Clear & Load",
    subtitle: "Compliance Secured. Cargo Ready for Transit.",
    description:
      "Our team coordinates clearance processes and prepares goods for outbound movement.",
    image: img4,
  },
  {
    number: "05",
    title: "Ship & Deliver",
    subtitle: "From UAE to Global Markets.",
    description:
      "We manage ocean freight and final transport through trusted carrier networks.",
    image: img5,
  },
];

export default function StickyProcessSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (progress) => {
      const step = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      );
      setActiveStep(step);
    });
  }, [scrollYProgress]);

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <>
      <div className="text-center bg-white" style={{padding: "70px 0px 50px"}}>
        <h2 className="title">Warehouse To <span>Shipping</span></h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Streamlining Your Process from Start to Delivery</p>
      </div>

      <section
        ref={containerRef}
        className="relative bg-white"
        style={{ height: `${steps.length * 100}vh` }}
      >
        <div className="absolute top-0 left-0 w-full h-full" style={{background: "#00000078", zIndex: "1"}}></div>
        <img src={container} alt="continer" className="absolute top-0 left-0 w-full h-full" />

        {/* Sticky container */}
        <div className="h-screen flex items-center" style={{ position: "sticky", top: "60px", padding: "60px 0px", zIndex: "2" }}>

          <div className="max-w-7xl mx-auto px-6 flex items-center w-full">

            {/* LEFT SIDE */}
            <div className="relative w-[55%]" style={{paddingLeft: "30px"}}>

              {/* Progress line */}
              <div className="absolute top-0 h-full" style={{ width: "4px", backgroundColor: "#E5E7EB", left: "30px" }}>

                <motion.div
                  style={{ height: progressHeight }}
                  className="w-full bg-primary rounded-sm"
                />

              </div>

              {/* Steps */}
              <div className="" style={{marginLeft: "3rem" }}>

                {steps.map((step, index) => {

                  const isActive = index === activeStep;

                  return (
                    <motion.div
                      key={index}
                      animate={{
                        opacity: isActive ? 1 : 0.2,
                        x: isActive ? 0 : -20,
                      }}
                      transition={{ duration: 0.4 }}
                      style={{marginBottom: "1rem"}}
                    >

                      <div className="flex gap-2 items-start">
                        <div className="text-sm text-gray-300 font-semibold mt-2 mb-2">
                          {step.number}
                        </div>

                        <div>
                          <h2 className="text-3xl text-white font-bold mb-2 flex items-center gap-2">

                          <span className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-primary stickyarrow" />

                            {step.title}

                          </h2>

                          <h5 className="text-white font-semibold mb-2">{step.subtitle}</h5>

                          <p className="text-gray-400">
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
            <div className="flex items-center justify-end w-[45%]">

              <motion.img
                key={activeStep}
                src={steps[activeStep].image}
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-[470px] h-[650px] object-cover rounded-2xl shadow-2xl"
              />

            </div>

          </div>

        </div>
      </section>
      <div className="pb-10 bg-white"></div>
    </>
  );
}