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
                    Full Stack AI & Cloud <br /> Software Engineer
                </h1>

                <p className="text-gray-300 md:text-lg max-w-2xl leading-relaxed">
                    Experienced software engineer focused on distributed systems, AI copilots, and cloud-native services. I build LLM-powered Chrome extensions, LangChain automation, and React experiences backed by Python, TypeScript, Flask, Node.js, MongoDB, Redis, and AWS. From Gemini-driven privacy tooling at Google to GPT copilots for HP FOWA, I ship scalable APIs, craft amazing developer experiences, and center inclusive design in every release.
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
                <div className="flex flex-col md:flex-row gap-6 max-w-5xl items-start">

                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#181818] p-8 rounded-2xl max-w-xl w-full flex flex-col gap-6 shadow-2xl border border-gray-800"
                    >
                        <div className="flex items-center gap-4">
                            {/* Avatar Placeholder or User Image if available */}
                            <div className="w-16 h-16 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
                                <img src="/netflix-avatar-recruiter.png" alt="Avatar" className="w-full h-full object-cover" />
                                {/* Using Recruiter avatar as fallback if no real photo, user provided contact.jfif for thumbnail but maybe not avatar */}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Ganesh Prabakaran</h3>
                                <p className="text-gray-400">Full Stack AI & Cloud Software Engineer</p>
                            </div>
                        </div>

                        <div className="text-gray-300 text-sm leading-relaxed space-y-4">
                            <p>
                                Experienced software engineer focused on distributed systems, AI copilots, and cloud-native services. I build LLM-powered Chrome extensions, LangChain automation, and React experiences backed by Python, TypeScript, Flask, Node.js, MongoDB, Redis, and AWS.
                            </p>
                            <p>
                                From Gemini-driven privacy tooling at Google to GPT copilots for HP FOWA, I ship scalable APIs, craft amazing developer experiences, and center inclusive design in every release.
                            </p>
                        </div>

                        <div className="text-xs text-gray-500 pt-4 border-t border-gray-700">
                            Fisk University · B.S. Computer Science · Dec 2028
                        </div>

                        {/* Blue View Profile Button */}
                        <a
                            href={linkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 bg-[#0077b5] text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-[#006097] transition-colors"
                        >
                            <Linkedin className="w-5 h-5 fill-white" />
                            View Profile
                        </a>

                    </motion.div>


                    {/* Side Contact Elements */}
                    <div className="flex flex-col gap-4">

                        {/* LinkedIn Message Button (Gray) */}
                        <a
                            href={linkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#2b2b2b] px-6 py-3 rounded-lg flex items-center gap-3 text-white font-medium hover:bg-[#333] transition-colors border border-gray-700"
                        >
                            <Linkedin className="w-5 h-5 text-red-500 fill-red-500" /> {/* Red icon as per design */}
                            Message me on Linkedin
                        </a>

                        {/* Coffee / IRL */}
                        <div className="text-white font-medium flex items-center gap-2 px-2">
                            Prefer IRL? Let's grab a coffee ☕️
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}
