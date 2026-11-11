import React from "react";
import { motion } from "motion/react";
import { Button } from "../common/Button";
import { IllustratedPortrait } from "../common/IllustratedPortrait";

export const About: React.FC = () => {
  const stats = [
    { value: "2025", label: "BS Computer Science" },
    { value: "~1 Year", label: "Hands-on Experience" },
    { value: "9+", label: "Selected Projects" },
  ];

  const scrollToSkills = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const target = document.getElementById("skills");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (Character with Star & Tech Badges) */}
          <div
            className="lg:col-span-5 flex justify-center items-center order-1"
            data-aos="fade-right"
          >
            <IllustratedPortrait
              variant="about"
              className="max-w-[300px] sm:max-w-[360px] lg:max-w-[400px]"
            />
          </div>

          {/* Right Column (Text, Stats & Button) */}
          <div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2"
            data-aos="fade-left"
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#FF8500] tracking-tight">
              About Me
            </h2>

            {/* Paragraph Description */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-600 dark:text-[#A8B0C0] leading-relaxed font-normal max-w-xl">
              I am a React and MERN Stack Developer with professional experience
              as a Software Engineering Intern at Systems Limited. I build
              full-stack web applications using React.js, TypeScript, Node.js,
              Express, and MongoDB, with a focus on component-based
              architecture, secure authentication, REST API integration, and
              responsive design. I also develop AI-powered applications,
              integrating AI capabilities into practical software solutions.
            </p>

            <p className="mt-3 text-xs sm:text-sm text-gray-500 dark:text-[#A8B0C0]/90 leading-relaxed font-normal max-w-xl">
              I hold a BS in Computer Science from Lahore College for Women
              University (2021–2025) and the Meta Front-End Professional
              Certificate, with a focus on clean code, scalable solutions, and
              collaborative software development.
            </p>

            {/* Statistics Row */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg pt-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center lg:items-start"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#FF8500] tracking-tight whitespace-nowrap">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs text-gray-500 dark:text-[#A8B0C0] font-medium leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Learn More Button */}
            <div className="mt-8 sm:mt-10">
              <Button
                variant="secondary"
                size="md"
                href="#skills"
                onClick={scrollToSkills}
                id="about-learn-more-btn"
                className="min-w-[160px]"
              >
                Explore Skills
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
