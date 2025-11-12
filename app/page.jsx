export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center">
      <h1 className="text-5xl font-serif text-gold mb-4">Avrae Society</h1>
      <p className="text-lg text-gray-300 mb-8">Private Access. Infinite Power.</p>
      <a
        href="/apply"
        className="border border-gold px-6 py-3 rounded-full hover:bg-gold hover:text-black transition"
      >
        Apply Now
      </a>
    </main>
  );
}
