'use client';

import React from 'react';
import Card from '@/app/components/card';
import Size from '@/app/components/size';
import Shape from '@/app/components/shape';
import Position from '@/app/components/possition';
import skillsData from './skills.json';

interface Skill {
    name: string;
    architectures?: string[];
    frameworks?: string[];
    databases?: string[];
    tools?: string[];
}

export default function Skills() {
    const skills = skillsData as Skill[];

    // Categorize skills
    const categories = {
        'Programming Languages': skills.filter(s =>
            ['java', 'c', 'c++', 'c#', 'python', 'javascript', 'typescript', 'swift', 'go'].includes(s.name.toLowerCase())
        ),
        'Web Technologies': skills.filter(s =>
            ['html', 'css'].includes(s.name.toLowerCase())
        ),
        'Databases': skills.filter(s =>
            s.name.toLowerCase() === 'sql'
        ),
        'DevOps & Tools': skills.filter(s =>
            ['git', 'docker', 'kubernetes', 'metrics', 'ci/cd'].includes(s.name.toLowerCase())
        )
    };

    const getSkillColor = (skillName: string) => {
        const colors: Record<string, string> = {
            'java': 'bg-orange-600',
            'c': 'bg-blue-600',
            'c++': 'bg-blue-700',
            'c#': 'bg-purple-600',
            'python': 'bg-yellow-600',
            'javascript': 'bg-yellow-500',
            'typescript': 'bg-blue-500',
            'html': 'bg-orange-500',
            'css': 'bg-blue-400',
            'sql': 'bg-gray-600',
            'git': 'bg-red-600',
            'docker': 'bg-blue-600',
            'kubernetes': 'bg-blue-500',
            'swift': 'bg-orange-600',
            'go': 'bg-cyan-600',
            'metrics': 'bg-green-600',
            'ci/cd': 'bg-pink-600'
        };
        return colors[skillName.toLowerCase()] || 'bg-neutral-600';
    };

    return (
        <Card
            size={Size.Large}
            shape={Shape.Long}
            headerPosition={Position.Top}
            title="Technical Skills"
            description="A comprehensive overview of programming languages, frameworks, and tools I work with"
            id="skills"
        >
            <div className="flex flex-col gap-8">
                {Object.entries(categories).map(([categoryName, categorySkills]) => (
                    <div key={categoryName}>
                        <h3 className="text-xl font-bold mb-4 text-blue-400">{categoryName}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {categorySkills.map((skill, index) => (
                                <Card
                                    key={`${categoryName}-${index}`}
                                    size={Size.Medium}
                                    shape={Shape.Rectangle}
                                    id={`skill-${categoryName}`}
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-3 h-3 rounded-full ${getSkillColor(skill.name)}`}></div>
                                            <h4 className="text-lg font-semibold capitalize">
                                                {skill.name}
                                            </h4>
                                        </div>

                                        {skill.architectures && (
                                            <div>
                                                <p className="text-xs font-semibold text-neutral-400 mb-2">
                                                    Architectures
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {skill.architectures.map((arch, archIndex) => (
                                                        <span
                                                            key={archIndex}
                                                            className="px-2 py-1 bg-neutral-800 border border-white/10
                                                                     rounded-md text-xs text-neutral-300
                                                                     hover:bg-neutral-700 transition-colors"
                                                        >
                                                            {arch}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {skill.frameworks && (
                                            <div>
                                                <p className="text-xs font-semibold text-neutral-400 mb-2">
                                                    Frameworks
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {skill.frameworks.map((framework, fwIndex) => (
                                                        <span
                                                            key={fwIndex}
                                                            className="px-2 py-1 bg-neutral-800 border border-white/10
                                                                     rounded-md text-xs text-neutral-300
                                                                     hover:bg-neutral-700 transition-colors"
                                                        >
                                                            {framework}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {skill.databases && (
                                            <div>
                                                <p className="text-xs font-semibold text-neutral-400 mb-2">
                                                    Databases
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {skill.databases.map((db, dbIndex) => (
                                                        <span
                                                            key={dbIndex}
                                                            className="px-2 py-1 bg-neutral-800 border border-white/10
                                                                     rounded-md text-xs text-neutral-300
                                                                     hover:bg-neutral-700 transition-colors"
                                                        >
                                                            {db}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {skill.tools && (
                                            <div>
                                                <p className="text-xs font-semibold text-neutral-400 mb-2">
                                                    Tools
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {skill.tools.map((tool, toolIndex) => (
                                                        <span
                                                            key={toolIndex}
                                                            className="px-2 py-1 bg-neutral-800 border border-white/10
                                                                     rounded-md text-xs text-neutral-300
                                                                     hover:bg-neutral-700 transition-colors"
                                                        >
                                                            {tool}
                                                        </span>
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
        </Card>
    );
}
