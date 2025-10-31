import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimateElement from "./AnimateElement";
import ContentCard from "./ContentCard";
import Button from "./Button";
import {Send, Github, Linkedin,Twitter , Mail , Phone , MapPin } from "lucide-react";
import { AiOutlineBarChart } from "react-icons/ai";



function Contact(){

    const formRef = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    // 1️⃣ Send message to YOU
    emailjs
      .sendForm(
        "service_3lk8sjf",
        "template_d4jkpql", 
        formRef.current,
        "a1H8ZRuBVWX30XNwP"
      )
      .then(
        () => {
          // 2️⃣ Send auto reply to USER
          emailjs.sendForm(
            "service_3lk8sjf",
            "template_poahcoh", 
            formRef.current,
            "a1H8ZRuBVWX30XNwP"
          );

          alert("✅ Message sent successfully! A confirmation has been sent to your email.");
          formRef.current.reset();
        },
        (error) => {
          console.error("❌ FAILED...", error);
          alert("Something went wrong. Try again later.");
        }
      );
    }

    const details = [
        {
            icon: Mail,
            title: "Email",
            info: "ayushpaliwal2580@gmail.com",
        },
        {
            icon: Phone,
            title: "Phone",
            info: "+91 9860760482",
        },
        {
            icon: MapPin,
            title: "Location",
            info: "Vadodara, Gujarat, India",
        },
    ];

    return (
        <section id="contact" className="pb-22 py-24 bg-slate-900 relative overflow-hidden">
            <AnimateElement />

            <div className="container mx-auto px-6 relative z-10">

                <ContentCard title={"Get in Touch"} 
                heading={"Let's Work Together"}
                description={"Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life"}
                ></ContentCard>

                <div className="grid lg:grid-cols-2 gap-16">
                    <div className={`space-y-8 transition-all duration-1000`}>
                        <h3 className="text-2xl font-bold text-white mb-6 ">Contact Information</h3>

                        <p className="text-gray-300 leading-relaxed mb-8">
                        I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            {
                                details.map(( detail , index) => {
                                    return (
                                        <div
                                        key={index}
                                        className={`flex items-center gap-4 p-4 text-white bg-slate-900 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-green-500 group cursor-pointer transform hover:scale-105`}
                                        style={{ animationDelay: `${index * 200 + 300}ms` }}
                                        >
                                        <div className="w-10 h-10  bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 group-hover:rotate-6">
                                            <detail.icon className="w-6 h-6 " />
                                        </div>
                                        <div className="font-semibold  group-hover:text-gray-400 transition-all duration-300">
                                            <p>{detail.title}</p>
                                            <p className="text-gray-300 group-hover:text-gray-200 transition-all duration-300">{detail.info}</p>
                                        </div>
                                        </div>
                                    );
                                })
                            }
                        </div>

                        <div className={'pt-8 transition-all duration-1000 delay-900'}>
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Follow Me
                        </h4>
                        <div className="flex gap-4 ">
                            {[
                                { Icon: Github, href: "https://github.com/Ayushpaliwal1234" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/aayush-paliwal-/" },
                                { Icon: AiOutlineBarChart , href: "https://codolio.com/profile/AayushPaliwal" }
                            ].map((social, index) => {
                            return (
                                <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    'w-12 h-12 bg-slate-900  rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group border border-slate-700 hover:border-green-500 hover:scale-110 hover:rotate-6'
                                }
                                >
                                <social.Icon className="w-5 h-5 text-white" />
                                </a>
                            );
                            })}
                        </div>
                        </div>
                        
                    </div>
                     {/* contact from  */}
                     <div className="transition-all duration-1000 delay-300">
                          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 ">
                            <h3 className="text-2xl font-bold text-white mb-6"> Send Message</h3>
                            <form ref={formRef} onSubmit={sendEmail}>
                                <div className=" grid md:grid-cols-2 gap-2">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300 ">
                                            Full Name
                                        </label>
                                        <input type="text" 
                                            id="name"
                                            name="name"
                                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50"
                                            placeholder="your name"
                                            required
                                            />
                                    </div>
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300 ">
                                            Email-ID
                                        </label>
                                        <input type="email" 
                                            id="email"
                                            name="email"
                                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50"
                                            placeholder="email"
                                            required
                                            />
                                        </div>
                                    </div>
                                <div className="group mt-5">
                                        <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300 ">
                                            Subject
                                        </label>
                                        <input type="text" 
                                            id="subject"
                                            name="subject"
                                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50"
                                            placeholder="Project Discussion"
                                            required
                                            />
                                    </div>

                                    <div className="group mt-5">
                                        <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300 ">
                                            Message
                                        </label>
                                        <textarea 
                                            id="description"
                                            name="description"
                                            rows="4"
                                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50"
                                            placeholder="tell me about your project"
                                            required
                                            />
                                    </div>
                                    {/* <Button 
                                    content={
                                        <>
                                        Send Message <Send className="w-5 h-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1 " />
                                        </>
                                    }
                                    className="w-full mt-5 group justify-center">
                                        
                                    </Button> */}
                                    <Button
                                        type="submit"
                                        content={
                                            <>
                                            Send Message{" "}
                                            <Send className="w-5 h-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
                                            </>
                                        }
                                        className="w-full mt-5 group justify-center"
                                        />
                            </form>
                          </div>  
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Contact;