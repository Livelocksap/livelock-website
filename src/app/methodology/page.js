'use client'

import Link from 'next/link'

export default function Methodology() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-4 text-center">Our Approach</h1>
          <p className="text-lg text-slate-600 text-center mb-16">
            We measure success by productivity gains, not project hours spent
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl p-10 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Compute Yield Methodology</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              We focus on a single metric: <strong>Compute Yield</strong>—the productivity gain per unit of automation investment. This aligns our incentives with yours: we succeed when your team gets more done with less friction, faster decision-making, and fewer manual interventions.
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">1. Baseline Measurement</h3>
                <p className="text-slate-600">Understand current state: process times, error rates, bottlenecks. Quantify the starting point.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">2. AI Capability Audit</h3>
                <p className="text-slate-600">Identify where AI and intelligent automation unlock the most value. Focus on highest-ROI opportunities.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">3. Targeted Implementation</h3>
                <p className="text-slate-600">Deploy focused improvements that compound productivity gains. Build capability, not dependencies.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">4. Continuous Optimization</h3>
                <p className="text-slate-600">Monitor yield, iterate, and refine based on real usage patterns and emerging opportunities.</p>
              </div>
            </div>

            <p className="text-slate-600 italic">
              The result: measurable productivity improvements, reduced operational costs, and teams empowered to leverage technology effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Traditional ERP Consulting Fails</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>✗ Focused on implementation, not outcomes</li>
                <li>✗ Treats complexity as a feature, not a problem</li>
                <li>✗ Leaves you dependent on ongoing vendor support</li>
                <li>✗ Ignores emerging AI capabilities</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">How We're Different</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li>✓ Optimize for productivity, not budget spend</li>
                <li>✓ Simplify systems, not add more layers</li>
                <li>✓ Build your internal capability to operate independently</li>
                <li>✓ Integrate AI strategically, not as an afterthought</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to measure and maximize your Compute Yield?</h2>
            <Link href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Let's Talk
            </Link>
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
