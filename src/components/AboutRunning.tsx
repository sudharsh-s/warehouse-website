export default function RunningText() {

  const text = [
    "Freight Forwarding",
    "Customs Clearance",
    "Cargo Tracking",
    "Inventory Control",
    "Distribution Services",
    "Shipping Solutions",
    "Port Operations",
    "Export Documentation",
    "Global Trade Compliance",
  ];

  return (
    <div className="w-full overflow-hidden bg-white py-6 border border-grey-300">

      <div className="marquee_about group flex whitespace-nowrap">

        {/* First copy */}
        <div className="marquee_about-track group-hover:[animation-play-state:paused]">

          {text.map((item, index) => (
            <span key={index} className="marquee_about-item">
              {item}
              <span className="mx-8">*</span>
            </span>
          ))}

        </div>

        {/* Duplicate for seamless loop */}
        <div className="marquee_about-track group-hover:[animation-play-state:paused]">

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