"use client";

import React from "react";
import { Tag, Card } from "antd";
import { Calendar } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  status: "completed" | "recent";
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  startDate,
  endDate,
  status,
}: ProjectCardProps) {
  return (
    <Card hoverable className="rounded-2xl shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg w-full h-48 object-cover mb-4"
      />

      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>

      <div className="mt-3 mb-2">
        <Tag
          color={status === "completed" ? "red" : "orange"}
          className="font-medium px-4 rounded-full"
        >
          {status === "completed" ? "Completed" : "Recent Project"}
        </Tag>
      </div>

      <p className="flex items-center text-gray-500 text-sm">
        <Calendar className="h-4 w-4 mr-2" /> {startDate} → {endDate}
      </p>
    </Card>
  );
}
