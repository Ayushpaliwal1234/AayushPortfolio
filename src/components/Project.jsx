import React from "react";
import AnimateElement from "./AnimateElement";
import Button from "./Button";
import ContentCard from "./ContentCard";
import {   Code, Github ,ExternalLink } from "lucide-react";

function Project(){

  const projects = [
    {
      id: 1,
      title: "FYIgpt",
      description:
        "A full-stack AI chat application built with React frontend and Node.js/Express backend. Integrated OpenRouter API for multi-model AI conversations, with MongoDB for persistent chat threads and markdown rendering.",
      image:
        "/FYIgpt.jpeg",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OpenRouter API",
        "REST API",
      ],
      category: "AI / Full Stack",
      featured: true,
      github: "https://github.com/Ayushpaliwal1234/FYIgpt",
    },
    {
      id: 2,
      title: "Zerodha Clone",
      description:
        "A modern trading platform inspired by Zerodha, built using React.js, Node.js, Express.js, and MongoDB. Includes user authentication, dynamic dashboard, and real-time market view with RESTful APIs.",
      image:
        "/Zerodha.jpeg",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs"],
      category: "Full Stack",
      featured: true,
      github: "https://github.com/Ayushpaliwal1234/Zerodha",
    },
    {
      id: 3,
      title: "Hotel Heaven",
      description:
        "A full-featured accommodation booking web app built using the MERN stack with EJS templating. Users can list, book, and manage properties securely with server-side rendering and MongoDB database.",
      image:
        "/hotelHeaven.jpg",
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "EJS"],
      category: "Full Stack",
      featured: true,
      github: "https://github.com/Ayushpaliwal1234/Airbnb",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built using React.js and TailwindCSS to showcase my projects, skills, and experiences. Features responsive design, smooth animations, and a modern dark theme interface.",
      image:
        "/portfolio.jpeg",
      technologies: ["React.js", "TailwindCSS", "JavaScript"],
      category: "Frontend",
      featured: true,
      github: "https://github.com/Ayushpaliwal1234/Portfolio",
    },
    {
      id: 5,
      title: "DSA & Competitive Coding",
      description:
        "Solved 450+ problems across Data Structures and Algorithms, enhancing my logic-building and problem-solving skills. Regularly practice coding challenges on platforms like LeetCode and Codolio to strengthen algorithmic thinking and code efficiency.",
      image: "/codolio.png",
      technologies: [
        "Java",
        "OOPs",
        "Problem Solving",
        "Algorithms",
        "Data Structures",
        "Competitive Programming"
      ],
      category: "Programming / Problem Solving",
      featured: true,
      github: "https://codolio.com/profile/AayushPaliwal"
    },
    {
      id: 6,
      title: "Weather App",
      description:
        "A responsive web application that provides real-time weather updates based on user’s location. Displays temperature, humidity, wind speed, and atmospheric pressure with clean UI and API integration.",
      image:
        "/Weather.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      category: "Frontend",
      featured: true,
      github: "https://github.com/Ayushpaliwal1234/Weather-App",
    },
  ];

    return(
       <section  id="projects" className="py-24 bg-slate-950 relative overflow-hidden">

         <AnimateElement />
        

        <div className="container mx-auto px-6 relative z-10">
          
          <ContentCard title={"Portfolio"} 
            heading={"Featured Projects"}
            description={"Here are some of my recent projects that showcase my skills and expertise"}
          ></ContentCard>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
              { projects.map((pro , index) => {
                   return (
                      <div
                        className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-1000 delay-600 overflow-hidden border border-slate-700 hover:border-green-500 hover:scale-105`}
                        style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                      >
                        <div className="relative overflow-hidden">
                          <img 
                          src= {pro.image} 
                          alt={pro.title}
                          className="w-full h-70 object-cover group-hover:scale-105 transition-all duration-300"
                           />
                        </div>

                        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <a href={pro.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
                            <Github className="w-4 h-4 text-gray-700" />
                          </a>
                          {/* <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
                            <ExternalLink className="w-4 h-4 text-gray-700" />
                          </button> */}
                        </div>

                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                              {pro.category}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                            {pro.title}
                          </h4>
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            {pro.description.substring(0, 100)}...
                          </p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {pro.technologies.map((tech, techindex) => {
                              return (
                                <span key={techindex} className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                  {tech}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                   );
              })}
          </div>

          <div className={`flex justify-center transition-all duration-1000 delay-1000 mt-7`}>
            <a href="https://github.com/Ayushpaliwal1234/" target="_blank" rel="noopener noreferrer">
             <Button content={"View All Projects"}></Button>
            </a>
          </div>
        </div>
       </section>
    );
}

export default Project;