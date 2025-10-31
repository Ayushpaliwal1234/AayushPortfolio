import React from "react";

// eslint-disable-next-line no-unused-vars
function SocialIcon({ Icon, href }) {
    return (
          <a href={href} target="_blank" className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center  hover:bg-green-600 hover:text-white transition-all duration-300 group hover:rotate-6">
            <Icon className="w-5 h-5"/>   
         </a>
    );
}

export default SocialIcon;