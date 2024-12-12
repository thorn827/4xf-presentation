export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8">
      {/* Logo/Brand section */}
      <div className="flex flex-col items-center justify-center space-y-8 mb-20">
        <div className="w-24 h-24 bg-red-600 rounded-full mb-8 transform hover:scale-105 transition-transform"></div>
        <h1 className="text-[12rem] font-black tracking-tighter hover:text-red-600 transition-colors">
          4XF
        </h1>
      </div>

      {/* Tagline */}
      <div className="text-center">
        <p className="text-5xl font-bold uppercase tracking-wide text-gray-200">
          "Strengthen your people. <br />
          <span className="text-red-600">Strengthen your business</span>"
        </p>
      </div>

      {/* Start button */}
      <div className="mt-24">
        <a 
          href="/slides/1"
          className="px-12 py-6 bg-red-600 text-white text-2xl font-bold rounded-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 uppercase tracking-wider"
        >
          Start
        </a>
      </div>
    </main>
  )
}
