'use client';

import { Play, Info } from 'lucide-react';
import Link from 'next/link';

export default function Hero({ project }) {
    return (
        // Height adjusted to 90vh (common Netflix hero height)
        <div className="flex flex-col space-y-4 py-16 md:space-y-4 h-[65vh] md:h-[85vh] justify-end pb-12 px-4 md:px-12 relative w-full overflow-hidden">

            {/* Background Image Container */}
            <div className="absolute top-0 left-0 -z-10 h-full w-full">
                {project?.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt="Banner"
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="h-full w-full bg-gray-800 flex items-center justify-center">
                        <span className="text-gray-500">/* TODO: Replace with user's hero image */</span>
                    </div>
                )}

                {/* Main Vignette/Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#141414] z-0" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/60 via-transparent to-transparent z-0" />
            </div>

            {/* Content */}
            <div className="z-10 max-w-2xl space-y-4 md:space-y-6">
                <h1 className="text-3xl font-extrabold md:text-5xl lg:text-7xl text-shadow-md leading-tight">
                    Full Stack AI & Cloud <br className="hidden md:block" /> Software Engineer
                </h1>

                <p className="text-sm font-medium text-shadow-md md:text-lg lg:text-xl text-white drop-shadow-lg line-clamp-4 md:line-clamp-none">
                    From building privacy tools at Google to creating GPT agents that help HBCU students find housing and jobs, I design software that makes complex things simple. I work across the stack (React, Python, TypeScript, cloud platforms) crafting AI powered products that scale cleanly and feel effortless to use.
                </p>

                <div className="flex space-x-3 pt-4">
                    <a
                        href="/Ganesh_Prabakaran_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-x-2 rounded px-5 py-2 text-base font-bold transition hover:bg-[#c6c6c6] md:px-8 md:py-3 md:text-xl bg-white text-black cursor-pointer"
                    >
                        <Play className="h-5 w-5 text-black md:h-7 md:w-7 fill-black" />
                        Resume
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ganesh-prabakaran97"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-x-2 rounded px-5 py-2 text-base font-bold transition hover:bg-[#6d6d6eb3] md:px-8 md:py-3 md:text-xl bg-[#6d6d6e]/70 text-white cursor-pointer"
                    >
                        <Info className="h-5 w-5 md:h-7 md:w-7" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}
