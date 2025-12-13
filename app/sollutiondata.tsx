/* ========= Image Imports ========= */
import FloatingImg from "@/app/images/Sky Volt Renewables Pvt Ltd/Solution Page/Floating.png";
import GroundMountedImg from "@/app/images/Sky Volt Renewables Pvt Ltd/Solution Page/Ground Mounted.png";
import RooftopImg from "@/app/images/Sky Volt Renewables Pvt Ltd/Solution Page/Rooftop.png";
import ShedMountedImg from "@/app/images/Sky Volt Renewables Pvt Ltd/Solution Page/Shed Mounted.png";
import SolarPumpImg from "@/app/images/Sky Volt Renewables Pvt Ltd/Solution Page/Solar Pump.png";
import StreetPoleImg from "@/app/images/Sky Volt Renewables Pvt Ltd/Solution Page/Street Pole.png";
import WallMountedImg from "@/app/images/Sky Volt Renewables Pvt Ltd/Solution Page/Wall Mounted.png";
import WaterHeaterImg from "@/app/images/Sky Volt Renewables Pvt Ltd/Solution Page/Waterheater.png";

/* ========= BANNER IMAGE IMPORTS ========= */
import BannerFencing from "@/app/images/Sky Volt Renewables Pvt Ltd/Solutions Banners/Fencing.jpg";
import BannerFloating from "@/app/images/Sky Volt Renewables Pvt Ltd/Solutions Banners/Floating.jpg";
import BannerGroundMounted from "@/app/images/Sky Volt Renewables Pvt Ltd/Solutions Banners/Ground Mounted.jpg";
import BannerRooftop from "@/app/images/Sky Volt Renewables Pvt Ltd/Solutions Banners/Rooftop.jpg";
import BannerShedMounted from "@/app/images/Sky Volt Renewables Pvt Ltd/Solutions Banners/Shed Mounted.jpg";
import BannerSolarPump from "@/app/images/Sky Volt Renewables Pvt Ltd/Solutions Banners/Solar Pump.jpg";
import BannerStreetLight from "@/app/images/Sky Volt Renewables Pvt Ltd/Solutions Banners/Solar Street Light.jpg";
import BannerWallMounted from "@/app/images/Sky Volt Renewables Pvt Ltd/Solutions Banners/Wall Mounted.jpg";
import BannerWaterHeater from "@/app/images/Sky Volt Renewables Pvt Ltd/Solutions Banners/Water Heater.jpg";
import BannerWaterproof from "@/app/images/Sky Volt Renewables Pvt Ltd/Solutions Banners/Waterproof.jpg";


/* ========= Types ========= */
export type Feature = {
  label: string;
};

export type DescriptionSections = {
  overview: string;
  whyChoose?: string;
  applications?: string;
  technicalHighlights?: string;
  benefits?: string;
  models?: string;
  roi?: string;
  supportAndSubsidy?: string;
  sustainability?: string;
};

export type SolarInstallation = {
  id: string;
  name: string;
  slug: string;
  category:
    | "Rooftop"
    | "Ground-mounted"
    | "Shed-mounted"
    | "Fencing"
    | "Street Lighting"
    | "Water Heating"
    | "Pumps"
    | "Wall-mounted"
    | "Floating";
  summary: string;
  description?: DescriptionSections;
  features: Feature[];
  tags: string[];
  icon?: string;
  image?: any;
    bannerImage?: any;  
  cta?: { label: string; href: string };
};

export type SolarInstallationsDataset = {
  hero: {
    title: string;
    subtitle: string;
    blurb: string;
  };
  items: SolarInstallation[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
};

/* ========= Data ========= */
export const SOLAR_INSTALLATIONS_DATA: SolarInstallationsDataset = {
  hero: {
    title: "Our Solar Installation Systems",
    subtitle: "Power Your World with Sky Volt Renewable Pvt. Ltd.",
    blurb:
      "A leading solar EPC company in India offering advanced, high-performance solar solutions for every need — from rooftop panels to floating solar systems. We deliver reliability, innovation, and sustainability in every project.",
  },

  items: [
    /* ---------------------------------------------------------------------- */
    /*  Rooftop Solar Systems                                                 */
    /* ---------------------------------------------------------------------- */
    {
      id: "rooftop-solar",
      name: "Rooftop Solar Systems",
      slug: "rooftop-solar-systems",
      category: "Rooftop",
        bannerImage: BannerRooftop,
      summary:
        "Thousands of rooftops across India are transforming into clean power generators — and Sky Volt Renewable Pvt. Ltd. is leading this solar revolution.",
      description: {
        overview:
          "Rooftop solar systems convert your roof into a renewable power source. Whether residential, commercial, or industrial, Sky Volt Renewable provides end-to-end EPC solutions using high-efficiency modules and smart inverters.",
        whyChoose: `- Cut your electricity bills by up to 80%
- Earn credits through net metering
- Reduce carbon footprint and increase property value
- Quick ROI with minimal maintenance`,
        applications: `**Residential Systems**
- Compact design for all roof types (RCC, tin, tile)
- On-grid, off-grid, and hybrid models
- 25-year panel performance warranty

**Commercial & Industrial Systems**
- Ideal for factories, hospitals, offices, and malls
- Integration with battery storage and monitoring`,
        supportAndSubsidy:
          "Enjoy up to 40% MNRE subsidy with full documentation, DISCOM approvals, and net-metering setup handled by our team.",
      },
      features: [
        { label: "Up to 80% reduction in electricity bills" },
        { label: "MNRE-approved panels & smart inverters" },
        { label: "Available in on-grid, off-grid, and hybrid variants" },
        { label: "Long-term ROI with 25-year warranty" },
        { label: "Ideal for homes, offices, and industries" },
      ],
      tags: ["rooftop", "on-grid", "off-grid", "hybrid", "MNRE", "net metering"],
      icon: "/icons/rooftop.svg",
      image: RooftopImg,
      cta: { label: "Get Rooftop Quote", href: "/contact?type=rooftop" },
    },

    /* ---------------------------------------------------------------------- */
    /*  Ground-Mounted Solar Systems                                          */
    /* ---------------------------------------------------------------------- */
    {
      id: "ground-mounted",
      name: "Ground-Mounted Solar Systems",
      slug: "ground-mounted-solar-systems",
      category: "Ground-mounted",
        bannerImage:BannerGroundMounted,
      summary:
        "High-performance ground-mounted solar power plants built for industrial, institutional, and utility-scale projects.",
      description: {
        overview:
          "Ground-mounted solar systems are ideal for large open areas such as industrial campuses, farmlands, and institutions.",
        whyChoose: `- Maximum power output via optimized tilt angles
- Galvanized steel mounting for durability
- Scalable from kW to MW capacities
- Quick ROI (2–5 years) with minimal maintenance`,
        applications: `- Industrial plants, warehouses, and government facilities
- Agricultural solar farms and utility-scale EPC projects`,
        technicalHighlights: `- Tier-1 monocrystalline/polycrystalline panels
- Custom tilt & orientation
- Real-time performance monitoring`,
        benefits: `- High ROI and consistent generation
- Promotes ESG & renewable energy compliance`,
      },
      features: [
        { label: "Optimized tilt structure for maximum output" },
        { label: "Robust galvanized steel frames" },
        { label: "Ideal for industrial and utility-scale solar farms" },
        { label: "Scalable and customizable layouts" },
        { label: "2–5 year ROI with low O&M" },
      ],
      tags: ["ground-mounted", "utility-scale", "industrial", "EPC"],
      icon: "/icons/ground.svg",
      image: GroundMountedImg,
      cta: { label: "Plan a Ground Plant", href: "/contact?type=ground-mounted" },
    },

    /* ---------------------------------------------------------------------- */
    /*  Shed-Mounted Solar Systems                                            */
    /* ---------------------------------------------------------------------- */
    {
      id: "shed-mounted",
      name: "Shed-Mounted Solar Systems",
      slug: "shed-mounted-solar-systems",
      category: "Shed-mounted",
        bannerImage: BannerShedMounted ,
      summary:
        "Dual-purpose solar setups that generate power and provide shade for industrial sheds, warehouses, and parking structures.",
      description: {
        overview:
          "Shed-mounted solar systems are ideal for factories, warehouses, and parking sheds — providing both shade and clean energy.",
        whyChoose: `- Dual purpose: shade + energy generation
- Efficient use of existing shed space
- Reduces electricity costs and internal heat
- Long-lasting corrosion-resistant structures`,
        applications: `- Industrial sheds, workshops, and service centers
- Commercial parking areas and institutional complexes`,
        technicalHighlights: `- Tier-1 solar panels and GI mounting structures
- Compatible with on/off-grid and hybrid systems
- Integrated drainage and cable management`,
        roi: "Fast payback within 2–4 years with minimal maintenance.",
      },
      features: [
        { label: "Dual-purpose energy + shading design" },
        { label: "Heavy-duty galvanized mounting" },
        { label: "Compatible with all roof/shed types" },
        { label: "Smart drainage and cable management" },
        { label: "Fast ROI and subsidy eligible" },
      ],
      tags: ["shed", "industrial", "warehouse", "parking", "hybrid"],
      icon: "/icons/shed.svg",
      image: ShedMountedImg,
      cta: { label: "Assess Your Shed", href: "/contact?type=shed-mounted" },
    },

    /* ---------------------------------------------------------------------- */
    /*  Solar Fencing Systems (NO IMAGE PROVIDED)                             */
    /* ---------------------------------------------------------------------- */
    {
      id: "solar-fencing",
      name: "Solar Fencing Systems",
      slug: "solar-fencing-systems",
      category: "Fencing",
      bannerImage:BannerFencing,
      summary:
        "Smart solar-powered fencing for farms, factories, and gated communities ensuring 24/7 protection without grid dependency.",
      description: {
        overview:
          "Solar fencing provides a safe, efficient, and eco-friendly security solution powered by renewable energy.",
        benefits: `- 24/7 security with built-in battery backup
- Safe, non-lethal deterrence for animals/intruders
- Minimal maintenance, zero electricity costs
- Works in remote areas without grid supply`,
        applications: `- Agricultural farms and warehouses
- Industrial compounds and residential communities`,
        technicalHighlights: `- Intelligent energizer unit with safety pulse control
- Galvanized wire structure with solar + battery power
- Complies with MNRE and electrical safety standards`,
      },
      features: [
        { label: "24/7 protection with solar power" },
        { label: "Eco-friendly and cost-effective" },
        { label: "Low maintenance and high reliability" },
        { label: "Durable galvanized construction" },
        { label: "Ideal for farms, factories, and institutions" },
      ],
      tags: ["fencing", "security", "battery", "farm", "industrial"],
      icon: "/icons/fence.svg",
      image: "https://next2sun.com/wp-content/uploads/2022/06/Solarzaun-Landwirtschaft.jpg", // You can replace this later
      cta: { label: "Secure Your Property", href: "/contact?type=solar-fencing" },
    },

    /* ---------------------------------------------------------------------- */
    /*  Solar Street Lights                                                   */
    /* ---------------------------------------------------------------------- */
    {
      id: "street-lights",
      name: "Solar Street Lights",
      slug: "solar-street-lights",
      category: "Street Lighting",
      bannerImage:BannerStreetLight,
      summary:
        "Intelligent, maintenance-free solar LED street lighting for roads, campuses, and parks with dusk-to-dawn operation.",
      description: {
        overview:
          "Solar street lights combine LED technology and renewable energy for bright, reliable outdoor lighting.",
        whyChoose: `- Automatic dusk-to-dawn sensors
- Zero electricity cost, IP65 weatherproof design
- Long-life LiFePO₄ batteries and high-lumen LEDs
- Quick installation without trenching`,
        applications: `- City roads, residential campuses, rural villages, and parks
- Government and Smart City projects`,
        technicalHighlights: `- Inbuilt lithium batteries and smart charge controllers
- Multiple models: All-in-One, Semi-integrated, Standalone`,
      },
      features: [
        { label: "Automatic dusk-to-dawn operation" },
        { label: "100% solar-powered, no grid dependency" },
        { label: "Long-life lithium battery with LED fixtures" },
        { label: "Zero maintenance with IP65 protection" },
        { label: "Ideal for public, urban, and rural lighting" },
      ],
      tags: ["street-light", "LED", "smart-city", "renewable"],
      icon: "/icons/streetlight.svg",
      image: StreetPoleImg,
      cta: { label: "Light Up Spaces", href: "/contact?type=street-lights" },
    },

    /* ---------------------------------------------------------------------- */
    /*  Solar Water Heaters                                                   */
    /* ---------------------------------------------------------------------- */
    {
      id: "solar-water-heaters",
      name: "Solar Water Heaters",
      slug: "solar-water-heaters",
      category: "Water Heating",
      bannerImage:BannerWaterHeater,
      summary:
        "High-efficiency solar water heating solutions for homes, hospitals, hotels, and industrial use.",
      description: {
        overview:
          "Our solar water heaters use FPC and ETC collector technology for reliable, eco-friendly heating.",
        whyChoose: `- Save up to 90% on energy costs
- Zero carbon emissions, low maintenance
- Reliable supply even during power cuts`,
        models: `- ETC (Evacuated Tube Collector) — ideal for cold/hard water
- FPC (Flat Plate Collector) — for high-pressure usage`,
        technicalHighlights: `- ISI-marked insulated tanks
- GI/MS coated stands
- Optional electric backup heating`,
        benefits:
          "Fast ROI (2–3 years) and long-term durability with MNRE-approved systems.",
      },
      features: [
        { label: "ETC & FPC models for all climates" },
        { label: "Energy savings up to 90%" },
        { label: "ISI-certified, corrosion-resistant tanks" },
        { label: "Maintenance-free, 20+ years lifespan" },
        { label: "Ideal for domestic and commercial usage" },
      ],
      tags: ["water-heater", "ETC", "FPC", "residential", "commercial"],
      icon: "/icons/waterheater.svg",
      image: WaterHeaterImg,
      cta: { label: "Choose Your Heater", href: "/contact?type=water-heater" },
    },

    /* ---------------------------------------------------------------------- */
    /*  Solar Pumpsets                                                        */
    /* ---------------------------------------------------------------------- */
    {
      id: "solar-pumpsets",
      name: "Solar Pumpsets",
      slug: "solar-pumpsets",
      category: "Pumps",
      bannerImage:BannerSolarPump,
      summary:
        "Reliable solar-powered water pumps for agriculture, livestock, and industrial use — designed for off-grid and remote regions.",
      description: {
        overview: "Our solar pumpsets empower farmers with zero-fuel irrigation.",
        whyChoose: `- Zero dependency on diesel or grid
- Efficient irrigation in off-grid areas
- Long service life and low maintenance`,
        applications: `- Drip and sprinkler irrigation
- Livestock watering
- Rural drinking water schemes`,
        technicalHighlights: `- Surface and submersible pump options
- MPPT controllers with MNRE certification
- Stainless-steel construction for longevity`,
        benefits:
          "Save up to 90% irrigation costs, 60% subsidy available under PM-KUSUM.",
      },
      features: [
        { label: "Zero fuel dependency" },
        { label: "Ideal for remote/off-grid irrigation" },
        { label: "MNRE-certified components" },
        { label: "Long life with minimal maintenance" },
        { label: "Subsidy support for farmers" },
      ],
      tags: ["pumps", "agriculture", "off-grid", "subsidy"],
      icon: "/icons/pump.svg",
      image: SolarPumpImg,
      cta: { label: "Upgrade Irrigation", href: "/contact?type=solar-pumpset" },
    },

    /* ---------------------------------------------------------------------- */
    /*  Wall-Mounted Solar Systems                                            */
    /* ---------------------------------------------------------------------- */
    {
      id: "wall-mounted",
      name: "Wall-Mounted Solar Systems",
      slug: "wall-mounted-solar-systems",
      category: "Wall-mounted",
      bannerImage:BannerWallMounted,
      summary:
        "Smart, space-saving solar systems that fit on walls and balconies for compact urban spaces.",
      description: {
        overview:
          "Wall-mounted solar systems make solar viable for apartments and small offices.",
        applications: `- Apartments, offices, and small shops
- Institutional and public building facades`,
        benefits:
          "Stylish appearance, easy installation, minimal maintenance.",
      },
      features: [
        { label: "Perfect for limited roof areas" },
        { label: "Elegant wall-mounted design" },
        { label: "Durable, weather-resistant build" },
        { label: "Easy plug-and-play connection" },
        { label: "Eco-friendly energy solution" },
      ],
      tags: ["wall-mounted", "urban", "compact"],
      icon: "/icons/wall.svg",
      image: WallMountedImg,
      cta: { label: "Install Wall Solar", href: "/contact?type=wall-mounted" },
    },

    /* ---------------------------------------------------------------------- */
    /*  Floating Solar Systems                                                */
    /* ---------------------------------------------------------------------- */
    {
      id: "floating-solar",
      name: "Floating Solar Systems",
      slug: "floating-solar-systems",
      category: "Floating",
       bannerImage:BannerFloating,
      summary:
        "Innovative floating solar panels that harness the sun over water bodies, saving land and improving efficiency.",
      description: {
        overview:
          "Floating solar systems generate power on lakes, ponds, and reservoirs.",
        benefits: `- Uses unused water surfaces, saving land
- Water cooling enhances efficiency
- Reduces evaporation, promoting conservation`,
        applications: `- Dams, reservoirs, irrigation ponds
- Industrial and rural electrification projects`,
        technicalHighlights: `- UV-stabilized floats with corrosion-resistant frames
- Secure anchoring and mooring systems`,
        sustainability:
          "Promotes land optimization, water conservation, and renewable growth under REI initiatives.",
      },
      features: [
        { label: "Efficient & space-saving energy on water" },
        { label: "Natural cooling improves performance" },
        { label: "Reduces evaporation & conserves water" },
        { label: "Durable corrosion-proof materials" },
        { label: "Ideal for dams, lakes, and industrial ponds" },
      ],
      tags: ["floating", "reservoir", "industrial", "REI"],
      icon: "/icons/floating.svg",
      image: FloatingImg,
      cta: { label: "Explore Floating PV", href: "/contact?type=floating-solar" },
    },
  ],

  seo: {
    metaTitle:
      "Sky Volt Renewable — Complete Solar Installation Solutions (Rooftop, Ground, Floating, Pumps, Street Lights, Water Heaters)",
    metaDescription:
      "Sky Volt Renewable Pvt. Ltd. offers rooftop, ground-mounted, shed, wall-mounted, floating solar, pumpsets, street lights, fencing, and solar water heaters across India with MNRE-compliant EPC services.",
    keywords: [
      "solar EPC India",
      "rooftop solar Hyderabad",
      "ground mounted solar",
      "floating solar India",
      "solar street lights",
      "solar pumpsets subsidy",
      "solar water heater FPC ETC",
      "solar fencing",
      "industrial solar EPC",
    ],
  },
};

export default SOLAR_INSTALLATIONS_DATA;
