'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Play, Heart, MoreHorizontal, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MusicPage() {

    // Music Chips Data
    const loops = [
        { id: 1, name: 'Afrobeats' },
        { id: 2, name: 'Alte' },
        { id: 3, name: 'Neo-Soul' },
        { id: 4, name: 'Hip-Hop' },
        { id: 5, name: 'Focus Instrumentals' },
    ];

    // Albums on Repeat Data
    const albums = [
        { id: 1, title: "I Told Them...", artist: "Burna Boy", cover: "https://i.scdn.co/image/ab67616d0000b2735767f40fc246197067060381" },
        { id: 2, title: "19 & Dangerous", artist: "Ayra Starr", cover: "https://i.scdn.co/image/ab67616d0000b273413554d3cd5543c8d1945195" },
        { id: 3, title: "Made in Lagos", artist: "Wizkid", cover: "https://i.scdn.co/image/ab67616d0000b273551d7c390508dfd76985287e" },
        { id: 4, title: "Heaven or Las Vegas", artist: "Cocteau Twins", cover: "https://i.scdn.co/image/ab67616d0000b273d43c2c4d8ce81dfce04da0e8" },
    ];

    // Spotify Playlists (Lofi as requested)
    const playlists = [
        { id: "0vvXsWCC9xrXsKd4FyS8kM", title: "Lofi Hip Hop - Beats to Relax/Study to" }, // Lofi Girl
        { id: "37i9dQZF1DX8Uebhn9wzrS", title: "Chill Lofi Study Beats" }, // Spotify Official
        { id: "35xI4hSJ8MdO1xkXwsd56a", title: "Lofi Fruits Music" }, // Lofi Fruits
    ];

    return (
        <div className="bg-[#000000] min-h-screen text-white font-sans selection:bg-red-900 selection:text-white pb-20">
            <Navbar />

            <div className="pt-24 px-4 md:px-12 max-w-6xl mx-auto space-y-16">

                {/* Header Back Button */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
                    <Link href="/?profile=Recruiter" className="p-2 bg-[#1a1a1a] rounded-full hover:bg-[#333] transition-colors block">
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </Link>
                </div>

                {/* Quote Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <div className="bg-[#111] border border-[#222] rounded-2xl p-8 md:p-12 text-center max-w-3xl relative overflow-hidden">
                        {/* Abstract Background Glow */}
                        <div className="absolute -top-20 -left-20 w-60 h-60 bg-red-900/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

                        <p className="text-lg md:text-xl text-gray-300 italic font-medium leading-relaxed">
                            "Soundtracking my grind with Afrobeats energy, experimental vibes, and anything that keeps late-night builds flowing."
                        </p>
                    </div>
                </motion.div>

                {/* What I'm Looping */}
                <section>
                    <h2 className="text-xl md:text-2xl font-bold text-center mb-8">What I'm looping</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {loops.map((genre, index) => (
                            <motion.div
                                key={genre.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-red-900/40 to-black border border-red-900/30 px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-red-900/10 cursor-default"
                            >
                                {genre.name}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Albums on Repeat */}
                <section>
                    <h2 className="text-xl md:text-2xl font-bold text-center mb-8">Albums on repeat</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {albums.map((album, index) => (
                            <motion.div
                                key={album.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#121212] rounded-xl overflow-hidden group hover:bg-[#1a1a1a] transition-all duration-300"
                            >
                                <div className="relative aspect-square overflow-hidden">
                                    <img
                                        src={album.cover}
                                        alt={album.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <Play className="w-6 h-6 text-black fill-black ml-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-white truncate">{album.title}</h3>
                                    <p className="text-sm text-gray-400 truncate mt-1">by {album.artist}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Listen With Me (Spotify Embeds) */}
                <section>
                    <h2 className="text-xl md:text-2xl font-bold text-center mb-8">Listen With Me</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {playlists.map((playlist, index) => (
                            <motion.div
                                key={playlist.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#121212] rounded-xl overflow-hidden border border-[#222]"
                            >
                                <iframe
                                    style={{ borderRadius: '12px' }}
                                    src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator&theme=0`}
                                    width="100%"
                                    height="352"
                                    frameBorder="0"
                                    allowFullScreen=""
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                ></iframe>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
