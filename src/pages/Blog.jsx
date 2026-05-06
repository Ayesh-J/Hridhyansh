import { Link } from 'react-router-dom'
import { Clock, Tag, ArrowRight, BookOpen } from 'lucide-react'
import './Blog.css'

const articles = [
  {
    id: 1,
    tag: 'Parenting',
    title: 'Why "Quality Time" is a Myth — and What Actually Works',
    excerpt: `We've been sold the idea that if we just make the moments count, the quantity doesn't matter. But what does the research — and the children — actually say?`,
    readTime: '5 min read',
    featured: true,
    color: 'blog-terracotta',
  },
  {
    id: 2,
    tag: 'Connection',
    title: 'The 45-Minute Habit That Changed Our Family',
    excerpt: 'It started as part of our BondBuild program. It became the thing our daughter now reminds us about every evening without fail.',
    readTime: '4 min read',
    featured: false,
    color: 'blog-amber',
  },
  {
    id: 3,
    tag: 'Screen Time',
    title: 'The Screen Isn\'t the Villain. Boredom Is.',
    excerpt: `Children don't reach for screens because they're addicted. They reach for them because we never taught them what to do with the silence.`,
    readTime: '6 min read',
    featured: false,
    color: 'blog-green',
  },
  {
    id: 4,
    tag: 'Guilt',
    title: 'To the Mother Who Cried in the Car Park This Morning',
    excerpt: 'This is for you. The one who dropped off her child, walked back to the car, and sat there for five minutes before you could drive.',
    readTime: '3 min read',
    featured: false,
    color: 'blog-terracotta',
  },
  {
    id: 5,
    tag: 'Activities',
    title: '7 Conversations to Have With Your Child Before They Turn 10',
    excerpt: 'Not the birds-and-bees talk. The ones about failure, fear, feelings — the ones that build the kind of trust money can\'t buy.',
    readTime: '8 min read',
    featured: false,
    color: 'blog-amber',
  },
  {
    id: 6,
    tag: 'Stories',
    title: 'What My Daughter Taught Me About Letting Go',
    excerpt: 'She didn\'t say anything I didn\'t already know. But she said it like she meant it. And that\'s the difference.',
    readTime: '5 min read',
    featured: false,
    color: 'blog-green',
  },
]

const Blog = () => {
  const featured = articles.find(a => a.featured)
  const rest = articles.filter(a => !a.featured)

  return (
    <div className="blog-page animate-fade-in">

      {/* HERO */}
      <section className="blog-hero section">
        <div className="container text-center">
          <p className="blog-eyebrow">Stories</p>
          <h1 className="blog-hero-title">Honest words<br /><span className="text-terracotta">for real families.</span></h1>
          <p className="blog-hero-sub">
            No perfect parenting advice. No judgment. Just true stories, useful ideas, and a little solidarity.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featured && (
        <section className="featured-section section">
          <div className="container">
            <div className="featured-card card">
              <div className={`featured-accent ${featured.color}`} />
              <div className="featured-content">
                <div className="article-meta">
                  <span className="article-tag"><Tag size={12} /> {featured.tag}</span>
                  <span className="article-time"><Clock size={12} /> {featured.readTime}</span>
                </div>
                <h2 className="featured-title">{featured.title}</h2>
                <p className="featured-excerpt">{featured.excerpt}</p>
                <a href="#" className="btn btn-primary featured-cta">
                  Read Article <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ARTICLE GRID */}
      <section className="articles-section section bg-cream-dark">
        <div className="container">
          <h2 className="section-title">More Stories</h2>
          <div className="articles-grid grid grid-cols-1 md-grid-cols-3 gap-xl">
            {rest.map(article => (
              <article className="article-card card" key={article.id}>
                <div className={`article-top-bar ${article.color}`} />
                <div className="article-body">
                  <div className="article-meta">
                    <span className="article-tag"><Tag size={11} /> {article.tag}</span>
                    <span className="article-time"><Clock size={11} /> {article.readTime}</span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <a href="#" className="article-link">
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section section">
        <div className="container text-center">
          <div className="newsletter-card card">
            <BookOpen className="text-terracotta newsletter-icon" size={40} />
            <h2 className="section-title">Stories in your inbox</h2>
            <p>One honest letter, twice a month. No spam. Unsubscribe anytime.</p>
            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA TO PROGRAMS */}
      <section className="blog-cta section bg-cream-dark text-center">
        <div className="container">
          <h2 className="section-title">Ready to go beyond reading?</h2>
          <p>Our BondBuild program turns ideas into lived experiences — for you and your child, together.</p>
          <Link to="/programs" className="btn btn-primary blog-cta-btn">
            Explore BondBuild <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Blog
