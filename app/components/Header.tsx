"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import useSWR from "swr";
import MegaMenu from "./MegaMenu";

/* === BRAND === */
const BRAND = "#07518a";
const BRAND_TINT = "#0a6ab8";
const WHITE_LOGO = "/highbtlogo white- tm.png";
const BLUE_LOGO = "/highbtlogo tm (1).png";

/* === API Fetcher === */
const fetcher = (url: string) => fetch(url).then((res) => res.json());

/* === Small Dropdown Menu === */
const SmallMenu = ({
  isOpen,
  items,
  onClose,
}: {
  isOpen: boolean;
  items: { label: string; to: string }[];
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.2 }}
        className="absolute left-1/2 top-full z-[90] mt-2 w-56 -translate-x-1/2 rounded-xl bg-white shadow-xl ring-1 ring-black/5"
        onMouseLeave={onClose}
      >
        {items.map((item) => (
          <Link
            key={item.to}
            href={item.to}
            onClick={onClose}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#07518a]/10 hover:text-[#07518a] transition-all"
          >
            {item.label}
          </Link>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Header() {
  const pathname = usePathname();
  const [bgProgress, setBgProgress] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  /* === STRAPI API DATA === */
  const { data: apiData } = useSWR(
    "http://172.30.0.200:1334/api/items?populate[0]=image&populate[1]=category",
    fetcher
  );

  /* === Format Mega Menu Data === */
  const megaData = useMemo(() => {
    if (!apiData?.data) return [];
    const grouped: any = {};

    apiData.data.forEach((item: any) => {
      const cat = item.category;
      if (!cat?.slug) return;

      if (!grouped[cat.slug]) {
        grouped[cat.slug] = {
          title: cat.title,
          slug: cat.slug,
          type: cat.type, // "product" or "service"
          items: [],
        };
      }

      grouped[cat.slug].items.push({
        title: item.title,
        slug: item.slug,
      });
    });

    return Object.values(grouped);
  }, [apiData]);

  /* === Scroll Animation === */
  useEffect(() => {
    const handleScroll = () => setBgProgress(Math.min(1, window.scrollY / 140));
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onDark = bgProgress < 0.45;

  /* === Static Menus === */
  const menu = [
    { name: "home", label: "Home", to: "/" },
    { name: "products", label: "Products", mega: true },
    { name: "services", label: "Services", mega: true },
    {
      name: "solutions",
      label: "Solutions",
      submenu: [
        { label: "AI Video Analytics", to: "/solutions/video-analytics" },
        { label: "Access Control", to: "/solutions/access-control" },
        { label: "Smart Retail", to: "/solutions/smart-retail" },
        { label: "Smart Bus", to: "/solutions/smart-bus" },
      ],
    },
    {
      name: "about",
      label: "About",
      submenu: [
        { label: "Who We Are", to: "/about/who-we-are" },
        { label: "Our Journey", to: "/about/our-journey" },
        { label: "Our Managing Director", to: "/about/founder" },
        { label: "Board of Directors", to: "/about/boardofdirectors" },
        { label: "Our Team", to: "/about/ourteam" },
      ],
    },
    { name: "contact", label: "Contact", to: "/contact" },
  ];

  const active = menu.find((m) => pathname?.startsWith(m.to || "")) || menu[0];

  /* === Hover Events === */
  const handleMouseEnter = (name: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setDropdownOpen(name), 80);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setDropdownOpen(null), 150);
  };

  return (
    <>
      {/* Scroll Bar */}
      <motion.div
        className="fixed left-0 top-0 z-[100] h-[4px] w-full origin-left"
        style={{ background: BRAND, transform: `scaleX(${bgProgress})`, opacity: bgProgress > 0.02 ? 1 : 0 }}
      />

      {/* Header */}
      <nav className="fixed top-0 w-full h-[85px] z-[95] backdrop-blur-md">
        <div
          className="absolute inset-0 -z-10 transition-all"
          style={{
            background: onDark
              ? `linear-gradient(90deg, ${BRAND}, ${BRAND_TINT})`
              : "rgba(255, 255, 255, 0.96)",
          }}
        />

        <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={onDark ? WHITE_LOGO : BLUE_LOGO} alt="Logo" width={220} height={50} priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-3">
            {menu.map((m) => (
              <div
                key={m.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(m.name)}  // ✔️ hover logic here
                onMouseLeave={handleMouseLeave}               // ✔️ added to wrapper
              >
                <Link
                  href={m.to || "#"}
                  className={`flex items-center gap-1 px-4 py-2 font-medium transition-all
                    ${
                      onDark
                        ? active.name === m.name
                          ? "text-white"
                          : "text-white/90 hover:text-white"
                        : active.name === m.name
                        ? "text-[#07518a]"
                        : "text-gray-700 hover:text-[#07518a]"
                    }`}
                >
                  {m.label}
                  {(m.submenu || m.mega) && (
                    <ChevronDown className={`w-4 h-4 ${dropdownOpen === m.name ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {/* Mega Menu */}
                {m.mega && (
                  <MegaMenu
                    isOpen={dropdownOpen === m.name}
                    data={megaData.filter((c: any) => c.type === m.name.slice(0, -1))}
                    categoryType={m.name === "products" ? "product" : "service"}
                    onClose={() => setDropdownOpen(null)}
                  />
                )}

                {/* Small Menu */}
                {m.submenu && <SmallMenu isOpen={dropdownOpen === m.name} items={m.submenu} onClose={() => setDropdownOpen(null)} />}
              </div>
            ))}
          </div>

          {/* Mobile Icon */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2 rounded-md ${
              onDark ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <div className="h-[85px]" />
    </>
  );
}
