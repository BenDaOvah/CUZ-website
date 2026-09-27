import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  HeartHandshake,
  Laptop,
  Menu,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const plans = [
  {
    id: "essential",
    name: "Essential",
    price: "4.99",
    intro: "Basic device help when you need it.",
    level: "Level 1 remote support",
    items: ["Step-by-step help guides"],
    response: ["Lower priority: within 24 hours", "Medium priority: within 12 hours"],
    exclusions: ["Lessons not included", "Account management not included", "Home visits not included"],
    className: "plan-card plan-card--essential",
  },
  {
    id: "guided",
    name: "Guided",
    price: "49.99",
    intro: "More lessons and help with everyday accounts.",
    level: "Level 1 and 2 remote support",
    items: [
      "Ready-to-use and custom guides",
      "Online lessons",
      "Help changing account passwords",
      "Email monitoring and spam filtering",
    ],
    response: [
      "Lower priority: within 24 hours",
      "Medium priority: within 12 hours",
      "High priority: within 6 hours",
    ],
    exclusions: ["Home visits cost extra for time and travel"],
    className: "plan-card plan-card--guided",
  },
  {
    id: "concierge",
    name: "Concierge",
    price: "199.99",
    intro: "More hands-on help, with one home visit each month.",
    level: "Level 1 and 2 remote support",
    items: [
      "Ready-to-use and custom guides",
      "Online lessons and voice-guided walkthroughs",
      "Email monitoring and account help",
      "Help with login security and password managers",
      "One home visit each month, up to 3 hours",
    ],
    response: [
      "Normal priority: within 24 hours",
      "Medium priority: within 12 hours",
      "High priority: within 6 hours",
      "Emergency priority: within 2 hours",
      "Priority queue",
    ],
    exclusions: ["Extra home visits cost more for time and travel"],
    className: "plan-card plan-card--concierge",
  },
];

const faqs = [
  {
    question: "What can I get help with?",
    answer:
      "Get help with computers, phones, email, files, browsers, and common home devices. Lessons and written guides depend on your plan.",
  },
  {
    question: "Are support visits included in the monthly price?",
    answer:
      "Remote support costs $20 for each 15 minutes ($80 per hour). Guided home visits cost extra. Concierge includes one visit each month, up to 3 hours. Extra visits cost more.",
  },
  {
    question: "How soon will I hear back?",
    answer:
      "Each plan lists response times by priority. Response time is not a promise that the issue will be fixed within that time.",
  },
  {
    question: "Which plan should I choose?",
    answer:
      "Choose Essential for basic help. Choose Guided for lessons and account help. Choose Concierge for more hands-on support and one included home visit each month.",
  },
  {
    question: "Do you repair computers or recover lost files?",
    answer:
      "Hardware repair, network setup, backups, and lost-file recovery are not included.",
  },
];

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="FlexTech home">
      <span className="brand-mark" aria-hidden="true"><span>F</span></span>
      <span className="brand-word">Flex<span>Tech</span></span>
    </a>
  );
}

export default function Home() {
  const [fontScale, setFontScale] = useState(() => {
    const saved = Number(window.localStorage.getItem("flextech-font-scale-v2"));
    return saved >= 100 && saved <= 200 ? saved : 100;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--reader-scale", String(fontScale / 100));
    document.documentElement.dataset.readerLarge = String(fontScale >= 140);
    window.localStorage.setItem("flextech-font-scale-v2", String(fontScale));
  }, [fontScale]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="utility-bar">
        <div className="utility-inner">
          <span className="utility-note"><span className="status-dot" /> Personal tech help for home</span>
          <div className="text-controls" role="group" aria-label="Text size settings">
            <span className="text-controls-label">Text size</span>
            <button type="button" className="text-size-button" aria-label="Make text smaller" disabled={fontScale <= 100} onClick={() => setFontScale((size) => Math.max(100, size - 10))}>A−</button>
            <button type="button" className="text-size-button" aria-label="Make text larger" disabled={fontScale >= 200} onClick={() => setFontScale((size) => Math.min(200, size + 10))}>A+</button>
            <button type="button" className="text-reset" onClick={() => setFontScale(100)}>Reset</button>
            <span className="sr-only" aria-live="polite">Text size {fontScale} percent</span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}
          </button>
          <nav id="site-navigation" className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            <a href="#support" onClick={closeMenu}>Support</a>
            <a href="#plans" onClick={closeMenu}>Plans and prices</a>
            <a href="#how-it-works" onClick={closeMenu}>How it works</a>
            <a href="#faq" onClick={closeMenu}>Questions</a>
          </nav>
          <a className="nav-cta" href="#plans" onClick={closeMenu}>Get started <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> FRIENDLY TECH HELP AT HOME</div>
              <h1 id="hero-heading">Feel more at home with your technology.</h1>
              <p className="hero-lede">Patient help with your everyday devices. Clear steps, at your pace.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#plans">See plans and prices <ArrowRight size={20} aria-hidden="true" /></a>
                <a className="text-link" href="#how-it-works">How it works <ArrowDown size={18} aria-hidden="true" /></a>
              </div>
              <div className="hero-reassurance">
                <div className="reassurance-icon"><HeartHandshake size={23} aria-hidden="true" /></div>
                <p><strong>Talk with a real person.</strong><br />Simple help. No tech talk.</p>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame">
                <img src="/manus-storage/flextech-home-support-hero_2645ba6f.jpg" alt="An older woman and a family member calmly learning together at a tablet at home" />
                <div className="image-caption"><span className="caption-icon"><Sparkles size={19} aria-hidden="true" /></span><span><strong>Helpful, human support.</strong><small>One step at a time.</small></span></div>
              </div>
              <div className="orbit orbit-one" aria-hidden="true" />
              <div className="orbit orbit-two" aria-hidden="true" />
              <div className="hero-side-note"><ShieldCheck size={20} aria-hidden="true" /><span>Less worry.<br /><strong>More confidence.</strong></span></div>
            </div>
          </div>
          <div className="hero-bottom-note"><span>Technology should make life easier.</span><span className="small-separator" aria-hidden="true" /><span>We are here to help.</span></div>
        </section>

        <section className="trust-strip" aria-label="FlexTech support benefits">
          <div className="trust-item"><span className="trust-number">01</span><span>Patient, clear help</span></div>
          <div className="trust-item"><span className="trust-number">02</span><span>Easy-to-compare plans</span></div>
          <div className="trust-item"><span className="trust-number">03</span><span>No confusing jargon</span></div>
        </section>

        <section className="intro-section section-pad" id="support" aria-labelledby="support-heading">
          <div className="section-kicker">Help for everyday technology</div>
          <div className="intro-layout">
            <div className="intro-heading-wrap"><h2 id="support-heading">A small question should not stop your day.</h2></div>
            <div className="intro-copy"><p>Get clear help with the technology you use at home.</p><p>Learn one step at a time. Keep simple instructions for later.</p><a href="#how-it-works" className="arrow-link">See how it works <ArrowRight size={19} aria-hidden="true" /></a></div>
          </div>
        </section>

        <section className="support-section section-pad" aria-labelledby="everyday-heading">
          <div className="section-heading-row">
            <div><div className="section-kicker">Common ways we can help</div><h2 id="everyday-heading">Everyday tech, made easier.</h2></div>
            <p className="section-aside">Clear help for the devices you use at home.</p>
          </div>
          <div className="support-grid">
            <article className="support-card support-card--blue"><span className="support-icon"><Laptop size={28} aria-hidden="true" /></span><h3>Computer help</h3><p>Browsers, files, and device clean-up.</p><span className="card-index">DEVICE HELP</span></article>
            <article className="support-card support-card--cream"><span className="support-icon"><ShieldCheck size={28} aria-hidden="true" /></span><h3>Safer online</h3><p>Email, spam, and account questions.</p><span className="card-index">ONLINE HELP</span></article>
            <article className="support-card support-card--green"><span className="support-icon"><HeartHandshake size={28} aria-hidden="true" /></span><h3>Patient lessons</h3><p>Learn by video or step-by-step guide.</p><span className="card-index">LEARN AT YOUR PACE</span></article>
            <article className="support-card support-card--lavender"><span className="support-icon"><MousePointer2 size={28} aria-hidden="true" /></span><h3>Home devices</h3><p>Help with phones, printers, and smart TVs.</p><span className="card-index">HOME TECHNOLOGY</span></article>
          </div>
          <p className="scope-note"><CircleHelp size={19} aria-hidden="true" /><span>Not included: hardware repair, network setup, backups, or lost-file recovery.</span></p>
        </section>

        <section className="how-section section-pad" id="how-it-works" aria-labelledby="how-heading">
          <div className="how-intro"><div className="section-kicker section-kicker--light">Getting help is simple</div><h2 id="how-heading">No rushing.<br /><span>No guessing.</span></h2><p>Ask your question. We will guide you through it.</p><a href="#plans" className="button button-light">See plans and prices <ArrowRight size={20} aria-hidden="true" /></a></div>
          <div className="steps-list">
            <article className="step"><span className="step-number">01</span><div><h3>Tell us what is wrong</h3><p>You do not need to know the tech words.</p></div></article>
            <article className="step"><span className="step-number">02</span><div><h3>Get a clear next step</h3><p>We explain the help your plan includes.</p></div></article>
            <article className="step"><span className="step-number">03</span><div><h3>Learn along the way</h3><p>Keep a guide or lesson to use again.</p></div></article>
          </div>
          <div className="how-decor" aria-hidden="true"><span /><span /><span /></div>
        </section>

        <section className="plans-section section-pad" id="plans" aria-labelledby="plans-heading">
          <div className="plans-header">
            <div><div className="section-kicker">Household plans</div><h2 id="plans-heading">Choose the help that feels right.</h2><p className="plans-subtitle">Simple monthly plans for seniors and households.</p></div>
            <div className="pricing-note"><span className="pricing-note-icon"><CircleHelp size={22} aria-hidden="true" /></span><p><strong>Please note</strong><br />Remote support and most home visits cost extra.</p></div>
          </div>
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <article className={plan.className} key={plan.id} aria-labelledby={`${plan.id}-title`}>
                {index === 2 && <div className="plan-ribbon"><Sparkles size={16} aria-hidden="true" /> MOST HANDS-ON</div>}
                <div className="plan-topline"><span className="plan-step">PLAN 0{index + 1}</span><span className="plan-symbol" aria-hidden="true">{index === 0 ? <Laptop size={22} /> : index === 1 ? <HeartHandshake size={22} /> : <ShieldCheck size={22} />}</span></div>
                <h3 id={`${plan.id}-title`}>{plan.name}</h3>
                <p className="plan-intro">{plan.intro}</p>
                <div className="plan-price"><span className="currency">$</span><span className="amount">{plan.price}</span><span className="per-month">/ month</span></div>
                <p className="price-caption">Monthly plan price</p>
                <div className="remote-fee"><strong>Remote support costs extra</strong><span>$20 for each 15 minutes ($80 per hour)</span></div>
                <div className="plan-divider" />
                <h4>Included in this plan</h4>
                <ul className="plan-includes"><li><Check size={19} aria-hidden="true" /><span>{plan.level}</span></li>{plan.items.map((item) => <li key={item}><Check size={19} aria-hidden="true" /><span>{item}</span></li>)}</ul>
                <div className="response-box"><strong>Response times</strong><ul>{plan.response.map((response) => <li key={response}>{response}</li>)}</ul></div>
                <div className="plan-footnotes"><strong>Extra costs</strong>{plan.exclusions.map((item) => <p key={item}>{item}</p>)}</div>
                <a className={`plan-link${index === 2 ? " plan-link--dark" : ""}`} href="#faq">Questions? Read the answers <ArrowRight size={18} aria-hidden="true" /></a>
              </article>
            ))}
          </div>
          <p className="fine-print">Response times are not a promise that the issue will be fixed in that time. Home visit fees apply where noted. Check the full plan terms before signing up.</p>
        </section>

        <section className="faq-section section-pad" id="faq" aria-labelledby="faq-heading">
          <div className="faq-heading"><div className="section-kicker">Good to know</div><h2 id="faq-heading">Questions and answers.</h2><p>Know what is included before you choose.</p></div>
          <div className="faq-list">{faqs.map((faq) => <details className="faq-item" key={faq.question}><summary><span>{faq.question}</span><ChevronDown size={24} aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className="closing-section" aria-labelledby="closing-heading">
          <div className="closing-orb closing-orb--one" aria-hidden="true" /><div className="closing-orb closing-orb--two" aria-hidden="true" />
          <div className="closing-inner"><span className="closing-mark" aria-hidden="true"><HeartHandshake size={30} /></span><div className="section-kicker section-kicker--light">Here when you need a hand</div><h2 id="closing-heading">You do not have to figure it out alone.</h2><p>Take your time. Start by looking at the plans.</p><a href="#plans" className="button button-light">Get started <ArrowRight size={20} aria-hidden="true" /></a></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top"><BrandMark /><p>Helpful tech support for home.</p><a className="footer-top-link" href="#top">Back to top <ArrowDown size={18} aria-hidden="true" /></a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} FlexTech</span><span>Household technology support</span><span>Clear help, one step at a time.</span></div>
      </footer>
    </div>
  );
}
