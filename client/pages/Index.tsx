import { Download, Globe, Github, Linkedin, Mail, Plus, Minus, X, ArrowUpRight, Dribbble } from "lucide-react";
import { useState } from "react";

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

export default function Index() {
  const [expandedSkills, setExpandedSkills] = useState<{ [key: string]: boolean }>({
    core: true,
    research: false,
    tools: false,
  });
  
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const toggleSkill = (key: string) => {
    setExpandedSkills(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const socialLinks = [
    { icon: Github, url: "https://github.com/ghanshyampandav", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/ghanshyampandav", label: "LinkedIn" },
    { icon: Dribbble, url: "https://dribbble.com/ghanshyampandav", label: "Dribbble" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
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
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        
        .animate-pulse-subtle {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .transition-all {
          transition: all 0.3s ease-out;
        }
        
        .transition-fast {
          transition: all 0.15s ease-out;
        }
        
        button, a {
          position: relative;
        }
        
        button:active, a:active {
          transform: scale(0.98);
        }
        
        .skill-tag {
          transition: all 0.2s ease-out;
        }
        
        .skill-tag:hover {
          background-color: rgba(235, 235, 235, 1);
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .grid-responsive {
            display: flex;
            flex-direction: column;
          }
        }

        /* Smooth scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #DCDCDC;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #B5B5B5;
        }
      `}</style>

      {/* Modal Overlay */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        />
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 sm:h-80 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#171717]" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-[#7C7C7C] mt-1" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {selectedProject.year}
                  </p>
                </div>
                <a 
                  href={`https://${selectedProject.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111113] text-white hover:bg-[#3D3D3D] transition-all group"
                >
                  <span className="text-sm font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>Visit</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-[#171717] mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>Role</h3>
                  <p className="text-sm text-[#7C7C7C]" style={{ fontFamily: 'Geist, sans-serif' }}>{selectedProject.role}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#171717] mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>About</h3>
                  <p className="text-sm text-[#7C7C7C] leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#171717] mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-full border border-[#DCDCDC] text-xs text-[#7C7C7C]"
                        style={{ fontFamily: 'Geist, sans-serif' }}
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

      <div className="grid-responsive lg:grid lg:grid-cols-[minmax(300px,1fr)_minmax(500px,650px)] gap-0">
        {/* Left Side - Profile */}
        <div className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-16 bg-white animate-slide-in-left min-h-screen">
          <div className="w-full max-w-[600px] mx-auto flex flex-col gap-6 sm:gap-7 md:gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3 xs:gap-4 w-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 xs:gap-3">
                <button className="flex items-center gap-1.5 px-3 xs:px-4 py-1.5 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm flex-shrink-0 whitespace-nowrap transition-all hover:bg-[rgba(41,41,41,0.12)] active:scale-95">
                  <Download className="w-3.5 xs:w-4 h-3.5 xs:h-4 text-[#3D3D3D] flex-shrink-0" />
                  <span className="text-[11px] xs:text-xs font-normal text-[#3D3D3D]" style={{ fontFamily: 'Geist, sans-serif' }}>Download My Resume</span>
                </button>

                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-1.5 xs:gap-2 flex-wrap w-full xs:w-auto">
                  <span className="text-[11px] xs:text-xs text-[#7C7C7C] flex-shrink-0" style={{ fontFamily: 'Geist, sans-serif' }}>Currently at:</span>
                  <div className="flex items-center gap-0.5 xs:gap-1 flex-wrap">
                    <div className="flex items-end gap-0.5 xs:gap-1 px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[rgba(41,41,41,0.12)] group">
                      <span className="text-xs xs:text-sm flex-shrink-0 group-hover:scale-110 transition-transform">🌍</span>
                      <span className="text-[10px] xs:text-xs text-[#3D3D3D] whitespace-nowrap" style={{ fontFamily: 'Geist, sans-serif' }}>Surat</span>
                    </div>
                    <div className="flex items-center gap-0.5 xs:gap-1 px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[rgba(41,41,41,0.12)] group">
                      <span className="text-xs xs:text-sm flex-shrink-0 group-hover:animate-pulse-subtle">⏰</span>
                      <span className="text-[10px] xs:text-xs text-[#3D3D3D] whitespace-nowrap" style={{ fontFamily: 'Geist, sans-serif' }}>10:04 AM</span>
                    </div>
                    <div className="flex items-center gap-0.5 xs:gap-1 px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[rgba(41,41,41,0.12)] group">
                      <span className="text-xs xs:text-sm flex-shrink-0 group-hover:scale-110 transition-transform">🌤️</span>
                      <span className="text-[10px] xs:text-xs text-[#3D3D3D] whitespace-nowrap" style={{ fontFamily: 'Geist, sans-serif' }}>14°C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Card */}
            <div className="flex flex-col gap-5 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-xl border border-[#DCDCDC] bg-white shadow-[0_18px_88px_-4px_rgba(73,73,73,0.10)] p-3 xs:p-4 sm:p-5 transition-all hover:shadow-[0_24px_120px_-6px_rgba(73,73,73,0.15)]">
                {/* Profile Header */}
                <div className="flex justify-between items-start xs:items-center gap-3 xs:gap-4 mb-4 xs:mb-5">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/4f19dbe61b9a3cd0fcc12dc10eef3a7e39f18e96?width=120" 
                    alt="Profile"
                    className="w-14 xs:w-16 sm:w-[60px] h-14 xs:h-16 sm:h-[60px] rounded-full shadow-[0_0_14.308px_0_rgba(0,0,0,0.32)_inset] flex-shrink-0 transition-all hover:scale-110"
                  />
                  
                  <div className="flex items-center gap-1 xs:gap-2 flex-wrap flex-shrink-0 xs:flex-nowrap">
                    <div className="flex items-center gap-0.5 xs:gap-1">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center px-0 xs:px-3 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[#3D3D3D] hover:text-white group active:scale-95"
                          title={social.label}
                        >
                          <social.icon className="w-3.5 xs:w-4 sm:w-5 h-3.5 xs:h-4 sm:h-5 text-[#3D3D3D] group-hover:text-white group-hover:scale-110 transition-transform" />
                        </a>
                      ))}
                    </div>
                    <a 
                      href="mailto:your-email@example.com"
                      className="rounded-md bg-gradient-to-b from-[#111113] to-[#5B5B63] p-[1px] shadow-[0_0_0_1px_#1F1F22] flex-shrink-0 transition-all hover:shadow-[0_0_0_1px_#3D3D3D] group active:scale-95"
                    >
                      <button className="flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-1.5 rounded-[5px] bg-gradient-to-b from-[#404045] to-[#1A1A1C] whitespace-nowrap text-xs xs:text-sm group-hover:from-[#5B5B63] group-hover:to-[#2D2D33] transition-colors">
                        <Mail className="w-3 xs:w-4 h-3 xs:h-4 text-white flex-shrink-0" />
                        <span className="font-medium text-white hidden xs:inline" style={{ fontFamily: 'Geist, sans-serif' }}>Contact</span>
                      </button>
                    </a>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="flex flex-col gap-3 xs:gap-4 sm:gap-5">
                  <div className="flex flex-col gap-0.5 xs:gap-1">
                    <h1 className="text-base xs:text-lg sm:text-xl font-semibold text-[#171717]" style={{ fontFamily: 'Geist, sans-serif', lineHeight: '1.3' }}>Ghanshyam Pandav</h1>
                    <p className="text-[11px] xs:text-xs sm:text-sm text-[rgba(23,23,23,0.6)]" style={{ fontFamily: 'Geist, sans-serif' }}>UX/UI Designer & Product Designer</p>
                  </div>

                  {/* About Section */}
                  <div className="flex flex-col gap-2 xs:gap-3">
                    <div className="flex items-center gap-2 xs:gap-3">
                      <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.2px] font-mono" style={{ fontFamily: 'Geist Mono, monospace' }}>// About</span>
                    </div>
                    <div className="text-[11px] xs:text-xs sm:text-sm font-light text-[#171717] text-justify leading-relaxed" style={{ fontFamily: 'Geist, sans-serif' }}>
                      <p className="mb-1.5 xs:mb-2">For me, design goes beyond visuals — it's about solving real problems. I craft clean, modern, human-centered experiences that connect people with brands.</p>
                      <p className="mb-1.5 xs:mb-2">With nearly 5 years as a Senior UX/UI Designer, I've built digital products that put people first — blending clean aesthetics, thoughtful interactions, and meaningful impact.</p>
                      <p>I leverage AI to boost productivity and accelerate iteration — from copywriting and user research to rapid prototyping and design automation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="flex flex-col gap-3 xs:gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-2 xs:gap-3">
                  <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.2px] font-mono" style={{ fontFamily: 'Geist Mono, monospace' }}>// Skills</span>
                </div>

                <div className="rounded-xl border border-[#DCDCDC] bg-white shadow-[0_18px_88px_-4px_rgba(73,73,73,0.10)] p-3 xs:p-4 sm:p-5 flex flex-col gap-3 xs:gap-4 transition-all hover:shadow-[0_24px_120px_-6px_rgba(73,73,73,0.15)]">
                  {/* Core Skills */}
                  <div className="transition-all">
                    <button 
                      onClick={() => toggleSkill('core')}
                      className="w-full flex justify-between items-center mb-3 group"
                    >
                      <span className="text-xs xs:text-sm font-medium text-[#171717] text-left" style={{ fontFamily: 'Geist, sans-serif' }}>Core Skills</span>
                      <div className="flex h-[24px] xs:h-[26px] items-center justify-center px-2.5 xs:px-3 xs:px-4 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm transition-all group-hover:bg-[rgba(41,41,41,0.12)] active:scale-95">
                        {expandedSkills.core ? (
                          <Minus className="w-3.5 xs:w-4 sm:w-5 h-3.5 xs:h-4 sm:h-5 transition-transform" />
                        ) : (
                          <Plus className="w-3.5 xs:w-4 sm:w-5 h-3.5 xs:h-4 sm:h-5 transition-transform" />
                        )}
                      </div>
                    </button>
                    {expandedSkills.core && (
                      <div className="space-y-0 transition-all">
                        <div className="flex gap-0.5 xs:gap-1 flex-wrap">
                          {["🧩UI/UX Design", "🎨Visual Design", "🧱Design Systems", "🧾Wireframing"].map((skill) => (
                            <div key={skill} className="skill-tag px-2 xs:px-2.5 py-1.5 xs:py-2 rounded-full border border-[#DCDCDC] bg-white hover:bg-[#F6F6F6]">
                              <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.1px] leading-4 whitespace-nowrap font-mono" style={{ fontFamily: 'Geist Mono, monospace' }}>{skill}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-0.5 xs:gap-1 flex-wrap mt-1 xs:mt-1.5">
                          {["⚙️Prototyping", "🔁Interaction Design", "🗂️Information Arch"].map((skill) => (
                            <div key={skill} className="skill-tag px-2 xs:px-2.5 py-1.5 xs:py-2 rounded-full border border-[#DCDCDC] bg-white hover:bg-[#F6F6F6]">
                              <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.1px] leading-4 whitespace-nowrap font-mono" style={{ fontFamily: 'Geist Mono, monospace' }}>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Research & Strategy */}
                  <div className="border-t border-[rgba(0,0,0,0.08)] pt-3">
                    <button 
                      onClick={() => toggleSkill('research')}
                      className="w-full flex justify-between items-center group transition-all hover:opacity-80"
                    >
                      <span className="text-xs xs:text-sm font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif' }}>Research & Strategy</span>
                      {expandedSkills.research ? (
                        <Minus className="w-4 xs:w-5 h-4 xs:h-5 transition-transform" />
                      ) : (
                        <Plus className="w-4 xs:w-5 h-4 xs:h-5 transition-transform" />
                      )}
                    </button>
                  </div>

                  {/* Tools & Technology */}
                  <div className="border-t border-[rgba(0,0,0,0.08)] pt-3">
                    <button 
                      onClick={() => toggleSkill('tools')}
                      className="w-full flex justify-between items-center group transition-all hover:opacity-80"
                    >
                      <span className="text-xs xs:text-sm font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif' }}>Tools & Technology</span>
                      {expandedSkills.tools ? (
                        <Minus className="w-4 xs:w-5 h-4 xs:h-5 transition-transform" />
                      ) : (
                        <Plus className="w-4 xs:w-5 h-4 xs:h-5 transition-transform" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="flex flex-col gap-3 xs:gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2 xs:gap-3">
                  <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.2px] font-mono" style={{ fontFamily: 'Geist Mono, monospace' }}>// Experiences</span>
                </div>

                <div className="flex flex-col rounded-xl border border-[#DCDCDC] bg-white shadow-[0_18px_88px_-4px_rgba(73,73,73,0.10)] overflow-hidden transition-all hover:shadow-[0_24px_120px_-6px_rgba(73,73,73,0.15)]">
                  {[
                    {
                      company: "MobiOffice Software Innovations Pvt Ltd",
                      role: "Sr. UX/UI Designer - Surat",
                      period: "Jan,2023 - Present",
                      logo: "https://api.builder.io/api/v1/image/assets/TEMP/365f3f998ff4d9d1270faaff655f1802255b7959?width=107",
                    },
                    {
                      company: "Byond.Studio",
                      role: "UX/UI Designer - Surat",
                      period: "Jan,2021 - Dec,2022",
                      logo: "https://api.builder.io/api/v1/image/assets/TEMP/4ebf8bb3eef43fb4ff10c0f03ed9c2ef478764cc?width=99",
                    },
                    {
                      company: "ProEX Advisor LLP",
                      role: "Internship, Graphics Designer - Ahmedabad",
                      period: "Nov,2020 - Dec,2020",
                      logo: "https://api.builder.io/api/v1/image/assets/TEMP/b68dd5ac20b0500773cf6cc58b83d7913ab6ec8a?width=112",
                    },
                  ].map((exp, idx) => (
                    <div key={idx} className={`flex items-center gap-2 xs:gap-3 p-2.5 xs:p-3 sm:p-4 transition-all hover:bg-[rgba(0,0,0,0.02)] ${idx !== 2 ? 'border-b border-[rgba(0,0,0,0.08)]' : ''}`}>
                      <div className="flex items-center gap-2 xs:gap-3 flex-1 min-w-0">
                        <img 
                          src={exp.logo}
                          alt={exp.company}
                          className="w-8 xs:w-9 sm:w-10 h-8 xs:h-9 sm:h-10 sm:w-12 sm:h-12 rounded-full border border-[#DCDCDC] backdrop-blur-[21.5px] flex-shrink-0 transition-all hover:scale-110"
                        />
                        <div className="flex flex-col gap-0.5 xs:gap-1 min-w-0 flex-1">
                          <p className="text-[10px] xs:text-xs text-[#7C7C7C] truncate" style={{ fontFamily: 'Geist, sans-serif' }}>{exp.company}</p>
                          <p className="text-xs xs:text-sm sm:text-base font-medium text-[#171717] leading-tight" style={{ fontFamily: 'Geist, sans-serif' }}>{exp.role}</p>
                        </div>
                      </div>
                      <span className="text-[9px] xs:text-xs sm:text-sm font-light text-[#7C7C7C] flex-shrink-0 whitespace-nowrap text-right" style={{ fontFamily: 'Geist Mono, monospace' }}>{exp.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Portfolio */}
        <div className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-16 bg-[#EBEBEB] lg:border-l lg:border-[#DCDCDC] animate-slide-in-right min-h-screen lg:min-h-auto">
          <div className="w-full max-w-[550px] mx-auto flex flex-col gap-6 sm:gap-7 md:gap-8">
            <div className="flex items-center gap-2 xs:gap-3">
              <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.2px] font-mono" style={{ fontFamily: 'Geist Mono, monospace' }}>// sELECTED wORK</span>
            </div>

            <div className="flex flex-col gap-4 xs:gap-5 sm:gap-6">
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
      className="rounded-2xl bg-white p-0.5 xs:p-1 pb-0.5 xs:pb-1 transition-all hover:shadow-lg hover:-translate-y-2 active:scale-95 animate-fade-in-up text-left w-full group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-2 xs:p-3 flex items-center justify-between gap-2 xs:gap-3 min-w-0">
        <div className="flex items-center gap-2 xs:gap-3 min-w-0 flex-1">
          <div className="flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 xs:px-4 py-1 xs:py-1.5 rounded-full bg-[#F6F6F6] backdrop-blur-sm flex-shrink-0 transition-all group-hover:bg-[#EFEFEF]">
            <Globe className="w-2 xs:w-2.5 sm:w-3 h-2 xs:h-2.5 sm:h-3 text-[#737373] flex-shrink-0" />
            <div className="flex items-center gap-0.5 xs:gap-1 min-w-0">
              <span className="text-[7px] xs:text-[8px] sm:text-[9px] text-[#B5B5B5] uppercase tracking-[0.7px] flex-shrink-0 font-mono" style={{ fontFamily: 'Geist Mono, monospace' }}>https://</span>
              <span className="text-[10px] xs:text-xs text-[#404040] truncate" style={{ fontFamily: 'Geist, sans-serif' }}>{url}</span>
            </div>
          </div>
          {title && (
            <span className="text-[10px] xs:text-xs text-[#404040] whitespace-nowrap truncate hidden xs:inline" style={{ fontFamily: 'Geist, sans-serif' }}>{title}</span>
          )}
        </div>
        <div className="flex items-center justify-center p-1.5 xs:p-2 rounded-full border border-[#EFEFEF] backdrop-blur-sm flex-shrink-0 transition-all group-hover:border-[#DCDCDC] group-hover:bg-[rgba(0,0,0,0.02)]">
          <ArrowUpRight className="w-3 xs:w-4 h-3 xs:h-4 text-[#404040] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
      <div className="rounded-xl bg-[#F6F6F6] p-[2px] xs:p-[3px] pt-4 xs:pt-6 sm:pt-8">
        <div className="rounded-t-xl bg-white max-w-[438.36px] mx-auto overflow-hidden">
          <div className="flex items-center gap-0.5 p-1.5 xs:p-2">
            <div className="w-1 xs:w-1.5 h-1 xs:h-1.5 rounded-full bg-[#EF4444]"></div>
            <div className="w-1 xs:w-1.5 h-1 xs:h-1.5 rounded-full bg-[#FACC15]"></div>
            <div className="w-1 xs:w-1.5 h-1 xs:h-1.5 rounded-full bg-[#4ADE80]"></div>
          </div>
          <img 
            src={image} 
            alt="Project preview" 
            className="w-full h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-t-xl transition-all group-hover:scale-105 duration-300"
          />
        </div>
      </div>
    </button>
  );
}
