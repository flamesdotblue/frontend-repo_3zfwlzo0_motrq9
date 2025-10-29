import { useState } from "react";
import { Mail, Lock, Sparkles } from "lucide-react";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Simple demo validation (no backend)
    if (!email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    // Simulate request latency
    await new Promise((r) => setTimeout(r, 650));
    setLoading(false);
    onLogin?.({ email });
  };

  return (
    <section id="login" className="relative -mt-16 bg-black pb-16 pt-6 sm:pt-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 shadow-2xl shadow-black/50 backdrop-blur">
          <div className="mb-4 flex items-center gap-2 text-white">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <h2 className="text-lg font-semibold">Sign in to unlock the insights</h2>
          </div>
          <p className="mb-6 text-sm text-white/70">
            Use any email and a 6+ character password to continue. This is a demo experience.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-white/70">
                Email
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-white/10 bg-black/40 px-10 py-2.5 text-sm text-white placeholder-white/40 outline-none ring-0 transition focus:border-cyan-400/60 focus:bg-black/60"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-white/70">
                Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-md border border-white/10 bg-black/40 px-10 py-2.5 text-sm text-white placeholder-white/40 outline-none ring-0 transition focus:border-cyan-400/60 focus:bg-black/60"
                />
              </div>
            </div>
            {error && (
              <p className="text-sm text-red-400" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-md bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-300/50 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>
        <div className="text-white/80">
          <h3 className="mb-3 text-xl font-semibold text-white">What you'll access</h3>
          <ul className="space-y-3 text-sm">
            <li className="leading-relaxed">
              A crisp breakdown of AI vs AGI vs ASI with real-world milestones.
            </li>
            <li className="leading-relaxed">Signals that the timeline is compressing across compute, data, and models.</li>
            <li className="leading-relaxed">A pragmatic view on risks, safety, and what to watch next.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
