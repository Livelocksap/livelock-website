'use client'

import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'SAP Optimization',
      description: 'Unlock the full potential of your SAP system. We identify bottlenecks, optimize configurations, and streamline processes to improve operational efficiency.',
      details: [
        'System performance tuning and architecture review',
        'Process optimization and automation',
        'Supply chain and financial analytics',
        'Integration with modern data platforms',
      ],
      color: 'blue'
    },
    {
      title: 'SAP Analytics Cloud (SAC) Planning',
      description: 'Build intelligent planning platforms: budgeting, forecasting, and scenario modeling.',
      details: [
        'Story design and data connectivity',
        'Advanced planning models and allocations',
        'Predictive planning and automation',
        'Plan-to-actual analysis and variance reporting',
      ],
      color: 'teal'
    },
    {
      title: 'SAP Datasphere & Data Architecture',
      description: 'Modern data fabric for unified analytics. Data modeling, integration architecture, semantic layer design, and governance.',
      details: [
        'Data modeling and dimension design',
        'Integration architecture (live and import connections)',
        'Semantic layer and business semantics',
        'Data governance and quality frameworks',
      ],
      color: 'purple'
    },
    {
      title: 'AI & Automation Integration',
      description: 'Strategic AI deployment across SAP platforms. Predictive analytics, process automation, and intelligent insights.',
      details: [
        'Natural language analytics interfaces',
        'Predictive planning and forecasting',
        'Process automation and RPA integration',
        'AI-assisted navigation and insights',
      ],
      color: 'emerald'
    }
  ]

  const colorClasses = {
    blue: 'from-blue-50 to-transparent',
    teal: 'from-teal-50 to-transparent',
    purple: 'from-purple-50 to-transparent',
    emerald: 'from-emerald-50 to-transparent',
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-4 text-center">Services</h1>
          <p className="text-lg text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Core capabilities where we drive measurable impact for enterprise organizations
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, idx) => (
              <div key={idx} className={`p-8 border border-slate-200 rounded-xl hover:border-${service.color}-300 transition bg-gradient-to-br ${colorClasses[service.color]}`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600">
                      <span className="text-slate-400 flex-shrink-0">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to optimize your SAP stack?</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how these capabilities can address your specific challenges and drive measurable productivity gains.
            </p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Start a Conversation
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
