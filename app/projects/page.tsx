"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import HeadphoneScroll from "@/components/HeadphoneScroll";

const API = "http://172.30.0.200:1334/api";

export default function ProjectsPage() {
  const [recent, setRecent] = useState<any[]>([]);
  const [completed, setCompleted] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`${API}/projects?populate=image`).then((res) => {
      const today = dayjs();
      const projects = res.data.data;

      // 👇 Logic for filtering only Completed & Recent
      const recentProjects = projects.filter(
        (p: any) =>
          dayjs(p.endDate).isBefore(today) &&
          today.diff(dayjs(p.endDate), "day") <= 30
      );

      const completedProjects = projects.filter(
        (p: any) => today.diff(dayjs(p.endDate), "day") > 30
      );

      setRecent(recentProjects);
      setCompleted(completedProjects);
    });
  }, []);

  return (
    <motion.main className="max-w-6xl mx-auto px-4 py-10">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        📂 Projects Overview
      </motion.h1>

      {/* Recent Section */}
      {recent.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            🕒 Recent Projects (Last 30 Days)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recent.map((p: any) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                imageUrl={`http://172.30.0.200:1334${p.image?.url}`}
                startDate={p.startDate}
                endDate={p.endDate}
                status="recent"
              />
            ))}
          </div>
        </section>
      )}

      {/* Completed Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          📦 Completed Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {completed.map((p: any) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              imageUrl={`http://172.30.0.200:1334${p.image?.url}`}
              startDate={p.startDate}
              endDate={p.endDate}
              status="completed"
            />
          ))}
        </div>
      </section>
    </motion.main>
  );
}
