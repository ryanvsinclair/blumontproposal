import type { Metadata } from "next";
import IntelCapabilityGrid from "../components/IntelCapabilityGrid";

export const metadata: Metadata = {
  title: "The Intelligence Layer · Blumont Capital Tower",
  description:
    "How Blumont OS uses AI for answers, routing, pricing, and reports, while hospitality stays human.",
};

type IconName = "avoid";

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
    case "avoid":
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="10" />
          <path d="M9.5 22.5l13-13" />
        </svg>
      );
  }
}

const skip = [
  {
    title: "Voice AI on the phone",
    text: "A hotel that picks up in two rings with a person is the premium signal.",
  },
  {
    title: "In-room voice assistants",
    text: "At this tier, privacy matters. Most guests unplug them within a day.",
  },
  {
    title: "Facial-recognition check-in",
    text: "The QR arrival flow is already faster, with none of the consent burden.",
  },
];

const phases = [
  {
    num: "I",
    label: "Ships with Blumont OS",
    items: ["AI concierge", "Request triage", "Front-desk copilot", "Owner report narrative"],
  },
  {
    num: "II",
    label: "Integrations",
    items: ["Review response drafting", "Dynamic pricing engine"],
  },
  {
    num: "III",
    label: "After operating data",
    items: ["Housekeeping prediction", "Maintenance patterns", "Staffing forecasts"],
  },
];

export default function Intelligence() {
  return (
    <>
      <nav className="subnav">
        <a href="/#preview">← Back to Interactive Demos</a>
      </nav>

      <header className="intel-hero">
        <div className="wrap">
          <span className="label">The Intelligence Layer</span>
          <h1>
            AI for speed.
            <br />
            People for hospitality.
          </h1>
          <p className="lede">
            Blumont OS already runs on one data spine. AI sits on top to answer,
            route, price, and report. Every arrival, problem, and judgment call
            still belongs to a person.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="label">Capabilities</span>
            <h2>Six ways AI supports the operating plan</h2>
          </div>
          <IntelCapabilityGrid />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="label">What We Skip</span>
            <h2>Discipline is part of the plan</h2>
          </div>
          <div className="against-grid against-grid-compact">
            {skip.map((item) => (
              <div className="against-item" key={item.title}>
                <span className="icon avoid-icon">
                  <Icon name="avoid" />
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="movement-two">
        <section>
          <div className="wrap">
            <div className="section-head">
              <span className="label">Rollout</span>
              <h2>Phased by value per effort</h2>
            </div>
            <div className="timeline timeline-3">
              {phases.map((phase) => (
                <div className="phase" key={phase.num}>
                  <span className="phase-num">{phase.num}</span>
                  <span className="label phase-months">{phase.label}</span>
                  <ul>
                    {phase.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="intel-close">
        <div className="wrap">
          <p>
            Nothing here replaces what is already proposed. It just makes the
            same commitments faster to deliver.
          </p>
          <a className="btn btn-solid" href="/#contact">
            Back to Next Steps
          </a>
        </div>
      </div>

      <footer>
        <div className="wrap foot-inner">
          <span className="label">REOM Homes Real Estate L.L.C.</span>
          <span className="fine">
            Blumont Capital Tower · The Intelligence Layer · Abu Dhabi · 2026
          </span>
        </div>
      </footer>
    </>
  );
}
