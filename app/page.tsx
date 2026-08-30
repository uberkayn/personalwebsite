import { ArrowUpRight, Code2, Mail } from 'lucide-react';

const projects = [
  { number: '01', title: 'Selected work', description: 'A home for the projects, experiments, and ideas I care about.' },
  { number: '02', title: 'Notes', description: 'Occasional writing about technology, craft, and things I learn.' },
  { number: '03', title: 'Now', description: 'A small window into what I am exploring and making today.' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 sm:px-10">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">KAYN<span className="text-coral">.</span></a>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a className="transition-colors hover:text-foreground" href="#work">Work</a>
          <a className="transition-colors hover:text-foreground" href="#about">About</a>
          <a className="rounded-full border border-border bg-white px-4 py-2 text-foreground transition hover:border-foreground" href="https://github.com/uberkayn" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>

      <section id="top" className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28">
        <div className="orb" aria-hidden="true" />
        <p className="mb-7 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Personal space on the internet</p>
        <h1 className="max-w-4xl text-6xl font-medium leading-[0.96] tracking-[-0.055em] sm:text-8xl lg:text-[7.8rem]">
          Hi, I’m Kayn.<br />I make <span className="italic text-coral">things</span> for the web.
        </h1>
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">This is where I collect my work, share what I’m learning, and build in public.</p>
          <a className="group inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 text-sm font-medium" href="#work">
            Explore my work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      <section id="work" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div><p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">The index</p><h2 className="text-4xl font-medium tracking-tight sm:text-5xl">A few places to start.</h2></div>
            <span className="hidden font-mono text-xs text-muted-foreground sm:block">2026 — ONWARD</span>
          </div>
          <div className="grid border-t border-border md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className="group border-b border-border py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <div className="mb-14 flex items-center justify-between font-mono text-xs text-muted-foreground"><span>{project.number}</span><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
                <h3 className="mb-3 text-2xl font-medium tracking-tight">{project.title}</h3>
                <p className="max-w-xs leading-relaxed text-muted-foreground">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 sm:py-28 md:grid-cols-[1fr_1.4fr]">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">About this place</p>
        <div>
          <p className="text-3xl font-medium leading-snug tracking-tight sm:text-4xl">A quiet corner for unfinished thoughts, finished projects, and everything between.</p>
          <div className="mt-10 flex gap-4">
            <a aria-label="GitHub" className="social-link" href="https://github.com/uberkayn" target="_blank" rel="noreferrer"><Code2 className="h-5 w-5" /></a>
            <a aria-label="Email" className="social-link" href="mailto:hello@example.com"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-border px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© 2026 Kayn</p><p>Designed with curiosity. Built with care.</p>
      </footer>
    </main>
  );
}
