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
   TYPES
========================= */
type InstallationItem = {
  id: number;
  name: string;
  slug: string;
  category: string;
};

type AboutItem = {
  id: number;
  name: string;
  href: string;
};

/* =========================
   DATA
========================= */
const SOLAR_INSTALLATIONS_DATA: { items: InstallationItem[] } = {
  items: [
    {
      id: 1,
      name: "Smart Bus Solution",
      slug: "smart-bus-solution",
      category: "Smart Mobility",
    },
    {
      id: 2,
      name: "AI VMS – Video Management System",
      slug: "ai-vms-video-management-system",
      category: "AI Surveillance",
    },
    {
      id: 3,
      name: "Solar EPC",
      slug: "solar-epc",
      category: "Renewable Energy",
    },
    {
      id: 4,
      name: "Smart Biometric & Facial Recognition",
      slug: "smart-biometric-facial-recognition",
      category: "Biometrics",
    },
    {
      id: 5,
      name: "ERP Software System",
      slug: "erp-software-system",
      category: "Software",
    },
  ],
};

const ABOUT_MENU: AboutItem[] = [
  { id: 1, name: "Who We Are", href: "/about/who-we-are" },
  { id: 2, name: "Board of Directors", href: "/about/Board_of_directors" },
  { id: 3, name: "Our Team", href: "/about/our-team" },
  { id: 4, name: "Our Journey", href: "/about/ourjourney" },
  { id: 5, name: "Managing Director", href: "/about/our-managing-director" },
];

const RESOURCES_MENU: AboutItem[] = [
  { id: 1, name: "Our Events", href: "/ourevents" },
  { id: 2, name: "News", href: "/news" },
  { id: 3, name: "Our Projects", href: "/our-projects" },
  { id: 4, name: "Media", href: "/media" },
  { id: 5, name: "Case Studies", href: "/casestudy" },
];

/* =========================
   COMPONENT
========================= */
export function NavigationMenuDemo() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [useWhiteLogo, setUseWhiteLogo] = React.useState(false);
  const [showSolutionsMenu, setShowSolutionsMenu] = React.useState(false);
  const [showAboutMenu, setShowAboutMenu] = React.useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = React.useState(false);

  const pathname = usePathname();
  const vhThresholdRef = React.useRef<number>(0);

  /* === Scroll logo change === */
  React.useEffect(() => {
    const setThreshold = () => {
      vhThresholdRef.current = Math.round(window.innerHeight * 0.6);
    };
    setThreshold();

    const onScroll = () => {
      setUseWhiteLogo(window.scrollY >= vhThresholdRef.current);
    };

    window.addEventListener("resize", setThreshold);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", setThreshold);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* === Lock body scroll on mobile === */
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
    { label: "Solutions", href: "/solutions" },
    { label: "Resources", href: "#" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  /* === Group solar by category === */
  const grouped = React.useMemo(() => {
    const groups: Record<string, InstallationItem[]> = {};
    SOLAR_INSTALLATIONS_DATA.items.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerBg}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* LOGO */}
        <Link href="/" aria-label="Homepage">
          <Image src={logoSrc} alt="Logo" width={260} height={90} priority className="h-14 w-auto" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 mx-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            /* === ABOUT MENU === */
            if (item.label === "About Us") {
              return (
                <div
                  key="about"
                  className="relative"
                  onMouseEnter={() => setShowAboutMenu(true)}
                  onMouseLeave={() => setShowAboutMenu(false)}
                >
                  <span className={`font-semibold text-[18px] cursor-pointer ${useWhiteLogo ? "text-white" : "text-[#07518a]"}`}>
                    About Us
                  </span>

                  <AnimatePresence>
                    {showAboutMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white rounded-xl shadow-xl border p-5 w-[320px]"
                      >
                        <ul className="space-y-3">
                          {ABOUT_MENU.map((about) => (
                            <li key={about.id}>
                              <Link href={about.href} className="block text-[15px] text-gray-700 hover:text-[#07518a] font-medium">
                                {about.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            /* === RESOURCES MENU === */
            if (item.label === "Resources") {
              return (
                <div
                  key="resources"
                  className="relative"
                  onMouseEnter={() => setShowResourcesMenu(true)}
                  onMouseLeave={() => setShowResourcesMenu(false)}
                >
                  <span className={`font-semibold text-[18px] cursor-pointer ${useWhiteLogo ? "text-white" : "text-[#07518a]"}`}>
                    Resources
                  </span>

                  <AnimatePresence>
                    {showResourcesMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white rounded-xl shadow-xl border p-5 w-[280px]"
                      >
                        <ul className="space-y-3">
                          {RESOURCES_MENU.map((res) => (
                            <li key={res.id}>
                              <Link href={res.href} className="block text-[15px] text-gray-700 hover:text-[#07518a] font-medium">
                                {res.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
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
                className={`font-semibold text-[18px] ${
                  useWhiteLogo ? "text-white" : "text-[#07518a]"
                } hover:text-yellow-400`}
              >
                {item.label}
                {isActive && <span className="block h-[2px] bg-yellow-400 mt-1" />}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setMobileOpen((v) => !v)} className="md:hidden p-2">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden bg-white border-t shadow-lg">
            <ul className="p-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)} className="block text-lg">
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="pt-4 border-t">
                <p className="font-semibold text-[#07518a] mb-2">Resources</p>
                {RESOURCES_MENU.map((r) => (
                  <Link key={r.id} href={r.href} onClick={() => setMobileOpen(false)} className="block ml-3 text-sm py-1">
                    {r.name}
                  </Link>
                ))}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
