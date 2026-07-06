"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PROPOSAL_DOC = "/Blumont-Capital-Tower-Proposal.docx";

function Reveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}

function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.width = `${Math.min(100, Math.max(0, pct))}%`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="nav-progress" aria-hidden="true">
      <div className="nav-progress-bar" ref={barRef} />
    </div>
  );
}

type PillarIcon =
  | "revenue"
  | "leasing"
  | "facilities"
  | "enhancement"
  | "safety"
  | "reporting";

function PillarGlyph({ name }: { name: PillarIcon }) {
  const common = {
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "revenue":
      return (
        <svg {...common}>
          <path d="M5 26h22" />
          <rect x="7" y="19" width="4" height="7" />
          <rect x="14" y="14" width="4" height="12" />
          <rect x="21" y="8" width="4" height="18" />
        </svg>
      );
    case "leasing":
      return (
        <svg {...common}>
          <path d="M5 12L16 5l11 7" />
          <rect x="8" y="12" width="16" height="14" rx="1" />
          <rect x="14" y="18" width="4" height="8" />
          <path d="M11.5 15.5h2M18.5 15.5h2" />
        </svg>
      );
    case "facilities":
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="10.5" />
          <path d="M16 10v6l4.5 3" />
        </svg>
      );
    case "enhancement":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="20" height="20" rx="2" />
          <path d="M11 20l4.5-5 3 3 5.5-6.5" />
          <path d="M19 10.5h5v5" />
        </svg>
      );
    case "safety":
      return (
        <svg {...common}>
          <path d="M16 5l9 3.5v6.5c0 6.2-3.9 10.3-9 11.8-5.1-1.5-9-5.6-9-11.8V8.5L16 5z" />
          <path d="M11.8 16.3l3 3 6-6.6" />
        </svg>
      );
    case "reporting":
      return (
        <svg {...common}>
          <rect x="8" y="4" width="16" height="24" rx="1.2" />
          <path d="M12 10.5h8" />
          <path d="M12 15.5h5" />
          <path d="M12.5 20.5l2 2 4-4.5" />
        </svg>
      );
  }
}

type Pillar = {
  num: string;
  title: string;
  icon: PillarIcon;
  bullets: string[];
  note: string;
  demo?: { href: string; label: string };
};

const pillars: Pillar[] = [
  {
    num: "I",
    title: "Revenue & Distribution",
    icon: "revenue",
    bullets: [
      "Central Reservation System with dynamic pricing that adjusts rates to demand, seasonality, events, and competitor positioning",
      "Onboarding across Booking.com, Expedia, and Airbnb, plus Bayut, Dubizzle, and Property Finder for the local market",
      "Real-time visibility over inventory, reservations, rates, and revenue performance",
    ],
    note: "A property website, professional email, and centralized guest communication support distribution and strengthen brand credibility.",
    demo: { href: "/reservations", label: "Preview the reservation demo" },
  },
  {
    num: "II",
    title: "Commercial Leasing",
    icon: "leasing",
    bullets: [
      "Immediate marketing and leasing of all vacant commercial and retail spaces upon commencement",
      "A new net revenue stream directed to ownership, with a defined share reinvested into property enhancements",
      "Increased footfall and a more vibrant, professionally operated environment",
    ],
    note: "Leasing income helps fund lobby, lighting, and guest-environment improvements without drawing on room revenue.",
  },
  {
    num: "III",
    title: "Facilities & Staffing",
    icon: "facilities",
    bullets: [
      "Facilities management through established partners such as Abu Dhabi National Hotels or National Catering Company",
      "24/7 reception, security, and maintenance coverage wherever operationally required",
      "Dedicated maintenance technicians with preventive scheduling and quarterly facade and window cleaning",
      "Guest requests triaged and routed to the right department automatically, each with an SLA timer",
    ],
    note: "Final staffing and payroll go to ownership for approval before mobilization. You're welcome to request competing quotes before a partner is confirmed.",
  },
  {
    num: "IV",
    title: "Asset Enhancement",
    icon: "enhancement",
    bullets: [
      "Lighting upgrades across parking, elevator lobbies, corridors, and reception areas",
      "Lobby and reception transformation into a modern, welcoming arrival experience",
      "Phased premium room program adding kitchenettes to selected units for the extended-stay market",
    ],
    note: "Capital items are owner-funded and approved separately from operating revenue. Investment is sequenced to follow occupancy stabilization, never ahead of it.",
  },
  {
    num: "V",
    title: "Health, Safety & Reputation",
    icon: "safety",
    bullets: [
      "Comprehensive hygiene and environmental health program across guest rooms and common areas",
      "Fully operational, monitored CCTV coverage throughout the property",
      "Proactive review management: engaging past guests, addressing concerns, and rebuilding platform ratings",
    ],
    note: "Scent diffusion in the lobby and common areas reinforces a consistently fresh, premium guest environment, while ongoing reputation management ensures the property's online presence reflects the quality of service being delivered.",
  },
  {
    num: "VI",
    title: "Reporting & Accountability",
    icon: "reporting",
    bullets: [
      "Dedicated on-site General Manager with direct oversight of all property functions",
      "Monthly operating report covering occupancy, ADR, RevPAR, gross revenue, GOP, leasing status, and guest satisfaction. The narrative is drafted automatically and reviewed by the GM before it reaches ownership",
      "Semi-annual business review with ownership",
    ],
    note: "Performance is tracked against occupancy and ADR targets agreed with ownership, and ownership retains the right to request an independent review of the figures at any time.",
    demo: { href: "/demo", label: "See a live demo of the operating system" },
  },
];

const phases = [
  {
    num: "I",
    months: "Months 1–2",
    items: [
      "Management agreement & team mobilization",
      "CRS and dynamic pricing live",
      "OTA and local portal onboarding",
      "Safety and security systems audit",
    ],
  },
  {
    num: "II",
    months: "Months 2–4",
    items: [
      "Commercial leasing campaign",
      "Lobby, reception & lighting improvements",
      "Website and communications infrastructure",
      "Reputation review & guest outreach",
    ],
  },
  {
    num: "III",
    months: "Months 4–9",
    items: [
      "Preventive maintenance fully operational",
      "Quarterly facade & window cleaning",
      "Guest environment enhancements",
      "Occupancy & ADR stabilization",
    ],
  },
  {
    num: "IV",
    months: "Month 9+",
    items: [
      "Premium room enhancement program",
      "Kitchenette installations, phased",
      "Tied to confirmed occupancy & demand thresholds",
    ],
  },
];

function PillarGallery({ pillars }: { pillars: Pillar[] }) {
  const [active, setActive] = useState(0);
  const current = pillars[active];
  const go = (i: number) => setActive((i + pillars.length) % pillars.length);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    tabRefs.current[active]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [active]);

  return (
    <div className="pillar-gallery">
      <div className="pillar-rail">
        {pillars.map((pillar, i) => (
          <button
            key={pillar.num}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            className={`pillar-tab${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
            type="button"
          >
            <span className="pillar-tab-icon">
              <PillarGlyph name={pillar.icon} />
            </span>
            <span className="pillar-tab-text">
              <span className="p-num">{pillar.num}</span>
              <span className="p-title">{pillar.title}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="pillar-stage">
        <span className="pillar-ghost-num" aria-hidden="true">
          {current.num}
        </span>
        <div className="pillar-stage-content" key={current.num}>
          <div className="pillar-stage-icon">
            <PillarGlyph name={current.icon} />
          </div>
          <span className="label pillar-count">
            Pillar {active + 1} of {pillars.length}
          </span>
          <h3>{current.title}</h3>
          <ul>
            {current.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <p className="expanded-note">{current.note}</p>
          {current.demo && (
            <a
              className="demo-link"
              href={current.demo.href}
              target="_blank"
              rel="noopener"
            >
              {current.demo.label} →
            </a>
          )}
        </div>

        <div className="pillar-nav">
          <button
            className="pillar-arrow"
            onClick={() => go(active - 1)}
            aria-label="Previous pillar"
            type="button"
          >
            ←
          </button>
          <div className="pillar-dots">
            {pillars.map((pillar, i) => (
              <button
                key={pillar.num}
                className={`pillar-dot${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Go to ${pillar.title}`}
                type="button"
              />
            ))}
          </div>
          <button
            className="pillar-arrow"
            onClick={() => go(active + 1)}
            aria-label="Next pillar"
            type="button"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      if (heroImgRef.current) {
        const offset = Math.min(window.scrollY * 0.15, 70);
        heroImgRef.current.style.transform = `scale(1.12) translate3d(0, ${offset}px, 0)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Reveal />

      <nav>
        <div className="nav-inner">
          <a className="nav-brand" href="#top">
            Blumont Capital Tower <span>· REOM Homes</span>
          </a>
          <div className="nav-links">
            <a href="#opportunity">Opportunity</a>
            <a href="#strategy">Strategy</a>
            <a href="#timeline">Timeline</a>
            <a href="#fees">Fees</a>
            <a href="#accountability">Accountability</a>
            <a href="#close">Close</a>
          </div>
        </div>
        <ScrollProgress />
      </nav>

      {/* ================= HERO ================= */}
      <header className="hero" id="top">
        <div className="hero-media">
          <Image
            ref={heroImgRef}
            src="/images/blumont-tower-hd.png"
            alt="Blumont Capital Tower, Abu Dhabi"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="wrap">
          <span className="label reveal">
            A Proposal by REOM Homes Real Estate L.L.C.
          </span>
          <h1 className="reveal">
            Blumont
            <br />
            Capital Tower
          </h1>
          <p className="positioning reveal">
            Repositioning Blumont Capital Tower as Abu Dhabi&apos;s
            next-generation serviced residence.
          </p>
          <div className="hero-foot">
            <span className="label">Abu Dhabi, U.A.E.</span>
            <span className="label">June 2026</span>
          </div>
        </div>
      </header>

      {/* ================= OPPORTUNITY ================= */}
      <section id="opportunity">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="label">01 · The Opportunity</span>
            <h2>From underused asset to hospitality destination</h2>
          </div>
          <div className="split reveal">
            <p className="lede">
              Blumont Capital Tower has more room to grow than it&apos;s using
              today: vacant commercial space, an inconsistent guest experience,
              and revenue still on the table.
            </p>
            <div className="support">
              <p>
                With professional management, the tower becomes a fully
                activated hospitality asset. Every unit is dynamically priced and
                distributed across global booking channels. Every commercial
                space is leased and generating income. Every guest touchpoint
                runs to a serviced-residence standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STRATEGIC PILLARS ================= */}
      <section id="strategy">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="label">02 · The Strategy</span>
            <h2>Six pillars of the operating plan</h2>
          </div>
        </div>
        <div className="wrap reveal">
          <PillarGallery pillars={pillars} />
        </div>
      </section>

      {/* ================= WORKING PREVIEWS ================= */}
      <section className="demo-band" id="preview">
        <div className="wrap reveal">
          <span className="label">Interactive Demos</span>
          <h2>A preview of what we&apos;d build</h2>
          <p className="demo-sub">
            We didn&apos;t just write about the technology. We built working
            demos you can click through yourself.
          </p>
          <div className="demo-cards">
            <div className="demo-card">
              <span className="label">01 · For the Guest</span>
              <h3>The reservation experience</h3>
              <p>
                Pick dates, choose a residence, and confirm a stay. This is the
                booking flow a guest of Blumont Capital Tower would see.
              </p>
              <a
                className="btn btn-bronze"
                href="/reservations"
                target="_blank"
                rel="noopener"
              >
                Preview the Reservation Demo
              </a>
            </div>
            <div className="demo-card">
              <span className="label">02 · For the Property</span>
              <h3>The operating system</h3>
              <p>
                Front desk, housekeeping, and the guest app in one synced view.
                A two-minute walkthrough follows one guest from booking to
                checkout.
              </p>
              <a
                className="btn btn-bronze"
                href="/demo"
                target="_blank"
                rel="noopener"
              >
                Walk Through the Demo
              </a>
            </div>
            <div className="demo-card">
              <span className="label">03 · For Ownership</span>
              <h3>The intelligence layer</h3>
              <p>
                How AI supports concierge, triage, pricing, and owner reporting
                on top of Blumont OS, and what we deliberately leave out.
              </p>
              <a className="btn btn-bronze" href="/intelligence">
                Read the Intelligence Brief
              </a>
            </div>
          </div>
          <p className="demo-disclaimer">
            The reservation and OS demos are prototypes built to show our
            approach. The final Blumont-branded systems would be configured
            during mobilization.
          </p>
        </div>
      </section>

      {/* ================= BRIDGE ================= */}
      <div className="bridge">
        <div className="wrap reveal">
          <span className="label">The Partnership</span>
          <p>
            The vision is clear.
            <br />
            Here&apos;s how we deliver it.
          </p>
        </div>
      </div>

      <div className="movement-two">
        {/* ================= TIMELINE ================= */}
        <section id="timeline">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="label">03 · Implementation</span>
              <h2>Four phases, revenue first</h2>
            </div>
            <div className="timeline reveal">
              {phases.map((phase) => (
                <div className="phase" key={phase.num}>
                  <span className="phase-num">{phase.num}</span>
                  <span className="label phase-months">{phase.months}</span>
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

        {/* ================= TERMS AT A GLANCE (lead-in to Fees) ================= */}
        <div className="glance-strip" id="glance">
          <div className="wrap">
            <span className="label glance-strip-label reveal">
              Before the Details · The Deal in Brief
            </span>
            <div className="stats reveal">
              <div className="stat">
                <span className="label stat-label">Implementation</span>
                <span className="num">4</span>
                <span className="desc">
                  phases, sequenced to stabilize revenue before capital
                  investment
                </span>
              </div>
              <div className="stat">
                <span className="label stat-label">Operations</span>
                <span className="num">24/7</span>
                <span className="desc">
                  on-site management, reception, security, and maintenance
                  coverage
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FEES ================= */}
        <section id="fees">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="label">04 · Commercial Terms</span>
              <h2>Success, directly linked</h2>
            </div>
            <div className="fees fees-single reveal">
              <div className="fee">
                <span className="label">Management Fee</span>
                <span className="fee-num">10%</span>
                <span className="fee-of">of gross revenue, monthly</span>
                <p className="fee-plain">
                  Covers day-to-day management, operational oversight, revenue
                  management, and leasing supervision.
                </p>
              </div>
            </div>
            <div className="fee-notes reveal">
              <p>
                The management fee is reviewed at the end of Year 1 against
                actual occupancy and revenue performance.
              </p>
              <p>
                <a href={PROPOSAL_DOC} download>
                  Request full commercial terms (complete proposal document)
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ================= ACCOUNTABILITY ================= */}
        <section id="accountability">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="label">05 · Accountability</span>
              <h2>Oversight you can see</h2>
            </div>
            <div className="acct reveal">
              <div className="acct-item">
                <span className="label">On-Site Leadership</span>
                <h3>A General Manager in the building</h3>
                <p>
                  Key members of REOM Homes&apos; management team work from
                  Blumont Capital Tower: direct supervision of daily operations,
                  immediate response, and a single point of contact for
                  ownership.
                </p>
              </div>
              <div className="acct-item">
                <span className="label">Reporting Cadence</span>
                <h3>Monthly reports, semi-annual reviews</h3>
                <p>
                  A monthly operating report covers occupancy, ADR, RevPAR,
                  revenue, GOP, leasing, maintenance, and guest satisfaction,
                  with a full business review every six months.
                </p>
              </div>
              <div className="acct-item">
                <span className="label">Partner Transparency</span>
                <h3>Full transparency on partner relationships</h3>
                <p>
                  REOM Homes receives no referral fee or commission from its
                  recommended facilities partners. Preferential pricing is
                  passed entirely to ownership, and competing quotes are always
                  welcome.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CLOSE ================= */}
        <section className="cta" id="close">
          <div className="wrap reveal">
            <span className="label">In Closing</span>
            <h2>One plan, sequenced to perform</h2>
            <p className="cta-sub">
              Revenue, leasing, facilities, and reporting are not separate
              workstreams. They are a single operating plan: earn first, invest
              when occupancy supports it, and report in plain language so
              ownership always knows where the property stands.
            </p>
            <p className="close-signoff">
              REOM Homes is ready to mobilize Blumont Capital Tower on that
              basis.
            </p>
          </div>
        </section>
      </div>

      <footer>
        <div className="wrap foot-inner">
          <span className="label">REOM Homes Real Estate L.L.C.</span>
          <span className="fine">
            Blumont Capital Tower · Property Management &amp; Operational
            Enhancement Proposal · Abu Dhabi · 2026
          </span>
        </div>
      </footer>
    </>
  );
}
