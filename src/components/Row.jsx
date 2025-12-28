'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Row({ title, items }) {
    const rowRef = useRef(null);
    const [isMoved, setIsMoved] = useState(false);

    const handleClick = (direction) => {
        setIsMoved(true);
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo =
                direction === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="h-44 space-y-0.5 md:space-y-2 px-4 md:px-12 mb-8 md:mb-12 relative z-10">
            <h2 className="w-max cursor-pointer text-sm font-bold text-[#3db5e6] transition duration-200 hover:text-white md:text-2xl mb-4">
                {title}
            </h2>

            <div className="group relative md:-ml-2">
                <ChevronLeft
                    className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && 'hidden'
                        }`}
                    onClick={() => handleClick('left')}
                />

                {/* Row Container */}
                <div
                    ref={rowRef}
                    className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 py-4" // Added py-4 to allow scaling space vertically
                >
                    {items.map((item) => (
                        <div
                            key={item.id || item.title}
                            className="relative h-28 min-w-[180px] cursor-pointer transition duration-300 ease-out md:h-36 md:min-w-[260px] hover:scale-110 hover:z-50 rounded-sm"
                        // hover:z-50 ensures the scaled card is above others
                        >
                            {/* Card Content */}
                            <div className="relative h-full w-full rounded-sm overflow-hidden bg-[#2f2f2f] flex items-center justify-center group/card">
                                {/* Item Image */}
                                {item.imageUrl && !item.imageUrl.includes('placehold.co') ? (
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="object-cover w-full h-full"
                                    />
                                ) : null}

                                {/* Placeholder / Icon Logic */}
                                {(item.imageUrl && item.imageUrl.includes('placehold.co')) || (!item.imageUrl) ? (
                                    <>
                                        {item.imageUrl && (
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                className="object-cover w-full h-full opacity-60"
                                            />
                                        )}

                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center z-10">
                                            {item.icon && <item.icon className="h-8 w-8 text-white mb-2" />}
                                            <span className="text-white font-bold text-shadow-md">{item.title}</span>
                                        </div>
                                    </>
                                ) : null}

                                {/* Hover Project Overlay (Optional: Netflix shows info on hover) */}
                                {/* For now just the scale is fine, but we could add a gradient overlay on hover */}
                            </div>
                        </div>
                    ))}
                </div>

                <ChevronRight
                    className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
                    onClick={() => handleClick('right')}
                />
            </div>
        </div>
    );
}
