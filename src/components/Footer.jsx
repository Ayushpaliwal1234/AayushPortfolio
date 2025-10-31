import React from "react";
import AnimateElement from "./AnimateElement";
import { ArrowUp , Heart, Linkedin , } from "lucide-react";
function Footer(){

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-slate-900 p-10">
            <AnimateElement />
            <div className="container mx-auto px-6 relative z-10">
            <div className="flex  md:flex-row md:text-start text-center justify-between items-center">
                <div className="mb-6 md:mb-0">
                <div className="text-2xl font-bold mb-2 group cursor-pointer">
                    <span className="text-green-500 group-hover:text-green-400 transition-all duration-300">
                    Aayush
                    </span>
                    <span className="text-white group-hover:text-green-400 transition-all duration-300">
                    Paliwal
                    </span>
                    <span className="text-green-500 group-hover:text-green-400 transition-all duration-300">
                    .
                    </span>
                </div>
                <p className="text-gray-400 hover:text-gray-300 transition-all duration-300">
                    Full Stack Developer & UI/UX Designer
                </p>
                </div>
                <div className="flex items-center gap-8">
                {/* <div className="flex items-center gap-2 text-gray-400">
                    <span>Made With</span>
                    <Heart className="w-4 h-4 text-green-500 fill-current" />
                    <span>by Aayush Paliwal</span>
                </div> */}
                <button onClick={scrollToTop} className="w-10 h-10 bg-green-600 rounded-full flex justify-center items-center hover:bg-green-700 transition-all duration-300 hover:scale-110 hover:rotate-12 group">
                    <ArrowUp className="w-5 h-5 text-white" />
                </button>
                </div>
            </div>
            {/* <div>
                <a href="https://www.linkedin.com/in/aayush-paliwal-/"> <Linkedin />Linkdin</a>
            </div> */}
            </div>
            <div className="mt-8 text-gray-500 text-sm text-center"> 
                    &copy;{new Date().getFullYear()} Aayush Paliwal. All rights reserved.
            </div>

         </footer>
    );
}

export default Footer;