'use client';

import Card from "@/app/components/card";
import Size from "@/app/components/size";
import Shape from "@/app/components/shape";
import Possition from "@/app/components/possition";
import Image from 'next/image';
import Position from "@/app/components/possition";

export default function About() {
    const download = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Malcolm_Stone_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <Card
            size={Size.Large}
            shape={Shape.Long}
            headerPosition={Possition.Top}
            title="Malcolm Stone"
            description="Full-Stack Developer & Computer Science Student"
            id="about"
        >
            <div className="flex flex-col gap-6">
                {/* Profile Section with Image */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <Image
                        src="/malcolm.png"
                        alt="Malcolm Stone"
                        width={192}
                        height={192}
                        className="w-48 h-48 rounded-2xl border-2 border-neutral-700 object-cover shrink-0"
                    />
                    <Card
                        size={Size.Medium}
                        shape={Shape.Long}
                        headerPosition={Possition.Left}
                        title="About This Portfolio"
                        description="Welcome to my portfolio!
                        I'm a Computer Science student at Rollins College pursuing a
                        degree in Computer Science and a Business Administration (MBA).
                        This portfolio showcases my technical abilities, from full-stack development
                        to DevOps and accessible technology solutions."
                    />
                </div>

                {/* Portfolio Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card
                        size={Size.Medium}
                        shape={Shape.Rectangle}
                        headerPosition={Possition.Top}
                        title="My Focus"
                        description="I specialize in full-stack development with a passion for
                        creating accessible technology solutions. My work spans web applications,
                        DevOps automation, and tools that make technology more inclusive."
                    />
                    <Card
                        size={Size.Medium}
                        shape={Shape.Rectangle}
                        headerPosition={Possition.Top}
                        title="What Drives Me"
                        description="I'm passionate about building technology that makes a difference.
                        From accessibility tools for learning disabilities to developer productivity
                        applications, I focus on creating solutions that solve real problems."
                    />
                </div>

                {/* Contact Information */}
                <Card
                    size={Size.Medium}
                    shape={Shape.Long}
                    headerPosition={Possition.Top}
                    title="Get In Touch"
                    id="contact"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Contact Details */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-semibold text-neutral-400 mb-2">Email</h4>

                                <h5 className="text-sm font-semibold text-neutral-400 mb-2">Personal</h5>

                                <a
                                    href="mailto:malcolmstone11@gmail.com"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    malcolmstone11@gmail.com
                                </a>

                                <h4 className="text-sm font-semibold text-neutral-400 mb-2">School</h4>

                                <a
                                    href="mailto:mstone@rollins.edu"
                                    className="text-blue-500 hover:text-blue-300 transition-colors"
                                >
                                    mstone@rollins.edu
                                </a>


                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-neutral-400 mb-2">Location</h4>
                                <p className="text-neutral-300">Winter Park, FL</p>
                                <p className="text-neutral-400 text-sm">Rollins College</p>
                            </div>

                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-neutral-400 mb-2">Connect</h4>
                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://www.linkedin.com/in/malcolm-stone-b22356334/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-neutral-300 hover:text-blue-400 transition-colors"
                                >
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">in</span>
                                    </div>
                                    <span>LinkedIn</span>
                                </a>
                                <a
                                    href="https://github.com/malcolmstone"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-neutral-300 hover:text-blue-400 transition-colors"
                                >
                                    <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">GH</span>
                                    </div>
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href="https://gitlab.com/malcolmstone"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-neutral-300 hover:text-blue-400 transition-colors"
                                >
                                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">GL</span>
                                    </div>
                                    <span>GitLab</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card
                        size={Size.Medium}
                        shape={Shape.Square}
                        headerPosition={Possition.Top}
                        title="10+"
                        description="Projects Built"
                    >
                        <div>
                            <ul className="list-none list-inside text-neutral-300 space-x-0.5 space-y-0.5 text-sm">
                                <li>Web Apps</li>
                                <li>DevOps Automation</li>
                                <li>Tools</li>
                                <li>Learning Resources</li>
                                <li>Open Source Contributions</li>
                                <li>Tutorials</li>
                                <li>CI/CD</li>
                            </ul>
                        </div>
                    </Card>
                    <Card
                        size={Size.Medium}
                        shape={Shape.Square}
                        headerPosition={Possition.Top}
                        title="9+"
                        description="Languages"

                    >
                        <div>
                            <ul className="list-none list-inside text-neutral-300 space-x-0.5 space-y-0.5 text-sm">
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Python</li>
                                <li>SQL</li>
                                <li>C#</li>
                                <li>Java</li>
                                <li>PHP</li>
                                <li>Go</li>
                            </ul>
                        </div>
                        </Card>
                    <Card
                        size={Size.Medium}
                        shape={Shape.Square}
                        headerPosition={Possition.Top}
                        title="2027"
                        description="BS Graduate"
                    />
                    <Card
                        size={Size.Medium}
                        shape={Shape.Square}
                        headerPosition={Possition.Top}
                        title="2029"
                        description="MBA Graduate"
                    />
                </div>

                {/* Current Status */}
                <Card
                    size={Size.Medium}
                    shape={Shape.Long}
                    headerPosition={Possition.Left}
                    title="Currently"
                    description="Currently apart of the STEM Student Council; always exploring new technologies and methodologies to create better, more accessible software solutions."
                />


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
            </div>
        </Card>
    );
}
