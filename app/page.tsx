import Image from "next/image";
import About from "@/app/about";
import Projects from "@/app/projects";
import Skills from "@/app/skills";
import projectsData from "@/app/projects.json";
import skillsData from "@/app/skills.json";

const navItems = [
  { name: "Profile", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const projectCount = projectsData.length;
const skillCount = skillsData.length;
const platformCount = new Set(projectsData.map((project) => project.site)).size;

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-950/10 bg-stone-50/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/malcolm.png"
              alt="Malcolm Stone"
              width={40}
              height={40}
              priority
              className="h-10 w-10 rounded-lg border border-neutral-950/10 object-cover"
            />
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-900">
              Malcolm Stone
            </span>
          </a>
          <nav className="hidden items-center gap-1 rounded-lg border border-neutral-950/10 bg-white p-1 shadow-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-950 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <a
            href="/resume.pdf"
            className="rounded-md border border-neutral-950 bg-neutral-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Resume
          </a>
        </div>
      </header>

      <section id="top" className="border-b border-neutral-950/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="flex min-h-[520px] flex-col justify-between gap-10">
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex rounded-md bg-amber-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-neutral-950">
                Full-stack engineering portfolio
              </p>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-normal text-neutral-950 sm:text-6xl lg:text-7xl">
                Building useful software across products, platforms, and deployment systems.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
                Computer Science student at Rollins College and MBA candidate building web apps, developer tools, DevOps automation, and accessibility-focused software.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href="#projects"
                className="rounded-lg bg-neutral-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-neutral-800"
              >
                View Projects
              </a>
              <a
                href="#skills"
                className="rounded-lg border border-neutral-950/15 bg-white px-5 py-4 text-sm font-bold text-neutral-950 transition hover:border-neutral-950"
              >
                Technical Skills
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-neutral-950/15 bg-emerald-100 px-5 py-4 text-sm font-bold text-emerald-950 transition hover:border-emerald-900/40"
              >
                Contact
              </a>
            </div>
          </div>

          <aside className="grid content-between gap-4">
            <div className="overflow-hidden rounded-lg border border-neutral-950/10 bg-white shadow-sm">
              <Image
                src="/malcolm.png"
                alt="Malcolm Stone"
                width={720}
                height={720}
                priority
                className="aspect-[4/3] w-full object-cover object-center"
              />
              <div className="grid grid-cols-3 border-t border-neutral-950/10">
                {[
                  ["Projects", `${projectCount}`],
                  ["Skill Areas", `${skillCount}`],
                  ["Platforms", `${platformCount}`],
                ].map(([label, value]) => (
                  <div key={label} className="border-r border-neutral-950/10 p-4 last:border-r-0">
                    <div className="text-3xl font-black text-neutral-950">{value}</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-neutral-950 bg-sky-100 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-950">Current focus</p>
              <p className="mt-3 text-xl font-black leading-snug text-neutral-950">
                AI platform tooling, cloud deployments, and developer workflow automation.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
    </main>
  );
}
