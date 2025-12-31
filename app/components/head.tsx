'use client'

import { useState } from 'react';

interface SubMenuItem {
    name: string;
    href?: string;
    onClick?: () => void;
}

interface Tab {
    name: string;
    href?: string;
    onClick?: () => void;
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
                    <h1 className="text-2xl font-bold text-white">{person}</h1>
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
                                                        if (item.onClick) {
                                                            return (
                                                                <button
                                                                    key={`${item.name}-${subIndex}`}
                                                                    onClick={item.onClick}
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
                                if (tab.onClick) {
                                    return (
                                        <button
                                            key={`${tab.name}-${index}`}
                                            onClick={tab.onClick}
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
