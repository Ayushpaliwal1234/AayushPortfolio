import React from "react";
import Button from "./Button";

function AboutContent({ isVisible, scrollToProjects }) {
    const personalInfo = [
        { label: "Name", value: "Aayush Paliwal" },
        { label: "Location", value: "mumbai, Maharashtra" },
        { label: "Birthday", value: "7 August 2004" },
        { label: "Email", value: "ayushpaliwal2580@gmail.com" },
    ];

    return (
        <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="space-y-4">
                <p className="text-green-400 font-semibold text-lg">About Us</p>
                <h2 className="text-4xl md:text-5xl text-white font-bold animate-slide-up"> 
                    Why hire me for you <br />
                    <span>next project?</span>
                </h2>
                <p className="text-green-400 font-semibold delay-200">Full Stack Developer</p>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
                <p className={`text-lg transition-all duration-100 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                    I'm a passionate Full Stack Developer experienced in building modern, responsive, and scalable web applications using React.js, Node.js, Express.js, and MongoDB.
                </p>
                <p className={`transition-all duration-100 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                    With 450+ DSA problems solved, I've developed strong problem-solving and algorithmic thinking that help me write clean, efficient, and maintainable code. I love turning ideas into smooth, functional, and visually appealing digital experiences that users enjoy.
                </p>
            </div>

            <div className={`grid grid-cols-2 gap-8 py-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                {personalInfo.map((item, index) => (
                    <div key={index} className="group">
                        <p className="text-white font-semibold transition-all duration-300 group-hover:text-green-400">
                            {item.label}:
                        </p>
                        <p className="text-gray-300">{item.value}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-4 transition-all duration-1000 delay-1100">
                <Button content={"DOWNLOAD"}></Button>
                
                <button 
                    className="border-2 border-slate-400 text-white px-8 py-3 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium hover:scale-105"
                    onClick={scrollToProjects}
                >
                    LEARN MORE
                </button>
            </div>
        </div>
    );
}

export default AboutContent;
