"use client";

import React, { useState } from "react";
import type { OrgGroup, OrgPerson } from "./org-groups";

interface TeamShowcaseProps {
  group: OrgGroup;
}

const BRAND_COLOR = "#07518a";

const TeamShowcase: React.FC<TeamShowcaseProps> = ({ group }) => {
  const [activePerson, setActivePerson] = useState<OrgPerson | null>(null);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* ================= BACKGROUND BRAND TEXT ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="select-none font-black opacity-10"
          style={{
            fontSize: "18rem",
            color: BRAND_COLOR,
            lineHeight: 1,
          }}
        >
          ATT
        </span>
      </div>

      {/* ================= IMAGE ROW ================= */}
      <div className="relative z-10 pt-20">
        <div className="flex justify-center gap-5 px-6 max-w-7xl mx-auto flex-wrap">
          {group.people.map((person) => (
            <div
              key={person.id}
              onMouseEnter={() => setActivePerson(person)}
              onMouseLeave={() => setActivePerson(null)}
              className="cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden border bg-white transition-all duration-300 hover:scale-110"
                style={{
                  borderColor: BRAND_COLOR,
                }}
              >
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://via.placeholder.com/200x200/f1f5f9/07518a?text=" +
                      person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("");
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ================= NAME DISPLAY ================= */}
        <div className="mt-10 h-[90px] flex items-center justify-center">
          {activePerson && (
            <h2
              className="font-bold tracking-wide animate-fadeIn"
              style={{
                color: BRAND_COLOR,
                fontSize: "2.25rem",
              }}
            >
              {activePerson.name}
            </h2>
          )}
        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default TeamShowcase;
