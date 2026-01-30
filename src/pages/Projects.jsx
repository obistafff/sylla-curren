export default function Projects() {
  return (
    <section className="grid gap-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold">Projets</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          Une sélection de projets personnels full-stack. Certains sont en ligne,
          d’autres en cours de refonte.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="grid gap-4">
        {/* NOVAKA */}
        <article className="rounded-3xl border border-white/10 bg-panel p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">
                NovaKa <span className="text-cyan">/ Nokava</span>
              </h2>

              <p className="mt-2 max-w-xl text-sm text-white/70">
                Boutique démo full-stack : catalogue produits, commandes,
                espace admin, authentification et gestion des données.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
                {[
                  "React",
                  "Vite",
                  "Tailwind",
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                  "Prisma",
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

              <p className="mt-4 text-xs text-white/50">
                Statut : projet actif / en amélioration continue
              </p>
            </div>

            <div className="flex shrink-0 gap-3">
              <a
                className="rounded-xl bg-cyan px-4 py-2 text-bg text-sm font-semibold hover:opacity-90"
                href="https://novaka.allyswebdesign.fr"
                target="_blank"
                rel="noreferrer"
              >
                Voir le site
              </a>

              <a
                className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:border-white/20"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>

          {/* VISUEL PLACEHOLDER */}
          <div className="mt-6 h-40 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/10 to-transparent" />
        </article>

        {/* LUMORIA */}
        <article className="rounded-3xl border border-white/10 bg-panel p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Studio Lumoria</h2>

              <p className="mt-2 max-w-xl text-sm text-white/70">
                Site vitrine pour un studio photo. Travail orienté design,
                identité visuelle et expérience utilisateur.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
                {["React", "Vite", "Tailwind", "Design UI"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-xs text-white/50">
                Statut : refonte prévue / mise en ligne ultérieure
              </p>
            </div>

            <div className="flex shrink-0 gap-3">
              <span className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/50">
                Bientôt en ligne
              </span>

              <a
                className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:border-white/20"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Code
              </a>
            </div>
          </div>

          {/* VISUEL PLACEHOLDER */}
          <div className="mt-6 h-40 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/5 to-transparent" />
        </article>
      </div>
    </section>
  );
}
