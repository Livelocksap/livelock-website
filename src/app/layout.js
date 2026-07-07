import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Livelock - SAP Analytics and ERP Optimization',
  description: 'SAP Analytics, AI integration, and ERP optimization consulting by Alberto Sabate',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Header */}
        <nav className="fixed top-0 w-full bg-white border-b border-slate-200 backdrop-blur-sm bg-opacity-95 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-900">Livelock</Link>
            <div className="flex gap-8 items-center">
              <Link href="/services" className="text-sm text-slate-600 hover:text-slate-900 transition">Services</Link>
              <Link href="/methodology" className="text-sm text-slate-600 hover:text-slate-900 transition">Methodology</Link>
              <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 transition">About</Link>
              <Link href="/cv" className="text-sm text-slate-600 hover:text-slate-900 transition">CV</Link>
              <Link href="/contact" className="text-sm text-slate-600 hover:text-slate-900 transition">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Add padding to account for fixed nav */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}
