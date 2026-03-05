import Link from "next/link";
import { EncryptedTextDemoSecond } from "@/components/encrypted-text-demo-second";
import { EncryptedText } from "@/components/ui/encrypted-text";

const projects = [
  {
    name: "Project One",
    description: "Short summary of what this project does and why it is useful.",
    status: "Live",
    href: "#",
  },
  {
    name: "Project Two",
    description: "Add your second project here with one clear sentence.",
    status: "In Progress",
    href: "#",
  },
  {
    name: "Project Three",
    description: "Use this card for the next launch, tool, or experiment.",
    status: "Planned",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="site-bg min-h-screen text-white">
      <div className="mx-auto flex max-w-6xl flex-col px-6 pb-24 pt-8 sm:px-10">
        <header className="animate-rise">
          <nav className="flex items-center justify-between rounded-full border border-gold bg-ink/90 px-6 py-4 shadow-soft backdrop-blur">
            <p className="font-display text-lg font-semibold text-gold">
              tomstuffs.com
            </p>
            <div className="flex items-center gap-4 text-sm font-semibold text-white">
              <Link href="#projects" className="hover:text-gold">
                Projects
              </Link>
              <Link href="#about" className="hover:text-gold">
                About
              </Link>
              <Link
                href="mailto:hello@tomstuffs.com"
                className="rounded-full border border-gold bg-[#d4af37] px-4 py-2 text-ink transition hover:translate-y-[-1px] hover:bg-[#e6c95c]"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <section className="grid items-center gap-12 py-16 md:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-gold bg-gold/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Home of Tom's internet stuff
            </p>
            <h1 className="font-display text-5xl leading-[0.98] sm:text-6xl md:text-7xl">
              Useful things.
              <br />
              Weird things.
              <br />
              Built fast.
            </h1>
            <p className="max-w-xl text-lg text-white/80">
              A playful corner of the web for shipping experiments, tools, and
              tiny projects that feel handcrafted.
            </p>
            <p className="text-lg">
              <EncryptedText
                text="Access granted: tomstuffs.com"
                encryptedClassName="text-blue/70"
                revealedClassName="text-gold"
                revealDelayMs={45}
              />
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="rounded-full border border-gold bg-[#d4af37] px-6 py-3 font-semibold text-ink shadow-soft transition hover:translate-y-[-2px] hover:bg-[#e6c95c]"
              >
                Explore Projects
              </Link>
              <Link
                href="#about"
                className="rounded-full border border-gold bg-blue/30 px-6 py-3 font-semibold text-gold transition hover:bg-blue/45"
              >
                Why This Exists
              </Link>
            </div>
          </div>

          <div className="relative h-full min-h-64 rounded-3xl border border-gold/70 bg-ink/90 p-6 shadow-soft backdrop-blur md:min-h-[420px]">
            <div className="absolute right-6 top-6 rounded-full border border-gold/70 bg-ink px-3 py-1 text-xs font-semibold text-gold">
              live terminal
            </div>
            <div className="mt-12 space-y-3 font-mono text-sm">
              <p className="text-blue/90">$ whoami</p>
              <p className="text-gold">Tom - builder of random web things</p>
              <p className="text-blue/90">$ status</p>
              <p className="text-gold/90">Shipping ideas into reality...</p>
              <p className="text-blue/90">$ next_mission</p>
              <EncryptedTextDemoSecond />
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-6 py-8">
          <h2 className="font-display text-3xl text-gold sm:text-4xl">
            Projects
          </h2>
          <p className="max-w-2xl text-white/75">
            Replace these placeholders with your real builds as you ship them.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-gold/70 bg-ink/90 p-6 shadow-soft"
              >
                <p className="inline-flex rounded-full border border-gold bg-blue/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {project.status}
                </p>
                <h3 className="mt-2 font-display text-2xl text-gold">
                  {project.name}
                </h3>
                <p className="mt-3 text-white/80">{project.description}</p>
                <Link
                  href={project.href}
                  className="mt-5 inline-flex rounded-full border border-gold bg-[#d4af37] px-4 py-2 text-sm font-semibold text-ink transition hover:bg-[#e6c95c]"
                >
                  View Project
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mt-8 rounded-3xl border border-gold/70 bg-ink px-8 py-12 text-white"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue/90">
            About Tomstuffs
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-gold sm:text-5xl">
            The goal is simple: make internet things that are fun to use and
            impossible to ignore.
          </h2>
          <p className="mt-5 max-w-2xl text-white/75">
            This homepage is a launchpad. New projects, updates, and weird ideas
            rotate in here as they ship.
          </p>
        </section>
      </div>
    </main>
  );
}
