'use client';

import Navbar from './Navbar';
import Hero from './Hero';
import Row from './Row';
import SectionGrid from './SectionGrid';
import projectData from '../../data/projectData';
import { Briefcase, Code, Award, FileText, Music, Book, Mail, Star, FolderGit2, MessageCircle } from 'lucide-react';

export default function Dashboard({ profile }) {

    // Select a random project for the Hero background visual (or just use the first/specific one)
    const randomProject = projectData[Math.floor(Math.random() * projectData.length)];

    // Static Data for "Top Picks" (8 Items for Grid)
    // Static Data for "Top Picks" (8 Items for Grid)
    const topPicks = [
        { title: 'Work Authorization', imageUrl: '/permit GIF.gif', staticImage: '/permit_static.png', icon: Briefcase, link: '/work-auth' },
        { title: 'Skills', imageUrl: '/Skills.gif', staticImage: '/skills_static.png', icon: Code, link: '/tech-stack' },
        { title: 'Experience', imageUrl: '/work experience.gif', staticImage: '/experience_static.png', icon: Briefcase, link: '/experience' },
        { title: 'Certifications', imageUrl: '/Certificates.gif', staticImage: '/certificates_static.png', icon: Award, link: '/certifications' },
        { title: 'Projects', imageUrl: '/Projects.gif', staticImage: '/projects_static.png', icon: FolderGit2, link: '/projects' },
        { title: 'Contact Me', imageUrl: '/Contact.gif', staticImage: '/contact_static.png', icon: Mail, link: '/contact' },
    ];

    // Static Data for "Continue Watching"
    // Static Data for "Continue Watching"
    const continueWatching = [
        { title: 'Music', imageUrl: '/Continue_Watching/Music.png', icon: Music, link: '/music' },
        { title: 'Reading', imageUrl: '/Continue_Watching/Reading.jpg', icon: Book, link: '/reading' },
        { title: 'Blogs', imageUrl: '/Continue_Watching/Blog.jpg', icon: FileText, link: '/blogs' },
        // Awards removed as requested
        { title: 'Contact Me', imageUrl: '/contact.jfif', icon: Mail, link: '/contact' },
    ];

    return (
        <div className="relative min-h-screen bg-[#141414]">
            <Navbar profile={profile} />

            <main className="pb-40">
                <Hero project={randomProject} profile={profile} />

                {/* Sections Container - No negative margin to prevent overlap, clear spacing */}
                <section className="relative z-20 pb-12 mt-12">

                    {/* Top Picks - Grid Layout */}
                    <SectionGrid
                        title={`Top Picks for ${profile}`}
                        items={topPicks}
                    />

                    {/* SPACER */}
                    <div className="h-12 md:h-16"></div>

                    {/* Continue Watching - Row Layout with Play Icons */}
                    <Row
                        title={`Continue Watching for ${profile}`}
                        subtitle="Jump back into the stories you left on pause."
                        items={continueWatching}
                        variant="continue-watching"
                    />

                    {/* Removed other project categories as requested */}
                </section>
            </main>

            {/* Modal/Footer placeholders could go here */}
        </div>
    );
}
