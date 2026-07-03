"use client";

import { useCallback, useEffect, useState } from "react";

type IconName =
  | "concierge"
  | "triage"
  | "copilot"
  | "pricing"
  | "report"
  | "forecast";

type Capability = {
  icon: IconName;
  title: string;
  line: string;
  detail: string;
  bullets: string[];
  phase: string;
};

const capabilities: Capability[] = [
  {
    icon: "concierge",
    title: "AI Concierge",
    line: "Answers in four languages. It can book, bill, and take requests, not just reply.",
    detail:
      "The guest app chat becomes a 24/7 concierge in Arabic, English, Russian, and Chinese. It gets tools, not just answers: late checkout, folio charges, housekeeping requests with SLA timers, and stay extensions against live availability.",
    bullets: [
      "Anything unclear or emotional goes to staff with the full conversation attached",
      "Covers more languages at the desk without adding headcount",
    ],
    phase: "Phase I · ships with Blumont OS",
  },
  {
    icon: "triage",
    title: "Request Triage",
    line: "Reads free-text requests, tags urgency and department, and flags guests who need attention early.",
    detail:
      "Chat and free-text input get sorted by intent, urgency, and department automatically. Sentiment is tracked across a guest's messages, so the GM gets a heads-up before checkout if a stay is going sideways.",
    bullets: [
      "\"The AC is rattling and I can't sleep\" becomes a high-priority maintenance ticket, with apology and ETA sent before staff even see it",
      "Reputation work becomes preventive, not reactive",
    ],
    phase: "Phase I · ships with Blumont OS",
  },
  {
    icon: "copilot",
    title: "Front-Desk Copilot",
    line: "Any staff member can ask a plain-language question and get an answer from live property data.",
    detail:
      "A sidebar inside the PMS for operational questions in everyday language, answered from the live property database. Relatively inexpensive to build on the stack you already have.",
    bullets: [
      "\"Who's arriving after 10pm tonight?\" or \"Which rooms have open tickets older than two days?\"",
      "Makes onboarding easier for new hires and rotating FM staff",
    ],
    phase: "Phase I · ships with Blumont OS",
  },
  {
    icon: "pricing",
    title: "Dynamic Pricing",
    line: "Rates move with room type, date, and demand through an established revenue-management engine.",
    detail:
      "Rates adjust from booking pace, local events, competitor positioning, and day-of-week patterns. A property this size can't train pricing models from scratch. The practical path is plugging in an established RM engine, not building one.",
    bullets: [
      "Connected to Blumont OS inventory and reservation data",
      "Delivers the demand-based pricing commitment from the main proposal",
    ],
    phase: "Phase II · integration",
  },
  {
    icon: "report",
    title: "Owner Reporting",
    line: "The monthly narrative is drafted from the data. The GM reviews it before ownership sees anything.",
    detail:
      "The ownership report largely writes itself from the month's operating data: what drove occupancy, how ADR moved, what needs owner attention. Plain language, not just numbers in a spreadsheet.",
    bullets: [
      "Example: \"Occupancy rose six points on corporate extended stays; ADR softened mid-month after ADIPEC\"",
      "One of the easiest features to show ownership in a walkthrough",
    ],
    phase: "Phase I · ships with Blumont OS",
  },
  {
    icon: "forecast",
    title: "Ops Forecasting",
    line: "Housekeeping queues and staffing rosters follow predicted demand, not a fixed list.",
    detail:
      "Predicted checkout times reorder the cleaning queue. Repeat maintenance tickets surface replace-not-patch calls. Occupancy forecasts two to four weeks out help match labour to demand, which is the largest controllable cost in the budget.",
    bullets: [
      "Housekeeping: room ready when the guest lands, not at a fixed 2pm",
      "Maintenance: three AC tickets in sixty days means replace the unit",
      "Staffing: labour matched to demand rather than a fixed schedule",
    ],
    phase: "Phase III · after operating data",
  },
];

function Icon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "concierge":
      return (
        <svg {...common}>
          <path d="M6 8h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H15l-6.5 5v-5H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" />
          <circle cx="12" cy="15" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="16" cy="15" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="20" cy="15" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "triage":
      return (
        <svg {...common}>
          <circle cx="6" cy="16" r="1.7" />
          <path d="M8 16h5" />
          <path d="M13 16l9-7.5" />
          <path d="M13 16l9 7.5" />
          <circle cx="24" cy="8.5" r="1.7" />
          <circle cx="24" cy="23.5" r="1.7" />
        </svg>
      );
    case "copilot":
      return (
        <svg {...common}>
          <path d="M8 17v-3a8 8 0 0 1 16 0v3" />
          <rect x="5" y="17" width="5.5" height="7.5" rx="2" />
          <rect x="21.5" y="17" width="5.5" height="7.5" rx="2" />
        </svg>
      );
    case "pricing":
      return (
        <svg {...common}>
          <path d="M6 25h20" />
          <path d="M9 25v-7" />
          <path d="M15 25v-12" />
          <path d="M21 25v-6" />
          <path d="M26 25V9" />
          <path d="M22 9h4v4" />
        </svg>
      );
    case "report":
      return (
        <svg {...common}>
          <rect x="8" y="4" width="16" height="24" rx="1.2" />
          <path d="M12 10.5h8" />
          <path d="M12 15.5h8" />
          <path d="M12 20.5h5" />
        </svg>
      );
    case "forecast":
      return (
        <svg {...common}>
          <path d="M5 24l6.5-8 5 4L26 8" />
          <circle cx="26" cy="8" r="1.6" />
          <path d="M17.5 20.5v3.5" strokeDasharray="1.5 2.2" />
          <path d="M22.5 14.5v9.5" strokeDasharray="1.5 2.2" />
        </svg>
      );
  }
}

export default function IntelCapabilityGrid() {
  const [active, setActive] = useState<Capability | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <>
      <p className="intel-grid-hint">Click any card to read more</p>
      <div className="intel-grid">
        {capabilities.map((item, i) => (
          <button
            type="button"
            className="intel-card intel-card-btn"
            key={item.title}
            onClick={() => setActive(item)}
            aria-haspopup="dialog"
          >
            <div className="intel-card-top">
              <span className="icon">
                <Icon name={item.icon} />
              </span>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.line}</p>
            <span className="intel-card-more">Learn more</span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="intel-modal-overlay"
          role="presentation"
          onClick={close}
        >
          <div
            className="intel-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="intel-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="intel-modal-close"
              onClick={close}
              aria-label="Close"
            >
              ×
            </button>
            <div className="intel-modal-head">
              <span className="icon">
                <Icon name={active.icon} />
              </span>
              <span className="label">{active.phase}</span>
            </div>
            <h3 id="intel-modal-title">{active.title}</h3>
            <p className="intel-modal-detail">{active.detail}</p>
            <ul className="intel-modal-bullets">
              {active.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
