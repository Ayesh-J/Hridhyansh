import { useState } from 'react'
import { MessageCircle, Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'
import { CONTACT } from '../config/contact'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', childName: '', email: '', phone: '', program: 'BondBuild', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwM7bKCcMRspW2Ti0q8pQy5_1PsRUT6hFJDQwoTR-CR6u2SVErN-1HIZRPbQesi8eIM6A/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(form),
        }
      )

      setSubmitted(true)

      setForm({
        name: '',
        childName: '',
        email: '',
        phone: '',
        program: 'BondBuild',
        message: '',
      })

    } catch (error) {
      console.error('Form submission error:', error)
      alert('Something went wrong. Please try again.')
    }
  }
  return (
    <div className="contact-page animate-fade-in">

      {/* HERO */}
      <section className="contact-hero section">
        <div className="container text-center">
          <p className="contact-eyebrow">Get in Touch</p>
          <h1 className="contact-hero-title">Let's find the right<br /><span className="text-terracotta">path for your family.</span></h1>
          <p className="contact-hero-sub">
            Whether you have a question, want to enroll, or just need to talk to someone who understands — we're here.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-grid grid grid-cols-1 md-grid-cols-2 gap-2xl">

            {/* FORM */}
            <div className="contact-form-wrapper">
              <h2 className="contact-section-heading">Send us a message</h2>
              <p className="contact-section-sub">We respond within 24 hours, usually much sooner.</p>

              {submitted ? (
                <div className="success-message card">
                  <CheckCircle className="text-green success-icon" size={48} />
                  <h3>Message received!</h3>
                  <p>Thank you, <strong>{form.name}</strong>. We'll be in touch within 24 hours.</p>
                  <p className="success-note">
                    In a hurry? WhatsApp us directly at{' '}
                    <a
                      href={`https://wa.me/${CONTACT.whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      +91 92099 47228
                    </a>
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row grid grid-cols-1 md-grid-cols-2 gap-md">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Priya Sharma"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="childName">Child's Name</label>
                      <input
                        id="childName"
                        name="childName"
                        type="text"
                        value={form.childName}
                        onChange={handleChange}
                        placeholder="Aryan (age 8)"
                      />
                    </div>
                  </div>

                  <div className="form-row grid grid-cols-1 md-grid-cols-2 gap-md">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="priya@email.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="program">I'm interested in</label>
                    <select id="program" name="program" value={form.program} onChange={handleChange}>
                      <option value="BondBuild">BondBuild Program (5 days)</option>
                      <option value="Books">Books — Diary of a Working Mom / The Ghost Maid</option>
                      <option value="BothBooks">Both Books Bundle</option>
                      <option value="General">General Enquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about your family and what you're looking for…"
                      rows={5}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* CONTACT INFO */}
            <div className="contact-info-wrapper">
              <h2 className="contact-section-heading">Other ways to reach us</h2>
              <p className="contact-section-sub">Based in Goa, India. Always reachable online.</p>

              <div className="contact-methods">
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.messages.contact)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method-card card"
                >
                  <div className="method-icon whatsapp-icon">
                    <MessageCircle size={28} />
                  </div>
                  <div className="method-content">
                    <h3>WhatsApp</h3>
                    <p>Chat with us directly. Usually the fastest way to get an answer.</p>
                    <span className="method-link">+91 92099 47228</span>
                  </div>
                </a>

                <a href="mailto:hellohridhyansh@gmail.com" className="contact-method-card card">
                  <div className="method-icon email-icon">
                    <Mail size={28} />
                  </div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <p>For detailed enquiries, bulk orders, or collaborations.</p>
                    <span className="method-link">hellohridhyansh@gmail.com</span>
                  </div>
                </a>

                <div className="contact-method-card card no-link">
                  <div className="method-icon location-icon">
                    <MapPin size={28} />
                  </div>
                  <div className="method-content">
                    <h3>Based in Goa, India</h3>
                    <p>In-person BondBuild sessions are held at our venue in Goa. Online and hybrid options are available for families everywhere.</p>
                  </div>
                </div>

                <div className="contact-method-card card no-link">
                  <div className="method-icon phone-icon">
                    <Phone size={28} />
                  </div>
                  <div className="method-content">
                    <h3>Call Us</h3>
                    <p>Available Monday–Saturday, 10am–6pm IST.</p>
                    <span className="method-link">+91 92099 47228</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
