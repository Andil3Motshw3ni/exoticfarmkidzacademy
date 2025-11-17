import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = 'Please enter a valid email address.'
    if (form.phone && !form.phone.match(/^[+]?[\d\s-]{7,}$/)) e.phone = 'Please enter a valid phone number.'
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters long.'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    
    if (Object.keys(v).length === 0) {
      setLoading(true)
      // Simulate API call
      setTimeout(() => {
        setSuccess(true)
        setForm({ name: '', email: '', phone: '', message: '' })
        setLoading(false)
        setTimeout(() => setSuccess(false), 5000)
      }, 1500)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">
          Full Name <span className="required">*</span>
        </label>
        <input 
          id="name"
          type="text"
          value={form.name} 
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Enter your full name"
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <small className="err">{errors.name}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email Address <span className="required">*</span>
        </label>
        <input 
          id="email"
          type="email"
          value={form.email} 
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="your.email@example.com"
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <small className="err">{errors.email}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">
          Phone Number
        </label>
        <input 
          id="phone"
          type="tel"
          value={form.phone} 
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="+27 00 000 0000"
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && <small className="err">{errors.phone}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Message <span className="required">*</span>
        </label>
        <textarea 
          id="message"
          value={form.message} 
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your inquiry or book a visit..."
          rows="5"
          className={errors.message ? 'error' : ''}
        />
        {errors.message && <small className="err">{errors.message}</small>}
      </div>

      <div className="form-actions">
        <button 
          type="submit" 
          className="btn primary"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m22 2-7 20-4-9-9-4Z"/>
                <path d="M22 2 11 13"/>
              </svg>
              Send Message
            </>
          )}
        </button>
        
        {success && (
          <div className="success-message">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            Message sent successfully! We'll get back to you soon.
          </div>
        )}
      </div>
    </form>
  )
}
