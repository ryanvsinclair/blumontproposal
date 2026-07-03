"use client";

import { useEffect } from "react";

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

type Pillar = {
  num: string;
  title: string;
  bullets: string[];
  note: string;
  demo?: { href: string; label: string };
};

const pillars: Pillar[] = [
  {
    num: "I",
    title: "Revenue & Distribution",
    bullets: [
      "Central Reservation System with dynamic pricing that adjusts rates to demand, seasonality, events, and competitor positioning",
      "Onboarding across Booking.com, Expedia, and Airbnb, plus Bayut, Dubizzle, and Property Finder for the local market",
      "Real-time visibility over inventory, reservations, rates, and revenue performance",
    ],
    note: "A dedicated property website, professional email infrastructure, and centralized guest communication channels support the distribution strategy and strengthen brand credibility. Marketing remains a primary focus throughout the management period to sustain visibility and occupancy.",
    demo: { href: "/reservations", label: "Preview the reservation experience" },
  },
  {
    num: "II",
    title: "Commercial Leasing",
    bullets: [
      "Immediate marketing and leasing of all vacant commercial and retail spaces upon commencement",
      "A new net revenue stream directed to ownership, with a defined share reinvested into property enhancements",
      "Increased footfall and a more vibrant, professionally operated environment",
    ],
    note: "A fully occupied commercial component elevates the property's image and activity from day one, while leasing income helps fund lobby, lighting, and guest-environment improvements without drawing on room revenue.",
  },
  {
    num: "III",
    title: "Facilities & Staffing",
    bullets: [
      "Professional facilities management structure through established partners — Abu Dhabi National Hotels or National Catering Company",
      "24/7 reception, security, and maintenance coverage wherever operationally required",
      "Dedicated maintenance technicians with preventive scheduling and quarterly facade and window cleaning",
    ],
    note: "Final staffing structure and payroll are presented to ownership for approval before mobilization, and ownership is welcome to request competing quotes from alternative providers before a partner is confirmed.",
  },
  {
    num: "IV",
    title: "Asset Enhancement",
    bullets: [
      "Lighting upgrades across parking, elevator lobbies, corridors, and reception areas",
      "Lobby and reception transformation into a modern, welcoming arrival experience",
      "Phased premium room program adding kitchenettes to selected units for the extended-stay market",
    ],
    note: "Capital items are owner-funded, budgeted and approved separately from operating revenue, and sequenced so investment follows occupancy stabilization — never ahead of it.",
  },
  {
    num: "V",
    title: "Health, Safety & Reputation",
    bullets: [
      "Comprehensive hygiene and environmental health program across guest rooms and common areas",
      "Fully operational, monitored CCTV coverage throughout the property",
      "Proactive review management — engaging past guests, addressing concerns, and rebuilding platform ratings",
    ],
    note: "Scent diffusion in the lobby and common areas reinforces a consistently fresh, premium guest environment, while ongoing reputation management ensures the property's online presence reflects the quality of service being delivered.",
  },
  {
    num: "VI",
    title: "Reporting & Accountability",
    bullets: [
      "Dedicated on-site General Manager with direct oversight of all property functions",
      "Monthly operating report: occupancy, ADR, RevPAR, gross revenue, GOP, leasing status, and guest satisfaction",
      "Semi-annual business review ahead of each incentive fee calculation",
    ],
    note: "Performance is tracked against occupancy and ADR targets agreed with ownership, and ownership retains the right to request an independent review of the figures at any time.",
    demo: { href: "/demo", label: "See the operating system live" },
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

export default function Home() {
  return (
    <>
      <Reveal />

      <nav>
        <div className="nav-inner">
          <a className="nav-brand" href="#top">
            Blumont Capital Tower <span>— REOM Homes</span>
          </a>
          <div className="nav-links">
            <a href="#glance">Overview</a>
            <a href="#opportunity">Opportunity</a>
            <a href="#strategy">Strategy</a>
            <a href="#timeline">Timeline</a>
            <a href="#fees">Fees</a>
            <a href="#accountability">Accountability</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <header className="hero" id="top">
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
            Repositioning Blumont Capital Tower into Abu Dhabi&apos;s
            next-generation serviced residence.
          </p>
        </div>
        <div className="hero-foot">
          <span className="label">Abu Dhabi, U.A.E.</span>
          <span className="label">June 2026</span>
        </div>
      </header>

      {/* ================= AT A GLANCE ================= */}
      <section id="glance">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="label">01 — At a Glance</span>
            <h2>A performance-based partnership</h2>
          </div>
          <div className="stats reveal">
            <div className="stat">
              <span className="label stat-label">Base Fee</span>
              <span className="num">
                10<span className="pct">%</span>
              </span>
              <span className="desc">
                of gross revenue — management aligned with top-line growth
              </span>
            </div>
            <div className="stat">
              <span className="label stat-label">Incentive Fee</span>
              <span className="num">
                6<span className="pct">%</span>
              </span>
              <span className="desc">
                of gross operating profit — paid only on delivered
                profitability
              </span>
            </div>
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
      </section>

      {/* ================= OPPORTUNITY ================= */}
      <section id="opportunity">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="label">02 — The Opportunity</span>
            <h2>From underutilized asset to hospitality destination</h2>
          </div>
          <div className="split reveal">
            <p className="lede">
              Blumont Capital Tower holds untapped potential — vacant
              commercial space, inconsistent guest experience, and revenue left
              unrealized.
            </p>
            <div className="support">
              <p>
                Under professional management, the tower becomes a fully
                activated hospitality asset: every unit dynamically priced and
                distributed across global booking channels, every commercial
                space leased and generating income, and every guest touchpoint
                operating to a serviced-residence standard.
              </p>
              <p>
                REOM Homes proposes a complete operating framework — revenue
                systems, on-site teams, asset enhancement, and transparent
                reporting — designed to reposition the property as a leading
                extended-stay destination in Abu Dhabi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STRATEGIC PILLARS ================= */}
      <section id="strategy">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="label">03 — The Strategy</span>
            <h2>Six pillars of the operating plan</h2>
          </div>
          <div className="pillars reveal">
            {pillars.map((pillar) => (
              <details key={pillar.num}>
                <summary>
                  <span className="p-num">{pillar.num}</span>
                  <h3>{pillar.title}</h3>
                  <span className="toggle">+</span>
                </summary>
                <div className="pillar-body">
                  <div>
                    <ul>
                      {pillar.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <p className="expanded-note">{pillar.note}</p>
                    {pillar.demo && (
                      <a
                        className="demo-link"
                        href={pillar.demo.href}
                        target="_blank"
                        rel="noopener"
                      >
                        {pillar.demo.label} →
                      </a>
                    )}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORKING PREVIEWS ================= */}
      <section className="demo-band" id="preview">
        <div className="wrap reveal">
          <span className="label">Working Previews</span>
          <h2>The systems, already built</h2>
          <p className="demo-sub">
            Rather than describe the technology behind the operating plan, we
            built it. Two live previews — the guest-facing reservation
            experience, and the operating system that runs the property behind
            it.
          </p>
          <div className="demo-cards">
            <div className="demo-card">
              <span className="label">01 — For the Guest</span>
              <h3>The reservation experience</h3>
              <p>
                Select dates, choose a residence, and confirm a stay — exactly
                as a guest of Blumont Capital Tower would.
              </p>
              <a
                className="btn btn-bronze"
                href="/reservations"
                target="_blank"
                rel="noopener"
              >
                Preview the Reservation System
              </a>
            </div>
            <div className="demo-card">
              <span className="label">02 — For the Property</span>
              <h3>The operating system</h3>
              <p>
                Front desk, housekeeping, and the guest app in one live view —
                a guided two-minute walkthrough follows one guest from booking
                to checkout.
              </p>
              <a
                className="btn btn-bronze"
                href="/demo"
                target="_blank"
                rel="noopener"
              >
                Walk Through the Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRIDGE ================= */}
      <div className="bridge">
        <div className="wrap reveal">
          <span className="label">The Partnership</span>
          <p>
            The vision is clear.
            <br />
            Here is how we deliver it.
          </p>
        </div>
      </div>

      <div className="movement-two">
        {/* ================= TIMELINE ================= */}
        <section id="timeline">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="label">04 — Implementation</span>
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

        {/* ================= FEES ================= */}
        <section id="fees">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="label">05 — Commercial Terms</span>
              <h2>Success, directly linked</h2>
            </div>
            <div className="fees reveal">
              <div className="fee">
                <span className="label">Base Management Fee</span>
                <span className="fee-num">10%</span>
                <span className="fee-of">of gross revenue, monthly</span>
                <p className="fee-plain">
                  Covers day-to-day management, operational oversight, revenue
                  management, marketing, leasing supervision, and guest
                  experience.
                </p>
              </div>
              <div className="fee">
                <span className="label">Incentive Management Fee</span>
                <span className="fee-num">6%</span>
                <span className="fee-of">
                  of gross operating profit, semi-annually
                </span>
                <p className="fee-plain">
                  Earned only on delivered profitability — REOM Homes&apos;
                  return is tied to the operating result achieved for
                  ownership.
                </p>
              </div>
            </div>
            <div className="fee-notes reveal">
              <p>
                The fee structure is reviewed at the end of Year 1 against
                actual occupancy and GOP performance. Estimated operational
                staffing payroll is consolidated as a single line within the
                operating budget presented to ownership.
              </p>
              <p>
                <a href={PROPOSAL_DOC} download>
                  Request full commercial terms — complete proposal document
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ================= ACCOUNTABILITY ================= */}
        <section id="accountability">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="label">06 — Accountability</span>
              <h2>Oversight you can see</h2>
            </div>
            <div className="acct reveal">
              <div className="acct-item">
                <span className="label">On-Site Leadership</span>
                <h3>A General Manager in the building</h3>
                <p>
                  Key members of REOM Homes&apos; management team work directly
                  from Blumont Capital Tower — direct supervision of daily
                  operations, immediate response, and a single point of contact
                  for ownership.
                </p>
              </div>
              <div className="acct-item">
                <span className="label">Reporting Cadence</span>
                <h3>Monthly reports, semi-annual reviews</h3>
                <p>
                  A monthly operating report covers occupancy, ADR, RevPAR,
                  revenue, GOP, leasing, maintenance, and guest satisfaction —
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

        {/* ================= CTA ================= */}
        <section className="cta" id="contact">
          <div className="wrap reveal">
            <span className="label">Next Steps</span>
            <h2>See the tower with us</h2>
            <p className="cta-sub">
              Schedule a walkthrough with the REOM Homes team to review the
              property and confirm the operating targets together.
            </p>
            <div className="btn-row">
              <a
                className="btn btn-solid"
                href="mailto:info@reomhomes.ae?subject=Blumont%20Capital%20Tower%20%E2%80%94%20Walkthrough"
              >
                Schedule a Walkthrough
              </a>
              <a className="btn btn-ghost" href={PROPOSAL_DOC} download>
                Download Full Proposal
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="wrap foot-inner">
          <span className="label">REOM Homes Real Estate L.L.C.</span>
          <span className="fine">
            Blumont Capital Tower — Property Management &amp; Operational
            Enhancement Proposal · Abu Dhabi · 2026
          </span>
        </div>
      </footer>
    </>
  );
}
