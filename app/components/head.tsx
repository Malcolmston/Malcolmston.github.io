'use client'

import { useState } from 'react';
import Image from 'next/image';

interface SubMenuItem {
    name: string;
    href?: string;
    scrollTo?: string;
    onClick?: () => void;
}

interface Tab {
    name: string;
    href?: string;
    onClick?: () => void;
    scrollTo?: string;
    submenu?: Array<SubMenuItem>;
}

/**
 * Renders a header component with a title and navigation tabs with optional submenu support.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.person - The name of the person displayed in the header.
 * @param {Array<Tab>} props.tabs - The list of tab objects to be rendered in the navigation.
 * @return {JSX.Element} The rendered header component.
 */
export default function Head ({person,tabs}: {person: string,tabs: Array<Tab>}) {
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const scrollToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start"});
        }
    };

    const handleTabClick = (tab: Tab) => {
        if (tab.scrollTo) {
            scrollToElement(tab.scrollTo);
        } else if (tab.onClick) {
            tab.onClick();
        }
    };

    const handleSubmenuClick = (item: SubMenuItem) => {
        if (item.scrollTo) {
            scrollToElement(item.scrollTo);
            setOpenSubmenu(null); // Close submenu after click
        } else if (item.onClick) {
            item.onClick();
            setOpenSubmenu(null);
        }
    };

    const handleMouseEnter = (tabName: string) => {
        setOpenSubmenu(tabName);
    };

    const handleMouseLeave = () => {
        setOpenSubmenu(null);
    };

    return <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="
                        relative rounded-2xl
                        bg-white/10 backdrop-blur-lg
                        border border-white/20
                        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                        before:absolute before:inset-0
                        before:bg-linear-to-br before:from-white/20 before:to-transparent
                        before:opacity-50
                        before:rounded-2xl
                        overflow-visible
                    ">
                <div className="relative px-8 py-4 flex items-center justify-between overflow-visible">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/malcolm.png"
                            alt={person}
                            width={48}
                            height={48}
                            className="rounded-full border-2 border-white/20"
                        />
                        <h1 className="text-2xl font-bold text-white">{person}</h1>
                    </div>
                    <nav className="flex gap-6 text-sm overflow-visible">
                        {
                            tabs.map((tab, index) => {
                                // If tab has submenu
                                if (tab.submenu && tab.submenu.length > 0) {
                                    return (
                                        <div
                                            key={`${tab.name}-${index}`}
                                            className="relative overflow-visible"
                                            onMouseEnter={() => handleMouseEnter(tab.name)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <button
                                                className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
                                            >
                                                {tab.name}
                                                <svg
                                                    className={`w-4 h-4 transition-transform ${openSubmenu === tab.name ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {/* Submenu Dropdown */}
                                            {openSubmenu === tab.name && (
                                                <div className="absolute top-full pt-2 left-0 min-w-50 z-60">
                                                    <div className="bg-white/10 backdrop-blur-lg
                                                              border border-white/20
                                                              rounded-xl
                                                              shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                                                              overflow-hidden">
                                                    {tab.submenu.map((item, subIndex) => {
                                                        if (item.scrollTo || item.onClick) {
                                                            return (
                                                                <button
                                                                    key={`${item.name}-${subIndex}`}
                                                                    onClick={() => handleSubmenuClick(item)}
                                                                    className="w-full text-left px-4 py-3 text-white/80 hover:text-white
                                                                             hover:bg-white/10 transition-colors"
                                                                >
                                                                    {item.name}
                                                                </button>
                                                            );
                                                        } else {
                                                            return (
                                                                <a
                                                                    key={`${item.name}-${subIndex}`}
                                                                    href={item.href || "#"}
                                                                    className="block px-4 py-3 text-white/80 hover:text-white
                                                                             hover:bg-white/10 transition-colors"
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            );
                                                        }
                                                    })}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                }

                                // Regular tab without submenu
                                if (tab.scrollTo || tab.onClick) {
                                    return (
                                        <button
                                            key={`${tab.name}-${index}`}
                                            onClick={() => handleTabClick(tab)}
                                            className="text-white/80 hover:text-white transition-colors"
                                        >
                                            {tab.name}
                                        </button>
                                    );
                                } else {
                                    return (
                                        <a
                                            key={`${tab.name}-${index}`}
                                            href={tab.href || "#"}
                                            className="text-white/80 hover:text-white transition-colors"
                                        >
                                            {tab.name}
                                        </a>
                                    );
                                }
                            })
                        }
                    </nav>
                </div>
            </div>
        </div>
    </header>
}
