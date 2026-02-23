import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronUp, Github, Linkedin, Users, Moon, Sun, ArrowLeft } from 'lucide-react'

type TeamMember = {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string;
}

const team: TeamMember[] = [
    {
        id: 1,
        name: "Mattia Giannetti",
        role: "Leader",
        description: "Description for team member 1. Analysis and developments focused on the field of design and architecture.",
        image: "/media/people/member1.jpg"
    },
    {
        id: 2,
        name: "Giacomo Marani",
        role: "Leader",
        description: "Description for team member 2. Analysis and developments focused on the field of design and architecture.",
        image: "/media/people/member2.jpg"
    },
    {
        id: 3,
        name: "Luca Ofria",
        role: "Crew",
        description: "Description for team member 3. Analysis and developments focused on the field of design and architecture.",
        image: "/media/people/member3.jpg"
    },
    {
        id: 4,
        name: "Erica Scribano",
        role: "Crew",
        description: "Description for team member 4. Analysis and developments focused on the field of design and architecture.",
        image: "/media/people/member4.jpg"
    },
    {
        id: 5,
        name: "Gabriele Fichera",
        role: "Crew",
        description: "Description for team member 5. Analysis and developments focused on the field of design and architecture.",
        image: "/media/people/member5.jpg"
    }
]

export default function People() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light'
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    }

    const PersonCard = ({ member }: { member: TeamMember }) => {
        const [isRevealed, setIsRevealed] = useState(false)

        return (
            <div
                className={`group flex flex-col items-start gap-4 p-6 rounded-xl transition-all duration-500 w-full h-full overflow-hidden ${isRevealed ? 'bg-base-100 shadow-lg' : 'bg-transparent'
                    }`}
                onMouseEnter={() => setIsRevealed(true)}
            >
                <div className="relative w-full aspect-square max-w-[180px] flex-shrink-0 mx-auto md:mx-0 cursor-pointer">
                    <div className={`absolute inset-0 bg-base-300 rounded-full overflow-hidden border-4 transition-all duration-500 shadow-inner ${isRevealed ? 'border-primary/30 scale-105' : 'border-primary/5'
                        }`}>
                        <Image
                            src={member.image}
                            alt={member.name}
                            layout="fill"
                            objectFit="cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://via.placeholder.com/400?text=Photo';
                            }}
                        />
                    </div>
                </div>
                <div className={`text-left w-full transition-all duration-500 transform ${isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 h-0 pointer-events-none'
                    }`}>
                    <div className="bg-base-200/50 p-4 rounded-lg backdrop-blur-sm border border-base-300/50 mt-2">
                        <h2 className="text-xl font-bold text-base-content">{member.name}</h2>
                        <p className="text-sm text-base-content/70 leading-relaxed mt-2">
                            {member.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-base-200 text-base-content">
            <header className="sticky top-0 z-50 w-full border-b border-base-300 bg-base-100/95 backdrop-blur">
                <div className="container mx-auto flex h-14 items-center justify-between px-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">ATI R&D Department</span>
                    </Link>
                    <nav className="flex items-center space-x-4">
                        <Link href="/" className="flex items-center p-2 hover:text-primary transition-colors" title="Back to Home">
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                        <Link href="/people" className="p-2 text-primary border-b-2 border-primary">
                            <Users className="h-5 w-5" />
                            <span className="sr-only">Team</span>
                        </Link>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-base-200 transition-colors">
                            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                        </button>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 max-w-6xl">
                <section className="mb-12 text-left">
                    <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                        Team
                    </h1>
                    <div className="w-24 h-1 bg-primary rounded-full"></div>
                </section>

                <section className="space-y-12 mb-16">
                    {/* Row 1: 2 Leaders */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-base-content text-left">Leaders</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <PersonCard member={team[0]} />
                            <PersonCard member={team[1]} />
                        </div>
                    </div>

                    <div className="divider opacity-30"></div>

                    {/* Row 2: 3 Crew */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-base-content text-left">Crew</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <PersonCard member={team[2]} />
                            <PersonCard member={team[3]} />
                            <PersonCard member={team[4]} />
                        </div>
                    </div>
                </section>
            </main>

            <footer className="mt-16 border-t border-base-300 py-6 text-center text-base-content/60">
                <p>© 2022 ATIproject - R&D Dep. All rights reserved. This site is created by AI tools</p>
            </footer>

            <button
                className="fixed bottom-4 right-4 rounded-full bg-primary p-2 text-primary-content shadow-lg hover:bg-primary/80 transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
            >
                <ChevronUp className="h-5 w-5" />
            </button>
        </div>
    )
}
