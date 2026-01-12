'use client';

import { useState, useEffect } from 'react';
import { Search, Bell } from 'lucide-react';
import Link from 'next/link';

export default function Navbar({ profile }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: `/?profile=${profile || 'Recruiter'}` },
        { name: 'Professional', href: `/experience?profile=${profile || 'Recruiter'}` },
        { name: 'Skills', href: `/skills?profile=${profile || 'Recruiter'}` },
        { name: 'Projects', href: `/projects?profile=${profile || 'Recruiter'}` },
        { name: 'Hire Me', href: `/contact?profile=${profile || 'Recruiter'}` },
        { name: 'Ask Me', href: `/ask-me?profile=${profile || 'Recruiter'}` },
    ];

    const allProfiles = [
        { name: 'Recruiter', img: '/blue1.png' },
        { name: 'Developer', img: '/grey1.png' },
        { name: 'Stalker', img: '/red1.png' },
        { name: 'Adventurer', img: '/yellow1.png' },
    ];

    const currentProfileName = profile || 'Recruiter';
    const currentProfileImg = allProfiles.find(p => p.name === currentProfileName)?.img || '/blue1.png';

    // Filter out current profile for the dropdown
    const availableProfiles = allProfiles.filter(p => p.name !== currentProfileName);

    // Letter offsets for subtle arch effect (Middle letters N, E raised slightly)
    const logoLetters = [
        { char: 'G', offset: '0px' },
        { char: 'A', offset: '0px' },
        { char: 'N', offset: '0px' },
        { char: 'E', offset: '0px' },
        { char: 'S', offset: '0px' },
        { char: 'H', offset: '0px' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/70 to-transparent'
                }`}
        >
            <div className="px-8 md:px-24 py-10 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    {/* Arched Logo linked to Profile Gate */}
                    <Link href={`/?profile=${profile || 'Recruiter'}`} className="flex items-end gap-[1px] cursor-pointer group">
                        {logoLetters.map((letter, index) => (
                            <span
                                key={index}
                                className="text-[#e50914] text-3xl md:text-4xl font-bold uppercase tracking-tighter transition-transform duration-300 group-hover:scale-110"
                                style={{
                                    transform: `translateY(${letter.offset})`,
                                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
                                }}
                            >
                                {letter.char}
                            </span>
                        ))}
                    </Link>

                    <ul className="hidden lg:flex gap-12 text-2xl font-medium text-[#e5e5e5]">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="hover:text-[#b3b3b3] transition-colors cursor-pointer">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-6 text-white">
                    {/* Search and Bell removed as requested */}

                    {/* Profile Dropdown */}
                    <div className="relative group flex items-center gap-2 cursor-pointer">
                        <div className="w-12 h-12 rounded-md overflow-hidden border border-transparent group-hover:border-white transition-all duration-300">
                            <img
                                src={currentProfileImg}
                                alt={currentProfileName}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Caret Icon */}
                        <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full right-0 mt-4 w-48 bg-black/95 border border-[#333] shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
                            {/* Little triangle pointer */}
                            <div className="absolute -top-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white/10"></div>

                            {availableProfiles.map((p) => (
                                <div
                                    key={p.name}
                                    onClick={() => window.location.href = `/?profile=${p.name}`}
                                    className="flex items-center gap-3 px-4 py-3 hover:underline cursor-pointer transition-colors"
                                >
                                    <img src={p.img} alt={p.name} className="w-8 h-8 rounded-sm" />
                                    <span className="text-sm text-[#b3b3b3] hover:text-white capitalize">{p.name}</span>
                                </div>
                            ))}

                            <div className="border-t border-[#333] mt-2 pt-2">
                                <Link href="/" className="block px-4 py-2 text-sm text-center hover:underline text-white">
                                    Sign out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
