'use client';

import { ArrowLeft, Linkedin, Coffee, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {

    // Resume/LinkedIn Links
    const linkedInUrl = "https://www.linkedin.com/in/ganesh-prabakaran97";

    return (
        <div className="min-h-screen bg-[#000000] text-white overflow-x-hidden relative flex flex-col items-center">

            {/* Back Button - Fixed Top Left (Hard navigation to restore Dashboard state) */}
            <div onClick={() => window.location.href = '/?profile=Recruiter'} className="fixed top-8 left-8 z-50 cursor-pointer group">
                <div className="p-3 rounded-full bg-[#141414] border border-gray-700 transition-all duration-300 group-hover:border-red-600 group-hover:scale-110">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* HERO SECTION */}
            <div className="w-full flex flex-col items-center justify-center pt-32 pb-16 space-y-6 text-center max-w-4xl px-6">

                <h2 className="text-red-600 tracking-[0.2em] text-sm md:text-base font-bold">
                    NOW BOOKING NEW WORK
                </h2>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Full Stack AI & Software Engineer
                </h1>

                <p className="text-gray-300 md:text-lg max-w-2xl leading-relaxed">
                    From optimizing enterprise SaaS integrations at Hexaware to architecting autonomous LangGraph agents that streamline content creation , I design software that bridges the gap between complex research and production reality. I work across the stack (Python, Java, React, AWS) crafting scalable, AI-driven solutions that automate workflows and drive measurable operational improvements.
                </p>

                {/* Red Connect Button */}
                <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 px-8 py-3 bg-[#e50914] text-white font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-red-900/20"
                >
                    <Linkedin className="w-5 h-5 fill-white" />
                    Connect on Linkedin
                </a>

            </div>


            {/* PROFILE CARD SECTION */}
            <div className="w-full flex justify-center pb-20 px-4">
                <div className="flex flex-col md:flex-row gap-6 max-w-6xl items-start w-full">

                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#181818] p-8 md:p-12 rounded-2xl w-full flex flex-col md:flex-row gap-8 md:gap-12 shadow-2xl border border-gray-800 items-center md:items-start"
                    >
                        {/* Left Column: Large Avatar */}
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 md:w-64 md:h-64 rounded-full bg-gray-600 overflow-hidden border-4 border-gray-800 shadow-xl">
                                <img src="/Profile_image.jpeg" alt="Avatar" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="flex flex-col gap-6 text-center md:text-left flex-grow">
                            <div>
                                <h3 className="text-3xl md:text-5xl font-bold mb-2">Ganesh Prabakaran</h3>
                                <p className="text-gray-400 text-lg md:text-xl">Full Stack AI & Software Engineer</p>
                            </div>

                            <div className="text-gray-300 text-base leading-relaxed space-y-4">
                                <p>
                                    Software engineer with 3 years of professional experience building backend and full-stack systems for enterprise SaaS and consulting engagements. Strong Python and Java experience across service development, integrations, and automation. Hands-on with RESTful APIs, Spring Boot, Flask, React, Docker, Jenkins, Kubernetes and AWS. Proven ability to convert research prototypes to production-ready CUDA-enabled pipelines, optimize throughput and reliability, and deliver measurable operational improvements
                                </p>
                            </div>

                            <div className="text-sm text-gray-500 pt-4 border-t border-gray-700">
                                SUNY Buffalo M.S Computer Science May 2025
                            </div>

                            {/* Blue View Profile Button */}
                            <a
                                href={linkedInUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto px-8 py-3 bg-[#0077b5] text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-[#006097] transition-colors mt-2"
                            >
                                <Linkedin className="w-5 h-5 fill-white" />
                                View Profile
                            </a>
                        </div>

                    </motion.div>


                    {/* Side Contact Elements (Desktop: Right Side / Mobile: Bottom) */}
                    <div className="flex flex-col gap-4 w-full md:w-auto flex-shrink-0">

                        {/* LinkedIn Message Button (Gray) */}
                        <a
                            href={linkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#2b2b2b] px-6 py-3 rounded-lg flex items-center justify-center gap-3 text-white font-medium hover:bg-[#333] transition-colors border border-gray-700 whitespace-nowrap"
                        >
                            <Linkedin className="w-5 h-5 text-red-500 fill-red-500" /> {/* Red icon as per design */}
                            Message me on Linkedin
                        </a>

                        {/* Coffee / IRL */}
                        <div className="text-white font-medium flex items-center justify-center md:justify-start gap-2 px-2">
                            Prefer IRL? Let's grab a coffee ☕️
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}
