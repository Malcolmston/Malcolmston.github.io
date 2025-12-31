'use client';

import { useRef } from "react";
import Head from "@/app/components/head";
import About from "@/app/about";
import Projects from "@/app/projects";
import Skills from "@/app/skills";
import Card from "@/app/components/card";
import Size from "@/app/components/size";
import Shape from "@/app/components/shape";
import Position from "@/app/components/possition";

function RadialHoverBackground({children}: {children: React.ReactNode}) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.PointerEvent) => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    return (
        <div
            ref={ref}
            onPointerMove={handleMove}
            className="group relative min-h-screen overflow-hidden bg-neutral-950 text-white"
        >
            {/* radial bloom */}
            <div
                className="
          pointer-events-none absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          [background:radial-gradient(900px_circle_at_var(--x)_var(--y),rgba(99,102,241,0.20),rgba(168,85,247,0.12),transparent_60%)]
        "
            />

            {/* vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.9)_100%)]" />

            {/* content - moved outside the radial bloom div */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

export default function Home () {
    return <>
        <RadialHoverBackground>
            {/* Liquid Glass Header */}
            <Head person="Malcolm Stone" tabs={[
                {name: "About",
                    scrollTo: "about"
                },
                {name: "Projects",
                    scrollTo: "projects",
                    submenu: [
                        {name: "Github", scrollTo: "github"},
                        {name: "Gitlab", scrollTo: "gitlab"},
                        {name: "CodePen", scrollTo: "codepen"},
                        {name: "Local Machine", scrollTo: "local-machine"}
                    ]},
                {name: "Skills", scrollTo: "skills"},
                {name: "Contact", scrollTo: "contact"},
                {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/in/malcolm-stone-b22356334/"
                },
                {
                    name: "Git",
                    submenu: [
                        {name: "GitHub", href: "https://github.com/malcolmstone"},
                        {name: "GitLab", href: "https://gitlab.com/malcolmstone"},
                    ]
                }
            ]}/>

            {/* Main Content */}
            <div className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-6">
                <div className="max-w-6xl w-full">
                    <Card
                        size={Size.Large}
                        shape={Shape.Long}
                        headerPosition={Position.Top}
                        title="Full‑Stack Developer building accessible, reliable software"
                        description="I’m Malcolm Stone — a Computer Science student who ships end‑to‑end web apps, automation, and tooling. Explore my projects, the technologies I work with, and how to reach me."
                    >
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                            >
                                View Projects
                            </a>
                            <a
                                href="/resume.pdf"
                                download="Malcolm_Stone_Resume.pdf"
                                className="inline-flex items-center justify-center rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white/90 hover:bg-neutral-700 transition-colors border border-white/10"
                            >
                                Download Resume
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15 transition-colors border border-white/10"
                            >
                                Contact
                            </a>
                        </div>
                    </Card>

                    {/* Neumorphic Cards Grid */}
                    <div className="mt-6 flex flex-wrap justify-center items-start gap-6">
                        <About/>

                        <Skills/>

                        <Projects/>
                    </div>
                </div>
            </div>
        </RadialHoverBackground>
    </>
}
