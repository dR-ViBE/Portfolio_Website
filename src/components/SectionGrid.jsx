'use client';

import { Briefcase, Code, Award, FileText, Music, Book, Mail } from 'lucide-react';

export default function SectionGrid({ title, items }) {
    return (
        <div className="px-4 md:px-12 mb-16">
            <h2 className="text-[#3db5e6] text-xl md:text-2xl font-bold mb-1">
                {title}
            </h2>
            <p className="text-gray-400 text-xs md:text-sm mb-6">
                Curated highlights tailored for this persona.
            </p>

            {/* Changed from grid-cols-4 to lg:grid-cols-5 xl:grid-cols-6 to make cards smaller, matching Row item sizes approximately */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {items.map((item) => (
                    (item.link ? (
                        <a key={item.id || item.title} href={item.link}>
                            <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-20">
                                <div className="rounded-md overflow-hidden bg-[#1a1a1a] shadow-lg">
                                    <div className="relative aspect-video w-full">
                                        {/* Image */}
                                        {item.imageUrl && !item.imageUrl.includes('placehold.co') ? (
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                className="object-cover w-full h-full"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-[#2f2f2f] flex items-center justify-center">
                                                {/* Fallback pattern or solid color */}
                                                {item.imageUrl && <img src={item.imageUrl} className="object-cover w-full h-full opacity-60" />}
                                            </div>
                                        )}

                                        {/* Badge/Icon Overlay (Blue badge in corner from screenshot) */}
                                        {item.isNew && (
                                            <div className="absolute top-2 left-2 text-[#3db5e6]">
                                                {/* Star or Badge Icon */}
                                            </div>
                                        )}
                                    </div>

                                    {/* Footer Bar */}
                                    <div className="px-3 py-2 flex items-center gap-2 bg-[#121212] border-t border-gray-800">
                                        {/* Tiny Icon */}
                                        {item.icon && <item.icon className="w-4 h-4 text-[#3db5e6]" />}
                                        <span className="text-sm md:text-xl font-bold text-white tracking-wide">
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ) : (
                        <div
                            key={item.id || item.title}
                            className="group relative cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-20"
                        >
                            <div className="rounded-md overflow-hidden bg-[#1a1a1a] shadow-lg">
                                <div className="relative aspect-video w-full">
                                    {/* Image */}
                                    {item.imageUrl && !item.imageUrl.includes('placehold.co') ? (
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-[#2f2f2f] flex items-center justify-center">
                                            {/* Fallback pattern or solid color */}
                                            {item.imageUrl && <img src={item.imageUrl} className="object-cover w-full h-full opacity-60" />}
                                        </div>
                                    )}

                                    {/* Badge/Icon Overlay (Blue badge in corner from screenshot) */}
                                    {item.isNew && (
                                        <div className="absolute top-2 left-2 text-[#3db5e6]">
                                            {/* Star or Badge Icon */}
                                        </div>
                                    )}
                                </div>

                                {/* Footer Bar */}
                                <div className="px-3 py-2 flex items-center gap-2 bg-[#121212] border-t border-gray-800">
                                    {/* Tiny Icon */}
                                    {item.icon && <item.icon className="w-4 h-4 text-[#3db5e6]" />}
                                    <span className="text-sm md:text-xl font-bold text-white tracking-wide">
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
}
