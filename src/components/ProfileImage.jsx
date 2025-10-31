import React from "react";

function ProfileImage({ isVisible }) {
    return (
        <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative group">
                <div className="w-full max-w-md mx-auto">
                    <div className="relative border-4 border-green-500 rounded-2xl p-2 group-hover:border-green-400 transition-all duration-300">
                        <img 
                            src="/ayushProfile.jpg" 
                            alt="Ayush Image" 
                            className="w-full rounded-xl transition-all duration-500 group-hover:scale-105"
                        />

                        {/* Floating Decoration */}
                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-600/20 rounded"></div>
                        <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-600/20 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileImage;
