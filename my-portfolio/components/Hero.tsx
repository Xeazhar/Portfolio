export default function Hero() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-5xl font-bold tracking-tight mb-4">
        Hi, I'm <span className="text-purple-400">Jazper</span>
      </h1>
      <p className="text-lg text-gray-400 max-w-xl text-center mb-8">
        I build AI-powered web apps and love turning data into products.
      </p>
      <a href="#projects" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-medium transition-colors">
        See my work
      </a>
    </main>
  )
}