"use client";

import { useState } from "react";

type PillarKey = "defense" | "trust" | "quantum";

const pillars: Record<PillarKey, {
  code: string; title: string; short: string; question: string; color: string; projects: number[];
}> = {
  defense: {
    code: "RP1",
    title: "AI-Enabled Cyber Defense",
    short: "Build AI that detects threats—and test where it fails.",
    question: "How can AI strengthen cyber defense while remaining robust, interpretable, and dependable?",
    color: "lime",
    projects: [0, 1, 2],
  },
  trust: {
    code: "RP2",
    title: "Security & Trustworthiness of AI",
    short: "Treat the AI system itself as the attack surface.",
    question: "How can AI systems be protected against poisoning, adversarial manipulation, prompt injection, and related attacks?",
    color: "blue",
    projects: [3, 4, 5],
  },
  quantum: {
    code: "RP3",
    title: "Quantum-Ready Cybersecurity",
    short: "Compare quantum and classical methods without assuming an advantage.",
    question: "When do QML and hybrid methods differ meaningfully from matched classical approaches for cybersecurity?",
    color: "teal",
    projects: [6, 7],
  },
};

const projects = [
  {
    code: "P1", pillar: "RP1", title: "Explainable & Robust AI for Malware Detection",
    prompt: "When do malware classifiers remain reliable when features shift or are perturbed?",
    work: "Reproduce a documented baseline, introduce controlled shifts, and examine false positives, calibration, explanations, robustness, and cost.",
  },
  {
    code: "P2", pillar: "RP1", title: "Generalizable Intrusion & Anomaly Detection",
    prompt: "How much detector performance persists under unseen attacks or changing traffic?",
    work: "Hold out an attack family, time period, or distribution; compare models and analyze misses, false alarms, generalization, and inference cost.",
  },
  {
    code: "P3", pillar: "RP1", title: "AI for Vulnerability Detection & Secure Code Analysis",
    prompt: "When do learned code representations add useful evidence beyond static analysis?",
    work: "Compare AI-assisted and rule-based approaches, then stratify errors by vulnerability or code pattern.",
  },
  {
    code: "P4", pillar: "RP2", title: "Detecting AI Model Poisoning & Backdoors",
    prompt: "Which signals identify backdoored models under previously unseen conditions?",
    work: "Use selected NIST TrojAI resources to reproduce a detector, test held-out triggers or architectures, and study false-positive behavior.",
  },
  {
    code: "P5", pillar: "RP2", title: "Defending RAG Against Prompt Injection",
    prompt: "Which defenses reduce attack success while preserving legitimate RAG performance?",
    work: "Build a bounded testbed and compare provenance checks, instruction–data separation, screening, and output verification.",
  },
  {
    code: "P6", pillar: "RP2", title: "Detecting Adversarial Attacks Against AI Systems",
    prompt: "Can uncertainty or representation consistency detect unseen attacks without excessive false alarms?",
    work: "Generate approved perturbations in an isolated environment, hold out an attack regime, and compare detection strategies.",
  },
  {
    code: "P7", pillar: "RP3", title: "Hybrid Quantum–Classical Cyber Threat Detection",
    prompt: "When do compact quantum models behave differently from strong classical methods?",
    work: "Use identical data partitions and document encoding, qubits, depth, optimization, sampling, robustness, and resource cost.",
  },
  {
    code: "P8", pillar: "RP3", title: "Quantum Kernels for AI Model-Integrity Detection",
    prompt: "Can compact quantum-kernel signatures add useful evidence for backdoor detection?",
    work: "Compare classical and quantum kernels under matched partitions, including calibration, held-out generalization, ablations, and resource needs.",
  },
];

const years = [
  {
    year: "Year 1", name: "AI-Security Foundation", mix: [48, 42, 10],
    headline: "Start with the AI-cybersecurity problems that matter now.",
    description: "Five teams work primarily in RP1 and RP2. Every scholar completes the common QML foundation and a guided hybrid quantum–classical workflow.",
    qml: "Common QML foundation for every scholar",
  },
  {
    year: "Year 2", name: "Quantum-AI Bridge", mix: [38, 37, 25],
    headline: "Add a research-ready QML cybersecurity project.",
    description: "RP1 and RP2 remain prominent while the portfolio adds at least one RP3 investigation with a tractable question, matched baseline, and mentor capacity.",
    qml: "At least one dedicated RP3 project",
  },
  {
    year: "Year 3", name: "QML-Forward Cybersecurity", mix: [25, 25, 50],
    headline: "Make QML and hybrid research a principal direction.",
    description: "QML and hybrid projects become a principal part of the portfolio while rigorous RP1 and RP2 projects remain when they offer the stronger scientific fit.",
    qml: "QML-forward, never quantum-by-default",
  },
];

const weeks = [
  { n: 1, title: "Research Launch", stage: "Guided entry", focus: "Enter the project area, map the literature, establish the research workspace, and learn safety boundaries.", gate: "Readiness diagnostic · Repository · Mentoring Compact" },
  { n: 2, title: "Define the Question", stage: "Guided entry", focus: "Refine the research question, threat or risk model, data source, baseline, and experimental plan.", gate: "Project Charter Review" },
  { n: 3, title: "Establish the Baseline", stage: "Shared design", focus: "Implement and validate the classical or conventional baseline; complete the common QML notebook.", gate: "Functioning baseline · Documented partitions" },
  { n: 4, title: "Design the Investigation", stage: "Shared design", focus: "Select comparisons, ablations, robustness tests, or alternative representations that move beyond reproduction.", gate: "Baseline Review · Experiment-Matrix Approval" },
  { n: 5, title: "Test the Research Logic", stage: "Shared design", focus: "Decide what the initial evidence establishes and revise scope when results or feasibility demand it.", gate: "Midpoint Evidence Review" },
  { n: 6, title: "Student-Led Experimentation", stage: "Student-led", focus: "Own the main experiment matrix, investigate unexpected findings, and justify protocol changes.", gate: "Main experiments · Robustness or ablation analysis" },
  { n: 7, title: "Generalization & Failure", stage: "Student-led", focus: "Test where methods succeed and fail under held-out attacks, distributions, architectures, or other conditions.", gate: "Held-out results · Failure analysis" },
  { n: 8, title: "Reproducibility", stage: "Student-led", focus: "Ask another SPARK team to reproduce a selected result and repair documentation or implementation gaps.", gate: "Reproducibility Exchange" },
  { n: 9, title: "Scientific Argument", stage: "Independent defense", focus: "Determine which conclusions are justified, identify limitations, and build the evidence into a coherent argument.", gate: "Draft report · Poster · Responsible Release Review" },
  { n: 10, title: "Interpretation & Defense", stage: "Independent defense", focus: "Finalize and defend the question, methods, evidence, limitations, and most appropriate next experiment.", gate: "Repository · Technical report · Symposium · Oral defense" },
];

const mentors = [
  ["Md Jobair Hossain Faruk", "PI · RP1 / RP2 / RP3", "Quantum-AI cybersecurity, QML, trustworthy AI, malware and intrusion detection"],
  ["Vamsi Paruchuri", "Co-PI · RP1", "Wireless and sensor networks, smart systems, connected-system security"],
  ["Sharif Ullah", "Anticipated mentor · RP1 / RP2", "AI/ML, data analytics, intelligent systems, cybersecurity applications"],
  ["Zachary Stine", "Anticipated mentor · RP2", "Text mining, large-scale text analysis, human-centered AI"],
  ["Sharif Ahmed", "Anticipated mentor · RP1 / RP2", "Explainable AI, NLP, software engineering, empirical AI"],
  ["Ademola Adesokan", "Anticipated mentor · RP1 / RP2", "Applied ML, LLMs, information retrieval, decision-support systems"],
  ["Enes Erdin", "Anticipated mentor · RP1", "IoT/CPS security, secure protocols, distributed and network security"],
];

const faqs = [
  ["Is SPARK currently accepting applications?", "Not yet. The program is pending NSF funding, and no application deadline or ETAP link has been announced. This site will be updated if the award is made and the application opens."],
  ["Do I need prior research or quantum coursework?", "No. Prior research, cybersecurity specialization, and quantum coursework are not proposed prerequisites. Preparation may come through coursework, programming, technical projects, work experience, or independent learning."],
  ["Who would be eligible?", "NSF-supported participants must be U.S. citizens, U.S. nationals, or U.S. permanent residents who meet NSF’s definition of an undergraduate enrolled in an associate- or baccalaureate-degree pathway. Transitioning students may be eligible when consistent with NSF requirements."],
  ["Does every student work on QML research?", "Every scholar receives the common QML foundation. The project portfolio—not an individual student—becomes more QML-forward across the three award years. Project assignment depends on the available portfolio, student interests, preparation, mentor fit, and capacity."],
  ["Does quantum-ready mean SPARK expects quantum advantage?", "No. Students learn when a quantum formulation is worth testing, how to construct a fair classical comparison, how to account for resource limits, and how to report what the evidence does and does not show."],
  ["Would quantum hardware be required?", "No. Required QML preparation and appropriately scoped investigations can use open-source software and validated simulators. Hardware may be used when available and scientifically useful, but no SPARK outcome depends on a particular device."],
  ["What support is proposed for participants?", "The proposal includes a student stipend plus housing, meals, and travel support through the REU award. Final amounts and arrangements will be published only if funding is awarded."],
  ["How are Future CoRe workshops connected to SPARK?", "If Future CoRe is funded, SPARK scholars may join aligned workshops at UCA, TSU, and UALR, virtually or in person when feasible. SPARK’s required research and quantum-readiness outcomes remain fully achievable at UCA without those external activities."],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function SparkSite() {
  const [activePillar, setActivePillar] = useState<PillarKey>("defense");
  const [activeYear, setActiveYear] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pillar = pillars[activePillar];
  const year = years[activeYear];
  const week = weeks[activeWeek];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>

      <div className="funding-bar" role="note">
        <div className="shell funding-inner">
          <span className="status-dot" aria-hidden="true" />
          <p><strong>Funding status:</strong> SPARK is pending funding through NSF Program Solicitation NSF 23-601. Content on this site reflects the proposed program as described in the submitted proposal.</p>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#top" aria-label="SPARK home" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">S</span>
            <span><strong>SPARK</strong><small>University of Central Arkansas</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#research">Research</a><a href="#progression">3-Year Vision</a>
            <a href="#summer">Summer</a><a href="#students">For Students</a>
            <a href="#leadership">Leadership</a>
          </nav>
          <a className="nav-cta" href="#students">Applicant guide <Arrow /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-nav">
            <span /><span /><span /><b className="sr-only">Toggle navigation</b>
          </button>
        </div>
        <nav className={menuOpen ? "mobile-nav open" : "mobile-nav"} id="mobile-nav" aria-label="Mobile navigation">
          <a href="#research" onClick={closeMenu}>Research</a><a href="#progression" onClick={closeMenu}>3-Year Vision</a>
          <a href="#summer" onClick={closeMenu}>Summer Experience</a><a href="#students" onClick={closeMenu}>For Students</a>
          <a href="#leadership" onClick={closeMenu}>Leadership</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Proposed NSF Research Experiences for Undergraduates Site</p>
              <h1>Research what happens when AI becomes both <span>defender and target.</span></h1>
              <p className="hero-lede">Then learn how to test what quantum methods might contribute—with evidence, matched baselines, and no presumption of quantum advantage.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#research">Explore the research <Arrow /></a>
                <a className="button button-ghost" href="#summer">See the 10-week experience</a>
              </div>
              <dl className="quick-stats" aria-label="Program at a glance">
                <div><dt>10</dt><dd>scholars / summer</dd></div>
                <div><dt>10</dt><dd>research weeks</dd></div>
                <div><dt>5</dt><dd>two-person teams</dd></div>
                <div><dt>3</dt><dd>research pillars</dd></div>
              </dl>
            </div>

            <div className="research-console" aria-label="Interactive SPARK research map">
              <div className="console-topline"><span>Research map</span><span className="console-live">Select a pillar</span></div>
              <div className="orbit-map">
                <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" />
                <div className="core-node"><span>SPARK method</span><strong>Question</strong><i>↓</i><strong>Baseline</strong><i>↓</i><strong>Evidence</strong></div>
                {(Object.keys(pillars) as PillarKey[]).map((key, index) => (
                  <button className={["orbit-node", "node-" + (index + 1), activePillar === key ? "active" : ""].join(" ")}
                    data-color={pillars[key].color} key={key} onClick={() => setActivePillar(key)} aria-pressed={activePillar === key}>
                    <span>{pillars[key].code}</span>{pillars[key].title}
                  </button>
                ))}
              </div>
              <div className="console-detail" data-color={pillar.color} aria-live="polite">
                <div><span>{pillar.code} / ACTIVE</span><h2>{pillar.title}</h2></div><p>{pillar.short}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="principle-strip" aria-label="SPARK research principles">
          <div className="shell principle-grid"><p>Define the threat.</p><p>Reproduce the baseline.</p><p>Test failure, not just accuracy.</p><p>Claim only what the evidence supports.</p></div>
        </section>

        <section className="section research-section" id="research">
          <div className="shell">
            <div className="section-heading split-heading">
              <div><p className="kicker">Three connected research pillars</p><h2>One discipline of inquiry. Three attack surfaces.</h2></div>
              <p>SPARK organizes projects around consequential cybersecurity questions, then asks students to build the comparison that can answer each question honestly.</p>
            </div>
            <div className="pillar-explorer">
              <div className="pillar-tabs" role="tablist" aria-label="Research pillars">
                {(Object.keys(pillars) as PillarKey[]).map((key) => (
                  <button key={key} role="tab" aria-selected={activePillar === key} aria-controls="pillar-panel"
                    className={activePillar === key ? "active" : ""} data-color={pillars[key].color} onClick={() => setActivePillar(key)}>
                    <span>{pillars[key].code}</span><strong>{pillars[key].title}</strong><small>{pillars[key].short}</small>
                  </button>
                ))}
              </div>
              <article className="pillar-panel" id="pillar-panel" role="tabpanel" data-color={pillar.color}>
                <p className="panel-label">Research question</p><h3>{pillar.question}</h3>
                <div className="project-list">
                  {pillar.projects.map((projectIndex) => (
                    <a href={"#project-" + projects[projectIndex].code} key={projects[projectIndex].code}>
                      <span>{projects[projectIndex].code}</span><p>{projects[projectIndex].title}</p><b aria-hidden="true">→</b>
                    </a>
                  ))}
                </div>
                <p className="panel-note">Representative projects are refined each year for research readiness, mentor fit, data access, and ten-week feasibility.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section project-lab" id="projects">
          <div className="shell">
            <div className="project-lab-head"><p className="kicker light">Representative project lab</p><h2>Start with an unknown—not a demonstration.</h2><p>A strong negative or null result is still a research result when the design is rigorous and the limitations are understood.</p></div>
            <div className="project-cards">
              {projects.map((project) => (
                <article id={"project-" + project.code} key={project.code}>
                  <div className="project-meta"><span>{project.code}</span><span>{project.pillar}</span></div>
                  <h3>{project.title}</h3><p className="project-prompt">{project.prompt}</p><p>{project.work}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section progression-section" id="progression">
          <div className="shell progression-layout">
            <div className="progression-intro">
              <p className="kicker light">A portfolio that learns</p><h2>Three summers. Three new cohorts. One advancing research program.</h2>
              <p>The progression belongs to the SPARK Site—not to individual students. Every summer welcomes a new cohort, and every scholar receives the common quantum-ready foundation.</p>
              <div className="year-switcher" role="tablist" aria-label="Award year progression">
                {years.map((item, index) => (
                  <button key={item.year} role="tab" aria-selected={activeYear === index} onClick={() => setActiveYear(index)}>
                    <span>{item.year}</span><strong>{item.name}</strong>
                  </button>
                ))}
              </div>
            </div>
            <article className="year-panel" aria-live="polite">
              <div className="year-panel-top"><div><p>{year.year} / PORTFOLIO VIEW</p><h3>{year.headline}</h3></div><span>{String(activeYear + 1).padStart(2, "0")}</span></div>
              <div className="portfolio-bars" aria-label={year.year + " illustrative research emphasis"}>
                {["RP1 — Cyber Defense", "RP2 — Trustworthy AI", "RP3 — Quantum-Ready"].map((label, index) => (
                  <div key={label}><span>{label}</span><i><b style={{ width: year.mix[index] + "%" }} /></i></div>
                ))}
              </div>
              <p className="year-description">{year.description}</p>
              <div className="qml-callout"><span>QML role</span><strong>{year.qml}</strong></div>
              <p className="illustrative-note">Bar lengths communicate the proposed shift in emphasis; they are not fixed project quotas.</p>
            </article>
          </div>
        </section>

        <section className="section summer-section" id="summer">
          <div className="shell">
            <div className="section-heading split-heading">
              <div><p className="kicker">The ten-week research arc</p><h2>From a bounded question to an evidence-backed defense.</h2></div>
              <p>Mentoring remains intensive throughout. What changes is who owns the consequential research decisions.</p>
            </div>
            <div className="week-explorer">
              <div className="week-rail" role="tablist" aria-label="Ten-week research sequence">
                {weeks.map((item, index) => (
                  <button key={item.n} role="tab" aria-selected={activeWeek === index} onClick={() => setActiveWeek(index)}>
                    <span>{String(item.n).padStart(2, "0")}</span><b>{item.title}</b>
                  </button>
                ))}
              </div>
              <article className="week-panel" aria-live="polite">
                <div className="week-number">{String(week.n).padStart(2, "0")}</div><p className="panel-label">{week.stage}</p>
                <h3>{week.title}</h3><p className="week-focus">{week.focus}</p>
                <div className="research-gate"><span>Research gate / product</span><strong>{week.gate}</strong></div>
                <div className="responsibility-meter" aria-label="Research responsibility grows across the summer">
                  <span>Faculty structure</span><i><b style={{ width: (100 - activeWeek * 8) + "%" }} /></i><span>Student ownership</span>
                </div>
              </article>
            </div>
            <div className="deliverables">
              <div><span>01</span><h3>Reproducible repository</h3><p>Question, threat model, provenance, environment, code, partitions, protocols, and limitations.</p></div>
              <div><span>02</span><h3>4–6 page technical report</h3><p>A defensible scientific argument, not a record of tasks completed.</p></div>
              <div><span>03</span><h3>Poster + oral defense</h3><p>Every scholar explains the baseline, evidence, failure modes, and next experiment.</p></div>
              <div><span>04</span><h3>Pathway plan</h3><p>A concrete next step toward research, graduate study, transfer, internships, or technical work.</p></div>
            </div>
          </div>
        </section>

        <section className="section quantum-ready-section" id="quantum-ready">
          <div className="shell quantum-layout">
            <div>
              <p className="kicker light">What “quantum-ready” means here</p><h2>Scientific judgment before platform proficiency.</h2>
              <p>Quantum-ready researchers can decide whether a quantum formulation is appropriate, design the fair comparison, account for practical constraints, and limit claims to the evidence.</p>
              <a href="https://jobair-hossain.github.io/QML4CyberSecurity" target="_blank" rel="noreferrer" className="text-link">Explore QML4CyberSecurity modules <Arrow /></a>
            </div>
            <ol className="readiness-steps">
              <li><span>01</span><div><h3>Separate QML from PQC</h3><p>QML investigates quantum computation for learning or inference; PQC protects cryptographic systems using classically executable, quantum-resistant algorithms.</p></div></li>
              <li><span>02</span><div><h3>Build the classical case first</h3><p>Use matched data partitions, evaluation procedures, and defensible baselines.</p></div></li>
              <li><span>03</span><div><h3>Count the real constraints</h3><p>Document encoding, qubits, circuit depth, optimization, shots, noise, simulation or hardware conditions, and cost.</p></div></li>
              <li><span>04</span><div><h3>Report the result honestly</h3><p>Matching, underperforming, or becoming impractical can all be scientifically meaningful outcomes.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section students-section" id="students">
          <div className="shell">
            <div className="students-title"><p className="kicker">For prospective scholars</p><h2>Potential matters more than prior access.</h2><p>SPARK is designed for undergraduates who are curious, persistent, ready to learn, and able to contribute to a collaborative research team—including students whose home institutions offer limited research opportunities.</p></div>
            <div className="student-grid">
              <article className="eligibility-card">
                <span className="card-index">01 / ELIGIBILITY</span><h3>Who the proposed program is for</h3>
                <ul><li>Undergraduates in associate- or baccalaureate-degree pathways</li><li>U.S. citizens, nationals, or permanent residents under NSF REU rules</li><li>Students with programming, technical, analytical, or problem-solving preparation</li><li>No prior research, cybersecurity specialization, or quantum coursework required</li></ul>
              </article>
              <article className="application-card">
                <span className="card-index">02 / PROPOSED APPLICATION</span><h3>What applicants would submit in ETAP</h3>
                <ul><li>Application and transcript</li><li>Résumé or CV</li><li>One recommendation</li><li>A structured statement on research interest, persistence through difficulty, research access, and the next step SPARK could enable</li></ul>
              </article>
              <article className="selection-card">
                <span className="card-index">03 / SELECTION</span><h3>How research potential would be read</h3>
                <div className="selection-bars">
                  {[["Curiosity, persistence & problem-solving",25],["Preparation in context",20],["Motivation & SPARK alignment",20],["Potential benefit",20],["Collaborative readiness",15]].map((item) => (
                    <div key={String(item[0])}><span>{item[0]}</span><i><b style={{width: String(item[1]) + "%"}} /></i><em>{item[1]}%</em></div>
                  ))}
                </div>
              </article>
            </div>
            <div className="support-banner">
              <div><p className="kicker light">Proposed participant support</p><h3>Stipend + housing + meals + travel</h3></div>
              <p>Final amounts, dates, application link, and residential arrangements will be posted only if NSF funding is awarded.</p>
              <a href="mailto:mhossainfaruk@uca.edu">Ask a program question <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="section environment-section" id="environment">
          <div className="shell">
            <div className="section-heading split-heading"><div><p className="kicker">Research environment</p><h2>Built for rigorous work—and for first-time researchers.</h2></div><p>All required research and quantum-readiness outcomes are designed to be completed at UCA; external resources add range, not dependency.</p></div>
            <div className="environment-grid">
              <article><span>01</span><h3>UCA CSE</h3><p>Faculty expertise across AI, cybersecurity, software systems, networking, NLP, data analytics, trustworthy AI, and QML.</p></article>
              <article><span>02</span><h3>HPC + Computing Labs</h3><p>Department-managed systems and an NSF MRI-supported Dell PowerEdge cluster for repeated training, robustness studies, and larger experiments.</p></article>
              <article><span>03</span><h3>Cyber Range</h3><p>Controlled environments and authorized datasets for defensive and adversarial research without placing external systems at risk.</p></article>
              <article><span>04</span><h3>Q-SHIELD</h3><p>PI-led research space for AI, cybersecurity, QML, trustworthy computing, software systems, and tested quantum-learning workflows.</p></article>
            </div>
            <div className="workshop-path">
              <div className="workshop-intro"><span>Conditional enrichment</span><h3>Future CoRe workshop pathway</h3><p>If Future CoRe is funded, scholars may participate virtually or in person when feasible. SPARK remains complete without these activities.</p></div>
              <div className="workshop-years">
                <div><span>Y1 · UCA</span><p>Technical workshop broadening the AI-cybersecurity foundation</p></div>
                <div><span>Y2 · TSU</span><p>Technical workshop supporting the transition toward RP3</p></div>
                <div><span>Y3 · UALR + UCA</span><p>Cybersecurity leadership workshops connecting research and professional pathways</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section evidence-section" id="evidence">
          <div className="shell evidence-layout">
            <div><p className="kicker light">For NSF, mentors & partners</p><h2>How SPARK will know whether the model is working.</h2><p>Evaluation combines direct evidence from student research products, independence and quantum-readiness measures, mentoring feedback, recruitment records, CRA-CERP participation, external evaluation, and longitudinal follow-up.</p></div>
            <div className="evidence-cards">
              <article><strong>≥80%</strong><span>Research proficiency</span><p>Proficient in at least four of five areas: question formulation, methodology, reproducibility, interpretation, and communication.</p></article>
              <article><strong>≥80%</strong><span>Student-led research</span><p>Student-led with mentor consultation in at least three areas of ownership, decisions, adaptation, and defense.</p></article>
              <article><strong>≥80%</strong><span>Quantum readiness</span><p>Distinguish QML from PQC, reproduce a workflow, justify a baseline, and identify resource limitations.</p></article>
              <article><strong>80 / 50</strong><span>Access commitments</span><p>At least 80% from outside UCA and 50% from institutions with limited undergraduate STEM research opportunities.</p></article>
            </div>
          </div>
        </section>

        <section className="section leadership-section" id="leadership">
          <div className="shell">
            <div className="section-heading split-heading"><div><p className="kicker">Program leadership & mentor pool</p><h2>Direct faculty mentoring. Shared accountability.</h2></div><p>Five faculty mentors support five two-student teams each summer. Graduate or near-peer researchers may assist with tools and workflows, but faculty retain responsibility for research quality, safety, interpretation, and student progress.</p></div>
            <div className="mentor-grid">
              {mentors.map((mentor, index) => (
                <article className={index < 2 ? "lead-mentor" : ""} key={mentor[0]}>
                  <span>{String(index + 1).padStart(2,"0")}</span><h3>{mentor[0]}</h3><strong>{mentor[1]}</strong><p>{mentor[2]}</p>
                </article>
              ))}
            </div>
            <div className="management-strip"><p><strong>PI:</strong> intellectual and administrative leadership, NSF compliance, recruitment, Quantum-AI integration, and research quality.</p><p><strong>Co-PI:</strong> project readiness, mentor support, student progress, resources, and operational continuity.</p><p><strong>External evaluator:</strong> independent review and annual recommendations; appointment pending.</p></div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-layout">
            <div><p className="kicker">Questions, answered plainly</p><h2>Before you plan your summer.</h2><p>Because SPARK is pending funding, the site does not publish application dates or make commitments that have not yet been approved.</p></div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq[0]}><summary><span>{String(index + 1).padStart(2,"0")}</span>{faq[0]}<b aria-hidden="true">+</b></summary><p>{faq[1]}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="shell contact-card">
            <div><p className="kicker light">Stay connected</p><h2>Questions about the proposed SPARK program?</h2></div>
            <div className="contact-info"><span>Student applicant point of contact</span><strong>Jobair Hossain</strong><a href="mailto:mhossainfaruk@uca.edu">mhossainfaruk@uca.edu</a><a href="tel:+15014503308">501-450-3308</a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div><a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">S</span><span><strong>SPARK</strong><small>Quantum-Ready AI & Cybersecurity Research</small></span></a><p>A proposed summer REU Site hosted by the Department of Computer Science and Engineering at the University of Central Arkansas in Conway, Arkansas.</p></div>
          <nav aria-label="Footer navigation"><a href="#research">Research</a><a href="#summer">10-week experience</a><a href="#students">Applicant guide</a><a href="#leadership">Leadership</a><a href="#faq">FAQ</a></nav>
          <div className="footer-note"><strong>Funding status</strong><p>SPARK is pending funding through NSF Program Solicitation NSF 23-601. Content reflects the proposed program described in the submitted proposal.</p><p>Future CoRe participation is conditional on that project’s funding and availability.</p></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 University of Central Arkansas · SPARK proposal website</span><a href="https://uca.edu" target="_blank" rel="noreferrer">uca.edu <Arrow /></a></div>
      </footer>
    </>
  );
}
