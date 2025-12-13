"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import whiteLogo from "../app/images/sollutionimages/logos/highbtlogo white- tm.png";
import blueLogo from "../app/images/sollutionimages/logos/highbtlogo tm (1).png";

/* =========================
   TEMP DATA (WORDS ONLY)
   Replace this later with your real data import
========================= */
type InstallationItem = {
  id: number;
  name: string;
  slug: string;
  category: string;
};

const SOLAR_INSTALLATIONS_DATA: { items: InstallationItem[] } = {
  items: [
    { id: 1, name: "Residential Solar Rooftop", slug: "residential-solar-rooftop", category: "Rooftop" },
    { id: 2, name: "Commercial Solar Rooftop", slug: "commercial-solar-rooftop", category: "Rooftop" },
    { id: 3, name: "Industrial Solar Plant", slug: "industrial-solar-plant", category: "Industrial" },
    { id: 4, name: "On-Grid Solar System", slug: "on-grid-solar-system", category: "Grid Systems" },
    { id: 5, name: "Off-Grid Solar System", slug: "off-grid-solar-system", category: "Grid Systems" },
    { id: 6, name: "Solar Water Heater", slug: "solar-water-heater", category: "Heating" },
    { id: 7, name: "Solar Street Lights", slug: "solar-street-lights", category: "Lighting" },
    { id: 8, name: "Solar Pump Solutions", slug: "solar-pump-solutions", category: "Agriculture" },
  ],
};

export function NavigationMenuDemo() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [useWhiteLogo, setUseWhiteLogo] = React.useState(false);
  const [showMegaMenu, setShowMegaMenu] = React.useState(false);

  const pathname = usePathname();
  const vhThresholdRef = React.useRef<number>(0);

  const handleInstallationClick = () => {
    setShowMegaMenu(false);
    setMobileOpen(false);
  };

  /* === Scroll effect for header transparency === */
  React.useEffect(() => {
    const setThreshold = () => {
      vhThresholdRef.current = Math.round(window.innerHeight * 0.6);
    };
    setThreshold();

    const onScroll = () => {
      const isPastThreshold = window.scrollY >= vhThresholdRef.current;
      setUseWhiteLogo(isPastThreshold);
    };

    window.addEventListener("resize", setThreshold);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", setThreshold);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* === Prevent body scroll when mobile menu open === */
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const logoSrc = useWhiteLogo ? whiteLogo : blueLogo;

  const headerBg = useWhiteLogo
    ? "bg-[#07518a]/95 backdrop-blur-md border-b border-[#064374] text-white"
    : "bg-transparent text-[#2469ad]";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/sollutions" },
    { label: "Services", href: "/services" },
        { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMobile = () => setMobileOpen((v) => !v);

  /* === Group installation items by category === */
  const grouped = React.useMemo(() => {
    const groups: Record<string, InstallationItem[]> = {};
    SOLAR_INSTALLATIONS_DATA.items.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500  ${headerBg}`} >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 ">
        {/* LOGO */}
        <Link href="/" aria-label="Homepage" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={logoSrc}
              alt="Logo"
              width={300}
              height={120}
              priority
              className="h-14 w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center justify-center gap-10 relative mx-auto ">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            if (item.label === "Solutions") {
              return (
                <div
                  key="solutions"
                  className="relative group"
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onMouseLeave={() => setShowMegaMenu(false)}
                >
                  <Link href="/solar-installations">
                    <span
                      className={`font-semibold text-[18px] cursor-pointer transition-all ${
                        useWhiteLogo ? "text-white" : "text-[#07518a]"
                      } hover:text-yellow-400`}
                    >
                      {item.label}
                    </span>
                  </Link>

                  {/* MEGA MENU */}
                  <AnimatePresence>
                    {showMegaMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-3 z-50"
                      >
                        <div className="bg-white shadow-2xl rounded-xl border border-gray-100 px-6 py-4 grid grid-cols-4 gap-5 w-[750px]">
                          {Object.entries(grouped).map(([category, list]) => (
                            <div key={category}>
                              <h3 className="text-[#07518a] font-semibold text-[15px] mb-2 border-b border-gray-200 pb-1">
                                {category}
                              </h3>

                              <ul className="space-y-1">
                                {list.map((installation) => (
                                  <li key={installation.id}>
                                    <Link
                                      href={`/solar-installations/${installation.slug}`}
                                      onClick={handleInstallationClick}
                                      className="text-gray-700 text-[14px] hover:text-[#07518a] transition-all block"
                                    >
                                      {installation.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-semibold text-[18px] transition-all ${
                  useWhiteLogo ? "text-white" : "text-[#07518a]"
                } hover:text-yellow-400 relative`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 bg-yellow-400 h-[2px] w-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <motion.button onClick={toggleMobile} whileTap={{ scale: 0.9 }} className="p-2" type="button">
            {mobileOpen ? (
              <X size={28} className={useWhiteLogo ? "text-white" : "text-gray-900"} />
            ) : (
              <Menu size={28} className={useWhiteLogo ? "text-white" : "text-gray-900"} />
            )}
          </motion.button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden absolute top-full left-0 w-full z-40 ${
              useWhiteLogo ? "bg-[#07518a]/95 backdrop-blur-sm" : "bg-white/95 backdrop-blur-sm"
            } border-t border-gray-200 shadow-lg`}
          >
            <ul className="flex flex-col p-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 rounded-md text-lg font-medium ${
                      useWhiteLogo ? "text-white hover:text-yellow-400" : "text-gray-900 hover:text-[#07518a]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="pt-4 border-t border-gray-300">
                <p className={`text-lg font-semibold mb-2 ${useWhiteLogo ? "text-white" : "text-[#07518a]"}`}>
                  Solutions
                </p>

                <ul className="space-y-2 ml-3">
                  {SOLAR_INSTALLATIONS_DATA.items.map((installation) => (
                    <li key={installation.id}>
                      <Link
                        href={`/solar-installations/${installation.slug}`}
                        onClick={handleInstallationClick}
                        className={`block text-[15px] ${
                          useWhiteLogo ? "text-white hover:text-yellow-400" : "text-gray-800 hover:text-[#07518a]"
                        }`}
                      >
                        {installation.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
