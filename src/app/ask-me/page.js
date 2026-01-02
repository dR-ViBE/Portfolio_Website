'use client';

import { ArrowLeft, Send, Github, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AskMePage() {

    // Quick Links URLs
    const githubUrl = "https://github.com/dR-ViBE?tab=repositories";
    const linkedinUrl = "https://www.linkedin.com/in/ganesh-prabakaran97";
    const resumeUrl = "/Ganesh_Prabakaran_Resume.pdf"; // Assuming file exists or placeholder

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col font-sans">

            {/* Red Glow Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-900/20 blur-[120px] pointer-events-none rounded-full"></div>

            {/* Back Button */}
            <div onClick={() => window.location.href = '/?profile=Recruiter'} className="fixed top-8 left-8 z-50 cursor-pointer group">
                <div className="p-3 rounded-full bg-[#141414] border border-gray-700 transition-all duration-300 group-hover:border-red-600 group-hover:scale-110">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 pt-24 relative z-10 w-full max-w-5xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <p className="text-gray-500 text-sm tracking-[0.2em] font-medium mb-4 uppercase">
                        AI Career Concierge
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                        Ask Me Anything
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Curious about my internships, Projects, or leadership work? Drop a question and AI would help you out
                    </p>
                </div>

                {/* Chat Interface Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
                >
                    {/* Subtle Red Border Glow */}
                    <div className="absolute inset-0 border border-red-900/30 rounded-2xl pointer-events-none"></div>

                    {/* Quick Links with Foggy Glass Effect and Red Border */}
                    <div className="mb-8 p-6 rounded-xl border border-red-600/50 backdrop-blur-md bg-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent opacity-50 pointer-events-none"></div>

                        <p className="text-xs text-gray-300 font-bold tracking-wider mb-4 uppercase relative z-10">Quick Links</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-4 py-4 bg-black/40 border border-red-900/30 rounded-lg text-red-500 hover:bg-red-900/30 hover:border-red-500 hover:text-white transition-all group w-full">
                                <Github className="w-5 h-5 flex-shrink-0" />
                                <span className="text-sm font-bold tracking-wide">GITHUB</span>
                            </a>
                            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-4 py-4 bg-black/40 border border-red-900/30 rounded-lg text-red-500 hover:bg-red-900/30 hover:border-red-500 hover:text-white transition-all group w-full">
                                <Linkedin className="w-5 h-5 flex-shrink-0" />
                                <span className="text-sm font-bold tracking-wide">LINKEDIN</span>
                            </a>
                            <a href={resumeUrl} target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-4 py-4 bg-black/40 border border-red-900/30 rounded-lg text-red-500 hover:bg-red-900/30 hover:border-red-500 hover:text-white transition-all group w-full">
                                <FileText className="w-5 h-5 flex-shrink-0" />
                                <span className="text-sm font-bold tracking-wide">RESUME</span>
                            </a>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="mb-6 bg-[#111] rounded-xl p-6 min-h-[200px] border border-gray-800/50 flex flex-col justify-end">
                        <div className="flex gap-4 items-start">
                            {/* Updated Bot Image */}
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-700 flex-shrink-0">
                                <img
                                    src="/istockphoto-2198833054-612x612.jpg"
                                    alt="Bot"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-gray-500 font-medium ml-1">QA BOT</p>
                                <div className="bg-[#1f1f1f] px-4 py-3 rounded-2xl rounded-tl-none text-gray-200 text-sm md:text-base leading-relaxed inline-block border border-gray-800">
                                    Hi, I'm Bot. Ask me anything
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Ask about internships, skills, fellowships"
                            className="w-full bg-[#111] border border-gray-800 text-white px-6 py-4 rounded-full focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-900 transition-all placeholder-gray-600 pr-16"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#e50914] text-white p-3 rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-900/30">
                            <Send className="w-4 h-4 ml-0.5" />
                        </button>
                    </div>

                </motion.div>

            </div>
        </div>
    );
}
