'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { skillsData } from '@/data/skillsData';
import { motion } from 'framer-motion';

export default function TechStackPage() {
    return (
        <div className="bg-[#000000] min-h-screen text-white pb-20 font-sans">
            <Navbar />

            <div className="pt-24 px-4 md:px-12 max-w-7xl mx-auto space-y-16">

                {skillsData.map((section, index) => (
                    <div key={section.title} className="flex flex-col items-center">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-3xl font-bold mb-8 text-center border-b-2 border-red-600 pb-2 inline-block"
                        >
                            {section.title}
                        </motion.h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
                            {section.skills.map((skill, skillIndex) => (
                                <SkillCard key={skill.name} skill={skill} index={skillIndex} />
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

function SkillCard({ skill, index }) {
    const [isHovered, setIsHovered] = useState(false);

    // Function to force red color on SimpleIcons
    const getRedIcon = (url) => {
        if (!url) return '';
        // If it's a simpleicons URL, ensure it has the red color
        if (url.includes('cdn.simpleicons.org')) {
            // Remove any existing color params if present (though we cleaned them) and add our red
            const baseUrl = url.split('/').slice(0, 4).join('/'); // Keep https://cdn.simpleicons.org/slug
            return `${baseUrl}/E50914`;
        }
        return url;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-[#121212] rounded-lg p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-300 h-48 w-full shadow-lg border border-[#222]"
        >
            <div className="mb-4 transition-transform duration-300 ease-out"
                style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}
            >
                {skill.isText ? (
                    <span className="text-3xl font-bold text-[#E50914]">
                        {/* Use first letter or short code if no icon */}
                        {skill.name.substring(0, 2).toUpperCase()}
                    </span>
                ) : (
                    <img
                        src={getRedIcon(skill.icon)}
                        alt={skill.name}
                        className="w-12 h-12 object-contain"
                    />
                )}
            </div>

            <h3 className="text-white font-bold text-lg mb-1">
                {skill.name}
            </h3>

            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                {skill.description}
            </p>
        </motion.div>
    );
}
