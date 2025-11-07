import { Download, Globe, Github, Linkedin, Mail, Plus, Minus, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Stock.ai",
    description: "AI Investment Platform",
    url: "Stock.ai",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/1679745e2a064970ed0aebce6c9889bcdf2e840e?width=865",
    role: "Lead UX/UI Designer",
    year: "2023",
    fullDescription: "A modern AI-powered investment dashboard designed to simplify financial decision-making. I led the UI/UX redesign focusing on clean aesthetics, thoughtful interactions, and meaningful insights visualization.",
    technologies: ["Figma", "React", "TypeScript"],
  },
  {
    id: 2,
    title: "TaskRio.com",
    description: "AI-powered Task Automation Tool",
    url: "TaskRio.com",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/5b39d1380b87784d13682daf309f7178611fa930?width=865",
    role: "Senior UX/UI Designer",
    year: "2023",
    fullDescription: "TaskRio is an intelligent task automation platform that helps teams streamline workflows. I designed the complete user interface with focus on usability, accessibility, and modern design patterns.",
    technologies: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    id: 3,
    title: "TaskRio.com",
    description: "Project Management Suite",
    url: "TaskRio.com",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/5b39d1380b87784d13682daf309f7178611fa930?width=865",
    role: "Product Designer",
    year: "2022",
    fullDescription: "Advanced project management interface with collaborative features. Designed with enterprise users in mind, ensuring scalability, intuitive navigation, and seamless team collaboration.",
    technologies: ["Figma", "Interaction Design", "User Research"],
  },
];

const skillsData = {
  core: [
    { emoji: "💚", label: "UI/UX DESIGN" },
    { emoji: "🎨", label: "VISUAL DESIGN" },
    { emoji: "🍫", label: "DESIGN SYSTEMS" },
    { emoji: "🧾", label: "WIREFRAMMING" },
    { emoji: "🧩", label: "PROTOTYPING" },
    { emoji: "🖱️", label: "INTERACTION DESIGN" },
    { emoji: "📂", label: "INFORMATION ARCHITECTURE" },
  ],
  research: [
    { emoji: "🔍", label: "USER RESEARCH" },
    { emoji: "📊", label: "DATA ANALYSIS" },
    { emoji: "💡", label: "IDEATION" },
    { emoji: "🎯", label: "STRATEGY" },
  ],
  tools: [
    { emoji: "🎨", label: "FIGMA" },
    { emoji: "🔧", label: "ADOBE XD" },
    { emoji: "⚙️", label: "PROTOPIE" },
    { emoji: "📱", label: "FRAMER" },
  ],
};

const experienceData = [
  {
    company: "MobiOffice Software Innovations Pvt Ltd",
    role: "Sr. UX/UI Designer",
    location: "Surat",
    period: "Jan, 2023 – Present",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/365f3f998ff4d9d1270faaff655f1802255b7959?width=107",
  },
  {
    company: "Byond.Studio",
    role: "UX/UI Designer",
    location: "Surat",
    period: "Jan, 2021 – Dec, 2022",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/4ebf8bb3eef43fb4ff10c0f03ed9c2ef478764cc?width=99",
  },
  {
    company: "ProEX Advisor LLP",
    role: "Internship, Graphics Designer",
    location: "Ahmedabad",
    period: "Nov, 2020 – Dec, 2020",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/b68dd5ac20b0500773cf6cc58b83d7913ab6ec8a?width=112",
  },
];

function DynamicInfo() {
  const [time, setTime] = useState("10:04 AM");
  const [weather, setWeather] = useState("14°C");
  const [location] = useState("Surat");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    const updateWeather = () => {
      const temp = Math.floor(Math.random() * (25 - 10) + 10);
      setWeather(`${temp}°C`);
    };

    updateTime();
    updateWeather();

    const timeInterval = setInterval(updateTime, 60000);
    const weatherInterval = setInterval(updateWeather, 300000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(weatherInterval);
    };
  }, []);

  return { time, weather, location };
}

export default function Index() {
  const [expandedSkills, setExpandedSkills] = useState<{ [key: string]: boolean }>({
    core: true,
    research: false,
    tools: false,
  });
  
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const dynamicInfo = DynamicInfo();

  const toggleSkill = (key: string) => {
    setExpandedSkills(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const socialLinks = [
    { icon: Github, url: "https://github.com/ghanshyampandav", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/ghanshyampandav", label: "LinkedIn" },
    { 
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
        </svg>
      ),
      url: "https://dribbble.com/ghanshyampandav",
      label: "Dribbble",
    },
    { 
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm0 2.16a9.84 9.84 0 110 19.68A9.84 9.84 0 0112 2.16zm0 3a6.84 6.84 0 100 13.68A6.84 6.84 0 0112 5.16z"/>
        </svg>
      ),
      url: "https://www.behance.net/ghanshyampandav",
      label: "Behance",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes rotateIcon {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(180deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        
        .skill-tag {
          transition: all 0.2s ease-out;
        }
        
        .skill-tag:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        
        .toggle-icon {
          transition: transform 0.3s ease-out;
        }
        
        .toggle-icon.rotated {
          transform: rotate(180deg);
        }
        
        .scroll-container {
          overflow-y: auto;
          overflow-x: hidden;
        }
        
        @media (min-width: 1024px) {
          .scroll-container {
            height: 100vh;
          }
        }
        
        .scroll-container::-webkit-scrollbar {
          width: 6px;
        }
        
        .scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scroll-container::-webkit-scrollbar-thumb {
          background: #D4D4D8;
          border-radius: 3px;
        }
        
        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: #A1A1A5;
        }
        
        .scroll-container {
          scrollbar-width: thin;
          scrollbar-color: #D4D4D8 transparent;
        }
        
        .skill-section {
          max-height: 1000px;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
        }
        
        .skill-section.collapsed {
          max-height: 0;
        }

        .project-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .project-card:active {
          transform: scale(0.98);
        }
      `}</style>

      {/* Modal Overlay */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 animate-fade-in-up"
          onClick={() => setSelectedProject(null)}
        />
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full my-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 sm:h-96 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/95 rounded-full shadow-lg hover:bg-white transition-all active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#000]">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-[#808080] mt-2">
                    {selectedProject.year}
                  </p>
                </div>
                <a 
                  href={`https://${selectedProject.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#000] text-white hover:bg-[#333] transition-all group active:scale-95"
                >
                  <span className="text-sm font-semibold">Visit</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-[#000] mb-2">Role</h3>
                  <p className="text-base text-[#666]">{selectedProject.role}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#000] mb-2">About</h3>
                  <p className="text-base text-[#666] leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#000] mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 rounded-full border border-[rgba(0,0,0,0.1)] text-sm text-[#666] bg-[rgba(0,0,0,0.02)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Grid - 50-50 Split */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 lg:h-screen">
        {/* Left Side - Profile (Scrollable) */}
        <div className="scroll-container bg-white animate-slide-in-left">
          <div className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-6 xs:py-7 sm:py-8 md:py-10">
            <div className="w-full max-w-[550px] mx-auto flex flex-col gap-6 sm:gap-7 md:gap-8">
              {/* Header */}
              <div className="flex flex-col gap-3 xs:gap-4 w-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <button className="flex items-center gap-1.5 px-3 xs:px-4 py-1.5 rounded-full bg-[rgba(0,0,0,0.05)] backdrop-blur-sm flex-shrink-0 whitespace-nowrap transition-all hover:bg-[rgba(0,0,0,0.1)] active:scale-95 text-xs xs:text-sm w-fit">
                  <Download className="w-3.5 xs:w-4 h-3.5 xs:h-4 text-[#000] flex-shrink-0" />
                  <span className="text-[#000] font-medium">Download My Resume</span>
                </button>

                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 flex-wrap">
                  <span className="text-xs text-[#808080] flex-shrink-0">Currently at:</span>
                  <div className="flex items-center gap-1 xs:gap-1.5 flex-wrap">
                    <div className="flex items-center gap-1 px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-full bg-[rgba(0,0,0,0.05)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[rgba(0,0,0,0.1)]">
                      <span className="text-xs xs:text-sm flex-shrink-0">🌍</span>
                      <span className="text-[10px] xs:text-xs text-[#000] whitespace-nowrap">{dynamicInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-full bg-[rgba(0,0,0,0.05)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[rgba(0,0,0,0.1)]">
                      <span className="text-xs xs:text-sm flex-shrink-0">⏰</span>
                      <span className="text-[10px] xs:text-xs text-[#000] whitespace-nowrap">{dynamicInfo.time}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-full bg-[rgba(0,0,0,0.05)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[rgba(0,0,0,0.1)]">
                      <span className="text-xs xs:text-sm flex-shrink-0">🌤️</span>
                      <span className="text-[10px] xs:text-xs text-[#000] whitespace-nowrap">{dynamicInfo.weather}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Card */}
              <div className="flex flex-col gap-5 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="rounded-[20px] border border-[rgba(0,0,0,0.08)] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.08)] p-5 sm:p-6 transition-all hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                  {/* Profile Header */}
                  <div className="flex justify-between items-start xs:items-center gap-3 xs:gap-4 mb-5 xs:mb-6">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/4f19dbe61b9a3cd0fcc12dc10eef3a7e39f18e96?width=120" 
                      alt="Profile"
                      className="w-14 xs:w-16 sm:w-[60px] h-14 xs:h-16 sm:h-[60px] rounded-full shadow-md flex-shrink-0 transition-all hover:scale-110"
                    />
                    
                    <div className="flex items-center gap-1.5 xs:gap-2 flex-wrap flex-shrink-0 xs:flex-nowrap">
                      <div className="flex items-center gap-0.5">
                        {socialLinks.map((social) => (
                          <a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-[32px] w-[32px] xs:h-[36px] xs:w-[36px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.05)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[#000] hover:text-white group active:scale-95"
                            title={social.label}
                          >
                            <social.icon className="w-4 xs:w-5 h-4 xs:h-5 text-[#000] group-hover:text-white group-hover:scale-110 transition-transform" />
                          </a>
                        ))}
                      </div>
                      <a 
                        href="mailto:ghanshyam@example.com"
                        className="rounded-lg bg-[#000] flex-shrink-0 transition-all hover:bg-[#333] group active:scale-95"
                      >
                        <button className="flex items-center gap-2 px-3 xs:px-4 py-2 rounded-lg whitespace-nowrap text-xs xs:text-sm group-hover:opacity-90 transition-colors">
                          <Mail className="w-3.5 xs:w-4 h-3.5 xs:h-4 text-white flex-shrink-0" />
                          <span className="font-medium text-white hidden xs:inline">Contact</span>
                        </button>
                      </a>
                    </div>
                  </div>

                  {/* Name and Title */}
                  <div className="flex flex-col gap-3 xs:gap-4 sm:gap-5">
                    <div className="flex flex-col gap-0.5 xs:gap-1">
                      <h1 className="text-base xs:text-lg sm:text-xl font-semibold text-[#000]">Ghanshyam Pandav</h1>
                      <p className="text-[11px] xs:text-xs sm:text-sm text-[#808080]">UX/UI Designer & Product Designer</p>
                    </div>

                    {/* About Section */}
                    <div className="flex flex-col gap-2 xs:gap-3">
                      <div className="flex items-center gap-2 xs:gap-3">
                        <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#999999] uppercase tracking-[1.2px] font-mono">// About</span>
                      </div>
                      <div className="text-[11px] xs:text-xs sm:text-sm font-light text-[#333333] text-justify leading-relaxed">
                        <p className="mb-2 xs:mb-2.5">For me, design goes beyond visuals — it's about solving real problems. I craft clean, modern, human-centered experiences that connect people with brands.</p>
                        <p className="mb-2 xs:mb-2.5">With nearly 5 years as a Senior UX/UI Designer, I've built digital products that put people first — blending clean aesthetics, thoughtful interactions, and meaningful impact.</p>
                        <p>I leverage AI to boost productivity and accelerate iteration — from copywriting and user research to rapid prototyping and design automation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="flex flex-col gap-3 xs:gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center gap-2 xs:gap-3">
                    <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#999999] uppercase tracking-[1.2px] font-mono">// Skills</span>
                  </div>

                  <div className="rounded-[20px] border border-[rgba(0,0,0,0.08)] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.08)] p-5 sm:p-6 flex flex-col gap-4 xs:gap-5 transition-all hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                    {/* Core Skills */}
                    <div className="transition-all">
                      <button 
                        onClick={() => toggleSkill('core')}
                        className="w-full flex justify-between items-center mb-4 group"
                      >
                        <span className="text-sm xs:text-base font-semibold text-[#000]">Core Skills</span>
                        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.05)] backdrop-blur-sm transition-all group-hover:bg-[rgba(0,0,0,0.1)] active:scale-95">
                          {expandedSkills.core ? (
                            <Minus className="w-4 xs:w-5 h-4 xs:h-5 transition-transform toggle-icon" />
                          ) : (
                            <Plus className="w-4 xs:w-5 h-4 xs:h-5 transition-transform toggle-icon" />
                          )}
                        </div>
                      </button>
                      
                      <div className={`skill-section ${!expandedSkills.core ? 'collapsed' : ''}`}>
                        <div className="flex gap-2 xs:gap-3 flex-wrap">
                          {skillsData.core.map((skill) => (
                            <div 
                              key={skill.label}
                              className="skill-tag px-3 xs:px-3.5 py-1.5 xs:py-2 rounded-full border border-[rgba(0,0,0,0.1)] bg-white hover:bg-[rgba(0,0,0,0.02)]"
                            >
                              <span className="text-[10px] xs:text-[11px] sm:text-xs text-[#333333] font-medium tracking-[0.5px]">
                                {skill.emoji} {skill.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Research & Strategy */}
                    <div className="border-t border-[rgba(0,0,0,0.08)] pt-4">
                      <button 
                        onClick={() => toggleSkill('research')}
                        className="w-full flex justify-between items-center group transition-all hover:opacity-80"
                      >
                        <span className="text-sm xs:text-base font-semibold text-[#000]">Research & Strategy</span>
                        {expandedSkills.research ? (
                          <Minus className="w-4 xs:w-5 h-4 xs:h-5 transition-transform" />
                        ) : (
                          <Plus className="w-4 xs:w-5 h-4 xs:h-5 transition-transform" />
                        )}
                      </button>
                      
                      <div className={`skill-section ${!expandedSkills.research ? 'collapsed' : ''}`}>
                        <div className="flex gap-2 xs:gap-3 flex-wrap mt-3">
                          {skillsData.research.map((skill) => (
                            <div 
                              key={skill.label}
                              className="skill-tag px-3 xs:px-3.5 py-1.5 xs:py-2 rounded-full border border-[rgba(0,0,0,0.1)] bg-white hover:bg-[rgba(0,0,0,0.02)]"
                            >
                              <span className="text-[10px] xs:text-[11px] sm:text-xs text-[#333333] font-medium tracking-[0.5px]">
                                {skill.emoji} {skill.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tools & Technology */}
                    <div className="border-t border-[rgba(0,0,0,0.08)] pt-4">
                      <button 
                        onClick={() => toggleSkill('tools')}
                        className="w-full flex justify-between items-center group transition-all hover:opacity-80"
                      >
                        <span className="text-sm xs:text-base font-semibold text-[#000]">Tools & Technology</span>
                        {expandedSkills.tools ? (
                          <Minus className="w-4 xs:w-5 h-4 xs:h-5 transition-transform" />
                        ) : (
                          <Plus className="w-4 xs:w-5 h-4 xs:h-5 transition-transform" />
                        )}
                      </button>
                      
                      <div className={`skill-section ${!expandedSkills.tools ? 'collapsed' : ''}`}>
                        <div className="flex gap-2 xs:gap-3 flex-wrap mt-3">
                          {skillsData.tools.map((skill) => (
                            <div 
                              key={skill.label}
                              className="skill-tag px-3 xs:px-3.5 py-1.5 xs:py-2 rounded-full border border-[rgba(0,0,0,0.1)] bg-white hover:bg-[rgba(0,0,0,0.02)]"
                            >
                              <span className="text-[10px] xs:text-[11px] sm:text-xs text-[#333333] font-medium tracking-[0.5px]">
                                {skill.emoji} {skill.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Section */}
                <div className="flex flex-col gap-3 xs:gap-4 animate-fade-in-up pb-10" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-2 xs:gap-3">
                    <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#999999] uppercase tracking-[1.2px] font-mono">// Experiences</span>
                  </div>

                  <div className="flex flex-col rounded-[20px] border border-[rgba(0,0,0,0.08)] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-all hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                    {experienceData.map((exp, idx) => (
                      <div 
                        key={idx}
                        className={`flex items-center gap-3 xs:gap-4 p-3 xs:p-4 sm:p-5 transition-all hover:bg-[rgba(0,0,0,0.02)] ${idx !== experienceData.length - 1 ? 'border-b border-[rgba(0,0,0,0.06)]' : ''}`}
                      >
                        <div className="flex items-center gap-3 xs:gap-4 flex-1 min-w-0">
                          <img 
                            src={exp.logo}
                            alt={exp.company}
                            className="w-9 xs:w-10 sm:w-12 h-9 xs:h-10 sm:h-12 rounded-full border border-[rgba(0,0,0,0.08)] flex-shrink-0 transition-all hover:scale-110"
                          />
                          <div className="flex flex-col gap-0.5 xs:gap-1 min-w-0 flex-1">
                            <p className="text-[10px] xs:text-xs text-[#999999] truncate">{exp.company}</p>
                            <p className="text-xs xs:text-sm sm:text-base font-semibold text-[#000] leading-tight">{exp.role}</p>
                            <p className="text-[9px] xs:text-[10px] text-[#999999]">{exp.location}</p>
                          </div>
                        </div>
                        <span className="text-[9px] xs:text-xs sm:text-sm font-light text-[#999999] flex-shrink-0 whitespace-nowrap">{exp.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Portfolio (Scrollable) */}
        <div className="scroll-container bg-[#EBEBEB] border-t lg:border-t-0 lg:border-l border-[rgba(0,0,0,0.08)] animate-slide-in-right flex flex-col px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-6 xs:py-7 sm:py-8 md:py-10">
          <div className="w-full max-w-[550px] mx-auto flex flex-col gap-6 sm:gap-7 pb-10 lg:pb-0">
            <div className="flex items-center gap-3">
              <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#999999] uppercase tracking-[1.2px] font-mono">// SELECTED WORK</span>
            </div>

            <div className="flex flex-col gap-5 sm:gap-6">
              {projects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  onSelect={setSelectedProject}
                  delay={0.3 + idx * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ 
  url, 
  title, 
  image, 
  onSelect, 
  delay,
  ...project 
}: {
  url: string;
  title: string;
  image: string;
  onSelect: (project: any) => void;
  delay: number;
} & typeof projects[0]) {
  return (
    <button
      onClick={() => onSelect({ url, title, image, ...project })}
      className="project-card rounded-[20px] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.08)] overflow-hidden text-left w-full group"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Card Header */}
      <div className="p-3 xs:p-4 sm:p-5 flex items-center justify-between gap-2 xs:gap-3 border-b border-[rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-2 xs:gap-3 min-w-0 flex-1">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F5F5] flex-shrink-0">
            <Globe className="w-3 h-3 text-[#666]" />
            <span className="text-[8px] xs:text-[9px] text-[#999] uppercase tracking-[0.5px] font-mono">https://</span>
          </div>
          <span className="text-[10px] xs:text-xs sm:text-sm text-[#333] truncate font-medium">{url}</span>
        </div>
        <div className="flex items-center justify-center p-2 rounded-lg bg-[#F5F5F5] flex-shrink-0 transition-all group-hover:bg-[#EFEFEF]">
          <ArrowUpRight className="w-3.5 h-3.5 text-[#666] group-hover:text-[#000] transition-colors" />
        </div>
      </div>

      {/* Card Image */}
      <div className="relative bg-[#F6F6F6] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 sm:h-56 object-cover transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#FF5F56]"></div>
          <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-3 xs:p-4 sm:p-5 flex flex-col gap-1.5 xs:gap-2">
        <p className="text-xs sm:text-sm font-semibold text-[#000]">{title}</p>
        <p className="text-[10px] xs:text-xs text-[#666] line-clamp-2">{project.description}</p>
      </div>
    </button>
  );
}
