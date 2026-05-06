import { Link } from 'react-router-dom'
import { Clock, Smartphone, HeartHandshake, Sparkles, Calendar, Users, Star, ArrowRight } from 'lucide-react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* SECTION 1 — HERO */}
      <section className="hero-section">
        <div className="container hero-container grid grid-cols-1 md-grid-cols-2 gap-2xl items-center">
          <div className="hero-content">
            <h1 className="hero-title">Hridhyansh. <br /><span className="text-terracotta">Best Piece of My Heart.</span></h1>
            <p className="hero-subtitle">
              A 5-day program where you and your child rediscover each other.
              No guilt. No lectures. Just joy.
            </p>
            <Link to="/programs" className="btn btn-primary hero-btn">
              Start for ₹999 <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hero-visual">
            <img src="/hero.png" alt="Mother and child bonding over painting" className="hero-img" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className="problem-section section">
        <div className="container">
          <h2 className="text-center section-title">The honest truth of parenting today</h2>
          <div className="problem-grid grid grid-cols-1 md-grid-cols-3 gap-xl">
            <div className="card problem-card">
              <div className="icon-wrapper">
                <Clock className="text-terracotta" size={32} />
              </div>
              <p>You love your child. But the day runs away.</p>
            </div>
            <div className="card problem-card">
              <div className="icon-wrapper">
                <Smartphone className="text-terracotta" size={32} />
              </div>
              <p>Screen time fills the silence. You both know it.</p>
            </div>
            <div className="card problem-card">
              <div className="icon-wrapper">
                <HeartHandshake className="text-terracotta" size={32} />
              </div>
              <p>You want more. So do they. You just need a way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT IS HRIDHYANSH? */}
      <section className="about-section section bg-cream-dark">
        <div className="container">
          <div className="grid grid-cols-1 md-grid-cols-2 gap-2xl items-center">
            <div className="about-visual glass-panel flex justify-center items-center">
              <div className="about-visual-content">
                {/* Updated this part to include the logo image */}
                <img
                  src="/LOGO.png"
                  alt="Hridhyansh Logo"
                  className="about-visual-logo"
                />
              </div>
            </div>
            <div className="about-content">
              <h2 className="section-title">What is Hridhyansh?</h2>
              <p className="about-desc">
                Hridhyansh is a conscious family bonding experience designed to bridge the gap between busy parents and their children.
              </p>
              <ul className="feature-list flex-col gap-md">
                <li className="flex items-center gap-md">
                  <Sparkles className="text-amber" size={24} />
                  <span>Joint parent-child experience (not a parenting lecture)</span>
                </li>
                <li className="flex items-center gap-md">
                  <Calendar className="text-amber" size={24} />
                  <span>5 days together + daily 45-min habit that actually sticks</span>
                </li>
                <li className="flex items-center gap-md">
                  <Users className="text-amber" size={24} />
                  <span>Customized for your family, guided by experts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — BRAND STORY TEASER */}
      <section className="story-section section text-center">
        <div className="container story-container">
          <h2 className="section-title">Born from real love and real guilt</h2>
          <p className="story-text">
            A mother who wrote a book about parental guilt. A daughter in Class 4 who wrote a book about wanting to ease her mother's burden. Together, they built Hridhyansh.
          </p>
          <Link to="/about" className="btn  story-btn">Read Our Story</Link>
        </div>
      </section>

      {/* SECTION 5 — PRODUCTS OVERVIEW */}
      <section className="products-section section bg-white">
        <div className="container">
          <h2 className="text-center section-title">Start your journey today</h2>
          <div className="grid grid-cols-1 md-grid-cols-2 gap-xl">
            <div className="card product-card flex-col gap-md">
              <h3>BondBuild Program</h3>
              <p>A transformative 5-day offline/hybrid experience for you and your child.</p>
              <div className="price">₹999 <span className="price-desc">for 5 days</span></div>
              <Link to="/programs" className="btn btn-primary">View Details</Link>
            </div>
            <div className="card product-card flex-col gap-md">
              <h3>Our Books</h3>
              <p>Honest stories written by a mother and her daughter, for families like yours.</p>
              <div className="books-preview flex gap-sm">
                <div className="book-thumb adult-book">Diary of a Working Mom</div>
                <div className="book-thumb child-book">The Ghost Maid</div>
              </div>
              <Link to="/books" className="btn btn-secondary">Explore Books</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — TESTIMONIALS */}
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="text-center section-title">Real families, real joy</h2>
          <div className="grid grid-cols-1 md-grid-cols-2 gap-xl">
            <div className="card testimonial-card">
              <div className="stars flex text-amber mb-sm"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div>
              <p className="quote">"I used to feel so guilty leaving for work. The 5-day program gave us a totally new language to talk to each other without feeling bad."</p>
              <p className="author">— Sneha & Aryan (9)</p>
              <p className="child-quote">"My mom laughed so loud during the drawing game!"</p>
            </div>
            <div className="card testimonial-card">
              <div className="stars flex text-amber mb-sm"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div>
              <p className="quote">"We've tried other parenting things before, but this was the first time we actually did it together instead of me just getting lectured."</p>
              <p className="author">— Rohan & Diya (12)</p>
              <p className="child-quote">"Dad's actually pretty good at making up stories."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
