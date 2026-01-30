import heroImg from "../assets/sylla-curren-developpeur-fullstack.jpg";
import aboutImg from "../assets/sylla-curren-web-developpeur.png";

export default function Home() {
  return (
    <section className="grid gap-10">
      {/* HERO */}
      <div className="rounded-3xl border border-white/10 bg-panel p-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* TEXTE */}
          <div>
            <p className="text-white/60 text-sm">Portfolio</p>

            <h1 className="mt-3 text-4xl font-semibold leading-tight">
              Sylla <span className="text-cyan">Curren</span>
            </h1>

            <p className="mt-3 max-w-xl text-white/70">
              Développeur Web & Mobile (Full-Stack). Je construis des interfaces
              modernes en React et des APIs robustes en Node/Express, avec une
              approche Kaizen et un workflow Git propre.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-cyan px-5 py-2.5 text-bg font-semibold hover:opacity-90"
                href="/cv-sylla-curren.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Télécharger mon CV
              </a>

              <a
                className="rounded-xl border border-white/10 px-5 py-2.5 text-white/90 hover:border-white/20"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
              {[
                "React",
                "Vite",
                "Tailwind",
                "Node.js",
                "Express",
                "PostgreSQL",
                "MongoDB",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* VISUEL HERO */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Sylla Curren, développeur web full-stack"
              className="aspect-square w-full rounded-2xl border border-white/10 object-cover transition-all duration-300 hover:ring-1 hover:ring-cyan/30 hover:shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* 3 BLOCS VALEUR */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-panel p-5 transition-transform duration-200 hover:-translate-y-0.5">
          <div className="text-cyan font-semibold">Front moderne</div>
          <p className="mt-2 text-sm text-white/70">
            Interfaces propres, responsives, composants réutilisables et
            attention aux détails UI/UX.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-panel p-5 transition-transform duration-200 hover:-translate-y-0.5">
          <div className="text-cyan font-semibold">Back solide</div>
          <p className="mt-2 text-sm text-white/70">
            APIs REST, authentification, logique métier claire et bases de
            données bien modélisées.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-panel p-5 transition-transform duration-200 hover:-translate-y-0.5">
          <div className="text-cyan font-semibold">Méthodologie</div>
          <p className="mt-2 text-sm text-white/70">
            Kaizen, Git/GitHub structuré, itérations courtes et code maintenable.
          </p>
        </div>
      </div>

      {/* ABOUT + VISUEL + CONTACT */}
      <div className="grid gap-4 md:grid-cols-6">
        {/* ABOUT */}
        <div className="md:col-span-4 rounded-2xl border border-white/10 bg-panel p-6 transition-transform duration-200 hover:-translate-y-0.5">
          <h2 className="text-lg font-semibold">À propos</h2>
          <p className="mt-2 text-sm text-white/70">
            Issu d’un parcours orienté création, je mets aujourd’hui cette
            sensibilité au service du développement web. Mon objectif : construire
            des produits clairs, efficaces et maintenables, autant côté interface
            que côté backend.
          </p>

          <p className="mt-3 text-sm text-white/70">
            Actuellement, je développe des projets full-stack pour consolider mon
            portfolio et préparer mon entrée dans le monde professionnel.
          </p>

          <div className="mt-4 text-sm text-white/60">
            <span className="text-white/50">Focus actuel :</span>{" "}
            React · Node/Express · PostgreSQL/Prisma · Docker
          </div>
        </div>

        {/* VISUEL SECONDAIRE */}
        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-panel p-6 transition-transform duration-200 hover:-translate-y-0.5">
          <img
            src={aboutImg}
            alt="Sylla Curren, développeur web"
            className="h-full min-h-[220px] w-full rounded-xl border border-white/10 object-cover transition-all duration-300 hover:ring-1 hover:ring-cyan/30 hover:shadow-lg"
          />
        </div>

        {/* CONTACT */}
        <div className="md:col-span-6 rounded-2xl border border-white/10 bg-panel p-6 transition-transform duration-200 hover:-translate-y-0.5">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-white/70">
            Ouvert aux opportunités junior ou missions. Le plus simple pour me joindre :
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:border-white/20"
              href="mailto:currensylla@gmail.com"
            >
              ✉️ currensylla@gmail.com
            </a>

            <a
              className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:border-white/20"
              href="https://github.com/obistafff"
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub
            </a>
          </div>

          <p className="mt-3 text-xs text-white/50">
            LinkedIn sera ajouté plus tard.
          </p>
        </div>
      </div>
    </section>
  );
}
