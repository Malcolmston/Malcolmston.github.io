import skillsData from "./skills.json";

interface Skill {
  name: string;
  architectures?: string[];
  frameworks?: string[];
  databases?: string[];
  tools?: string[];
}

const categories = [
  {
    name: "Programming Languages",
    accent: "bg-sky-600",
    names: ["java", "c", "c++", "c#", "python", "javascript", "typescript", "swift", "go", "r"],
  },
  {
    name: "Web Technologies",
    accent: "bg-rose-600",
    names: ["html", "css", "php"],
  },
  {
    name: "Data",
    accent: "bg-amber-500",
    names: ["sql"],
  },
  {
    name: "DevOps & Platforms",
    accent: "bg-emerald-600",
    names: ["git", "docker", "kubernetes", "metrics", "ci/cd", "cloud"],
  },
];

function skillDetails(skill: Skill) {
  return [
    ...(skill.architectures ?? []),
    ...(skill.frameworks ?? []),
    ...(skill.databases ?? []),
    ...(skill.tools ?? []),
  ];
}

function displayName(name: string) {
  const overrides: Record<string, string> = {
    html: "HTML",
    css: "CSS",
    sql: "SQL",
    php: "PHP",
    javascript: "JavaScript",
    typescript: "TypeScript",
    java: "Java",
    go: "Go",
    r: "R",
  };

  return overrides[name.toLowerCase()] ?? name;
}

export default function Skills() {
  const skills = skillsData as Skill[];

  return (
    <section id="skills" className="border-b border-neutral-950/10 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Capabilities</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-neutral-950">Technical Skills</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-neutral-600">
            Practical tools from shipped projects, public packages, cloud deployments, coursework, and applied AI platform work.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {categories.map((category) => {
            const categorySkills = skills.filter((skill) => category.names.includes(skill.name.toLowerCase()));

            return (
              <div key={category.name} className="rounded-lg border border-neutral-950/10 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-sm ${category.accent}`} />
                  <h3 className="text-lg font-black text-neutral-950">{category.name}</h3>
                </div>

                <div className="mt-5 grid gap-4">
                  {categorySkills.map((skill) => {
                    const details = skillDetails(skill);

                    return (
                      <article key={skill.name} className="border-t border-neutral-950/10 pt-4 first:border-t-0 first:pt-0">
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="text-base font-black text-neutral-950">{displayName(skill.name)}</h4>
                          <span className="text-xs font-bold text-neutral-400">{details.length}</span>
                        </div>
                        {details.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {details.slice(0, 8).map((detail) => (
                              <span
                                key={`${skill.name}-${detail}`}
                                className="rounded-md border border-neutral-950/10 bg-stone-50 px-2 py-1 text-xs font-semibold text-neutral-700"
                              >
                                {detail}
                              </span>
                            ))}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
