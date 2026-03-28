import { Truck } from "lucide-react";
import bgImage from "@/assets/International-Shipping.jpg";

export default function TrackingSection() {
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
          <span className="font-semibold">Tracking</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Track the Status of Your Shipment Instantly
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8">
          Enter your tracking number to get real-time updates on your shipment’s
          location and delivery status.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Input */}
          <input
            type="text"
            placeholder="Enter your tracking number"
            className="w-full sm:w-[420px] md:w-[480px] px-6 py-4 rounded-full text-black outline-none focus:ring-2 focus:ring-orange-500"
          />

          {/* Button */}
          <a href="/contact" className="bg-secondary hover:bg-black transition px-6 py-3 rounded-full font-semibold">Track Now →</a>

        </div>
      </div>
    </section>
  );
}