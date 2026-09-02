const contactLinks = [
  { label: "Personal", value: "malcolmstone11@gmail.com", href: "mailto:malcolmstone11@gmail.com" },
  { label: "School", value: "mstone@rollins.edu", href: "mailto:mstone@rollins.edu" },
  { label: "LinkedIn", value: "malcolm-stone", href: "https://www.linkedin.com/in/malcolm-stone-b22356334/" },
  { label: "GitHub", value: "Malcolmston", href: "https://github.com/Malcolmston" },
  { label: "GitLab", value: "Malcolmston", href: "https://gitlab.com/Malcolmston" },
];

const experience = [
  {
    role: "AI & Platform Development Intern",
    org: "ProFound Therapeutics",
    date: "Summer 2026",
    body: "Built computational biology and bioinformatics tools, worked on SAGE response strategies, and gathered AI platform metrics across latency, token cost, message length, and model choice.",
  },
  {
    role: "STEM Student Council",
    org: "Rollins College",
    date: "2026 - present",
    body: "Works with STEM students on accessibility, student events, marketing, and community-facing technical programs.",
  },
  {
    role: "ACM Chapter Board",
    org: "Rollins Computer Science Club",
    date: "2023 - present",
    body: "Builds club web experiences, workshops, code challenges, and member involvement programs.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-neutral-950/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-700">Profile</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-neutral-950">About Malcolm</h2>
          <p className="mt-5 text-base leading-8 text-neutral-700">
            I build software that connects product thinking with practical engineering: full-stack applications, cloud deployments, developer tools, and accessibility-focused systems for students and teams.
          </p>
          <div id="contact" className="mt-8 rounded-lg border border-neutral-950/10 bg-stone-50 p-5">
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-neutral-950">Contact</h3>
            <div className="mt-4 grid gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-md border border-neutral-950/10 bg-white px-4 py-3 text-sm transition hover:border-neutral-950/40"
                >
                  <span className="font-bold text-neutral-500">{link.label}</span>
                  <span className="text-right font-semibold text-neutral-950 group-hover:text-sky-700">{link.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {experience.map((item) => (
            <article key={`${item.role}-${item.org}`} className="rounded-lg border border-neutral-950/10 bg-stone-50 p-5">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-black text-neutral-950">{item.role}</h3>
                  <p className="mt-1 text-sm font-bold text-sky-800">{item.org}</p>
                </div>
                <p className="rounded-md bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">
                  {item.date}
                </p>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-700">{item.body}</p>
            </article>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-950/10 bg-emerald-100 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-900">Education</p>
              <h3 className="mt-3 text-2xl font-black text-neutral-950">Rollins College</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">B.S. Computer Science, expected May 2027. MBA program, expected May 2028.</p>
            </div>
            <div className="rounded-lg border border-neutral-950/10 bg-amber-100 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-900">Presentation</p>
              <h3 className="mt-3 text-2xl font-black text-neutral-950">ATTW 2026</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">Presented research on using AI to mediate student-faculty email communication.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
