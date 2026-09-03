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

const CATEGORIES: { name: string; members: string[] }[] = [
    {
        name: 'Programming Languages',
        members: ['java', 'c', 'c++', 'c#', 'python', 'javascript', 'typescript', 'swift', 'go', 'r'],
    },
    { name: 'Web Technologies', members: ['html', 'css', 'php'] },
    { name: 'Databases', members: ['sql'] },
    { name: 'DevOps & Tools', members: ['git', 'docker', 'kubernetes', 'metrics', 'ci/cd', 'cloud'] },
];

// The four detail arrays render identically, so they are described as data
// rather than repeated as four near-identical JSX blocks.
const DETAIL_GROUPS: { label: string; key: keyof Skill }[] = [
    { label: 'Architectures', key: 'architectures' },
    { label: 'Frameworks', key: 'frameworks' },
    { label: 'Databases', key: 'databases' },
    { label: 'Tools', key: 'tools' },
];

const SKILL_COLORS: Record<string, string> = {
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
    'r': 'bg-sky-600',
    'cloud': 'bg-emerald-600',
    'metrics': 'bg-green-600',
    'ci/cd': 'bg-pink-600',
    'php': 'bg-purple-500',
};

// `capitalize` alone produces "Javascript" and "Ci/cd"; these need real casing.
const DISPLAY_NAMES: Record<string, string> = {
    'javascript': 'JavaScript',
    'typescript': 'TypeScript',
    'html': 'HTML',
    'css': 'CSS',
    'sql': 'SQL',
    'php': 'PHP',
    'ci/cd': 'CI/CD',
    'c': 'C',
    'c++': 'C++',
    'c#': 'C#',
    'r': 'R',
};

function skillColor(name: string) {
    return SKILL_COLORS[name.toLowerCase()] ?? 'bg-neutral-600';
}

function displayName(name: string) {
    const key = name.toLowerCase();
    return DISPLAY_NAMES[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
}

function detailGroups(skill: Skill) {
    return DETAIL_GROUPS.map(group => ({
        label: group.label,
        items: (skill[group.key] as string[] | undefined) ?? [],
    })).filter(group => group.items.length > 0);
}

export default function Skills() {
    const skills = skillsData as Skill[];

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
                {CATEGORIES.map(category => {
                    const categorySkills = skills.filter(skill =>
                        category.members.includes(skill.name.toLowerCase())
                    );

                    return (
                        <div key={category.name}>
                            <h3 className="text-xl font-bold mb-4 text-blue-400">{category.name}</h3>

                            {/* Shape.Long is w-full; Shape.Rectangle locks cards to a fixed
                                280px, which left ~320px of dead space in each grid column.
                                items-start then stops a short card being stretched to its
                                row's height, which had left C and C++ as empty boxes. */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                                {categorySkills.map(skill => {
                                    const groups = detailGroups(skill);

                                    return (
                                        <Card
                                            key={skill.name}
                                            size={Size.Small}
                                            shape={Shape.Long}
                                            id={`skill-${skill.name}`}
                                        >
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-3 h-3 rounded-full ${skillColor(skill.name)}`}></div>
                                                    <h4 className="text-lg font-semibold">
                                                        {displayName(skill.name)}
                                                    </h4>
                                                </div>

                                                {groups.map(group => (
                                                    <div key={group.label}>
                                                        <p className="text-xs font-semibold text-neutral-400 mb-2">
                                                            {group.label}
                                                        </p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {group.items.map(item => (
                                                                <span
                                                                    key={item}
                                                                    className="px-2 py-1 bg-neutral-800 border border-white/10
                                                                             rounded-md text-xs text-neutral-300
                                                                             hover:bg-neutral-700 transition-colors"
                                                                >
                                                                    {item}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}
