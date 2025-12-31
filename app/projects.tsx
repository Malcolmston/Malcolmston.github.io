'use client';

import React, { useState, useMemo } from 'react';
import Card from '@/app/components/card';
import Shape from '@/app/components/shape';
import Size from '@/app/components/size';
import Position from '@/app/components/possition';
import projectsData from './projects.json';

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

export default function Projects() {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter and group projects
    const { filteredProjects, projectGroups } = useMemo(() => {
        // Filter projects based on search term
        const filtered = (projectsData as Project[]).filter(project => {
            const searchLower = searchTerm.toLowerCase();
            return (
                project.name.toLowerCase().includes(searchLower) ||
                project.description.toLowerCase().includes(searchLower) ||
                project.languages.some(lang => lang.toLowerCase().includes(searchLower)) ||
                project.site.toLowerCase().includes(searchLower)
            );
        });

        // Group projects by site
        const groups = filtered.reduce((acc, project) => {
            if (!acc[project.site]) {
                acc[project.site] = [];
            }
            acc[project.site].push(project);
            return acc;
        }, {} as Record<string, Project[]>);

        return { filteredProjects: filtered, projectGroups: groups };
    }, [searchTerm]);

    return (
        <Card
            size={Size.Large}
            shape={Shape.Long}
            headerPosition={Position.Top}
            title="Projects"
            description="Explore my portfolio of software engineering projects across various domains"
            id="projects"
        >
            <div className="flex flex-col gap-6">
                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search projects by name, description, language, or platform..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-6 py-4 bg-neutral-800 border border-white/10 rounded-2xl
                                 focus:outline-none focus:border-blue-500/50 transition-colors
                                 text-white placeholder-neutral-500"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Results Count */}
                <div className="text-sm text-neutral-500">
                    {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
                </div>

                {/* Projects by Category */}
                {Object.keys(projectGroups).length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-neutral-400 text-lg">No projects found matching your search</p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {Object.entries(projectGroups).map(([site, projects]) => (
                            <div key={site} id={site.toLowerCase().replace(' ', '-')}>
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <h2 className="text-2xl font-bold">{site}</h2>
                                    <span className="text-neutral-500">({projects.length})</span>
                                </div>

                                {/* Project Cards */}
                                <div className="space-y-4">
                                    {projects.map((project, index) => (
                                        <Card
                                            key={`${site}-${index}`}
                                            shape={Shape.Long}
                                            size={Size.Medium}
                                        >
                                            <div className="space-y-3">
                                                {/* Project Header */}
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                                                        <p className="text-neutral-400 text-sm leading-relaxed">
                                                            {project.description}
                                                        </p>
                                                    </div>

                                                    { !site.toLowerCase().includes("local") ? (
                                                        <a
                                                            href={project.repo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-700
                                                                 rounded-lg transition-colors text-sm font-medium"
                                                        >
                                                            View Project →
                                                        </a>
                                                    ) : (<span className="shrink-0 px-4 py-2 bg-green-600 hover:bg-green-700
                                                                 rounded-lg transition-colors text-sm font-medium">Currently Local →</span>)}

                                                </div>

                                                {/* Documentation Link */}
                                                {project.documentation && (
                                                    <a
                                                        href={project.documentation}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm text-blue-400
                                                                 hover:text-blue-300 transition-colors"
                                                    >
                                                        Documentation
                                                    </a>
                                                )}

                                                {/* Languages/Technologies */}
                                                <div>
                                                    <h4 className="text-xs font-semibold text-neutral-400 mb-2">
                                                        Technologies
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.languages.map((lang, langIndex) => (
                                                            <span
                                                                key={langIndex}
                                                                className="px-3 py-1 bg-neutral-800 border border-white/10
                                                                         rounded-full text-xs font-medium text-neutral-300
                                                                         hover:bg-neutral-700 transition-colors"
                                                            >
                                                                {lang}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Security Features (if available) */}
                                                {project.security && project.security.length > 0 && (
                                                    <div>
                                                        <h4 className="text-xs font-semibold text-neutral-400 mb-2">
                                                            Security Features
                                                        </h4>
                                                        <div className="space-y-2">
                                                            {project.security.map((sec, secIndex) => (
                                                                <div
                                                                    key={secIndex}
                                                                    className="p-3 bg-neutral-800/50 border border-white/5
                                                                             rounded-lg"
                                                                >
                                                                    <div className="font-medium text-xs text-blue-400 mb-1">
                                                                        {sec.type}
                                                                    </div>
                                                                    <div className="text-xs text-neutral-400">
                                                                        {sec.description}
                                                                    </div>
                                                                    {sec.where && (
                                                                        <div className="text-xs text-neutral-500 mt-1 italic">
                                                                            {sec.where}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Card>
    );
}
