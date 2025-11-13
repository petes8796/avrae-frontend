'use client'
import { useState } from 'react'

export default function ApplyPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    occupation: '',
    country: '',
    networth: '',
    reason: '',
    socials: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await fetch("https://api.avrae-society.com/applications/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // ✅ fixed: send the actual form
      })

      if (!response.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-black text-cream flex items-center justify-center text-center p-6 fade-in">
        <div className="max-w-md">
          <h1 className="text-4xl font-serif mb-3 text-gold">Application Received</h1>
          <p className="text-gray-400">Our team will review your submission shortly.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-cream flex items-center justify-center p-6 fade-in">
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-5 bg-[#0f0f0f] p-8 rounded-2xl border border-[#2a2a2a] shadow-xl">
        <h1 className="text-4xl font-serif mb-6 text-center text-gold tracking-wide">Apply to Join</h1>

        {['name', 'email', 'occupation', 'country', 'networth', 'reason', 'socials'].map((key) => (
          <div key={key}>
            <label className="block mb-2 capitalize text-sm tracking-wide">{key}</label>
            {key === 'reason' || key === 'socials' ? (
              <textarea
                required
                name={key}
                value={form[key]}
                onChange={handleChange}
                className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:border-gold focus:outline-none transition"
              />
            ) : (
              <input
                required
                name={key}
                value={form[key]}
                onChange={handleChange}
                className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:border-gold focus:outline-none transition"
              />
            )}
          </div>
        ))}

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          disabled={loading}
          className="w-full py-3 border border-gold text-gold hover:bg-gold hover:text-black rounded-md transition-all"
        >
          {loading ? 'Submitting…' : 'Submit Application'}
        </button>
      </form>
    </main>
  )
}
