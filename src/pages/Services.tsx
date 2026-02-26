import { useTranslation } from 'react-i18next';
import ServicesSection from "@/components/ServicesSection";
import WhoWeServe from "@/components/WhoWeServe";
import StatsSection from "@/components/StatsSection";

import PageBannerSlider from "@/components/PageBannerSlider"
import serviceImg1 from "@/assets/services/shipping.jpeg";
import serviceImg2 from "@/assets/services/shipping-1.jpeg";

import ServicePageHeader from "@/components/ServicePageHeader";

const serviceSlides = [
  {
    type: "image",
    src: serviceImg1,
    title: "Services We Offer",
    subtitle: "Comprehensive logistics solutions for global trade",
  },
  {
    type: "image",
    src: serviceImg2,
    title: "Global Shipping Expertise",
    subtitle: "Seamless international shipping solutions for your business",
  },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <div>

      <PageBannerSlider slides={serviceSlides} />

      {/* <ServicePageHeader /> */}

      <ServicesSection isServicePage={true} />

      <StatsSection />

      <WhoWeServe />

    </div>
  );
};

export default Services;
