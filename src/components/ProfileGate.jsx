'use client';

import { motion } from 'framer-motion';
import { User, Code, Eye, Map } from 'lucide-react';

const profiles = [
    { id: 1, name: 'Recruiter', src: '/blue1.png' },
    { id: 2, name: 'Developer', src: '/grey1.png' },
    { id: 3, name: 'Stalker', src: '/red1.png' },
    { id: 4, name: 'Adventurer', src: '/yellow1.png' },
];

export default function ProfileGate({ onSelectProfile }) {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-screen bg-[#141414] text-white"
        >
            <h1 className="text-4xl md:text-6xl font-normal mb-12 tracking-normal">Who&apos;s Watching?</h1>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        onClick={() => onSelectProfile(profile.name)}
                        className="group flex flex-col items-center gap-4 cursor-pointer w-32 md:w-40"
                    >
                        <div
                            className={`w-28 h-28 md:w-40 md:h-40 rounded-md overflow-hidden transition-all duration-300 group-hover:ring-4 group-hover:ring-white`}
                        >
                            <img
                                src={profile.src}
                                alt={profile.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-gray-400 text-lg md:text-2xl group-hover:text-white transition-colors duration-300">
                            {profile.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Manage Profiles Button Removed */}
        </motion.div>
    );
}
