import { ArrowRight , Play , Github , Linkedin , Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineBarChart } from "react-icons/ai";

import SocialIcon from "./SocialIcon";

function Hero(){

    const [isVisible , setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, [])

     const scrollTodown = () => {
        window.scrollTo({
            top: 812,
            behavior: "smooth",
        });
    };
    return (
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-900
        pt-20 relative overflow-hidden">
        
            <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* left content  */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className={`text-green-400 font-semibold text-lg transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                            >
                                Get ready to Start Work
                            </p>
                            <h1 className={`text-5xl md:text-7xl font-black text-white leading-tight transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                                I'm
                                <span className="text-green-400"> Developer</span> <br />
                                <span className="text-white">Aayush Paliwal</span>
                            </h1>
                            <p className={`text-gray-300 text-lg leading-relaxed max-w-lg transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>Final-year Computer Science student and Full Stack Developer skilled in React.js, Node.js, and REST APIs. Solved 450+ DSA problems — combining strong problem-solving with scalable web development expertise.
                            </p>
                        </div>
                       <div className={`flex flex-wrap gap-5 pt-4 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                         <button  onClick={scrollTodown}  className="bg-green-600 text-white px-6 py-6 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl font-medium hover:scale-105">
                            LEARN MORE <ArrowRight className=" ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                         </button>

                        
                        {/* <button className="border-2 border-slate-600 text-white px-8 py-4 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium flex items-center gap-2 group hover:scale-105">
                        <Play className="w-5 h-5" /> PLAY VIDEO  
                        </button> */}
                       </div>

                       <div className={`flex gap-4 pt-6 transition-all duration-100 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                            {/* Github */}
                            <SocialIcon href="https://github.com/Ayushpaliwal1234" Icon={Github} />
                             {/* linkedin */}
                            <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/aayush-paliwal-/"/>
                            {/* leetcode  */}
                            <SocialIcon Icon={SiLeetcode} href="https://leetcode.com/u/2203031050872/"/>
                            {/* codolio  */}
                            <SocialIcon Icon={ AiOutlineBarChart} href="https://codolio.com/profile/AayushPaliwal"/>
                             {/* mail */}
                            <SocialIcon Icon={Mail} href="mailto:ayushpaliwal828@gmail.com" />
                       </div>
                    </div>

                    
                    {/* right content  */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="relative">
                            <div className="w-full max-w-lg mx-auto">
                                <div className=" relative group">
                                    <img src="/ayushProfile.jpg" alt="Profile Photo" className="w-full rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-600 rounded-e-2xl opacity-10"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
                    </div>

                </div>
            </div>

        </section>
    );
}    

export default Hero;