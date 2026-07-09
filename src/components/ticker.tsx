"use client";

import Marquee from "react-fast-marquee";

const items = [
  { label: "NIFTY", change: "+0.82%", positive: true },
  { label: "SENSEX", change: "+0.75%", positive: true },
  { label: "NASDAQ", change: "+1.10%", positive: true },
  { label: "BTC", change: "+2.31%", positive: true },
  { label: "GOLD", change: "+0.54%", positive: true },
];

export default function Ticker() {
  return (
    <div className="border-y border-line-soft bg-ink-raised/40 overflow-hidden">
      <div className="max-w-6xl mx-auto flex items-center">
        <span className="hidden sm:block shrink-0 pl-6 md:pl-8 pr-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-muted-dim whitespace-nowrap">
          Market Snapshot · Illustrative
        </span>
        <div className="flex-1 py-2.5 min-w-0">
          <Marquee speed={36} pauseOnHover gradient={false}>
            {items.map((item) => (
              <span
                key={item.label}
                className="mx-6 text-xs md:text-sm text-muted whitespace-nowrap"
              >
                {item.label}{" "}
                <span
                  className={item.positive ? "text-positive" : "text-negative"}
                >
                  {item.change}
                </span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
