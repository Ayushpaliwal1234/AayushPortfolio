import React, { useState } from "react";
import AnimateElement from "./AnimateElement";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Skills(){
    const [animateSkills, setAnimateSkills] = useState({});

    const skills = [
        { name: "React.js", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "JavaScript", level: 70 },
        { name: "HTML/CSS", level: 80 },
        { name: "MongoDB", level: 70 },
        { name: "Java", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "Git & GitHub", level: 60 },
        { name: "DSA & OOP", level: 80 },
        // { name: "Responsive UI/UX", level: 78 },
    ];
    const isVisible = useScrollAnimation("skills");
    if(isVisible){
         skills.forEach((element, index) => {
            setTimeout(() => {
                setAnimateSkills((prev) => ({
                ...prev,
                [element.name]: element.level,
                }));
            }, index * 200);
            });
    }

    const education = [
    {
        year: "2022–2026",
        title: "Bachelor of Technology in Computer Science",
        institution: "Parul University, Vadodara, Gujarat",
        description:
        "Currently pursuing a B.Tech in Computer Science with a 7.43 SGPA. Coursework focuses on software engineering, algorithms, and full-stack web development.",
    },
    {
        year: "2020–2022",
        title: "Higher Secondary Education (PCM)",
        institution: "ASC College, Chopda, Maharashtra",
        description:
        "Completed 12th grade with Physics, Chemistry, and Mathematics, achieving 75.17%. Built a strong foundation in analytical and logical problem-solving.",
    },
    ];


    const experience = [
    {
        year: "May 2025 – July 2025",
        title: "Front-End Developer (Internship)",
        company: "Teklozy — E-Learning / EdTech, Hyderabad, Telangana",
        description:
        "Developed 10+ reusable React components to enhance UI efficiency and maintainability. Built responsive layouts using HTML, CSS, and JavaScript for cross-device compatibility, and integrated RESTful APIs for dynamic data rendering.",
    },
    {
        year: "May 2023 – Present",
        title: "Member — The Coder’s Den",
        company: "Parul University",
        description:
        "Active member of the university’s programming club, practicing DSA and competitive programming. Solved 400+ problems on LeetCode to strengthen logical and analytical skills.",
    },
    ];

    return (
            <section id="skills"  className="py-20 bg-slate-900 relative overflow-hidden">
                <AnimateElement />

                <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Education */}
                    <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                    <div className="mb-12">
                        <p className="text-green-400 font-semibold text-lg mb-4">
                        Qualification
                        </p>
                        <p className="text-green-400 text-4xl font-bold mb-8">
                        Education
                        </p>
                    </div>
                    <div  id="experience" className="space-y-8">{
                    education.map((edu , index) => {
                        return <div key={index} className={`border-l-4 border-green-500 pl-6 relative group transition-all duration-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                            <p className="text-green-400 text-sm font-semibold mb-2 hover:text-green-300 transition-all duration-300">{edu.year}</p>
                           <h3 className="text-xl font-black text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                            {edu.title}
                            </h3>
                            <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-all duration-300">
                            {edu.institution}
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-all duration-300">
                            {edu.description}
                            </p> 
                        </div>
                    })    
                    }
                    </div>

                    <p className="text-green-400 text-4xl font-bold mt-10"> Experience</p>

                     <div  className="space-y-8 mt-10">{
                    experience.map((exp , index) => {
                        return <div  key={index} className={`border-l-4 border-green-500 pl-6 relative group transition-all duration-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                            <p className="text-green-400 text-sm font-semibold mb-2 hover:text-green-300 transition-all duration-300">{exp.year}</p>
                           <h3 className="text-xl font-black text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                            {exp.title}
                            </h3>
                            <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-all duration-300">
                            {exp.company}
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-all duration-300">
                            {exp.description}
                            </p> 
                        </div>
                    })    
                    }
                    </div>
                    </div>
                    {/* Right Progress */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                    <div className="mb-12">
                        <p className="text-green-400 font-semibold text-lg mb-4">
                        Expert
                        </p>
                        <p className="text-4xl font-black text-white mb-8">My Skills</p>
                    </div>
                    <div className="space-y-6">{
                        skills.map((s , index) => {
                            return <div key={index} className="space-y-2 transition-all duration-1000">
                                <div  className="flex justify-between items-center">
                                    <span className="text-white font-medium group-hover:text-green-400 transition-all duration-300"> {s.name}</span>
                                    <span className=" text-green-400 font-semibold group-hover:text-green-300 transition-all duration-300" > {s.level}</span>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden ">
                                    <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-500 ease-out relative " 
                                    // style={{ width: `${s.level}%` }}
                                     style={{ width: `${animateSkills[s.name] || 0}%` }}
                                    >
                                        <div className=" absolute inset-0 bg-white/20"></div>
                                    </div>
                                </div>
                            </div>
                        })  
                    }
                    </div>
                    </div>
                </div>
                </div>

            </section>
    );
}

export default Skills;