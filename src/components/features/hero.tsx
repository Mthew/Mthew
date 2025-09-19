"use client";

import React from "react";
import SplitText from "@/components/text-effect/SplitText";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import Silk from "../backgrounds/Silk";
import RotatingText from "../text-effect/RotatingText";

const Hero: React.FC = () => {
  const handleNameAnimationComplete = () => {
    console.log("Name animation completed!");
  };

  const handleDownloadCV = () => {
    console.log("Download CV clicked");
    window.open("/assets/CV_MTHEW.pdf", "_blank");
  };

  const handleContactMe = () => {
    console.log("Contact Me clicked");
    window.location.href = "mailto:dev.thew.ai@gmail.com";
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Silk
          speed={2}
          scale={0.9}
          color="#5227ff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Name */}
        <div className="mb-6">
          <SplitText
            text="Mthew"
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white"
            delay={100}
            duration={1.2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 60, rotationX: 90 }}
            to={{ opacity: 1, y: 0, rotationX: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="center"
            tag="h1"
            onLetterAnimationComplete={handleNameAnimationComplete}
          />
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="flex justify-center align-items-center text-lg md:text-xl lg:text-2xl font-medium text-blue-300 whitespace-nowrap">
            <div className="flex items-center">
              Full-Stack Developer&nbsp;|&nbsp;
            </div>
            <RotatingText
              texts={[" Node.js", " React", " .NET", " AI Enthusiast"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-[#00BFFF] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-sm"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h1>
        </div>

        {/* Tagline */}
        <div className="mb-12">
          <p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            I turn complex ideas into reliable web & mobile applications using
            modern technologies and best practices.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        >
          <button
            onClick={handleDownloadCV}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[200px]"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>

          <button
            onClick={handleContactMe}
            className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-3 min-w-[200px]"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Contact Me
          </button>
        </div>

        {/* Quick Links */}
        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
        >
          <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider">
            Connect with me
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/mthew"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <div className="p-3 rounded-full border border-gray-600 group-hover:border-white group-hover:scale-110 transition-all duration-300">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-sm">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/mthew"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <div className="p-3 rounded-full border border-gray-600 group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-sm">LinkedIn</span>
            </a>

            <a
              href="mailto:dev.thew.ai@gmail.com"
              className="group flex flex-col items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              <div className="p-3 rounded-full border border-gray-600 group-hover:border-green-400 group-hover:scale-110 transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
