import { Brain, Rocket, ShieldCheck, Clock } from "lucide-react";

function InsightCard({ icon: Icon, title, points, accent = "from-cyan-500/20" }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
      <div className="mb-3 flex items-center gap-2">
        <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr ${accent}`}>
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <ul className="space-y-2 text-sm text-white/80">
        {points.map((p, i) => (
          <li key={i} className="leading-relaxed">{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default function KnowledgeSections() {
  return (
    <section id="learn" className="bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Why the future feels closer</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Multiple curves are accelerating at once — when they compound, step-changes happen
              faster than our intuitions expect.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Clock className="h-4 w-4 text-cyan-300" />
            Compression of timelines
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <InsightCard
            icon={Brain}
            title="AI today: capability overhang"
            accent="from-violet-500/20"
            points={[
              "Frontier models pass bar, medical, and coding benchmarks at expert levels.",
              "Multimodal systems perceive text, images, audio, and video with growing fluency.",
              "Tool-use and agents turn models from chatbots into problem solvers.",
            ]}
          />
          <InsightCard
            icon={Rocket}
            title="AGI horizon: scaling + structure"
            accent="from-cyan-500/20"
            points={[
              "Compute scales via GPUs, TPUs, custom silicon, and orchestration of many models.",
              "Architectures add memory, planning, and autonomy — scaffolding generality.",
              "Data engines generate synthetic high-quality training material on demand.",
            ]}
          />
          <InsightCard
            icon={ShieldCheck}
            title="ASI implications: alignment first"
            accent="from-rose-500/20"
            points={[
              "Safety-by-design: verifiable objectives, oversight, and containment layers.",
              "Global coordination on evaluations, red-teaming, and deployment norms.",
              "Benefits amplified — disease, energy, education — if we get governance right.",
            ]}
          />
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm text-white/80">
            The distance between AI, AGI, and ASI isn't just about raw IQ — it's about the speed at which
            systems can learn, coordinate, and act. With feedback loops tightening, each capability unlock
            accelerates the next.
          </p>
        </div>
      </div>
    </section>
  );
}
