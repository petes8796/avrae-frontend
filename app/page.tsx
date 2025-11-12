'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [showHero, setShowHero] = useState(false)
  useEffect(()=> {
    const t = setTimeout(()=> setShowHero(true), 2200)
    return ()=> clearTimeout(t)
  }, [])

  return (
    <main className="min-h-screen bg-bg text-cream flex items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        {!showHero ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }}>
            <svg width="120" height="120" viewBox="0 0 100 100" className="mb-6">
              <circle cx="50" cy="50" r="44" stroke="#C6A664" strokeWidth="2" fill="none" opacity="0.14" />
              <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="36" fill="#C6A664" fontFamily="Cormorant Garamond, serif">A</text>
            </svg>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
            <h1 className="text-6xl font-serif mb-4">Private Access. Infinite Power.</h1>
            <p className="mb-8 text-lg">An invite-only digital sanctuary for founders, investors, and creators.</p>
            <Link href="/apply" className="inline-block border border-gold px-6 py-3 rounded-md">Apply to Join</Link>
          </motion.div>
        )}
      </div>
    </main>
  )
}
