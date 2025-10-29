import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginForm from "./components/LoginForm";
import KnowledgeSections from "./components/KnowledgeSections";

export default function App() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("nf_auth");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.email) {
          setIsAuthed(true);
          setUser(parsed);
        }
      } catch {}
    }
  }, []);

  const handleLogin = ({ email }) => {
    setIsAuthed(true);
    const u = { email };
    setUser(u);
    localStorage.setItem("nf_auth", JSON.stringify(u));
    // Smooth scroll to content
    const el = document.getElementById("insights");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = () => {
    setIsAuthed(false);
    setUser(null);
    localStorage.removeItem("nf_auth");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isAuthed={isAuthed} onLogout={handleLogout} />

      {!isAuthed ? (
        <>
          <Hero />
          <LoginForm onLogin={handleLogin} />
          <div className="pb-12" />
        </>
      ) : (
        <main id="insights">
          <section className="bg-gradient-to-b from-black via-black to-[#070b10] py-16">
            <div className="mx-auto max-w-7xl px-6">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Welcome{user?.email ? `, ${user.email}` : ""}
              </h1>
              <p className="mt-3 max-w-2xl text-white/80">
                You're in. Below is a curated overview of where AI is today, how AGI could emerge,
                and what ASI may mean — with a focus on why these milestones may arrive sooner
                than we collectively expect.
              </p>
            </div>
          </section>
          <KnowledgeSections />
        </main>
      )}

      <footer className="border-t border-white/10 bg-black/80 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} NeuroFuture — Exploring intelligence frontiers
      </footer>
    </div>
  );
}
