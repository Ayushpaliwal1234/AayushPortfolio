import React from "react";

function ContentCard({ title , heading , description }){
    return (
          <div className="text-center mb-16 transition-all duration-1000">
            <p className="text-green-400 font-semibold text-lg mb-4">{title}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{heading}</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">{description}</p>
          </div>
    );
}

export default ContentCard;
