"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import StaggeredMenu, {
  StaggeredMenuItem,
  StaggeredMenuSocialItem,
} from "./StaggeredMenu";

import whiteLogo from "../app/images/sollutionimages/logos/highbtlogo white- tm.png";
import blueLogo from "../app/images/sollutionimages/logos/highbtlogo tm (1).png";

/* =========================
   TYPES
========================= */
type MenuItem = {
  id: number;
  name: string;
  href: string;
};

/* =========================
   DATA
========================= */
const ABOUT_MENU: MenuItem[] = [
  { id: 1, name: "Who We Are", href: "/about/who-we-are" },
  { id: 2, name: "Board of Directors", href: "/about/Board_of_directors" },
  { id: 3, name: "Our Team", href: "/about/our-team" },
  { id: 4, name: "Our Journey", href: "/about/ourjourney" },
  { id: 5, name: "Managing Director", href: "/about/our-managing-director" },
];

const RESOURCES_MENU: MenuItem[] = [
  { id: 1, name: "Our Events", href: "/ourevents" },
  { id: 2, name: "News", href: "/news" },
  { id: 3, name: "Our Projects", href: "/our-projects" },
  { id: 4, name: "Media", href: "/media" },
  { id: 5, name: "Case Studies", href: "/casestudy" },
];

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "#" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

/* =========================
   COMPONENT
========================= */
export default function Header() {
  const pathname = usePathname();

  const [useWhiteLogo, setUseWhiteLogo] = React.useState(false);
  const [showAboutMenu, setShowAboutMenu] = React.useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = React.useState(false);

  const vhThresholdRef = React.useRef<number>(0);

  /* === Smooth scroll-based logo switch === */
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

    onScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("resize", setThreshold);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const logoData = useWhiteLogo ? whiteLogo : blueLogo;

  const headerBg = useWhiteLogo
    ? "bg-[#07518a]/95 backdrop-blur-md border-b border-[#064374]"
    : "bg-transparent";

  /* === Mobile menu data === */
  const mobileMenuItems: StaggeredMenuItem[] = [
    { label: "Home", ariaLabel: "Home", link: "/" },
    { label: "About Us", ariaLabel: "About Us", link: "/about" },
    ...ABOUT_MENU.map((item) => ({
      label: item.name,
      ariaLabel: item.name,
      link: item.href,
    })),
    { label: "Solutions", ariaLabel: "Solutions", link: "/solutions" },
    { label: "Products", ariaLabel: "Products", link: "/products" },
    { label: "Services", ariaLabel: "Services", link: "/services" },
    { label: "Contact", ariaLabel: "Contact", link: "/contact" },
  ];

  const socialItems: StaggeredMenuSocialItem[] = RESOURCES_MENU.map((item) => ({
    label: item.name,
    link: item.href,
  }));

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* LOGO */}
          <Link href="/" className="hidden md:block" aria-label="Homepage">
            <motion.div
              key={useWhiteLogo ? "white" : "blue"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={logoData}
                alt="BTL Logo"
                width={260}
                height={90}
                priority
                className="h-14 w-auto"
              />
            </motion.div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-10 mx-auto">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;

              if (item.label === "About Us") {
                return (
                  <div
                    key="about"
                    className="relative"
                    onMouseEnter={() => setShowAboutMenu(true)}
                    onMouseLeave={() => setShowAboutMenu(false)}
                  >
                    <span
                      className={`font-semibold text-[18px] cursor-pointer transition-colors duration-300 ${
                        useWhiteLogo ? "text-white" : "text-[#07518a]"
                      } hover:text-yellow-400`}
                    >
                      About Us
                    </span>

                    <AnimatePresence>
                      {showAboutMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white rounded-xl shadow-xl border border-gray-200 p-5 w-[320px]"
                        >
                          <ul className="space-y-3">
                            {ABOUT_MENU.map((about) => (
                              <li key={about.id}>
                                <Link
                                  href={about.href}
                                  className="block text-[15px] text-gray-700 hover:text-[#07518a] font-medium transition-colors duration-200 hover:translate-x-1 transform"
                                >
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

              if (item.label === "Resources") {
                return (
                  <div
                    key="resources"
                    className="relative"
                    onMouseEnter={() => setShowResourcesMenu(true)}
                    onMouseLeave={() => setShowResourcesMenu(false)}
                  >
                    <span
                      className={`font-semibold text-[18px] cursor-pointer transition-colors duration-300 ${
                        useWhiteLogo ? "text-white" : "text-[#07518a]"
                      } hover:text-yellow-400`}
                    >
                      Resources
                    </span>

                    <AnimatePresence>
                      {showResourcesMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white rounded-xl shadow-xl border border-gray-200 p-5 w-[280px]"
                        >
                          <ul className="space-y-3">
                            {RESOURCES_MENU.map((res) => (
                              <li key={res.id}>
                                <Link
                                  href={res.href}
                                  className="block text-[15px] text-gray-700 hover:text-[#07518a] font-medium transition-colors duration-200 hover:translate-x-1 transform"
                                >
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
                  className={`relative font-semibold text-[18px] transition-colors duration-300 ${
                    useWhiteLogo ? "text-white" : "text-[#07518a]"
                  } hover:text-yellow-400`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-yellow-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ================= MOBILE / TABLET MENU ================= */}
      <div className="lg:hidden">
        <StaggeredMenu
          position="left"
          colors={["#07518a", "#2469ad"]}
          items={mobileMenuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering
          logoUrl={logoData.src}
          menuButtonColor={useWhiteLogo ? "#ffffff" : "#2469ad"}
          openMenuButtonColor="#000"
          accentColor="#07518a"
          isFixed
          changeMenuColorOnOpen
          closeOnClickAway
          onMenuOpen={() => {
            document.body.style.overflow = "hidden";
          }}
          onMenuClose={() => {
            document.body.style.overflow = "";
          }}
        />
      </div>
    </>
  );
}