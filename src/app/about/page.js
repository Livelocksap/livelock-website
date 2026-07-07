'use client'

import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-4 text-center">About Livelock</h1>

          <div className="prose prose-slate max-w-none">
            <div className="bg-white border border-slate-200 rounded-xl p-10 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">One-Person Consulting Practice</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Livelock is a solo consulting practice. I'm <strong>Alberto Sabate</strong>, a freelance SAP and ERP consultant with 25+ years of international experience architecting enterprise analytics and planning platforms.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Working solo means you get direct access to deep expertise without organizational overhead. Every engagement is a direct collaboration—no account managers, no junior staff, just focused, results-driven consulting tailored to your specific challenges.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I work with large enterprise organizations across industries—pharma, manufacturing, retail, distribution, construction, and beyond. When you need specialized SAP expertise, analytics optimization, data architecture, or AI integration, you'll be working with me directly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Experience Highlights</h3>
                <ul className="space-y-3 text-slate-600">
                  <li><strong>25+ years</strong> in enterprise SAP and analytics</li>
                  <li><strong>50+ clients</strong> across multiple industries</li>
                  <li><strong>Recent work:</strong> Roche, Ipsen, Takeda, Vaillant, Coop</li>
                  <li><strong>Specialist in:</strong> SAC Planning, Datasphere, BW/4HANA, FP&A</li>
                  <li><strong>AI integration:</strong> Natural language analytics, predictive planning</li>
                  <li><strong>Languages:</strong> English, Spanish, French, Polish, Catalan</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Core Expertise</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-slate-900">Analytics & Data Modelling</p>
                    <p className="text-sm text-slate-600">SAP BW/4HANA, Datasphere, CDS Views, SQL, Tableau, Python</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Planning & Consolidation</p>
                    <p className="text-sm text-slate-600">SAC Planning, BPC, IP, rolling forecasts, multi-dimensional modelling</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">SAP Platforms</p>
                    <p className="text-sm text-slate-600">S/4HANA, ECC, CRM, Datasphere, Analytics Cloud</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">AI & Automation</p>
                    <p className="text-sm text-slate-600">Predictive analytics, natural-language interfaces, process automation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Work With a Solo Consultant?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium text-slate-900 mb-2">✓ Direct Access</p>
                  <p className="text-slate-600 text-sm">You work with the senior expert, not a junior resource or account manager.</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-2">✓ Efficiency</p>
                  <p className="text-slate-600 text-sm">No organizational overhead. Decisions happen faster, execution is leaner.</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-2">✓ Specialization</p>
                  <p className="text-slate-600 text-sm">25+ years focused on one domain. Deep expertise, not generalization.</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-2">✓ Flexibility</p>
                  <p className="text-slate-600 text-sm">Adapt to your needs. Part-time, full-time, project-based—whatever works.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-6">
                Want to learn more? Download my CV or get in touch to discuss your specific challenges.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/cv" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                  Download CV
                </Link>
                <Link href="/contact" className="px-8 py-3 border border-slate-300 text-slate-900 rounded-lg font-medium hover:border-slate-400 transition">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6 mt-20">
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
