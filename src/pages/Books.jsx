import { ExternalLink, MessageCircle, BookOpen } from 'lucide-react'
import { CONTACT } from '../config/contact'
import './Books.css'

const books = [
  {
    id: 'diary',
    title: 'Diary of a Working Mom',
    author: 'Dr Nisha Sawant, Author & Founder of Hridhyansh',
    audience: 'For Parents',
    image: '/DAIRY.jpeg', // Pointing to your file in the public folder 
    color: 'book-mom',
    tagline: '"Honest. Raw. Necessary."',
    buyLink: '',
    description: [
      'A working mother doesn\'t have a villian. She has 24 hours, a hundred responsibilities, and a love so fierce it hurts her when she can\'t give it freely.',
      'Diary of a Working Mom is not a parenting manual. It\'s a journal — honest entries from the in-between moments: the school drop-off where you cry in the car, the bedtime story you read half-asleep, the guilt that follows you into meetings.',
      'This book doesn\'t tell you how to be a better parent. It tells you that you already are one — and that your child knows it too.',
    ],
    themes: ['Parental guilt', 'Work-life balance', 'Emotional honesty', 'Motherhood in India'],
    pages: '~160 pages',
    format: 'Paperback & Digital',
    language: 'English',
  },
  {
    id: 'ghost',
    title: 'The Ghost Maid',
    author: 'Shreshtha Sawant, age 9 · Author',
    audience: 'For Children & Their Parents',
    color: 'book-daughter',
    tagline: '"A child\'s love letter to every busy parent."',
    buyLink: '',
    description: [
      'What if you could be invisible — not to disappear, but to be everywhere your mother needs you at once?',
      'The Ghost Maid is the story of Anika, a girl who wishes she could become a ghost maid — someone who silently takes care of everything so her mother wouldn\'t have to worry anymore.',
      'Written by a 9-year-old who watched her mother carry too much, this book is a gentle, beautiful mirror held up to every family that has ever been too busy to say: I see you. I love you. I\'m here.',
    ],
    themes: ['Empathy', 'Childhood perspective', 'Love & sacrifice', 'Family bonds'],
    pages: '~80 pages',
    format: 'Paperback (Illustrated) & Digital',
    language: 'English',
  },
]

const Books = () => {
  return (
    <div className="books-page animate-fade-in">
      {/* HERO */}
      <section className="books-hero section">
        <div className="container text-center">
          <p className="books-eyebrow">Our Books</p>
          <h1 className="books-hero-title">Two stories.<br /><span className="text-terracotta">One family's truth.</span></h1>
          <p className="books-hero-sub">
            These books didn't begin as products. They began as confessions — one from a mother, one from her daughter — written separately, then read together.
          </p>
        </div>
      </section>

      {/* BOOKS */}
      {books.map((book, i) => (
        <section
          key={book.id}
          className={`book-section section ${i % 2 === 1 ? 'bg-cream-dark' : ''}`}
        >
          <div className="container">
            <div className={`grid grid-cols-1 md-grid-cols-2 gap-2xl items-center ${i % 2 === 1 ? 'book-reverse' : ''}`}>

              {/* Visual */}
              <div className={`book-cover-wrapper ${i % 2 === 1 ? 'order-2' : ''}`}>
                {book.image ? (
                  /* Render the actual JPEG if it exists */
                  <div className="book-real-image-wrapper">
                    <img src={book.image} alt={book.title} className="book-real-image" />
                  </div>
                ) : (
                  /* Fallback to CSS Cover if no image */
                  <div className={`book-cover ${book.color}`}>
                    <div className="book-spine" />
                    <div className="book-cover-content">
                      <p className="book-cover-audience">{book.audience}</p>
                      <BookOpen size={36} className="book-cover-icon" />
                      <h2 className="book-cover-title">{book.title}</h2>
                      <p className="book-cover-author">{book.author}</p>
                    </div>
                  </div>
                )}
                <p className="book-tagline">{book.tagline}</p>
              </div>

              {/* Content */}
              <div className={`book-content ${i % 2 === 1 ? 'order-1' : ''}`}>
                <p className="book-audience-badge">{book.audience}</p>
                <h2 className="book-title">{book.title}</h2>
                <p className="book-author-name">{book.author}</p>

                {book.description.map((para, j) => (
                  <p key={j} className="book-desc">{para}</p>
                ))}

                <div className="book-meta">
                  <div className="book-meta-item">
                    <span className="meta-label">Themes</span>
                    <div className="book-tags">
                      {book.themes.map(t => <span key={t} className="book-tag">{t}</span>)}
                    </div>
                  </div>
                  <div className="book-meta-row">
                    <div className="book-meta-item">
                      <span className="meta-label">Length</span>
                      <span>{book.pages}</span>
                    </div>
                    <div className="book-meta-item">
                      <span className="meta-label">Format</span>
                      <span>{book.format}</span>
                    </div>
                    <div className="book-meta-item">
                      <span className="meta-label">Language</span>
                      <span>{book.language}</span>
                    </div>
                  </div>
                </div>

                <div className="book-actions flex gap-md">
                  <a
                    href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.messages.orderBook(book.title))}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    <MessageCircle size={18} /> Order via WhatsApp
                  </a>
                  <a
                    href={book.buyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    <ExternalLink size={18} /> Buy Online
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* TOGETHER SECTION */}
      <section className="books-together section bg-cream-dark">
        <div className="container text-center">
          <h2 className="section-title">Read them together</h2>
          <p className="books-together-text">
            Both books are most powerful when a parent and child read them side by side — each seeing the other's world for the first time. Many families use them as the starting point for their BondBuild journey.
          </p>
          <div className="books-bundle card">
            <div className="bundle-books flex justify-center gap-lg">
              {/* Update bundle thumbs to use real image if available */}
              <img src="/DAIRY.jpeg" alt="Diary thumb" className="bundle-thumb-img" />
              <div className="bundle-plus">+</div>
              <div className="bundle-thumb book-daughter">The<br />Ghost Maid</div>
            </div>
            <p className="bundle-label">Both Books Bundle</p>
            <p className="bundle-note">Available exclusively through WhatsApp order or at our Goa events.</p>
            <a
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.messages.orderBundle)}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={18} /> Order Both Books
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Books