import { NavLink } from "react-router-dom";

const base =
  "px-3 py-2 rounded-lg text-sm transition border border-transparent";
const active = "bg-panel border-white/10 text-white";
const idle = "text-white/70 hover:text-white hover:border-white/10";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* LOGO / IDENTITÉ */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-panel border border-white/10 grid place-items-center">
            <span className="text-cyan font-semibold">SC</span>
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Sylla Curren</div>
            <div className="text-xs text-white/60">
              Développeur Web & Mobile
            </div>
          </div>
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${base} ${isActive ? active : idle}`
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/projets"
            className={({ isActive }) =>
              `${base} ${isActive ? active : idle}`
            }
          >
            Projets
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
