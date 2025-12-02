"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "../../app/components/Header";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // ❌ Do NOT show Header on /super-admin routes
  const hideHeader = pathname.startsWith("/super-admin");

  return (
    <>
      {!hideHeader && <Header />}
      {children}
    </>
  );
}
