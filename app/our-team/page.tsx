"use client";

import React, { useEffect, useState, useMemo, useRef } from "react";
import { Row, Col, Image as AntImage, Typography, Tag, Spin } from "antd";
import { Users } from "lucide-react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";

const { Title, Paragraph, Text } = Typography;

const BRAND = "#07518a";
const API_URL = "http://172.30.0.200:1334/api/members?populate=*";

/* Fallback avatar using initials */
const initialsAvatar = (name: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`;

/* Track scroll direction */
function useScrollDirection() {
  const [dir, setDir] = useState("down");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setDir(y > lastY.current ? "down" : "up");
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return dir;
}

/* Animation variants */
function useColumnVariants() {
  const dir = useScrollDirection();
  return useMemo(
    () => ({
      hidden: { opacity: 0, y: dir === "down" ? 24 : -24, filter: "blur(6px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 260, damping: 22 },
      },
    }),
    [dir]
  );
}

function TeamCard({ p }: { p: any }) {
  return (
    <div className="team-card relative">
      {/* Order Badge */}
      <div
        className="absolute top-2 left-2 bg-[#07518a] text-white px-3 py-1 text-xs rounded-md shadow-md"
        style={{ zIndex: 10 }}
      >
        {/* #{p.order} */}
      </div>

      <div className="team-card__media">
        <AntImage
          src={p.photo}
          alt={p.name}
          preview={{ mask: "View Photo" }}
          fallback={initialsAvatar(p.name)}
          className="team-card__img"
        />
      </div>

      <div className="team-card__body">
        <div className="flex justify-between items-center">
          <Title level={3} style={{ margin: 0, color: BRAND }}>
            {p.name}
          </Title>
          {p.linkedin && (
            <a href={p.linkedin} target="_blank" rel="noreferrer">
              <img src="/social.png" alt="LinkedIn" width={26} height={26} />
            </a>
          )}
        </div>

        <Text type="secondary" style={{ marginTop: 6, display: "block" }}>
          {p.designation}
        </Text>

        {p.department && (
          <Tag className="ltwp__chip mt-2">
            <Users size={14} />
            {p.department}
          </Tag>
        )}

        <Paragraph className="team-card__bio mt-2">
          {p.about || "No description available."}
        </Paragraph>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const [team, setTeam] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const variants = useColumnVariants();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((resp) => {
        let members = resp?.data?.map((m: any) => ({
          id: m.documentId || m.id,
          name: m.tittle,
          order: m.order ?? 9999,
          designation: m.department?.title,
          department: m.department?.title || "",
          linkedin: m.linkdin,
          about: m.About,
          photo: m.image?.url
            ? `http://172.30.0.200:1334${m.image.url}`
            : initialsAvatar(m.tittle),
        }));

        // 🔥 Final SORT ascending by ORDER
        members = members.sort((a: any, b: any) => a.order - b.order);

        setTeam(members);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="py-20 text-center">
        <Spin size="large" />
      </div>
    );

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "never"}>
      <section className="ltwp__container">
        <Title level={2} style={{ textAlign: "center", color: BRAND }}> 
   
        </Title>
        <p className="text-center mb-6 text-gray-600">
        
        </p>

        <Row gutter={[24, 32]}>
          {team.map((p, index) => (
            <Col key={p.id} xs={24} sm={12} lg={8} xl={6}>
              <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                style={{ willChange: "transform, opacity, filter" }}
              >
                <TeamCard p={p} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      <style jsx>{`
        .ltwp__container {
          max-width: 1300px;
          margin: auto;
          padding: 32px 16px;
        }

        .team-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        .team-card:hover {
          transform: translateY(-3px);
        }

        .team-card__media {
          width: 100%;
          aspect-ratio: 1/1;
          overflow: hidden;
        }

        .team-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-card__body {
          padding: 14px;
        }

        .ltwp__chip {
          background: rgba(7, 81, 138, 0.1);
          color: ${BRAND};
          border-radius: 50px;
          font-weight: 500;
          padding: 3px 10px;
        }

        .team-card__bio {
          font-size: 14px;
          line-height: 1.6;
          color: #555;
          max-height: 130px;
          overflow: hidden;
        }
      `}</style>
    </MotionConfig>
  );
}
