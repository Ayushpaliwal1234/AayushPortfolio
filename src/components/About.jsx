import React from "react";
import AnimateElement from "./AnimateElement";
import ProfileImage from "./ProfileImage";
import AboutContent from "./AboutContent";
import useScrollAnimation from "../hooks/useScrollAnimation";

function About() {
    const scrollToProjects = () => {
        const projectSection = document.getElementById('skills');
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const isVisible = useScrollAnimation("about");

    return (
        <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Animate background Element */}
            <AnimateElement />

            <div className="container mx-auto px-6 py-4">
                <div className="container px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-space">
                        {/* Left Image */}
                        <ProfileImage isVisible={isVisible} />

                        {/* Right Content */}
                        <AboutContent isVisible={isVisible} scrollToProjects={scrollToProjects} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
