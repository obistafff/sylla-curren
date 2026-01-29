import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="font-semibold text-lg text-[var(--cyan)]"
        >
          Sylla Curren
        </NavLink>

        <nav className="flex gap-6 text-sm">
          <NavLink
            to="/"
            className="text-slate-300 hover:text-white transition"
          >
            Accueil
          </NavLink>
          <NavLink
            to="/competences"
            className="text-slate-300 hover:text-white transition"
          >
            Compétences
          </NavLink>
          <NavLink
            to="/projets"
            className="text-slate-300 hover:text-white transition"
          >
            Projets
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
