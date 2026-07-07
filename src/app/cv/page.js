'use client'

import Link from 'next/link'

export default function CV() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-4 text-center">Resume / CV</h1>
          <p className="text-lg text-slate-600 text-center mb-12">
            25+ years of international SAP, analytics, and enterprise consulting experience
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Alberto Sabate CV</h2>
              <a 
                href="/CV_Alberto_Sabate_2026.pdf" 
                download 
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                ↓ Download PDF
              </a>
            </div>

            <div className="mb-8 text-sm text-slate-600">
              <p>Current position: Freelance SAP & ERP Consultant (Livelock Sp. z o.o.)</p>
              <p>Location: Poland (Poznań region)</p>
            </div>

            {/* PDF Viewer */}
            <div className="border border-slate-300 rounded-lg overflow-hidden bg-slate-100 h-96 md:h-screen flex items-center justify-center">
              <iframe
                src="/CV_Alberto_Sabate_2026.pdf"
                className="w-full h-full"
                title="Alberto Sabate CV"
              />
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <p className="text-slate-600 mb-4">
                For a high-quality PDF or updated version, please download or request via email.
              </p>
              <a 
                href="mailto:alberto.sabate@livelock.pl"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Send me a message
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-3xl font-bold text-blue-600 mb-2">25+</p>
              <p className="text-slate-600 font-medium">Years Experience</p>
              <p className="text-sm text-slate-500 mt-2">Enterprise SAP, analytics, and ERP</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-3xl font-bold text-teal-600 mb-2">50+</p>
              <p className="text-slate-600 font-medium">Clients Served</p>
              <p className="text-sm text-slate-500 mt-2">Across multiple industries worldwide</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-3xl font-bold text-purple-600 mb-2">6</p>
              <p className="text-slate-600 font-medium">Languages</p>
              <p className="text-sm text-slate-500 mt-2">English, Spanish, French, Polish, Catalan, Portuguese</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-6">
              Interested in working together? Let's discuss your specific challenges and how I can help.
            </p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Get in Touch
            </Link>
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
