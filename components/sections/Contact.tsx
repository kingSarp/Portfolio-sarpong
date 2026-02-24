"use client"


import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/icons/SocialIcons'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed to send')

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }



  return (
    <section id="contact" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* CTA banner */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-20 p-12 md:p-20 text-center"
          style={{
            background: 'linear-gradient(135deg, #111 0%, #1a2e24 100%)',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative blob inside banner */}
          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: 300,
              height: 300,
              background: 'radial-gradient(circle, rgba(45,154,110,0.3) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          <p className="text-xs font-semibold tracking-[4px] uppercase text-brand-green mb-5">
            Let's Collaborate
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6 font-clash"
          >
            Have a project
            <br />
            in <span className="text-brand-green">mind?</span>
          </h2>
          <p className="text-white/60 max-w-md mx-auto mb-10 text-sm leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of
            your vision.
          </p>
          <Button
            href="mailto:sarpongnana9@gmail.com"
            variant="green"
            size="lg"
            icon={<ArrowRightIcon />}
          >
            Start a Conversation
          </Button>
        </motion.div>

        {/* Contact form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow="Get In Touch"
              title="Send me a "
              highlight="message"
              description="Fill out the form and I'll get back to you within 24 hours. For urgent inquiries, email me directly."
              className="mb-10"
            />

            <div className="space-y-4 text-sm text-(--muted)">
              <ContactDetail label="Email" value="sarpongnana9@gmail.com" />
              <ContactDetail label="Location" value="Ghana" />
              <ContactDetail label="Response time" value="Within 24 hours" />
              <ContactDetail label="Availability" value="Open to new projects" />
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {status === 'success' ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center p-10 glass rounded-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold text-[#111] mb-2 font-clash"
                >
                  Message sent!
                </h3>
                <p className="text-sm text-(--muted)">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Yaw Sarpong" />
                  <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="hello@you.com" />
                </div>
                <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Project Inquiry" />
                <div>
                  <label className="block text-xs font-semibold text-[#555] mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 text-sm rounded-xl border border-black/10 bg-white/60 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/20 placeholder:text-[#bbb] resize-none transition-colors"
                  />
                </div>

                <Button
                  variant="dark"
                  size="lg"
                  className="w-full justify-center"
                  icon={status === 'sending' ? undefined : <ArrowRightIcon />}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </Button>

                {status === 'error' && (
                  <p className="text-sm text-red-500 text-center mt-3">
                    Failed to send message. Please try again or email me directly.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type?: string
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#555] mb-2 uppercase tracking-wider">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3 text-sm rounded-xl border border-black/10 bg-white/60 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/20 placeholder:text-[#bbb] transition-colors"
      />
    </div>
  )
}

function ContactDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-black/6">
      <span className="text-xs font-semibold uppercase tracking-wider text-[#aaa]">{label}</span>
      <span className="font-medium text-[#333]">{value}</span>
    </div>
  )
}
