import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

/* ─── Data ─────────────────────────────────────────────── */
const serviceCategories = [
  {
    id: "web",
    number: "01",
    category: "Web Development & Design",
    tagline: "Pixel-perfect. Performance-first.",
    accent: "#38b5e8",
    gradientFrom: "from-[#0f1f2e]",
    gradientTo: "to-[#0a1520]",
    borderColor: "border-[#38b5e8]/20",
    glowColor: "shadow-[0_0_60px_rgba(56,181,232,0.08)]",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="4" y="8" width="40" height="28" rx="3" />
        <path d="M16 44h16M24 36v8" />
        <path d="M4 28h40" />
        <path d="M14 20l4 4-4 4M22 24h8" strokeLinecap="round" />
      </svg>
    ),
    services: [
      {
        name: "Full Stack Web Development",
        desc: "Handling both the front-end user experience and the back-end logic & database management — end to end.",
        tag: "Frontend · Backend · Database",
      },
      {
        name: "Web Design",
        desc: "Focusing on layout, UI/UX, and visual aesthetics of websites. Every pixel crafted with intention.",
        tag: "UI · UX · Visual",
      },
      {
        name: "Website Services",
        desc: "General maintenance, deployment, and site optimisation to keep your digital presence sharp and swift.",
        tag: "Maintenance · Deployment · SEO",
      },
    ],
  },
  {
    id: "design",
    number: "02",
    category: "Creative & Visual Design",
    tagline: "Concepts that captivate. Visuals that convert.",
    accent: "#a855f7",
    gradientFrom: "from-[#1a0f2e]",
    gradientTo: "to-[#110a1f]",
    borderColor: "border-purple-500/20",
    glowColor: "shadow-[0_0_60px_rgba(168,85,247,0.08)]",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M24 4C13 4 4 13 4 24s9 20 20 20c4 0 6-2 6-6 0-1.5-.5-3-1.5-4.5C27.5 32 28 31 28 30c0-3.3 2.7-6 6-6h4c4.4 0 6-2.7 6-6C44 13 35 4 24 4Z" />
        <circle cx="14" cy="24" r="2" fill="currentColor" />
        <circle cx="18" cy="15" r="2" fill="currentColor" />
        <circle cx="30" cy="13" r="2" fill="currentColor" />
        <circle cx="36" cy="21" r="2" fill="currentColor" />
      </svg>
    ),
    services: [
      {
        name: "Graphic Design",
        desc: "Creating compelling visual content for print and digital media — from brochures to full brand kits.",
        tag: "Print · Digital · Brand",
      },
      {
        name: "Digital Design",
        desc: "Specialised design for digital interfaces, icons, and web elements that feel alive and intuitive.",
        tag: "Icons · UI Elements · Motion",
      },
      {
        name: "Social Media Content Creation",
        desc: "Crafting engaging posts, stories, and graphics tailored to each platform and tuned to your audience.",
        tag: "Posts · Stories · Reels",
      },
    ],
  },
  {
    id: "marketing",
    number: "03",
    category: "Marketing & Branding",
    tagline: "Stories that stick. Strategies that scale.",
    accent: "#f97316",
    gradientFrom: "from-[#1f1205]",
    gradientTo: "to-[#140c03]",
    borderColor: "border-orange-500/20",
    glowColor: "shadow-[0_0_60px_rgba(249,115,22,0.08)]",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 36V20l16-12 16 12v16" strokeLinejoin="round" />
        <rect x="18" y="26" width="12" height="10" />
        <path d="M8 22l4-4M40 22l-4-4" />
        <path d="M34 14l6 8M14 14l-6 8" />
        <circle cx="24" cy="10" r="2" fill="currentColor" />
      </svg>
    ),
    services: [
      {
        name: "Digital Marketing",
        desc: "Executing online strategies to increase reach — SEO, PPC, email campaigns, and performance analytics.",
        tag: "SEO · PPC · Campaigns",
      },
      {
        name: "Brand Marketing",
        desc: "Developing a cohesive identity and narrative to build long-term brand equity that resonates.",
        tag: "Identity · Strategy · Equity",
      },
    ],
  },
];

/* ─── Single Service Pill ───────────────────────────────── */
const ServiceItem = ({ name, desc, tag, accent, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] 
                        transition-all duration-300 cursor-default backdrop-blur-sm overflow-hidden"
    >
      {/* accent glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 20% 50%, ${accent}12 0%, transparent 70%)`,
        }}
      />

      <div className="flex items-start gap-4 relative z-10">
        <div
          className="mt-1 flex-shrink-0 w-2 h-2 rounded-full mt-2"
          style={{ backgroundColor: accent }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h4 className="text-white font-semibold text-base leading-tight">
              {name}
            </h4>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
          <span
            className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full border"
            style={{
              color: accent,
              borderColor: `${accent}40`,
              backgroundColor: `${accent}10`,
            }}
          >
            {tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Category Card ─────────────────────────────────────── */
const CategoryCard = ({ cat, i, scrollYProgress }) => {
  const range = [
    i / serviceCategories.length,
    (i + 1) / serviceCategories.length,
  ];
  const scale = useTransform(scrollYProgress, range, [1, 0.95]);
  const opacity = useTransform(scrollYProgress, range, [1, 0.85]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className="sticky top-24 mb-10 last:mb-0"
    >
      <div
        className={`relative rounded-[2rem] border ${cat.borderColor} ${cat.glowColor}
                            bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo}
                            p-8 md:p-12 overflow-hidden`}
      >
        {/* large number watermark */}
        <span
          className="absolute -bottom-4 -right-2 text-[120px] md:text-[160px] font-black leading-none select-none pointer-events-none"
          style={{ color: `${cat.accent}08` }}
        >
          {cat.number}
        </span>

        {/* top row */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
          <div
            className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: `${cat.accent}15`, color: cat.accent }}
          >
            {cat.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: cat.accent }}
              >
                {cat.number}
              </span>
              <span className="text-white/20 text-xs">—</span>
              <span className="text-white/40 text-xs uppercase tracking-widest">
                Service Category
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
              {cat.category}
            </h3>
            <p className="text-white/40 mt-1 text-sm md:text-base font-medium italic">
              {cat.tagline}
            </p>
          </div>
        </div>

        {/* divider */}
        <div
          className="h-px mb-8"
          style={{
            background: `linear-gradient(to right, ${cat.accent}30, transparent)`,
          }}
        />

        {/* service items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cat.services.map((s, idx) => (
            <ServiceItem key={s.name} {...s} accent={cat.accent} index={idx} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Section ──────────────────────────────────────── */
const ProcessStickyCards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={container}
      className="relative z-40 bg-[#0a0a0a] pt-16 md:pt-28 pb-24"
    >
      {/* background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#38b5e8 1px, transparent 1px), linear-gradient(90deg, #38b5e8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* section header */}
      <div className="relative z-10 text-center px-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#38b5e8] mb-4 px-4 py-1.5 rounded-full border border-[#38b5e8]/20 bg-[#38b5e8]/5">
            What We Do
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-4">
            Our{" "}
            <span
              className="relative inline-block"
              style={{
                background:
                  "linear-gradient(135deg, #38b5e8 0%, #a855f7 50%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </span>
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            From concept to conversion — we cover every touchpoint of your
            digital presence.
          </p>
        </motion.div>

        {/* animated accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 h-px max-w-xs mx-auto origin-left"
          style={{
            background:
              "linear-gradient(to right, transparent, #38b5e8, transparent)",
          }}
        />
      </div>

      {/* cards */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 xl:px-24 max-w-6xl mx-auto space-y-10">
        {serviceCategories.map((cat, i) => (
          <CategoryCard
            key={cat.id}
            cat={cat}
            i={i}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* bottom CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mt-20 text-center px-6"
      >
        <p className="text-white/30 text-sm tracking-widest uppercase mb-4">
          Ready to get started?
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
          <span className="text-white/20 text-lg">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessStickyCards;
