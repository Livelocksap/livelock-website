'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setEmail('')
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8">
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-600 mb-12">
            Whether you're optimizing SAP, building analytics platforms, planning AI integration, or rethinking data strategy—let's discuss how we can help.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-10 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Email
                </label>
                <div className="flex gap-2">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    {submitted ? '✓ Sent' : 'Send'}
                  </button>
                </div>
              </div>
              {submitted && (
                <p className="text-green-600 text-sm">Thanks! I'll get back to you soon.</p>
              )}
            </form>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-4">Or reach out directly:</p>
              <a 
                href="mailto:alberto.sabate@livelock.pl"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                ✉ alberto.sabate@livelock.pl
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-2xl mb-2">⚡</p>
              <p className="font-medium text-slate-900 mb-1">Response Time</p>
              <p className="text-sm text-slate-600">24-48 hours typically</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-2xl mb-2">📍</p>
              <p className="font-medium text-slate-900 mb-1">Location</p>
              <p className="text-sm text-slate-600">Poznań, Poland (CET timezone)</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-2xl mb-2">🔗</p>
              <p className="font-medium text-slate-900 mb-1">Connect</p>
              <p className="text-sm text-slate-600">
                <a href="https://linkedin.com/in/albertosabate" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-xl">
            <h2 className="text-xl font-bold text-slate-900 mb-3">About Engagements</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              I work with enterprise organizations on short-term optimization projects, longer-term strategic engagements, and everything in between. Typical engagement models include hourly consulting, project-based work, and retained advisory roles.
            </p>
            <p className="text-slate-600 text-sm">
              All communication via email or video call. Time zone friendly across Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2026 Livelock. One-person consulting by Alberto Sabate.</p>
          <div className="flex gap-6 justify-center text-sm">
            <a href="https://linkedin.com/in/albertosabate" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="mailto:alberto.sabate@livelock.pl" className="hover:text-white">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
