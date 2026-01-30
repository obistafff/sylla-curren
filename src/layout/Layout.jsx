import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-panel border border-white/10 grid place-items-center">
              <span className="text-cyan font-semibold">SC</span>
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Sylla Curren</div>
              <div className="text-xs text-white/60">Développeur Web & Mobile</div>
            </div>
          </div>

          {/* liens HTML simples (pas NavLink) -> élimine une cause */}
          <nav className="flex items-center gap-2 text-sm">
            <a className="px-3 py-2 rounded-lg border border-white/10 hover:border-white/20" href="/">Accueil</a>
            <a className="px-3 py-2 rounded-lg border border-white/10 hover:border-white/20" href="/projets">Projets</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}
