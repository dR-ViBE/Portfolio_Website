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
        'Home',
        'Professional',
        'Skills',
        'Projects',
        'Awards',
        'Hire Me',
        'Ask Me',
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/70 to-transparent'
                }`}
        >
            <div className="px-4 md:px-12 py-4 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/" className="text-[#e50914] text-3xl font-extrabold tracking-tighter cursor-pointer">
                        PORTFOLIO
                    </Link>
                    <ul className="hidden lg:flex gap-6 text-sm font-medium text-[#e5e5e5]">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <Link href="#" className="hover:text-[#b3b3b3] transition-colors cursor-pointer">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-6 text-white">
                    <Search className="w-6 h-6 cursor-pointer" />
                    <Bell className="w-6 h-6 cursor-pointer" />
                    <div className="flex items-center gap-2 cursor-pointer group">
                        {/* Avatar matching requested profile visual style */}
                        <div className={`w-8 h-8 rounded-sm bg-blue-500 group-hover:ring-2 group-hover:ring-white transition-all`}></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
