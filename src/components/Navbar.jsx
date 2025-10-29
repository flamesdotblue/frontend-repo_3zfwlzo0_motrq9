import { User, LogOut, LogIn, Brain } from "lucide-react";

export default function Navbar({ isAuthed, onLogout }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 text-white">
          <Brain className="h-6 w-6 text-cyan-400" />
          <span className="font-semibold tracking-tight">NeuroFuture</span>
        </a>
        <nav className="flex items-center gap-3">
          {!isAuthed ? (
            <a
              href="#login"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-medium text-black hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              <LogIn className="h-4 w-4" />
              Sign in
            </a>
          ) : (
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Account</span>
              <LogOut className="ml-1 h-4 w-4" />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
