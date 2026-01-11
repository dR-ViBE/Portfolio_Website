'use client';

import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReadingPage() {
    return (
        <div className="min-h-screen bg-[#000000] text-white overflow-x-hidden relative flex flex-col items-center justify-center p-6">

            {/* Back Button */}
            <div onClick={() => window.location.href = '/?profile=Recruiter'} className="fixed top-8 left-8 z-50 cursor-pointer group">
                <div className="p-3 rounded-full bg-[#141414] border border-gray-700 transition-all duration-300 group-hover:border-red-600 group-hover:scale-110">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl w-full text-center space-y-12"
            >
                {/* Header Section */}
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-red-500">
                        Books that keep me curious
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        I rotate between tech craft, creativity, and memoirs so my engineering stays human.
                    </p>
                </div>

                {/* Card Section */}
                <div className="bg-[#181818] border border-red-900/30 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-red-600 transition-colors duration-300">

                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent pointer-events-none"></div>

                    <div className="relative z-10 space-y-6">
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                            Reading list refresh is coming soon.
                        </h2>

                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            Sharing the essays, memoirs, and zines that are shaping my perspective next.
                        </p>

                        <p className="text-gray-500 text-xs md:text-sm pt-4 border-t border-gray-800">
                            Connect on LinkedIn for bite-sized reviews until the full list drops.
                        </p>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
