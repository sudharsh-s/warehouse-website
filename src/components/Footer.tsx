import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { useTranslation } from 'react-i18next';

import plane from "@/assets/footer-plane.png";
import worldMap from "@/assets/about/about-map.png";
import containers from "@/assets/footer-container.png";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#011533] text-white overflow-hidden">

      {/* WORLD MAP BACKGROUND */}
      <img
        src={worldMap}
        className="absolute inset-0 w-full h-full object-contain opacity-10"
      />

      {/* ================= CTA BAR ================= */}
      <div className="relative bg-secondary/95">

        {/* angled shape */}
        <div className="absolute right-0 top-1 w-[27%] h-full bg-[#011533] clip-diagonal hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-10 relative z-10">

          {/* LEFT */}
          <div className="flex items-center gap-4 text-2xl md:text-3xl font-bold ml-14">

            <img src={plane} className="w-40 absolute left-4 lg:left-0 top-[40%] lg:top-[30%]"/>

            {t("footer.ctaTitle")}

          </div>


          {/* BUTTON */}
          <a href="/contact" className="gradient-primary hover:bg-black transition px-6 py-3 rounded-md font-semibold">

            {t("footer.ctaButton")}

          </a>

        </div>

      </div>



      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-12 relative z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* LOGO */}
          <div>

            <div className='flex items-center mb-6'> 
              <img src="/logo-icon.png" alt="Nejoum Shipping" className="h-10 md:h-10 w-auto object-contain invert brightness-0" /> 
              <img src="/logo-name.png" alt="Nejoum Shipping" className="h-10 md:h-10 w-auto object-contain invert brightness-0" /> 
            </div>


            <p className="text-white/70 mb-6">
              {t("footer.companyDescription")}
            </p>

            {/* PHONE */}
            <div className="flex items-center gap-3">

              <div className="bg-secondary p-3 rounded">

                <Phone size={18}/>

              </div>

              <div>

                <div className="text-sm text-white/60">
                  {t("footer.makeCall")}
                </div>

                <div className="text-secondary font-semibold">
                  +1-734-496-3761
                </div>

              </div>

            </div>

          </div>



          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              {t("footer.quickLinks")}
            </h3>

            <ul className="space-y-3 text-white/70">

              <li><Link to="/">→ {t("footer.links.home")}</Link></li>
              <li><Link to="/about">→ {t("footer.links.about")}</Link></li>
              <li><Link to="/services/warehouse-storage">→ {t("footer.links.service")}</Link></li>
              <li><Link to="/contact">→ {t("footer.links.contact")}</Link></li>

            </ul>

          </div>



          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              {t("footer.getInTouch")}
            </h3>

            <div className="space-y-4 text-white/70">

              <div className="flex gap-3">
                <MapPin className="text-secondary"/>
                {t("footer.address")}
              </div>

              <div className="flex gap-3">
                <Mail className="text-secondary"/>
                cs@nejoumexpress.com
              </div>

              <div className="flex gap-3">
                <Phone className="text-secondary"/>
                +1-734-496-3761
              </div>

            </div>

          </div>



          {/* SUBSCRIBE */}
          <div>

            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              {t("footer.subscribeTitle")}
            </h3>

            <p className="text-white/70 mb-4">
              {t("footer.subscribeDescription")}
            </p>

            <input
              placeholder={t("footer.emailPlaceholder")}
              className="w-full p-3 rounded bg-white text-black mb-3"
            />

            <button className="bg-secondary hover:bg-yellow-600 px-6 py-3 rounded font-semibold w-full">

              {t("footer.subscribeButton")}

            </button>

          </div>

        </div>



        {/* BOTTOM */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <div className="text-white/60 text-sm text-center md:text-left">

            {t("footer.copyright")} {year}

          </div>


          {/* SOCIAL */}
          <div className="flex gap-3 mt-4 md:mt-0">

            <a 
              href="https://www.facebook.com/nejoumexpress" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded hover:bg-secondary cursor-pointer"
            >
              <FacebookIcon fontSize="small" />
            </a>

            <a 
              href="https://www.instagram.com/nejoum.express/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded hover:bg-secondary cursor-pointer"
            >
              <InstagramIcon fontSize="small" />
            </a>

            <a 
              href="https://x.com/Nejoumexpress" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded hover:bg-secondary cursor-pointer"
            >
              <XIcon fontSize="small" />
            </a>

          </div>

        </div>

      </div>



      {/* CONTAINERS IMAGE */}
      <img
        src={containers}
        className="absolute right-0 top-0 w-60 hidden xl:block"
      />

    </footer>
  );
}