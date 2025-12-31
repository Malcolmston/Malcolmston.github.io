'use client';

import Card from "@/app/components/card";
import Size from "@/app/components/size";
import Shape from "@/app/components/shape";
import Possition from "@/app/components/possition";

export default function About() {
    return (
        <Card
            size={Size.Large}
            shape={Shape.Long}
            headerPosition={Possition.Top}
            title="Malcolm Stone"
            description="Full-Stack Developer & Computer Science Student"
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
            </div>
        </Card>
    );
}
