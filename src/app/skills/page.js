'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { skillsData } from '@/data/skillsData';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SkillsPage() {
    return (
        <div className="bg-[#141414] min-h-screen text-white pb-20">
            <Navbar />

            <div className="pt-32 px-4 md:px-12 max-w-7xl mx-auto">
                {/* Back Button */}
                <div className="absolute top-24 left-4 md:top-32 md:left-12 z-50">
                    <Link href="/?profile=Recruiter" className="p-2 bg-[#1a1a1a] rounded-full hover:bg-[#333] transition-colors block">
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 uppercase">
                        MY <span className="text-[#e50914]">ARSENAL</span>
                    </h1>
                    <div className="w-24 h-1 bg-[#e50914] mx-auto rounded-full shadow-[0_0_15px_rgba(229,9,20,0.8)]"></div>
                    <p className="mt-6 text-[#a3a3a3] text-lg max-w-2xl mx-auto">
                        The tools and technologies that power my development journey.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {skillsData.map((section, index) => (
                        <div key={section.title} className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 border-l-4 border-[#e50914] pl-4"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
                                    {section.title}
                                </h2>
                            </motion.div>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {section.skills.map((skill, skillIndex) => (
                                    <SkillCard key={skill.name} skill={skill} index={skillIndex} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function SkillCard({ skill, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative h-40 rounded-lg flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-out z-0 hover:z-20 border border-solid"
            style={{
                backgroundColor: isHovered ? 'rgba(20, 20, 20, 0.95)' : '#141414',
                borderColor: skill.color,
                boxShadow: isHovered ? `0 0 20px ${skill.color}40` : 'none',
                transform: isHovered ? 'scale(1.15)' : 'scale(1)',
            }}
        >
            {/* Subtle Red Background Overlay on Hover */}
            {isHovered && (
                <div
                    className="absolute inset-0 bg-red-900/10 rounded-lg pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)`
                    }}
                />
            )}

            <div className="relative z-10 flex flex-col items-center gap-2">
                {skill.isText ? (
                    <div
                        className="text-lg font-bold text-center leading-tight mb-1"
                        style={{ color: '#fff' }}
                    >
                        {skill.name}
                    </div>
                ) : (
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 object-contain transition-transform duration-300 mb-2"
                    // Always original color
                    />
                )}

                {!skill.isText && (
                    <div
                        className="text-sm font-bold tracking-wide text-center"
                        style={{ color: '#fff' }}
                    >
                        {skill.name}
                    </div>
                )}

                {/* Description Text - Always visible or visible on hover? Reference shows it always visible */}
                <span
                    className="text-[10px] md:text-xs font-medium text-center opacity-70 px-2 leading-tight"
                    style={{ color: '#a3a3a3' }}
                >
                    {skill.description}
                </span>
            </div>
        </motion.div>
    );
}
