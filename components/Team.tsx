"use client";

import React from "react";
import {
  CardHoverReveal,
  CardHoverRevealMain,
  CardHoverRevealContent,
} from "@/components/reaveaal-on-hover";
import { Linkedin } from "lucide-react";
import type { OrgGroup, OrgPerson } from "@/app/about/org-groups";

interface TeamHoverGridProps {
  group: OrgGroup;
}

export const TeamHoverGrid: React.FC<TeamHoverGridProps> = ({ group }) => {
  return (
    <section className="space-y-10">
      {/* Section Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {group.title}
        </h2>
        <p className="max-w-2xl text-sm text-slate-500">
          Leadership team driving strategy, innovation, and operational
          excellence across the organization.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {group.people.map((person) => (
          <TeamHoverCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
};

/* ---------------------------------------------------------------- CARD */

interface TeamHoverCardProps {
  person: OrgPerson;
}

const TeamHoverCard: React.FC<TeamHoverCardProps> = ({ person }) => {
  return (
    <CardHoverReveal className="group h-[440px] w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* IMAGE + NAME */}
      <CardHoverRevealMain className="relative">
        <img
          src={person.photo}
          alt={person.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Name + designation (always visible) */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-lg font-semibold text-white leading-tight">
            {person.name}
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-200">
            {person.designation}
          </p>
        </div>
      </CardHoverRevealMain>

      {/* HOVER CONTENT */}
      <CardHoverRevealContent className="rounded-2xl bg-white/95 text-slate-800 shadow-2xl ring-1 ring-black/5">
        <div className="flex h-full flex-col justify-between gap-5">
          {/* Bio */}
          <div className="space-y-3">
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
              Leadership Profile
            </span>

            <p className="text-sm leading-relaxed text-slate-700 line-clamp-7">
              {person.bio}
            </p>
          </div>

          {/* LinkedIn */}
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-900 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          )}
        </div>
      </CardHoverRevealContent>
    </CardHoverReveal>
  );
};
