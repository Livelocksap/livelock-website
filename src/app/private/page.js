'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Private() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  // Check if already authenticated on mount
  useEffect(() => {
    const stored = sessionStorage.getItem('livelock_auth')
    if (stored === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    // Hash the password (simple approach - in production use proper hashing)
    // RODE2025 hashed
    const correctPassword = 'RODE2025'
    
    if (password === correctPassword) {
      sessionStorage.setItem('livelock_auth', 'true')
      setIsAuthenticated(true)
      setPassword('')
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('livelock_auth')
    setIsAuthenticated(false)
    setPassword('')
    setError('')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8">
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Private Area</h1>
            <p className="text-lg text-slate-600 mb-12">
              Fundacja Rodzinna Sabate (FR Sabate) - Restricted Access
            </p>

            <div className="bg-white border border-slate-200 rounded-xl p-10 max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                    Enter Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-600 hover:text-slate-900"
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                  {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Access
                </button>
              </form>
            </div>

            <div className="mt-8">
              <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
                ← Back to home
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

  // Authenticated view
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-5xl font-bold text-slate-900 mb-2">Fundacja Rodzinna Sabate</h1>
              <p className="text-lg text-slate-600">FR Sabate - Private Area</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-slate-300 text-slate-900 rounded-lg font-medium hover:bg-slate-400 transition"
            >
              Logout
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Financial Statements */}
            <a
              href="https://docs.google.com/spreadsheets/d/1UK1SZ3rGz1K1Aj5zgZQXn3pD_c2fPYMgXPbUWjNTz6E/edit?gid=1235892358#gid=1235892358"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Financial Statements</h2>
                  <p className="text-slate-600 text-sm mt-1">Google Sheets</p>
                </div>
                <span className="text-2xl">📊</span>
              </div>
              <p className="text-slate-600 mb-4">
                Access financial records, budget data, and account statements for FR Sabate.
              </p>
              <p className="text-blue-600 font-medium">Open in Google Sheets →</p>
            </a>

            {/* Add more resources here */}
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Documents</h2>
                  <p className="text-slate-600 text-sm mt-1">Coming soon</p>
                </div>
                <span className="text-2xl">📁</span>
              </div>
              <p className="text-slate-600 mb-4">
                Additional resources and documents will be added here.
              </p>
              <p className="text-slate-400 font-medium">Additional links pending</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">About Fundacja Rodzinna Sabate</h2>
            <p className="text-slate-600 leading-relaxed">
              This private area contains restricted information about FR Sabate. Access is limited to authorized individuals. 
              All information contained here is confidential and proprietary.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to home
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
