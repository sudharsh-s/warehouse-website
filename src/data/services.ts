import warehouseImg from "@/assets/warehouse-interior.jpg";
import yardImg from "@/assets/storage-yard.jpg";
import containerImg from "@/assets/container-loading.jpg";
import warehouseImg1 from "@/assets/services/warehouse-stroage-1.webp";
import warehouseImg2 from "@/assets/services/warehouse-stroage-2.webp";
import warehouseImg3 from "@/assets/services/warehouse-stroage-3.webp";
import warehouseImg4 from "@/assets/services/warehouse-stroage-4.jpg";

import transport from "@/assets/services/transport.webp";
import transport2 from "@/assets/services/transport-2.webp";
import transport3 from "@/assets/services/transport-3.webp";
import transport5 from "@/assets/services/transport-5.jpg";
import transport6 from "@/assets/services/transport-6.webp";
import transport7 from "@/assets/services/transport-7.webp";

import shipping from "@/assets/services/shipping.jpeg";
import shipping1 from "@/assets/services/shipping-1.jpeg";
import shipping2 from "@/assets/services/shipping-2.jpeg";
import shipping3 from "@/assets/services/shipping-3.jpeg";
import shipping4 from "@/assets/services/shipping-4.jpeg";
import shipping6 from "@/assets/services/shipping-6.jpeg";
import shipping7 from "@/assets/services/shipping-7.jpeg";

import air1 from "@/assets/services/air-1.webp";
import air2 from "@/assets/services/air-2.jpg";
import air3 from "@/assets/services/air-3.webp";
import air4 from "@/assets/services/air-4.webp";
import air5 from "@/assets/services/air-5.webp";

import car1 from "@/assets/services/car-1.webp";
import car2 from "@/assets/services/car-2.jpeg";
import car3 from "@/assets/services/car-3.jpg";
import car4 from "@/assets/services/car-4.webp";
import car5 from "@/assets/services/car-5.png";

import customs1 from "@/assets/services/customs-1.webp";
import customs2 from "@/assets/services/customs-2.jpg";
import customs3 from "@/assets/services/customs-3.jpg";
import customs4 from "@/assets/services/customs-4.webp";
import customs5 from "@/assets/services/customs-5.png";


export const servicesData = [
  {
    slug: "warehouse-storage",

    title: "Integrated Warehousing & Open Yard Storage",

    heroImage: warehouseImg,

    gallery: [
      yardImg,
      warehouseImg1,
      warehouseImg2,
      warehouseImg3,
      warehouseImg4,
    ],

    introTitle: "Smart, Secure & Scalable Storage Solutions",

    introText:
      "We deliver end-to-end warehousing and open yard storage solutions designed for exporters, importers, auction companies, and global logistics partners. Our facilities are built to ensure security, efficiency, and seamless cargo movement.",

    features: [
      {
        title: "Customizable Storage Plans",
        description:
          "Flexible short-term and long-term storage options for vehicles, machinery, containers, and general cargo tailored to your operational needs.",
      },
      {
        title: "Advanced Security Infrastructure",
        description:
          "24/7 CCTV monitoring, controlled gated access, perimeter protection, and trained personnel to safeguard your assets at every stage.",
      },
      {
        title: "High-Capacity Handling",
        description:
          "Spacious indoor warehouses and expansive open yards capable of accommodating cars, trucks, boats, heavy equipment, and industrial freight.",
      },
      {
        title: "Prime Logistics Location",
        description:
          "Strategically positioned near major seaports, airports, and highways to reduce transit time and optimize shipping efficiency.",
      },
    ],

    highlights: [
      "Rapid access to seaport and airport terminals",
      "Direct connectivity to major highways",
      "Efficient staging for domestic & international shipments",
    ],

    enclosed: [
      "Fully covered storage for dry and sensitive goods",
      "Ideal for palletized, boxed, and non-vehicle cargo",
      "Weather-protected and monitored facility",
    ],

    accordion: [
      {
        title: "Comprehensive Storage Services",
        content: [
          "Short-term & long-term warehousing",
          "Open yard & enclosed storage options",
          "Vehicle, machinery & equipment storage",
        ],
      },
      {
        title: "Facility Security & Compliance",
        content: [
          "24/7 surveillance system",
          "Controlled gated entry & exit",
          "On-site operational supervision",
        ],
      },
      {
        title: "Strategic Location Advantage",
        content: [
          "Close proximity to major port terminals",
          "Easy highway connectivity for faster dispatch",
          "Optimized logistics positioning",
        ],
      },
      {
        title: "Value-Added Services",
        content: [
          "Inventory tracking & management",
          "Container loading & unloading support",
          "Vehicle inspection, documentation & staging",
        ],
      }
    ],
  },

  {
    slug: "road-freight",

    title: "Nationwide Road Freight & Vehicle Transport",

    heroImage: transport,

    gallery: [
      transport2,
      transport3,
      transport5,
      transport6,
      transport7,
    ],

    introTitle: "Reliable Ground Transportation Solutions",

    introText:
      "We provide secure, efficient, and fully managed road freight services across the nation. From individual vehicle transport to oversized heavy equipment hauling, our logistics network ensures timely and damage-free delivery.",

    features: [
      {
        title: "Specialized Heavy Haul Transport",
        description:
          "Expert handling of construction machinery, industrial equipment, boats, containers, prefabricated units, and oversized cargo with proper permits and route planning.",
      },
      {
        title: "Professional Vehicle Transportation",
        description:
          "Safe and secure movement of cars, SUVs, trucks, and fleet vehicles using modern carriers and experienced drivers.",
      },
      {
        title: "Port & Intermodal Drayage",
        description:
          "Efficient container pickup and delivery from ports, rail yards, and terminals to warehouses or final destinations.",
      },
      {
        title: "Time-Critical Deliveries",
        description:
          "Dedicated trucks and optimized routing to meet urgent delivery schedules with real-time coordination.",
      },
    ],

    highlights: [
      "Nationwide coverage with strategic routing",
      "Experienced licensed drivers",
      "Modern fleet with GPS tracking",
      "Permit handling for oversized loads",
    ],

    enclosed: [
      "Open carrier transport",
      "Enclosed vehicle transport options",
      "Flatbed & lowboy trailers",
      "Container chassis transport",
    ],

    accordion: [
      {
        title: "Vehicle Transport Services",
        content: [
          "Dealer & auction vehicle transport",
          "Fleet relocation services",
          "Door-to-door vehicle delivery",
        ],
      },
      {
        title: "Heavy Equipment Hauling",
        content: [
          "Oversized and overweight load transport",
          "Route survey & permit coordination",
          "Escort vehicle arrangements",
        ],
      },
      {
        title: "Port & Container Drayage",
        content: [
          "Container pickup & return",
          "Intermodal rail coordination",
          "Warehouse & yard delivery",
        ],
      },
      {
        title: "Safety & Compliance",
        content: [
          "Licensed and insured operations",
          "Cargo protection measures",
          "Regulatory compliance management",
        ],
      }
    ],
  },

  {
    slug: "ocean-freight",

    title: "Global Ocean Freight & Container Shipping Solutions",

    heroImage: shipping,

    gallery: [
      shipping1,
      shipping2,
      shipping3,
      shipping4,
      shipping6,
      shipping7,
    ],

    introTitle: "Reliable International Sea Freight Services",

    introText:
      "We provide end-to-end ocean freight and container shipping solutions connecting global markets with efficiency and reliability. From full container loads to specialized cargo, our team ensures seamless coordination from port to destination.",

    features: [
      {
        title: "Full Container Load (FCL) & LCL Services",
        description:
          "Flexible shipping options including dedicated full containers and cost-effective less-than-container-load solutions tailored to your cargo volume.",
      },
      {
        title: "Specialized & Project Cargo",
        description:
          "Secure transportation of vehicles, heavy machinery, oversized equipment, and breakbulk cargo with expert handling and documentation.",
      },
      {
        title: "Global Shipping Network",
        description:
          "Strong partnerships with leading international carriers enabling reliable sailings, competitive transit times, and worldwide coverage.",
      },
      {
        title: "End-to-End Documentation & Compliance",
        description:
          "Complete management of customs clearance, export documentation, bills of lading, and regulatory compliance for smooth international trade.",
      },
    ],

    highlights: [
      "Worldwide port-to-port coverage",
      "Competitive freight rates",
      "Container tracking & shipment visibility",
      "Customs clearance coordination",
    ],

    enclosed: [
      "FCL (Full Container Load)",
      "LCL (Less Than Container Load)",
      "RORO (Roll-on/Roll-off) shipping",
      "Breakbulk & project cargo handling",
    ],

    accordion: [
      {
        title: "Container Shipping Services",
        content: [
          "Standard & high-cube containers",
          "Refrigerated (reefer) containers",
          "Vehicle & machinery containerization",
        ],
      },
      {
        title: "Vehicle Export & RORO",
        content: [
          "Roll-on/Roll-off vehicle shipping",
          "Auction vehicle export handling",
          "Pre-shipment inspection & documentation",
        ],
      },
      {
        title: "Customs & Documentation",
        content: [
          "Export declarations & compliance",
          "Bill of lading processing",
          "International trade documentation support",
        ],
      },
      {
        title: "End-to-End Logistics Support",
        content: [
          "Port coordination & terminal handling",
          "Container stuffing & securing",
          "Integrated road & warehouse support",
        ],
      }
    ],
  },

  {
    slug: "air-freight",

    title: "Fast & Reliable Air Freight Solutions",

    heroImage: warehouseImg, 

    gallery: [
      air1, 
      air2,
      air3,
      air4,
      air5,
    ],

    introTitle: "Global Air Cargo & Express Logistics",

    introText:
      "We provide fast, secure, and time-critical air freight services connecting global markets with speed and precision. From urgent shipments to high-value cargo, our air logistics solutions ensure rapid transit and reliable delivery.",

    features: [
      {
        title: "Express & Priority Shipping",
        description:
          "Time-sensitive cargo solutions with priority handling and optimized flight schedules for urgent international and domestic shipments.",
      },
      {
        title: "International Air Cargo Network",
        description:
          "Strategic partnerships with leading airlines and global carriers ensuring worldwide airport-to-airport and door-to-door coverage.",
      },
      {
        title: "High-Value & Sensitive Cargo Handling",
        description:
          "Secure transportation for electronics, automotive parts, pharmaceuticals, and fragile goods with strict compliance standards.",
      },
      {
        title: "Customs Clearance & Documentation",
        description:
          "Complete management of export/import documentation, customs clearance, and regulatory compliance for seamless cross-border trade.",
      },
    ],

    highlights: [
      "Fastest international transit times",
      "Global airport network coverage",
      "Real-time shipment tracking",
      "Secure & compliant cargo handling",
    ],

    enclosed: [
      "Airport-to-airport delivery",
      "Door-to-door express service",
      "Temperature-controlled cargo",
      "Charter flight arrangements",
    ],

    accordion: [
      {
        title: "Air Freight Services",
        content: [
          "Express & priority air cargo",
          "Consolidated air shipments",
          "Charter aircraft solutions",
        ],
      },
      {
        title: "Specialized Cargo Handling",
        content: [
          "Pharmaceutical & medical cargo",
          "Automotive & industrial parts",
          "High-value & fragile goods",
        ],
      },
      {
        title: "Customs & Compliance",
        content: [
          "Export & import documentation",
          "Customs brokerage coordination",
          "Regulatory compliance support",
        ],
      },
      {
        title: "Integrated Logistics Support",
        content: [
          "First-mile pickup",
          "Last-mile delivery",
          "Warehouse & distribution integration",
        ],
      }
    ],
  },

  {
    slug: "car-wrapping",

    title: "Premium Car Wrapping & Vehicle Customization",

    heroImage: warehouseImg, 

    gallery: [
      car1,
      car2, 
      car3,
      car4,
      car5,
    ],

    introTitle: "Professional Vehicle Wrap Solutions",

    introText:
      "We provide high-quality car wrapping services designed to transform your vehicle with precision, creativity, and durability. From full body color changes to commercial branding wraps, we deliver flawless finishes using premium vinyl materials.",

    features: [
      {
        title: "Full & Partial Wraps",
        description:
          "Complete color change wraps, partial accents, roof wraps, bonnet wraps, and custom detailing tailored to your style.",
      },
      {
        title: "Commercial & Fleet Branding",
        description:
          "Professional vehicle branding solutions for businesses, including fleet graphics, logo placement, and promotional wraps.",
      },
      {
        title: "Premium Vinyl Materials",
        description:
          "We use high-performance vinyl from trusted brands ensuring durability, UV resistance, and long-lasting finish.",
      },
      {
        title: "Precision Installation",
        description:
          "Expert installers ensure bubble-free application, seamless edges, and clean detailing for a factory-quality look.",
      },
    ],

    highlights: [
      "Gloss, matte, satin & chrome finishes",
      "Custom graphic design support",
      "Paint protection options available",
      "Removable & paint-safe solutions",
    ],

    enclosed: [
      "Full vehicle color change wraps",
      "Corporate branding & advertising wraps",
      "Paint protection film (PPF)",
      "Headlight & taillight tinting",
    ],

    accordion: [
      {
        title: "Wrap Services",
        content: [
          "Full body wraps",
          "Partial & accent wraps",
          "Custom graphic wraps",
        ],
      },
      {
        title: "Commercial Branding",
        content: [
          "Fleet vehicle branding",
          "Business logo & marketing graphics",
          "Promotional campaign wraps",
        ],
      },
      {
        title: "Protection Solutions",
        content: [
          "Paint protection film (PPF)",
          "Scratch & UV protection",
          "Ceramic coating add-ons",
        ],
      },
      {
        title: "Why Choose Us",
        content: [
          "Premium quality materials",
          "Experienced professional installers",
          "Clean indoor installation facility",
        ],
      }
    ],
  },

  {
    slug: "inspection-customs",

    title: "Customs Clearance & Vehicle Inspection Services",

    heroImage: shipping, 

    gallery: [
      customs1,
      customs2,
      customs3,
      customs4,
      customs5,
    ],

    introTitle: "Fast, Compliant & Hassle-Free Clearance Solutions",

    introText:
      "We provide professional customs clearance and vehicle inspection services to ensure smooth international trade operations. Our experienced team manages documentation, compliance, and inspection processes efficiently to minimize delays and ensure regulatory adherence.",

    features: [
      {
        title: "Customs Clearance Management",
        description:
          "Complete handling of import and export documentation, duty calculations, tariff classifications, and regulatory approvals for seamless cargo release.",
      },
      {
        title: "Vehicle Inspection Services",
        description:
          "Thorough vehicle condition reports, VIN verification, damage assessment, and compliance checks for export and auction shipments.",
      },
      {
        title: "Export Documentation Support",
        description:
          "Preparation and processing of bills of lading, commercial invoices, export declarations, and required trade certificates.",
      },
      {
        title: "Regulatory Compliance Expertise",
        description:
          "Up-to-date knowledge of international trade regulations, customs laws, and port authority requirements to avoid penalties and delays.",
      },
    ],

    highlights: [
      "Faster customs processing",
      "Accurate documentation handling",
      "Vehicle export compliance support",
      "Coordination with port & airport authorities",
    ],

    enclosed: [
      "Pre-export vehicle inspection",
      "Import & export clearance",
      "Duty & tax calculation assistance",
      "Regulatory documentation processing",
    ],

    accordion: [
      {
        title: "Customs Clearance Services",
        content: [
          "Import & export declarations",
          "Tariff classification & duty calculation",
          "Port & terminal coordination",
        ],
      },
      {
        title: "Vehicle Inspection",
        content: [
          "VIN & chassis verification",
          "Condition & damage reporting",
          "Pre-shipment inspection certificates",
        ],
      },
      {
        title: "Documentation & Compliance",
        content: [
          "Bill of lading processing",
          "Commercial invoice verification",
          "Regulatory compliance management",
        ],
      },
      {
        title: "End-to-End Support",
        content: [
          "Customs brokerage coordination",
          "Government authority liaison",
          "Integrated logistics documentation support",
        ],
      }
    ],
  },

];