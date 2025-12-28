'use client';

import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WorkAuthPage() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative p-4">

            {/* Back Button - Fixed Top Left (Hard navigation to restore Dashboard state) */}
            <div onClick={() => window.location.href = '/?profile=Recruiter'} className="fixed top-8 left-8 z-50 cursor-pointer group">
                <div className="p-3 rounded-full bg-black border border-gray-700 transition-all duration-300 group-hover:border-red-600 group-hover:scale-110">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* White Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white text-gray-900 p-8 md:p-12 rounded-xl text-center shadow-2xl max-w-xl mx-auto"
            >
                <h1 className="text-red-600 font-bold text-3xl mb-8">
                    Work Authorization
                </h1>

                <div className="space-y-6 text-sm md:text-base font-medium leading-relaxed">
                    <p>
                        I am a Indian citizen studying Computer Science at State University at Buffalo(M.S., May 2025) and authorized to work in the United States through OPT/STEM-OPT.
                    </p>

                    <p>
                        I'm currently on a <span className="text-red-600 font-bold">F-1 Student Visa (CPT/OPT Eligible)</span>, which enables me to work in the U.S. while pursuing my degree. My current employment authorization is valid until <span className="text-red-600 font-bold">08/01/2026</span>, giving me time to build long-term experience with a mission-driven team.
                    </p>

                    <p>
                        Open to relocation for roles that let me build inclusive Software/AI-powered products. Happy to provide documentation for employers if required.
                    </p>
                </div>
            </motion.div>

        </div>
    );
}
