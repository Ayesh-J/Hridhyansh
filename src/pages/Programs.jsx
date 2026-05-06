import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CheckCircle, ChevronDown, ChevronUp, ArrowRight, MessageCircle } from 'lucide-react'
import './Programs.css'

const faqs = [
  {
    q: 'Who is this program for?',
    a: `Any parent with a child aged 5–14 who wants to deepen their bond. Whether you're a working parent, a stay-at-home parent, or somewhere in between — if you want more moments of genuine connection, this is for you.`,
  },
  {
    q: 'Is it online or offline?',
    a: 'We offer both! Our flagship is an in-person experience based in Goa, but we also run a guided hybrid version you can do from home with our digital kit and live facilitation calls.',
  },
  {
    q: 'Do both parent and child participate?',
    a: `Yes — that's the heart of it. This is not a parenting lecture you attend alone. Every session is designed for you AND your child to do together.`,
  },
  {
    q: 'What happens after the 5 days?',
    a: `You'll leave with a daily 45-minute habit and a personalised family activity toolkit — things that actually fit into real life, not ideal life.`,
  },
  {
    q: 'Can I get a refund?',
    a: 'We offer a full refund if you request it within 24 hours of enrollment. After the program begins, we offer partial credits toward future sessions.',
  },
]

const days = [
  { day: 'Day 1', title: 'See Each Other', desc: `Ice-breakers and storytelling games that help parents and children see each other's worlds without judgment.` },
  { day: 'Day 2', title: 'Play Together', desc: 'Creative play sessions designed to unlock laughter and break down walls that routine has built up.' },
  { day: 'Day 3', title: 'Speak & Listen', desc: 'Guided conversations using our proprietary Heart-Talk cards — questions that open real dialogue.' },
  { day: 'Day 4', title: 'Create Together', desc: 'A collaborative art or craft project that becomes a physical memento of your bond.' },
  { day: 'Day 5', title: 'Promise Each Other', desc: 'A gentle closing ritual where parent and child make one real, doable promise to each other going forward.' },
]

const Programs = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="programs-page animate-fade-in">

      {/* HERO */}
      <section className="programs-hero section">
        <div className="container text-center">
          <p className="programs-eyebrow">BondBuild Program</p>
          <h1 className="programs-hero-title">5 days that change<br /><span className="text-terracotta">everything.</span></h1>
          <p className="programs-hero-sub">
            A structured, joyful experience where you and your child genuinely reconnect —<br className="desktop-only" /> no lectures, no guilt trips, just real moments.
          </p>
          <div className="programs-hero-actions flex justify-center gap-md">
            <Link to="/contact" className="btn btn-primary">
              Enroll Now — ₹999 <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20BondBuild"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <MessageCircle size={18} /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="includes-section section bg-cream-dark">
        <div className="container">
          <h2 className="text-center section-title">What's included</h2>
          <div className="includes-grid grid grid-cols-1 md-grid-cols-3 gap-xl">
            {[
              ['5 Live Sessions', 'Daily 90-minute guided experiences for parent + child together.'],
              ['Heart-Talk Card Deck', 'Our proprietary conversation cards — yours to keep forever.'],
              ['Daily Habit Guide', `A 45-minute daily ritual personalised to your family's schedule.`],
              ['Expert Facilitation', 'Sessions guided by our team of bonding coaches and child development experts.'],
              ['Family Activity Kit', 'A physical kit delivered to your door (Goa) or digitally (hybrid).'],
              ['Post-Program Check-in', 'A 30-minute check-in call at the 30-day mark to see how habits are holding.'],
            ].map(([title, desc]) => (
              <div className="include-card card" key={title}>
                <CheckCircle className="text-green include-icon" size={28} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-DAY JOURNEY */}
      <section className="journey-section section">
        <div className="container">
          <h2 className="text-center section-title">The 5-day journey</h2>
          <div className="journey-timeline">
            {days.map(({ day, title, desc }, i) => (
              <div className="journey-step" key={day}>
                <div className="journey-dot-wrapper">
                  <div className="journey-dot">{i + 1}</div>
                  {i < days.length - 1 && <div className="journey-line" />}
                </div>
                <div className="journey-content card">
                  <p className="journey-day-label">{day}</p>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section section bg-cream-dark">
        <div className="container text-center">
          <h2 className="section-title">Simple, honest pricing</h2>
          <div className="pricing-card card">
            <p className="pricing-label">BondBuild Program</p>
            <div className="pricing-amount">₹999</div>
            <p className="pricing-sub">per family, for all 5 days</p>
            <ul className="pricing-features">
              <li><CheckCircle size={16} className="text-green" /> 5 live facilitated sessions</li>
              <li><CheckCircle size={16} className="text-green" /> Heart-Talk Card Deck</li>
              <li><CheckCircle size={16} className="text-green" /> Family Activity Kit</li>
              <li><CheckCircle size={16} className="text-green" /> 30-day follow-up call</li>
              <li><CheckCircle size={16} className="text-green" /> Lifetime community access</li>
            </ul>
            <Link to="/contact" className="btn btn-primary pricing-cta">
              Reserve Your Spot <ArrowRight size={18} />
            </Link>
            <p className="pricing-note">Full refund within 24 hours of enrollment.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section">
        <div className="container">
          <h2 className="text-center section-title">Questions we hear a lot</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === i && (
                  <div className="faq-answer animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Programs
