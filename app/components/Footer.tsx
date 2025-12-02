"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  Dribbble,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

/* =============================================
   Data (edit paths / text to match your site)
============================================= */
const data = {
  facebookLink: "https://www.facebook.com/BrihaspathiTechnology",
  instaLink: "https://www.instagram.com/brihaspathitechnologieslimited/",
  twitterLink: "https://x.com/brihaspathitec",
  linkdin:
    "https://www.linkedin.com/company/brihaspathi-technologies?originalSubdomain=in",
  dribbbleLink: "https://www.brihaspathi.com/",

  contact: {
    email: "info@brihaspathi.com",
    phone: "+91 98858 88835",
    tollFree: "1800 296 8899",
    addresses: {
      registeredOffice:
        "5th Floor, Sahithi Arcade, SR Nagar, Hyderabad - 500038",
      corporateOffice:
        "501, 508-510, Shangrila Plaza, Road No. 2, Park View Enclave, Banjara Hills, Hyderabad, Telangana - 500034",
    },
  },
  company: {
    name: "Brihaspathi Technologies Limited",
    description:
      "Trusted surveillance, ELV, and smart technology partner for forward-thinking business.",
    logo: "/highbtlogo white- tm.png",
  },
};

const logo = data.company.logo;

/* ---------- Links (grouped for the 4 columns) ---------- */
const aboutLinks = [
  { text: "Our History", href: "/about/our-story" },
  { text: "Founder-Managing Director", href: "/about/founder" },
  { text: "Board of Directors", href: "/about/boardofdirectors" },
  { text: "Our team", href: "/about/ourteam" },
  // { text: "Awards", href: "/Resources/awards" },
];

const careersLinks = [
  { text: "Working at Brihaspathi", href: "/life-at-brihaspathi" },
];

const businessLinks = [
  {
    text: "AI – Surveillance",
    href: "/solutions/video-analytics",
  },
  { text: "Access control", href: "/solutions/access-control" },
  { text: "Smart retail", href: "/solutions/smart-retail" },
  { text: "Smart Bus", href: "/solutions/smart-bus" },
];

const newsMediaLinks = [
  { text: "Resource Centre", href: "/resource-centre" },
  { text: "Events", href: "/events" },
];

const servicesLinks = [
  { text: "E-Communication", href: "/services/e-communication" },
  { text: "Software Services", href: "/services/software-services" },
  { text: "IT & Telecom Services", href: "/services/it-telecom-services" },
  { text: "Security Services", href: "/services/security-services" },
  { text: "Sector Solutions", href: "/services/sector-solutions" },
  { text: "Smart City Solutions", href: "/services/smart-city-solutions" },
  { text: "Enterprise Solutions", href: "/services/enterprise-solutions" },
  { text: "Industrial Solutions", href: "/services/industrial-solutions" },
];

const quickLinks = [
  { text: "Industrial Solutions", href: "/services/industrial-solutions" },
  { text: "Security Services", href: "/services/security-services" },
  { text: "Smart City Solutions", href: "/services/smart-city-solutions" },
  { text: "Software Services", href: "/services/software-services" },
  { text: "Contact Us", href: "/contact" },
  { text: "FAQs", href: "/faq" },
  { text: "Support", href: "/support" },
  { text: "Live Chat", href: "/live-chat" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.facebookLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  { icon: Twitter, label: "Twitter", href: data.twitterLink },
  { icon: Linkedin, label: "LinkedIn", href: data.linkdin },
  { icon: Dribbble, label: "Website", href: data.dribbbleLink },
];

/* =============================================
   Footer Component (Top Brand+Social → Links Grid → Contact Band)
============================================= */
export default function Footer4Col() {
  return (
    <footer
      role="contentinfo"
      className="mt-16 w-full rounded-t-xl bg-gray-700 text-white"
    >
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-20">
        {/* Brand + Social Row (TOP) */}
        <div className="mb-12 flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-left">
            <Image
              src={logo}
              alt="Brihaspathi logo"
              width={128}
              height={40}
              className="h-10 w-auto"
              priority
            />
            {/* <div>
              <p className="font-semibold leading-tight">{data.company.name}</p>
              <p className="max-w-2xl text-sm text-white/80">
                {data.company.description}
              </p>
            </div> */}
          </div>

          {/* Social icons (lucide-react) */}
          <ul
            className="flex justify-center gap-3"
            aria-label="Follow Brihaspathi"
          >
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 transition hover:border-white/40 hover:bg-white/10"
                >
                  <Icon className="size-5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Grid (4 columns) */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: About + Careers */}
          <div className="space-y-8">
            <FooterGroup title="About Us" links={aboutLinks} />
            <FooterGroup title="Careers" links={careersLinks} />
          </div>

          {/* Col 2: Businesses + News */}
          <div className="space-y-8">
            <FooterGroup title="Our Businesses" links={businessLinks} />
            <FooterGroup title="News & Media" links={newsMediaLinks} />
          </div>

          {/* Col 3: Services */}
          <FooterGroup title="Our Services" links={servicesLinks} />

          {/* Col 4: Quick Links */}
          <FooterGroup title="Quick Links" links={quickLinks} />
        </div>

        {/* Contact Band (3-column layout fills the visual gap under Careers + News) */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Phones & Email */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h3 className="mb-3 text-base font-semibold">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-5" />
                <span>
                  {data.contact.phone}
                  <br />
                  Toll-free: {data.contact.tollFree}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-5" />
                <span>{data.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Registered Office */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h3 className="mb-3 text-base font-semibold">Registered Office</h3>
            <p className="flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 size-5" />
              <address className="not-italic">
                {data.contact.addresses.registeredOffice}
              </address>
            </p>
          </div>

          {/* Corporate Office */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h3 className="mb-3 text-base font-semibold">Corporate Office</h3>
            <p className="flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 size-5" />
              <address className="not-italic">
                {data.contact.addresses.corporateOffice}
              </address>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/15 pt-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} {data.company.name}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            {" "}
            <p className="mt-3 text-xs text-white/60 sm:mt-0 hover:text-blue-500">
              Privacy Policy
            </p>
            <p className="mt-3 text-xs text-white/60 sm:mt-0  hover:text-blue-500">
              Legal Notice
            </p>
            <p className="mt-3 text-xs text-white/60 sm:mt-0  hover:text-blue-500">
              Report Security Issue
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Small helper ---------- */
function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: { text: string; href: string; hasIndicator?: boolean }[];
}) {
  const id = `footer-${title.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <nav aria-labelledby={id} className="text-center sm:text-left">
      <h3 id={id} className="text-lg font-medium">
        {title}
      </h3>
      <ul className="mt-6 space-y-3 text-sm">
        {links.map(({ text, href, hasIndicator }) => (
          <li key={`${title}-${text}`}>
            <Link
              href={href}
              className={
                hasIndicator
                  ? "group inline-flex items-center gap-2 text-white/80 transition hover:text-white"
                  : "text-white/80 transition hover:text-white"
              }
            >
              <span>{text}</span>
              {hasIndicator && (
                <span className="relative ml-1 inline-flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-white" />
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
