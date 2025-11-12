'use client'
import { useState } from 'react'

export default function ApplyPage() {
  const [form, setForm] = useState({
    name: '', email: '', occupation: '', country: '', networth: '', reason: '', socials: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/applications/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch (err: any) {
      setError('Something went wrong. Please try again later.')
    } finally { setLoading(false) }
  }

  if (submitted)
    return (
      <main className="min-h-screen bg-bg flex items-center justify-center text-center p-6">
        <div>
          <h1 className="text-3xl font-serif mb-2 text-gold">Application Received</h1>
          <p>Our team will review your submission shortly.</p>
        </div>
      </main>
    )

  return (
    <main className="min-h-screen bg-bg text-cream flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-5">
        <h1 className="text-4xl font-serif mb-6 text-center text-gold">Apply to Join</h1>

        {['name','email','occupation','country','networth','reason','socials'].map(key=>(
          <div key={key}>
            <label className="block mb-2 capitalize">{key}</label>
            {key==='reason' || key==='socials'
              ? <textarea required name={key} value={(form as any)[key]} onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md" />
              : <input required name={key} value={(form as any)[key]} onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md" />}
          </div>
        ))}

        {error && <p className="text-red-500 text-sm">{error}</p>}
