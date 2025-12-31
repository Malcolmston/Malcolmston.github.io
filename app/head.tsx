'use client'

interface Tab {
    name: string;
}

export default function Head ({person,tabs}: {person: string,tabs: Array<Tab>}) {
    <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="
                        relative overflow-hidden rounded-2xl
                        bg-white/10 backdrop-blur-lg
                        border border-white/20
                        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                        before:absolute before:inset-0
                        before:bg-gradient-to-br before:from-white/20 before:to-transparent
                        before:opacity-50
                    ">
                <div className="relative px-8 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-white">{person}</h1>
                    <nav className="flex gap-6 text-sm">
                        {
                            tabs.map(tab => <a href="#" className="text-white/80 hover:text-white transition-colors">{tab.name}</a>)
                        }
                    </nav>
                </div>
            </div>
        </div>
    </header>
}
