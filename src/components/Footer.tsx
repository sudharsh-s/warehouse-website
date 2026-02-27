import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import plane from "@/assets/footer-plane.png";
import worldMap from "@/assets/about/about-map.png";
import containers from "@/assets/footer-container.png";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
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
        <div className="absolute right-0 top-1 w-[27%] h-full bg-[#011533] clip-diagonal"></div>

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-10 relative z-10">

          {/* LEFT */}
          <div className="flex items-center gap-4 text-3xl font-bold ml-14">

            <img src={plane} className="w-40 absolute left-0 top-[30%]"/>

            Efficient, Safe, & Swift Logistics Solution!

          </div>


          {/* BUTTON */}
          <a href="/contact" className="gradient-primary hover:bg-black transition px-6 py-3 rounded-md font-semibold">

            Contact With Us →

          </a>

        </div>

      </div>



      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LOGO */}
          <div>

            <div className='flex items-center mb-6'> 
              <img src="/logo-icon.png" alt="Nejoum Shipping" className="h-10 md:h-10 w-auto object-contain invert brightness-0" /> 
              <img src="/logo-name.png" alt="Nejoum Shipping" className="h-10 md:h-10 w-auto object-contain invert brightness-0" /> 
            </div>


            <p className="text-white/70 mb-6">
              Logistic service provider company plays a pivotal role in the
              global supply chain logistics service provider.
            </p>

            {/* PHONE */}
            <div className="flex items-center gap-3">

              <div className="bg-secondary p-3 rounded">

                <Phone size={18}/>

              </div>

              <div>

                <div className="text-sm text-white/60">
                  Make a Call
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
              Quick Links ✈
            </h3>

            <ul className="space-y-3 text-white/70">

              <li><Link to="/">→ Home</Link></li>

              <li><Link to="/about">→ About</Link></li>

              <li><Link to="/services/warehouse-storage">→ Service</Link></li>

              <li><Link to="/contact">→ Contact</Link></li>

            </ul>

          </div>



          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              Get In Touch ✈
            </h3>

            <div className="space-y-4 text-white/70">

              <div className="flex gap-3">
                <MapPin className="text-secondary"/>
                Nejoum Express, 6320 Madden Ln, Houston, TX 77048
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
              Subscribe Us ✈
            </h3>

            <p className="text-white/70 mb-4">
              Sign up for alerts, our latest blogs, thoughts, and insights
            </p>

            <input
              placeholder="Your E-mail"
              className="w-full p-3 rounded bg-white text-black mb-3"
            />

            <button className="bg-secondary hover:bg-yellow-600 px-6 py-3 rounded font-semibold w-full">

              Subscribe →

            </button>

          </div>

        </div>



        {/* BOTTOM */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <div className="text-white/60 text-sm">

            © Copyright {year} Nejoum Express. All Rights Reserved

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
        className="absolute right-0 top-0 w-60 hidden lg:block"
      />

    </footer>
  );
}