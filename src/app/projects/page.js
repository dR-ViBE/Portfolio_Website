'use client';

import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
// skillsData import removed as icons are no longer needed

export default function ProjectsPage() {

    const githubRepoUrl = "https://github.com/dR-ViBE?tab=repositories";

    // 6 Projects Data with specific links and images
    const projects = [
        {
            id: 1,
            title: "Podcast Agent",
            description: "LangGraph-based autonomous agent that converts blog URLs into infotainment podcasts using Llama 3.1 for scripting and ElevenLabs API for audio synthesis with self-correcting quality loops.",
            tags: ["Python", "LangGraph", "LangChain", "Groq", "ElevenLabs"],
            github: "https://github.com/dR-ViBE/Blog-to-Podcast-Agent",
            image: "/Projects/podcast_agent.jfif"
        },
        {
            id: 2,
            title: "Netflix-Inspired Portfolio",
            description: "A cinematic single-page experience inspired by Netflix where visitors pick a persona tile and explore projects, recommendations, AMA responses, and more backed by Supabase + Gemini.",
            tags: ["React", "TypeScript", "Supabase", "Gemini"],
            github: "https://github.com/dR-ViBE/Portfolio_Website",
            image: "/Projects/Portfolio.PNG"
        },
        {
            id: 3,
            title: "TransLingua",
            description: "Hybrid computer vision system for real-time ASL recognition that dynamically switches between CNN-based and LSTM-based temporal models using MediaPipe and motion-aware inference logic.",
            tags: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "CNN", "LSTM"],
            github: "https://github.com/dR-ViBE/TransLingua",
            image: "/Projects/TransLingua.jfif"
        },
        {
            id: 4,
            title: "Fake-Job-Detection-using-DeepLearning",
            description: "Hybrid NLP and deep-learning system for automated detection of fraudulent job postings, using feature engineering, and comparative evaluation of classical and neural classification approaches.",
            tags: ["Python", "Pandas", "Keras", "NumPy"],
            github: "https://github.com/dR-ViBE/Fake-Job-Detection-using-DeepLearning",
            image: "/Projects/Fake_Job_Detection.png"
        },
        {
            id: 5,
            title: "GenAI_Text_Summarization",
            description: "Neural sequence-to-sequence text summarization system built on legislative documents, implementing and evaluating multiple encoder–decoder architectures to generate concise, high-quality summaries.",
            tags: ["Python", "Hugging Face Transformers", "TensorFlow", "Keras"],
            github: "https://github.com/dR-ViBE/GenAI_Text_Summarization",
            image: "/Projects/GenAI_Text_model.png"
        },
        {
            id: 6,
            title: "Personalised-Job-Recommendation-System",
            description: "End-to-End job recommendation system that transforms large-scale LinkedIn job data into personalized role suggestions through advanced machine-learning models delivered via a production-ready web interface.",
            tags: ["Python", "pandas", "Scikit-Learn", "Flask"],
            github: "https://github.com/dR-ViBE/Personalised-Job-Recommendation-System",
            image: "/Projects/Job_Recommendation_model.png"
        }
    ];

    return (
        <div className="min-h-screen bg-[#141414] text-white overflow-x-hidden relative p-8 pb-32">

            {/* Back Button */}
            <div onClick={() => window.location.href = '/?profile=Recruiter'} className="fixed top-8 left-8 z-50 cursor-pointer group">
                <div className="p-3 rounded-full bg-[#141414] border border-gray-700 transition-all duration-300 group-hover:border-red-600 group-hover:scale-110">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* HEADER SECTION */}
            <div className="max-w-7xl mx-auto pt-24 mb-16 flex flex-col md:flex-row justify-between items-end border-b border-gray-800 pb-8 gap-6">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Builds & Experiments</h1>
                    <p className="text-gray-400 max-w-2xl">
                        More shipping logs, hackathon artifacts, and AI experiments live on my GitHub.
                    </p>
                </div>

                <a
                    href={githubRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#e50914] hover:bg-[#b00710] text-white font-bold rounded flex items-center gap-2 transition-all shadow-lg hover:shadow-red-900/40"
                >
                    <Github className="w-5 h-5 fill-white" />
                    Explore GitHub
                </a>
            </div>

            {/* SPOTLIGHT BUILDS GRID */}
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Spotlight Builds</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group bg-[#181818] rounded-md overflow-hidden border border-red-900/30 hover:border-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 hover:scale-105 flex flex-col h-full"
                        >
                            {/* Image Area */}
                            <div className="h-48 overflow-hidden relative border-b border-gray-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent opacity-60"></div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">{project.title}</h3>
                                    <span className="text-xs text-gray-500">★ 0</span>
                                </div>

                                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags - Icons Remvoed */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-300 border border-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-[#e50914] text-white text-sm font-bold rounded flex items-center gap-2 hover:bg-[#b00710] transition-colors"
                                    >
                                        <Github className="w-4 h-4 fill-white" />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
}
