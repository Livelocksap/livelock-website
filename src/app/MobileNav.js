'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-slate-100 transition"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-slate-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              href="/services"
              className="text-sm text-slate-600 hover:text-slate-900 transition py-2"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/methodology"
              className="text-sm text-slate-600 hover:text-slate-900 transition py-2"
              onClick={closeMenu}
            >
              Methodology
            </Link>
            <Link
              href="/about"
              className="text-sm text-slate-600 hover:text-slate-900 transition py-2"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/cv"
              className="text-sm text-slate-600 hover:text-slate-900 transition py-2"
              onClick={closeMenu}
            >
              CV
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-600 hover:text-slate-900 transition py-2"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
