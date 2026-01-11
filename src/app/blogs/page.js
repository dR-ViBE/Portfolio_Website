'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

export default function BlogsPage() {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-900 selection:text-white">
            <Navbar />

            <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center space-y-12 relative animate-fade-in">
                {/* Back Button */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
                    <Link href="/?profile=Recruiter" className="p-2 bg-[#1a1a1a] rounded-full hover:bg-[#333] transition-colors block">
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </Link>
                </div>

                {/* Header Section */}
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#448EF7]">
                        Writing & reflections
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto items-center">
                        Where I unpack the builds, fellowships, and community work behind this portfolio.
                    </p>
                </div>

                {/* Content Card */}
                <div className="bg-[#161616] border border-[#262626] rounded-2xl p-8 md:p-12 max-w-2xl w-full mx-auto shadow-2xl relative overflow-hidden">

                    <div className="space-y-8 relative z-10">
                        <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed">
                            Fresh blogs and LinkedIn write-ups are on the way.
                        </p>

                        <p className="text-lg md:text-xl text-gray-400">
                            I'm packaging Build in Public recaps, fellowship takeaways, and design journals next.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="https://www.linkedin.com/"
                                target="_blank"
                                className="inline-flex items-center text-[#448EF7] hover:text-[#3378d8] text-lg font-semibold transition-colors duration-200 group"
                            >
                                Follow on LinkedIn for live updates
                            </Link>
                        </div>
                    </div>

                    {/* Subtle Glow Effects */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
                </div>

            </div>
        </div>
    );
}
