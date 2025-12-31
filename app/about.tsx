'use client';

import Card from "@/app/components/card";
import Size from "@/app/components/size";
import Shape from "@/app/components/shape";
import Possition from "@/app/components/possition";
import {blob} from "node:stream/consumers";

export default function About() {
    const download = () => {
        fetch('/resume.pdf')
            .then(res => res.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'resume.pdf';
                link.click();
                URL.revokeObjectURL(url);
            })
            .catch(err => console.error(err));
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
                    <div className="w-48 h-48 rounded-2xl bg-neutral-800 flex items-center justify-center text-neutral-600 flex-shrink-0">
                        <span className="text-sm">Profile Photo</span>
                    </div>
                    <Card
                        size={Size.Medium}
                        shape={Shape.Long}
                        headerPosition={Possition.Left}
                        title="About This Portfolio"
                        description="Welcome to my portfolio! I'm a Computer Science student at Rollins College pursuing a dual degree in Computer Science (BS) and Business Administration (MBA). This portfolio showcases my journey in technology, from full-stack development to DevOps and accessible technology solutions."
                    />
                </div>

                {/* Portfolio Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card
                        size={Size.Medium}
                        shape={Shape.Rectangle}
                        headerPosition={Possition.Top}
                        title="My Focus"
                        description="I specialize in full-stack development with a passion for creating accessible technology solutions. My work spans web applications, DevOps automation, and tools that make technology more inclusive."
                    />
                    <Card
                        size={Size.Medium}
                        shape={Shape.Rectangle}
                        headerPosition={Possition.Top}
                        title="What Drives Me"
                        description="I'm passionate about building technology that makes a difference. From accessibility tools for learning disabilities to developer productivity applications, I focus on creating solutions that solve real problems."
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
                                <a
                                    href="mailto:mstone@rollins.edu"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
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
                    />
                    <Card
                        size={Size.Medium}
                        shape={Shape.Square}
                        headerPosition={Possition.Top}
                        title="9+"
                        description="Languages"
                    />
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
                    description="Pursuing a dual degree at Rollins College while building innovative projects and contributing to the STEM Student Council. Always exploring new technologies and methodologies to create better, more accessible software solutions."
                />

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" onClick={download}>Download Resume</button>

            </div>
        </Card>
    );
}
