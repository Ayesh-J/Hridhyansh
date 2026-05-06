import { Link } from 'react-router-dom'
import { Heart, BookOpen, Sparkles, ArrowRight } from 'lucide-react'
import './About.css'

const About = () => {
  return (
    <div className="about-page animate-fade-in">

      {/* HERO */}
      <section className="about-hero section">
        <div className="container text-center">
          <p className="about-eyebrow">Our Story</p>
          <h1 className="about-hero-title">Born from real love<br /><span className="text-terracotta">and real guilt.</span></h1>
          <p className="about-hero-sub">
            Two books. Two hearts. One mission — to help families truly see each other again.
          </p>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="origin-section section bg-cream-dark">
        <div className="container">
          <div className="grid grid-cols-1 md-grid-cols-2 gap-2xl items-center">
            <div className="origin-visual">
              <div className="quote-block">
                <span className="big-quote">"</span>
                <p>
                  My daughter told me she wished she could be my Ghost Maid — invisible, always there, doing things without being seen — just so she could spend more time with me.
                </p>
                <p className="origin-attribution">— From <em>The Ghost Maid</em>, written by Hridhyansh's daughter, age 9</p>
              </div>
            </div>
            <div className="origin-content">
              <h2 className="section-title">It started with two books</h2>
              <p>
                A mother. A working professional juggling ambition and guilt every single morning. She channelled it into a book — <strong>Diary of a Working Mom</strong> — an honest reckoning with parental guilt.
              </p>
              <p>
                Her daughter, in Class 4, read every draft. She had her own answer to offer the world — a story about a child who wanted to ease her mother's burden, told through the character of a Ghost Maid.
              </p>
              <p>
                Two books. Two perspectives on the same love. And a realisation: the gap between parents and children isn't a failure — it's just an invitation that was never sent.
              </p>
              <p className="origin-highlight">
                Hridhyansh is that invitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="founders-section section">
        <div className="container">
          <h2 className="text-center section-title">Meet the Founder</h2>
          <div className="founder-layout grid grid-cols-1 md-grid-cols-2 gap-2xl items-center">

            {/* Left: Founder Photo */}
            <div className="founder-visual">
              <div className="founder-image-wrapper">
                <img src="/founder.webp" alt="Hridhyansh Founder" className="founder-img" />
              </div>
            </div>

            {/* Right: Intro Text */}
            <div className="founder-intro-content">
              <div className="founder-avatar founder-avatar-mom mb-md">
                <BookOpen size={32} />
              </div>
              <h3>Dr Nisha Sawant</h3>
              <p className="founder-role">Author · Educator · Founder</p>
              <p className="founder-bio">
                A working mother who turned her own guilt into a movement. Author of <em>Diary of a Working Mom</em>, she spent years talking to parents who felt the same ache — present in body, absent in heart. She built Hridhyansh to give families the tools she wished she had.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="values-section section bg-cream-dark">
        <div className="container">
          <h2 className="text-center section-title">What we believe</h2>
          <div className="values-grid grid grid-cols-1 md-grid-cols-3 gap-xl">

            <div className="value-card card text-center">
              <div className="value-icon mx-auto">
                <Heart className="text-terracotta" size={32} />
              </div>
              <h3>Presence over Performance</h3>
              <p>Children don't need perfect parents. They need parents who show up — messy, imperfect, fully there.</p>
            </div>

            <div className="value-card card text-center">
              <div className="value-icon mx-auto">
                <Sparkles className="text-amber" size={32} />
              </div>
              <h3>Joy is the Method</h3>
              <p>We don't teach parenting. We create joyful shared experiences that naturally deepen the bond.</p>
            </div>

            <div className="value-card card text-center">
              <div className="value-icon mx-auto">
                <BookOpen className="text-green" size={32} />
              </div>
              <h3>Stories Build Bridges</h3>
              <p>Every family has a story. We help parents and children tell it — and hear each other's for the very first time.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section text-center">
        <div className="container about-cta-container">
          <h2 className="section-title">Ready to write your family's next chapter?</h2>
          <p>Start with 5 days. Build a lifetime.</p>
          <Link to="/programs" className="btn btn-primary about-cta-btn">
            Explore BondBuild <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  )
}

export default About
