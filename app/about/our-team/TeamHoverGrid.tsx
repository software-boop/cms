"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import type { OrgGroup, OrgPerson } from "./org-groups";

/* ================= PROPS ================= */

interface TeamHoverGridProps {
  group: OrgGroup;
}

/* ================= GRID ================= */

export const TeamHoverGrid: React.FC<TeamHoverGridProps> = ({ group }) => {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {group.title}
        </h2>
        <p className="max-w-2xl text-sm text-slate-500">
          Leadership team driving strategy, innovation, and operational excellence.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {group.people.map((person) => (
          <FlipCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
};

/* ================= CARD ================= */

interface FlipCardProps {
  person: OrgPerson;
}

const FlipCard: React.FC<FlipCardProps> = ({ person }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-[360px] w-full perspective"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={person.photo}
            alt={person.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 p-4 text-white">
            <h3 className="text-base font-semibold">{person.name}</h3>
            <p className="text-xs uppercase tracking-wide text-slate-200">
              {person.designation}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-slate-900 p-5 text-white shadow-xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="space-y-2">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide">
              Leadership Profile
            </span>

            <h3 className="text-lg font-bold">{person.name}</h3>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              {person.designation}
            </p>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-200 line-clamp-6">
            {person.bio}
          </p>

          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};
