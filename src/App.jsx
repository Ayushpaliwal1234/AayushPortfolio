import React from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App(){
   return (
     <div className="bg-gray-500">
         <Header />
         <Hero />
         <About />
         <Skills />
         <Project />
         {/* <Experience /> */}
         <Contact />
         <Footer />
     </div>
    );
}

export default App;