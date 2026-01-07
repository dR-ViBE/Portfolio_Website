'use client';

import { ArrowLeft, Briefcase, GraduationCap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperiencePage() {

    // Uniform Text Content for Work Boxes as requested
    const genericWorkContent = {
        role: 'Software Developer Intern (STEP)',
        company: 'Google',
        location: 'New York, NY',
        skills: 'C++ | Chromium | TypeScript | Gemini LLM | Jasmine | Privacy Sandbox',
        description: [
            'Developed a Gemini-powered Chrome extension to analyze and summarize privacy policies in real time while maintaining strict on-device safety.',
            'Built 30+ Jasmine tests and a custom evaluation pipeline benchmarking five LLM prompts against 30 production policies, reducing hallucinations by 25%.',
            'Improved debugging workflows in the Privacy Sandbox by contributing C++ enhancements to Chromium.'
        ]
    };

    const timelineData = [
        {
            id: 1,
            type: 'work',
            role: 'Research Assistant',
            company: 'State University of New York - Buffalo',
            location: 'Buffalo, NY',
            skills: 'Python | CUDA | PyTorch | COLMAP | Conda | Git | Ubuntu',
            description: [
                'Optimized a high-fidelity 3D reconstruction pipeline by fusing NeRF research code with multi-view stereo; ported and debugged research prototypes for CUDA-enabled workstations to improve training stability and runtime performance.',
                'Implemented production-grade utilities to extract depth/disparity, generate point clouds, normal maps and triangle meshes from real capture datasets; authored end-to-end pipeline documentation and presentation-ready evaluation reports for stakeholders'
            ],
            color: 'blue',
            date: 'May 2025 - Present'
        },
        {
            id: 2,
            type: 'work',
            role: 'Graduate Assistant',
            company: 'State University of New York - Buffalo',
            location: 'Buffalo, NY',
            skills: 'Python | Apache Spark | Hadoop | MapReduce | Kafka | Pandas | Scikit-Learn',
            description: [
                'Facilitated academic success for 200+ students in Data Intensive Computing (CSE 587) by collaborating with faculty to simplify complex concepts regarding distributed systems and large-scale data processing.',
                'Managed comprehensive assessment cycles for assignments and projects, providing targeted technical feedback that significantly enhanced student mastery of big data architectures and engineering frameworks.'
            ],
            color: 'white',
            date: 'Sep 2024 - Dec 2024'
        },
        {
            id: 3,
            type: 'work',
            role: 'Associate Software Engineer',
            company: 'Hexaware Technologies',
            location: 'Chennai, India',
            skills: 'Java | GOSU | Guidewire PolicyCenter | REST API | Jenkins | JIRA | Agile',
            description: [
                'Integrated third-party VIN services and customized Refresh/Retrieve flows to auto-populate vehicle and policy data from external rating engines, reducing manual entry errors and effort by 30%.',
                'Configured SmartCOMM integration with Guidewire PolicyCenter: coded document triggers and data-field mappings to automate generation of policy schedules and endorsement letters, reducing manual document prep time by 25%.',
                'Developed 10+ PCF views/pages for endorsements and mid-term adjustments to improve user navigation and cut support tickets by 18% while ensuring regulatory compliance.',
                'Built and maintained Jenkins jobs for PolicyCenter deployments to Dev and QA; monitored CI pipelines and alerted teams on failures, contributing to a 20% reduction in deployment downtime.',
                'Formulated test plans and reports suitable for automation, increasing QA throughput by 45%; led cross-team JIRA triage in an agile setup to identify 50+ critical/high issues and prevent post-deployment incidents'
            ],
            color: 'white',
            date: 'Mar 2023 - Nov 2023'
        },
        {
            id: 4,
            type: 'work',
            role: 'Full Stack Developer Intern',
            company: 'Hexaware Technologies',
            location: 'Chennai, India',
            skills: 'Java | Gosu | React | MySQL | Azure | Guidewire',
            description: [
                'Guidewire Skill upgrade: Gained hands on experience and acquired 15+ certifications in Guidewire Technology, Gosu, Java and Azure.',
                'Developed an end to end web based Patient Management System to streamline patient data tracking and management using Java, MySQL and React.',
                'Enabled CRUD operations for patient records, appointment scheduling and role-based access control, integrated dynamic dashboards for tracking patient flow.'
            ],
            color: 'white',
            date: 'Oct 2022 - Feb 2023'
        },
        {
            id: 5,
            type: 'education',
            role: "Master's of Science in Computer Science",
            company: 'SUNY',
            location: 'Buffalo, NY',
            skills: 'AI/ML Specialization',
            description: ['GPA: 3.6/4.0', 'Relevant Coursework: ML, Algorithms, OS, DIC'],
            color: 'pink',
            date: 'Sep 2021 - May 2025'
        },
        {
            id: 6,
            type: 'education',
            role: 'Bachelor of Science in Computer Science',
            company: 'Anna University',
            location: 'Chennai, India',
            skills: 'CS Specialization',
            description: ['GPA: 8.1/10.0', 'Relevant Coursework: Data Structures, Cloud Computing, Distributed Systems'],
            color: 'pink',
            date: 'Sep 2017 - May 2021'
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8 overflow-x-hidden relative">

            {/* Back Button - Fixed Top Left (Hard navigation to restore Dashboard state) */}
            <div onClick={() => window.location.href = '/?profile=Recruiter'} className="fixed top-8 left-8 z-50 cursor-pointer group">
                <div className="p-3 rounded-full bg-[#141414] border border-gray-700 transition-all duration-300 group-hover:border-red-600 group-hover:scale-110">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </div>
            </div>

            <h1 className="text-2xl md:text-5xl font-bold text-center mb-16 mt-8 tracking-wide">
                Experience & Education Timeline
            </h1>

            <div className="max-w-7xl mx-auto pb-20 relative">

                {/* Continuous Vertical Line Background */}
                {/* Positioned absolute in the center of the container, behind the grid items */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-20 w-1 bg-gray-700 transform -translate-x-1/2 z-0"></div>

                {/* Timeline Items */}
                {timelineData.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    // Card Styling
                    let cardBg = 'bg-white text-black';
                    let iconBg = 'bg-[#3db5e6]'; // Default Blue
                    let Icon = Briefcase;

                    if (item.color === 'blue') {
                        cardBg = 'bg-[#3db5e6] text-black';
                        iconBg = 'bg-[#3db5e6]';
                    } else if (item.color === 'pink') {
                        cardBg = 'bg-pink-200 text-black';
                        iconBg = 'bg-pink-400';
                        Icon = GraduationCap;
                    }

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            // The Grid: Left Col | 80px Center | Right Col
                            className="grid grid-cols-[1fr_50px] md:grid-cols-[1fr_80px_1fr] gap-x-4 md:gap-x-0 items-start mb-12"
                        >
                            {/* LEFT COLUMN */}
                            <div className="hidden md:flex justify-end pr-8">
                                {isLeft ? (
                                    /* CONTENT CARD on Left */
                                    <CardContent item={item} cardBg={cardBg} isLeft={isLeft} />
                                ) : (
                                    /* DATE on Left (aligned right) */
                                    <div className="mt-5 text-gray-400 font-bold text-xl text-right">
                                        {item.date}
                                    </div>
                                )}
                            </div>

                            {/* CENTER COLUMN (Icon) */}
                            {/* Flex center to hold the icon. z-10 to sit above line. */}
                            <div className="relative flex justify-center z-10">
                                {/* Icon Circle - 56px (w-14) */}
                                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-black flex items-center justify-center bg-white`}>
                                    <div className={`w-full h-full rounded-full flex items-center justify-center text-white ${iconBg}`}>
                                        <Icon className="w-5 h-5 md:w-7 md:h-7" />
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN */}
                            <div className="flex justify-start pl-0 md:pl-8">
                                {isLeft ? (
                                    /* DATE on Right (aligned left) (Desktop) */
                                    <div className="hidden md:block mt-5 text-gray-400 font-bold text-xl text-left">
                                        {item.date}
                                    </div>
                                ) : (
                                    /* CONTENT CARD on Right (Desktop) */
                                    <div className="hidden md:block w-full">
                                        <CardContent item={item} cardBg={cardBg} isLeft={isLeft} />
                                    </div>
                                )}

                                {/* MOBILE CONTENT (Right col in generic grid) */}
                                <div className="md:hidden w-full">
                                    <div className="text-gray-400 text-sm mb-2 font-bold">{item.date}</div>
                                    <CardContent item={item} cardBg={cardBg} isLeft={false} isMobile={true} />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Start Node (Green Star) */}
                <div className="flex justify-center relative z-10 pt-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-black bg-green-500 flex items-center justify-center animate-bounce">
                        <Star className="w-6 h-6 md:w-8 md:h-8 text-white fill-current" />
                    </div>
                </div>

            </div>
        </div>
    );
}

// Reusable Card Component
function CardContent({ item, cardBg, isLeft, isMobile }) {
    // Arrow positioning
    // Icon is 56px (h-14). Center is 28px.
    // Card is inside a div.
    // We want arrow point to be at ~28px from top of Card container?
    // Actually, Card moves with content. If we put arrow absolute on Card, we adjust 'top'.
    // Let's set arrow top to 20px (visually aligned with icon center which is at top:0 relative to row, but row items-start).
    // Icon has no top margin. Card has no top margin.
    // Icon height 56px. Center 28px.
    // Arrow height ~10px tip.
    // Top 20px means center of arrow is 25px-30px? 

    return (
        <div className={`relative p-6 rounded-lg shadow-xl ${cardBg} w-full md:max-w-xl group hover:scale-[1.02] transition-transform duration-300`}>
            {/* Arrow */}
            <div className={`absolute w-5 h-5 rotate-45 ${cardBg} z-10 top-[20px] 
                 ${isMobile ? '-left-2' : (isLeft ? '-right-2' : '-left-2')}
             `}></div>

            <h3 className="text-xl font-bold mb-1">{item.role}</h3>
            <div className="font-semibold text-base mb-2">{item.company} — {item.location}</div>
            {item.skills && <div className="text-xs font-mono opacity-80 mb-4">{item.skills}</div>}

            <ul className={`list-disc space-y-2 text-sm ml-5 ${isLeft && !isMobile ? 'rtl' : ''}`}>
                {item.description.map((desc, i) => (
                    <li key={i} className={`leading-snug ${isLeft && !isMobile ? 'text-right' : ''} dir-ltr`}>
                        {/* Reset dir for text content if needed, basically just want bullet on right? RTL handles that. */}
                        {/* Actually, for English text, RTL list might be weird. Let's just keep LTR list for readability unless user asked for RTL alignment specifically. 
                            Users screenshot showed LTR text even in Left box. 
                            I'll remove RTL unique styling to keep it clean, just right align container?
                        */}
                        <span className="text-left block direction-ltr">{desc}</span>
                    </li>
                ))}
            </ul>

            {/* Simple LTR override improvement */}
        </div>
    );
}
