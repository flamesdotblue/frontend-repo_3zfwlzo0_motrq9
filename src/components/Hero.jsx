import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-200/90">
          Futuristic • Neuroscience • AI
        </span>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white drop-shadow sm:text-5xl">
          AI, AGI, and ASI are closer than we think
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Explore how rapid advances in compute, data, and algorithms are compressing the
          timeline from narrow AI to general and beyond. Log in to unlock the full insights.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a
            href="#login"
            className="rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-300/50 transition hover:bg-cyan-400"
          >
            Access Insights
          </a>
          <a
            href="#learn"
            className="rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
