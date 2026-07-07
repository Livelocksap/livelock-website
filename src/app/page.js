'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
            <span className="text-sm font-medium text-blue-700">SAP Analytics and ERP Optimization</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Transform your SAP and analytics stack into a <span className="text-blue-600">competitive advantage</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Enterprise organizations need SAP systems, analytics platforms, and data architectures that improve productivity, not add complexity. 25+ years specializing in AI-driven optimization, planning automation, and data-driven strategy.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/services" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Explore Services
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-slate-300 text-slate-900 rounded-lg font-medium hover:border-slate-400 transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Core Expertise</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">25+</p>
              <p className="text-slate-600">Years of SAP Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-teal-600 mb-2">50+</p>
              <p className="text-slate-600">Enterprise Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600 mb-2">4</p>
              <p className="text-slate-600">Core Service Areas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-600 mb-2">6</p>
              <p className="text-slate-600">Languages</p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-slate-200">
            <p className="text-slate-600 text-center mb-8">
              Specializing in SAP Analytics Cloud, SAP Datasphere, advanced planning, and AI integration across pharma, manufacturing, retail, and beyond.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">Services →</Link>
              <Link href="/about" className="text-blue-600 hover:text-blue-700 font-medium">About →</Link>
              <Link href="/cv" className="text-blue-600 hover:text-blue-700 font-medium">CV →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2024 Livelock. One-person consulting by Alberto Sabate.</p>
          <div className="flex gap-6 justify-center text-sm">
            <a href="https://linkedin.com/in/albertosabate" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="mailto:alberto.sabate@livelock.pl" className="hover:text-white">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
