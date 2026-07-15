import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center">

        {/* Left Side */}
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Build Your Resume <br />
            <span className="text-yellow-300">with AI</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Create professional, ATS-friendly resumes in minutes.
            Get AI-powered suggestions for skills, projects, and career objectives.
          </p>

          <div className="mt-8 flex gap-4">
          <Link
  to="/builder"
  className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
>
  Get Started
</Link>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
         <div className="w-80 h-80 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 flex items-center justify-center">
  <span className="text-8xl">📄</span>
</div>
        </div>

      </div>
    </section>
  );
}

export default Hero;