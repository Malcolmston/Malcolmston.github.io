"use client";

import { useMemo, useState } from "react";
import projectsData from "./projects.json";

interface Project {
  name: string;
  description: string;
  repo: string;
  documentation?: string;
  site: string;
  languages: string[];
  security?: {
    type: string;
    description: string;
    where?: string;
  }[];
}

const projects = projectsData as Project[];
const platforms = ["All", ...Array.from(new Set(projects.map((project) => project.site)))];
const featuredNames = new Set([
  "Vercel Deployment Portfolio",
  "ts-prorm-orm",
  "Vault - Credential Management Library",
  "UML Diagram Editor with AI Integration",
  "Secure Chat Application",
  "WAAS - Static Site and Web Framework",
]);

function platformColor(site: string) {
  const colors: Record<string, string> = {
    Github: "bg-neutral-950 text-white",
    Gitlab: "bg-orange-100 text-orange-950",
    Vercel: "bg-black text-white",
    NPM: "bg-rose-100 text-rose-950",
    CodePen: "bg-sky-100 text-sky-950",
    "Local Machine": "bg-emerald-100 text-emerald-950",
  };

  return colors[site] ?? "bg-stone-100 text-neutral-900";
}

function projectMatches(project: Project, query: string, platform: string) {
  const haystack = [
    project.name,
    project.description,
    project.site,
    ...project.languages,
    ...(project.security?.map((item) => `${item.type} ${item.description} ${item.where ?? ""}`) ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return (platform === "All" || project.site === platform) && haystack.includes(query);
}

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activePlatform, setActivePlatform] = useState("All");

  const { filteredProjects, groupedProjects, featuredProjects } = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    const filtered = projects.filter((project) => projectMatches(project, query, activePlatform));
    const grouped = filtered.reduce<Record<string, Project[]>>((acc, project) => {
      acc[project.site] ??= [];
      acc[project.site].push(project);
      return acc;
    }, {});

    return {
      filteredProjects: filtered,
      groupedProjects: grouped,
      featuredProjects: filtered.filter((project) => featuredNames.has(project.name)).slice(0, 6),
    };
  }, [activePlatform, searchTerm]);

  return (
    <section id="projects" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">Portfolio</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal">Projects</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300">
              Shipped work across hosted apps, package ecosystems, class collaborations, experiments, and local product builds.
            </p>
          </div>

          <div className="w-full max-w-xl">
            <label htmlFor="project-search" className="sr-only">Search projects</label>
            <input
              id="project-search"
              type="text"
              placeholder="Search projects by name, description, language, or platform..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-lg border border-white/15 bg-white px-4 py-3 text-sm font-semibold text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-amber-300 focus:ring-4 focus:ring-amber-300/20"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {platforms.map((platform) => (
            <button
              key={platform}
              type="button"
              onClick={() => setActivePlatform(platform)}
              className={`rounded-md border px-3 py-2 text-sm font-bold transition ${
                activePlatform === platform
                  ? "border-amber-300 bg-amber-300 text-neutral-950"
                  : "border-white/15 bg-white/5 text-neutral-300 hover:border-white/40 hover:text-white"
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        <div className="mt-5 text-sm font-semibold text-neutral-400">
          {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} found
        </div>

        {featuredProjects.length > 0 && (
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.name} className="rounded-lg border border-white/15 bg-white/[0.06] p-5">
                <div className="flex items-start justify-between gap-4">
                  <span className={`rounded-md px-2 py-1 text-xs font-black ${platformColor(project.site)}`}>
                    {project.site}
                  </span>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-amber-300 hover:text-amber-200"
                  >
                    Open
                  </a>
                </div>
                <h3 className="mt-5 text-xl font-black leading-tight">{project.name}</h3>
                <p className="mt-3 line-clamp-4 text-sm leading-7 text-neutral-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.languages.slice(0, 6).map((language) => (
                    <span key={`${project.name}-${language}`} className="rounded-md bg-white/10 px-2 py-1 text-xs font-semibold text-neutral-200">
                      {language}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}

        {Object.keys(groupedProjects).length === 0 ? (
          <div className="mt-10 rounded-lg border border-white/15 bg-white/[0.06] p-10 text-center text-neutral-300">
            No projects found matching your search
          </div>
        ) : (
          <div className="mt-10 grid gap-8">
            {Object.entries(groupedProjects).map(([site, siteProjects]) => (
              <div key={site} id={site.toLowerCase().replace(" ", "-")}>
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <h3 className="text-2xl font-black">{site}</h3>
                  <span className="text-sm font-bold text-neutral-400">{siteProjects.length}</span>
                </div>

                <div className="grid gap-3">
                  {siteProjects.map((project) => (
                    <article key={`${site}-${project.name}`} className="rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/25 hover:bg-white/[0.06]">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-4xl">
                          <h4 className="text-lg font-black">{project.name}</h4>
                          <p className="mt-2 text-sm leading-7 text-neutral-300">{project.description}</p>
                        </div>
                        {site.toLowerCase().includes("local") ? (
                          <span className="w-fit rounded-md bg-emerald-100 px-3 py-2 text-sm font-bold text-emerald-950">
                            Local
                          </span>
                        ) : (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit rounded-md bg-white px-3 py-2 text-sm font-bold text-neutral-950 transition hover:bg-amber-300"
                          >
                            View Project
                          </a>
                        )}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.languages.map((language) => (
                          <span key={`${project.name}-${language}`} className="rounded-md border border-white/10 px-2 py-1 text-xs font-semibold text-neutral-300">
                            {language}
                          </span>
                        ))}
                      </div>

                      {project.documentation && (
                        <a
                          href={project.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex text-sm font-bold text-sky-300 hover:text-sky-200"
                        >
                          Documentation
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
