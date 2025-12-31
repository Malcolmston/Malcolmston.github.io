'use client';

import { useRef } from "react";

function RadialHoverBackground({children}) {
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
            >
                {children}
            </div>

            {/* vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.9)_100%)]" />
        </div>
    );
}

export default function Home () {
    return <>
        <RadialHoverBackground>
            <div className="relative h-screen flex items-center justify-center">
                <h1 className="text-6xl font-bold">Hello World</h1>
            </div>
        </RadialHoverBackground>
    </>
}
