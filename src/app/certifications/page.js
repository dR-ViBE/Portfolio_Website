'use client';

import { ArrowLeft, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CertificationsPage() {

    // Resume/LinkedIn Links (Reusing link from Contact Page)
    const linkedInUrl = "https://www.linkedin.com/in/ganesh-prabakaran97";

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center relative p-4">

            {/* Back Button - Fixed Top Left (Hard navigation to restore Dashboard state) */}
            <div onClick={() => window.location.href = '/?profile=Recruiter'} className="fixed top-8 left-8 z-50 cursor-pointer group">
                <div className="p-3 rounded-full bg-black border border-gray-700 transition-all duration-300 group-hover:border-red-600 group-hover:scale-110">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col items-center text-center animate-fade-in-up">

                {/* Header */}
                <h1 className="text-red-600 font-bold text-3xl md:text-5xl tracking-wide mb-12 uppercase drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                    Certifications & Badges
                </h1>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="border border-red-900/50 bg-black/50 p-12 md:p-16 rounded-3xl max-w-2xl w-full shadow-[0_0_30px_rgba(220,38,38,0.15)] flex flex-col items-center gap-8 backdrop-blur-sm"
                >
                    <div className="space-y-4">
                        <p className="text-white text-lg md:text-xl font-medium">
                            Verified badges and nano-degrees are being curated.
                        </p>
                        <p className="text-gray-400 text-base md:text-lg">
                            Check back soon or peek at my LinkedIn for the latest completions.
                        </p>
                    </div>

                    <a
                        href={linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 font-bold text-xl hover:text-red-500 hover:underline transition-all flex items-center gap-2"
                    >
                        Visit LinkedIn
                    </a>
                </motion.div>

            </div>

        </div>
    );
}
