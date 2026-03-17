"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  animate,
} from "framer-motion";

// ─── Mercator projection (W=1000, H=500 = full world) ────────────────────
const W = 1000;
const H = 500;

function toXY(lat: number, lng: number): [number, number] {
  return [((lng + 180) / 360) * W, ((90 - lat) / 180) * H];
}

// Route endpoints
const [GZ_X, GZ_Y] = toXY(23.1291, 113.2644); // Guangzhou: ~815, 186
const [SB_X, SB_Y] = toXY(44.7, 18.1);         // Srebrenik: ~550, 126

// Arc control point (pulled north for great-circle feel)
const CP_X = (GZ_X + SB_X) / 2;
const CP_Y = Math.min(GZ_Y, SB_Y) - 100;

function bezierAt(t: number): [number, number] {
  const mt = 1 - t;
  return [
    mt * mt * GZ_X + 2 * mt * t * CP_X + t * t * SB_X,
    mt * mt * GZ_Y + 2 * mt * t * CP_Y + t * t * SB_Y,
  ];
}

const ROUTE_D = `M ${GZ_X.toFixed(0)},${GZ_Y.toFixed(0)} Q ${CP_X.toFixed(0)},${CP_Y.toFixed(0)} ${SB_X.toFixed(0)},${SB_Y.toFixed(0)}`;

// ─── Geographic paths (real simplified Mercator coordinates) ─────────────
//
// China border (25 key corner points, clockwise from NE)
const CHINA_PATH = [
  [53.5, 134.8],  // Russia border NE           → 874,101
  [48.4, 134.8],  // NE Manchuria coast          → 874,115
  [42.5, 131.0],  // Korea N border coast        → 864,132
  [39.9, 124.3],  // Bohai / Yellow Sea          → 845,139
  [37.5, 122.0],  // Shandong coast              → 839,144
  [31.3, 121.8],  // Shanghai                    → 838,163
  [26.0, 119.5],  // Fujian coast                → 832,178
  [22.2, 114.1],  // Guangdong / HK              → 817,188
  [21.5, 108.0],  // Guangxi coast / Vietnam     → 800,190
  [22.5, 102.8],  // Vietnam border              → 786,188
  [22.8, 101.1],  // Laos / Myanmar              → 781,187
  [23.0,  98.6],  // Myanmar W border            → 774,186
  [27.0,  97.3],  // NE India / Arunachal        → 771,175
  [28.5,  91.6],  // Bhutan border               → 754,171
  [29.5,  84.5],  // Nepal / Tibet               → 735,168
  [34.7,  78.0],  // Kashmir / Ladakh            → 717,154
  [36.9,  75.9],  // Pakistan border             → 711,147
  [38.5,  74.4],  // Afghanistan / Tajikistan    → 706,143
  [40.5,  76.2],  // Kyrgyzstan border           → 712,137
  [44.0,  80.0],  // Kazakhstan SE               → 722,128
  [47.8,  87.3],  // Kazakhstan / Russia border  → 743,117
  [49.2,  87.0],  // Russia NW border            → 742,114
  [49.9, 100.0],  // Russia / Mongolia border    → 778,112
  [50.0, 116.3],  // Russia / Manchuria border   → 823,111
  [52.0, 122.5],  // Heilongjiang               → 840,106
].map(([lat, lng]) => toXY(lat, lng));

const CHINA_D =
  "M " +
  CHINA_PATH.map(([x, y]) => `${x.toFixed(0)},${y.toFixed(0)}`).join(" L ") +
  " Z";

// Western Balkans region (broader SE Europe polygon)
const BALKANS_REGION_D =
  "M 538,121 L 558,120 L 580,128 L 572,137 L 556,141 L 551,133 L 539,132 Z";

// Serbia (simplified, 6 points)
const SERBIA_D = "M 553,124 L 564,123 L 568,129 L 566,135 L 559,136 L 553,129 Z";

// Montenegro (simplified, 5 points)
const MONTENEGRO_D = "M 548,131 L 554,130 L 557,135 L 551,137 L 548,134 Z";

// Croatia coast strip (simplified)
const CROATIA_D = "M 539,120 L 548,120 L 552,124 L 543,128 L 539,131 Z";

// ─── Background world trade city dots ────────────────────────────────────
const BG_CITIES: [number, number][] = [
  [40.71, -74.01],   // New York
  [51.51, -0.13],    // London
  [48.85,  2.35],    // Paris
  [55.75, 37.62],    // Moscow
  [25.20, 55.27],    // Dubai
  [19.08, 72.88],    // Mumbai
  [ 1.35,103.82],    // Singapore
  [35.68,139.69],    // Tokyo
  [31.23,121.47],    // Shanghai
  [39.91,116.39],    // Beijing
  [41.01, 28.97],    // Istanbul
  [30.05, 31.24],    // Cairo
  [-1.29, 36.82],    // Nairobi
  [-23.55,-46.63],   // São Paulo
  [34.05,-118.24],   // Los Angeles
  [-33.87,151.21],   // Sydney
  [13.75,100.52],    // Bangkok
  [37.57,126.98],    // Seoul
  [52.52, 13.40],    // Berlin
  [40.42, -3.70],    // Madrid
  [45.46,  9.19],    // Milan
  [47.38,  8.54],    // Zürich
  [50.85,  4.35],    // Brussels
  [59.91, 10.75],    // Oslo
  [43.85, 18.41],    // Sarajevo
  [38.72, -9.14],    // Lisbon
].map(([lat, lng]) => toXY(lat, lng));

const LAT_LINES = [-60, -30, 0, 30, 60];
const LNG_LINES = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150];

const CYCLE = 10; // seconds

// ─── Component ────────────────────────────────────────────────────────────
export function WorldMapSVG() {
  const pathProg     = useMotionValue(0);
  const cargoProg    = useMotionValue(0);
  const routeOpacity = useMotionValue(0);
  const gzFocusProg  = useMotionValue(0);
  const sbFocusProg  = useMotionValue(0);

  const gzRingR  = useTransform(gzFocusProg, [0, 1], [5, 48]);
  const gzRingOp = useTransform(gzFocusProg, [0, 0.15, 1], [0, 1, 0]);
  const sbRingR  = useTransform(sbFocusProg, [0, 1], [5, 42]);
  const sbRingOp = useTransform(sbFocusProg, [0, 0.15, 1], [0, 1, 0]);

  const routeGroupRef = useRef<SVGGElement>(null);
  const cargoGroupRef = useRef<SVGGElement>(null);
  const gzRing1Ref    = useRef<SVGCircleElement>(null);
  const gzRing2Ref    = useRef<SVGCircleElement>(null);
  const sbRing1Ref    = useRef<SVGCircleElement>(null);
  const sbRing2Ref    = useRef<SVGCircleElement>(null);

  useMotionValueEvent(routeOpacity, "change", (v) => {
    if (routeGroupRef.current) routeGroupRef.current.style.opacity = String(v);
  });

  useMotionValueEvent(cargoProg, "change", (t) => {
    if (!cargoGroupRef.current) return;
    const [x, y] = bezierAt(t);
    cargoGroupRef.current.setAttribute(
      "transform", `translate(${x.toFixed(1)},${y.toFixed(1)})`
    );
  });

  useMotionValueEvent(gzRingR, "change", (r) => {
    gzRing1Ref.current?.setAttribute("r", r.toFixed(1));
    gzRing2Ref.current?.setAttribute("r", (r * 0.55).toFixed(1));
  });
  useMotionValueEvent(gzRingOp, "change", (o) => {
    gzRing1Ref.current?.setAttribute("opacity", o.toFixed(3));
    gzRing2Ref.current?.setAttribute("opacity", (o * 0.6).toFixed(3));
  });

  useMotionValueEvent(sbRingR, "change", (r) => {
    sbRing1Ref.current?.setAttribute("r", r.toFixed(1));
    sbRing2Ref.current?.setAttribute("r", (r * 0.55).toFixed(1));
  });
  useMotionValueEvent(sbRingOp, "change", (o) => {
    sbRing1Ref.current?.setAttribute("opacity", o.toFixed(3));
    sbRing2Ref.current?.setAttribute("opacity", (o * 0.6).toFixed(3));
  });

  useEffect(() => {
    // ── 10s animation cycle ───────────────────────────────────────────────
    //  0.0s  → reset / hidden
    //  0.8s  → route layer fades in + GZ focus pulse
    //  1.0s  → path starts drawing Guangzhou → Srebrenik
    //  3.5s  → path complete; cargo marker departs
    //  7.0s  → cargo arrives at Srebrenik + SB focus pulse
    //  8.5s  → hold
    //  9.5s  → fade out
    // 10.0s  → next cycle
    const a1 = animate(routeOpacity, [0, 1, 1, 0, 0], {
      times: [0, 0.08, 0.85, 0.95, 1], duration: CYCLE, repeat: Infinity,
    });
    const a2 = animate(pathProg, [0, 0, 1, 1, 0], {
      times: [0, 0.10, 0.35, 0.85, 1], duration: CYCLE, repeat: Infinity, ease: "easeInOut",
    });
    const a3 = animate(cargoProg, [0, 0, 0, 1, 1, 0], {
      times: [0, 0.10, 0.35, 0.70, 0.85, 1], duration: CYCLE, repeat: Infinity, ease: "easeInOut",
    });
    const a4 = animate(gzFocusProg, [0, 0, 1, 0, 0], {
      times: [0, 0.07, 0.14, 0.24, 1], duration: CYCLE, repeat: Infinity,
    });
    const a5 = animate(sbFocusProg, [0, 0, 1, 0, 0], {
      times: [0, 0.69, 0.75, 0.83, 1], duration: CYCLE, repeat: Infinity,
    });
    return () => { a1.stop(); a2.stop(); a3.stop(); a4.stop(); a5.stop(); };
  }, [pathProg, cargoProg, routeOpacity, gzFocusProg, sbFocusProg]);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <filter id="mm-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="mm-glow-strong" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="mm-glow-border" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

      </defs>

      {/* ── STATIC BACKGROUND ── */}

      {LAT_LINES.map((lat) => {
        const y = ((90 - lat) / 180) * H;
        return <line key={`lat${lat}`} x1={0} y1={y} x2={W} y2={y}
          stroke="#3B82F6" strokeOpacity={0.08} strokeWidth={0.5} />;
      })}
      {LNG_LINES.map((lng) => {
        const x = ((lng + 180) / 360) * W;
        return <line key={`lng${lng}`} x1={x} y1={0} x2={x} y2={H}
          stroke="#3B82F6" strokeOpacity={0.08} strokeWidth={0.5} />;
      })}
      <line x1={0} y1={H / 2} x2={W} y2={H / 2}
        stroke="#3B82F6" strokeOpacity={0.18} strokeWidth={1} strokeDasharray="4 8" />

      {BG_CITIES.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2} fill="#93C5FD" fillOpacity={0.4} />
      ))}

      {/* ── COUNTRY BORDERS ── */}

      {/* China — 25 real geographic corner points */}
      <path d={CHINA_D}
        fill="rgba(30,64,175,0.07)"
        stroke="#1E40AF" strokeWidth={1.2} strokeOpacity={0.5}
        filter="url(#mm-glow-border)"
      />

      {/* Western Balkans region polygon */}
      <path d={BALKANS_REGION_D}
        fill="rgba(59,130,246,0.05)"
        stroke="#3B82F6" strokeWidth={0.7} strokeOpacity={0.3}
      />

      <path d={SERBIA_D}
        fill="none" stroke="#3B82F6" strokeWidth={0.8} strokeOpacity={0.3} />
      <path d={CROATIA_D}
        fill="none" stroke="#3B82F6" strokeWidth={0.6} strokeOpacity={0.25} />
      <path d={MONTENEGRO_D}
        fill="none" stroke="#3B82F6" strokeWidth={0.6} strokeOpacity={0.25} />

      <circle cx={GZ_X} cy={GZ_Y} r={4} fill="#3B82F6" fillOpacity={0.25} />
      <circle cx={SB_X} cy={SB_Y} r={4} fill="#3B82F6" fillOpacity={0.25} />

      {/* ── ANIMATED ROUTE LAYER ── */}

      <g ref={routeGroupRef} style={{ opacity: 0 }}>

        {/* Route glow shadow */}
        <motion.path d={ROUTE_D} fill="none"
          stroke="#1D4ED8" strokeWidth={10} strokeLinecap="round" strokeOpacity={0.45}
          filter="url(#mm-glow)"
          style={{ pathLength: pathProg }}
        />
        {/* Route neon dashed line */}
        <motion.path d={ROUTE_D} fill="none"
          stroke="#60A5FA" strokeWidth={1.8} strokeLinecap="round" strokeDasharray="6 4"
          style={{ pathLength: pathProg }}
        />

        {/* Guangzhou — persistent pulse */}
        <motion.circle cx={GZ_X} cy={GZ_Y} r={8} fill="none"
          stroke="#3B82F6" strokeWidth={1.5}
          animate={{ r: [6, 24], opacity: [0.9, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
        {/* Guangzhou — focus rings */}
        <circle ref={gzRing1Ref} cx={GZ_X} cy={GZ_Y} r={0}
          fill="none" stroke="#93C5FD" strokeWidth={1.5} opacity={0} />
        <circle ref={gzRing2Ref} cx={GZ_X} cy={GZ_Y} r={0}
          fill="none" stroke="#BFDBFE" strokeWidth={1} opacity={0} />
        <circle cx={GZ_X} cy={GZ_Y} r={6} fill="#3B82F6" filter="url(#mm-glow-strong)" />
        <circle cx={GZ_X} cy={GZ_Y} r={3} fill="#BFDBFE" />
        <text x={GZ_X + 11} y={GZ_Y - 10}
          fill="#93C5FD" fontSize={9} fontFamily="monospace"
          fontWeight="bold" opacity={0.9} filter="url(#mm-glow)">
          Guangzhou, Kina
        </text>

        {/* Srebrenik — persistent pulse */}
        <motion.circle cx={SB_X} cy={SB_Y} r={8} fill="none"
          stroke="#60A5FA" strokeWidth={1.5}
          animate={{ r: [6, 22], opacity: [0.9, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 1.0 }}
        />
        {/* Srebrenik — focus rings */}
        <circle ref={sbRing1Ref} cx={SB_X} cy={SB_Y} r={0}
          fill="none" stroke="#93C5FD" strokeWidth={1.5} opacity={0} />
        <circle ref={sbRing2Ref} cx={SB_X} cy={SB_Y} r={0}
          fill="none" stroke="#BFDBFE" strokeWidth={1} opacity={0} />
        <circle cx={SB_X} cy={SB_Y} r={6} fill="#60A5FA" filter="url(#mm-glow-strong)" />
        <circle cx={SB_X} cy={SB_Y} r={3} fill="#BFDBFE" />
        <text x={SB_X + 11} y={SB_Y - 10}
          fill="#93C5FD" fontSize={9} fontFamily="monospace"
          fontWeight="bold" opacity={0.9} filter="url(#mm-glow)">
          Srebrenik, BiH
        </text>
        <text x={SB_X + 11} y={SB_Y + 2}
          fill="#BFDBFE" fontSize={7.5} fontFamily="monospace" opacity={0.75}>
          MaxMobille kancelarije
        </text>

        {/* Cargo marker */}
        <g ref={cargoGroupRef} transform={`translate(${GZ_X},${GZ_Y})`}>
          <motion.circle r={12} fill="#3B82F6" fillOpacity={0.15}
            animate={{ r: [9, 18, 9] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle r={6} fill="#FFFFFF" filter="url(#mm-glow-strong)" />
          <circle r={3.5} fill="#3B82F6" />
          <line x1={-7} y1={0} x2={7} y2={0}
            stroke="#BFDBFE" strokeWidth={1.2} strokeOpacity={0.75} />
          <line x1={0} y1={-7} x2={0} y2={7}
            stroke="#BFDBFE" strokeWidth={1.2} strokeOpacity={0.75} />
        </g>

      </g>
    </svg>
  );
}
