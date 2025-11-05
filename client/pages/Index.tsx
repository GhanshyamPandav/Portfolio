import { Download, Globe, Clock, CloudSun, Github, Linkedin, Mail, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [expandedSkills, setExpandedSkills] = useState<{ [key: string]: boolean }>({
    core: true,
    research: false,
    tools: false
  });

  const toggleSkill = (key: string) => {
    setExpandedSkills(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] xl:grid-cols-[1fr_950px]">
        {/* Left Side - Profile */}
        <div className="px-6 sm:px-12 lg:px-20 xl:px-[320px] py-8 lg:py-[33px] bg-white">
          <div className="max-w-[570px] mx-auto flex flex-col gap-7">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm">
                <Download className="w-4 h-4 text-[#3D3D3D]" />
                <span className="text-xs font-normal text-[#3D3D3D]" style={{ fontFamily: 'Geist, sans-serif' }}>Download My Resume</span>
              </button>

              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex flex-col">
                  <span className="text-xs text-[#7C7C7C]" style={{ fontFamily: 'Geist, sans-serif' }}>Currently at:</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex items-end gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm">
                    <span className="text-sm">🌍</span>
                    <span className="text-xs text-[#3D3D3D]" style={{ fontFamily: 'Geist, sans-serif' }}>Surat</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm">
                    <span className="text-sm">⏰</span>
                    <span className="text-xs text-[#3D3D3D]" style={{ fontFamily: 'Geist, sans-serif' }}>10:04 AM</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm">
                    <span className="text-sm">🌤️</span>
                    <span className="text-xs text-[#3D3D3D]" style={{ fontFamily: 'Geist, sans-serif' }}>14°C</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Card */}
            <div className="flex flex-col gap-6">
              <div className="rounded-xl border border-[#DCDCDC] bg-[rgba(255,255,255,0)] shadow-[0_18px_88px_-4px_rgba(73,73,73,0.10)] p-5">
                {/* Profile Header */}
                <div className="flex justify-between items-center mb-5">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/4f19dbe61b9a3cd0fcc12dc10eef3a7e39f18e96?width=120" 
                    alt="Profile"
                    className="w-[60px] h-[60px] rounded-full shadow-[0_0_14.308px_0_rgba(0,0,0,0.32)_inset]"
                  />
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <button className="flex h-[30px] items-center justify-center px-4 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm">
                        <Github className="w-5 h-5 text-[#3D3D3D]" />
                      </button>
                      <button className="flex h-[30px] items-center justify-center px-4 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm">
                        <Linkedin className="w-5 h-5 text-[#3D3D3D]" />
                      </button>
                      <button className="flex h-[30px] items-center justify-center px-4 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm">
                        <Mail className="w-5 h-5 text-[#3D3D3D]" />
                      </button>
                    </div>
                    <div className="rounded-md bg-gradient-to-b from-[#111113] to-[#5B5B63] p-[1px] shadow-[0_0_0_1px_#1F1F22]">
                      <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-[5px] bg-gradient-to-b from-[#404045] to-[#1A1A1C]">
                        <Mail className="w-4 h-4 text-white" />
                        <span className="text-sm font-medium text-white" style={{ fontFamily: 'Geist, sans-serif' }}>Contact Me</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif', lineHeight: '26px' }}>Ghanshyam Pandav</h1>
                    <p className="text-sm text-[rgba(23,23,23,0.46)]" style={{ fontFamily: 'Geist, sans-serif', lineHeight: '18px' }}>UX/UI Designer & Product Designer</p>
                  </div>

                  {/* About Section */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px]" style={{ fontFamily: 'Geist Mono, monospace', lineHeight: '16px' }}>// About me</span>
                    </div>
                    <div className="text-sm font-light text-[#171717] text-justify" style={{ fontFamily: 'Geist, sans-serif' }}>
                      <p className="mb-3">For me, design goes beyond visuals — it's about solving real problems. I craft clean, modern, human-centered experiences that connect people with brands and make technology feel effortless.</p>
                      <p className="mb-3">With nearly 5 years of experience as a Senior UX/UI Designer, I've built digital products that put people first — blending clean aesthetics, thoughtful interactions, and meaningful impact.</p>
                      <p>I also leverage AI to boost productivity and accelerate iteration — from copywriting and user research to rapid prototyping and design automation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px]" style={{ fontFamily: 'Geist Mono, monospace', lineHeight: '16px' }}>// Skills</span>
                </div>

                <div className="rounded-xl border border-[#DCDCDC] bg-[rgba(255,255,255,0)] shadow-[0_18px_88px_-4px_rgba(73,73,73,0.10)] p-5 flex flex-col gap-4">
                  {/* Core Skills */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif' }}>Core Skills</span>
                      <button 
                        onClick={() => toggleSkill('core')}
                        className="flex h-[26px] items-center justify-center px-4 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm"
                      >
                        {expandedSkills.core ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </button>
                    </div>
                    {expandedSkills.core && (
                      <div className="flex flex-col -gap-px">
                        <div className="flex flex-wrap -gap-px">
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC]">
                            <span className="text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4" style={{ fontFamily: 'Geist Mono, monospace' }}>🧩UI/UX Design</span>
                          </div>
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC]">
                            <span className="text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4" style={{ fontFamily: 'Geist Mono, monospace' }}>🎨Visual Design</span>
                          </div>
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC]">
                            <span className="text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4" style={{ fontFamily: 'Geist Mono, monospace' }}>🧱Design Systems</span>
                          </div>
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC]">
                            <span className="text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4" style={{ fontFamily: 'Geist Mono, monospace' }}>🧾Wireframming</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap -gap-px">
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC]">
                            <span className="text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4" style={{ fontFamily: 'Geist Mono, monospace' }}>⚙️Prototyping</span>
                          </div>
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC]">
                            <span className="text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4" style={{ fontFamily: 'Geist Mono, monospace' }}>🔁Interaction Design</span>
                          </div>
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC]">
                            <span className="text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4" style={{ fontFamily: 'Geist Mono, monospace' }}>🗂️Information Architecture</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Research & Strategy */}
                  <div className="border-t border-[rgba(0,0,0,0.10)] pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif' }}>Research & Strategy</span>
                      <button 
                        onClick={() => toggleSkill('research')}
                        className="w-5 h-5"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Tools & Technology */}
                  <div className="border-t border-[rgba(0,0,0,0.10)] pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif' }}>Tools & Technology</span>
                      <button 
                        onClick={() => toggleSkill('tools')}
                        className="w-5 h-5"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px]" style={{ fontFamily: 'Geist Mono, monospace', lineHeight: '16px' }}>// Experiences</span>
                </div>

                <div className="flex flex-col">
                  {/* Experience 1 */}
                  <div className="flex flex-col sm:flex-row gap-3 py-3 border-b border-[rgba(0,0,0,0.10)]">
                    <div className="flex items-center gap-3 flex-1">
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/365f3f998ff4d9d1270faaff655f1802255b7959?width=107" 
                        alt="MobiOffice"
                        className="w-12 h-12 rounded-full border border-[#DCDCDC] backdrop-blur-[21.5px]"
                      />
                      <div className="flex flex-col gap-0.5">
                        <p className="text-sm text-[#7C7C7C]" style={{ fontFamily: 'Geist, sans-serif' }}>MobiOffice Software Innovations Pvt Ltd</p>
                        <p className="text-base font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif', lineHeight: '22.4px' }}>Sr. UX/UI Designer - Surat</p>
                      </div>
                    </div>
                    <span className="text-sm font-light text-[#7C7C7C]" style={{ fontFamily: 'Geist Mono, monospace' }}>Jan,2023 - Present</span>
                  </div>

                  {/* Experience 2 */}
                  <div className="flex flex-col sm:flex-row gap-3 py-3 border-b border-[rgba(0,0,0,0.10)]">
                    <div className="flex items-center gap-3 flex-1">
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/4ebf8bb3eef43fb4ff10c0f03ed9c2ef478764cc?width=99" 
                        alt="Byond.Studio"
                        className="w-12 h-12 rounded-full border border-[#DCDCDC] backdrop-blur-[21.5px]"
                      />
                      <div className="flex flex-col gap-0.5">
                        <p className="text-sm text-[#7C7C7C]" style={{ fontFamily: 'Geist, sans-serif' }}>Byond.Studio</p>
                        <p className="text-base font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif', lineHeight: '22.4px' }}>UX/UI Designer - Surat</p>
                      </div>
                    </div>
                    <span className="text-sm font-light text-[#7C7C7C]" style={{ fontFamily: 'Geist Mono, monospace' }}>Jan,2021 - Dec,2022</span>
                  </div>

                  {/* Experience 3 */}
                  <div className="flex flex-col sm:flex-row gap-3 py-3">
                    <div className="flex items-center gap-3 flex-1">
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/b68dd5ac20b0500773cf6cc58b83d7913ab6ec8a?width=112" 
                        alt="ProEX Advisor LLP"
                        className="w-12 h-12 rounded-full border border-[#DCDCDC] backdrop-blur-[21.5px]"
                      />
                      <div className="flex flex-col gap-0.5">
                        <p className="text-sm text-[#7C7C7C]" style={{ fontFamily: 'Geist, sans-serif' }}>ProEX Advisor LLP</p>
                        <p className="text-base font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif', lineHeight: '22.4px' }}>Internship, Graphics Designer - Ahmedabad</p>
                      </div>
                    </div>
                    <span className="text-sm font-light text-[#7C7C7C]" style={{ fontFamily: 'Geist Mono, monospace' }}>Nov,2020 - Dec,2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Portfolio */}
        <div className="px-6 sm:px-12 lg:px-20 py-8 lg:py-[33px] bg-[#EBEBEB] border-l border-[#DCDCDC]">
          <div className="max-w-[550px] mx-auto flex flex-col gap-7">
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px]" style={{ fontFamily: 'Geist Mono, monospace', lineHeight: '16px' }}>// sELECTED wORK</span>
            </div>

            <div className="flex flex-col gap-6">
              {/* Project 1 */}
              <ProjectCard
                url="Stock.ai"
                title="AI Investment Platform"
                image="https://api.builder.io/api/v1/image/assets/TEMP/1679745e2a064970ed0aebce6c9889bcdf2e840e?width=865"
              />

              {/* Project 2 */}
              <ProjectCard
                url="TaskRio.com"
                title="AI-powered Task Automation Tool"
                image="https://api.builder.io/api/v1/image/assets/TEMP/5b39d1380b87784d13682daf309f7178611fa930?width=865"
              />

              {/* Project 3 */}
              <ProjectCard
                url="TaskRio.com"
                title=""
                image="https://api.builder.io/api/v1/image/assets/TEMP/5b39d1380b87784d13682daf309f7178611fa930?width=865"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ url, title, image }: { url: string; title: string; image: string }) {
  return (
    <div className="rounded-2xl bg-white p-1 pb-1">
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6F6F6] backdrop-blur-sm">
            <Globe className="w-3 h-3 text-[#737373]" />
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] text-[#B5B5B5] uppercase tracking-[0.72px]" style={{ fontFamily: 'Geist Mono, monospace' }}>https://</span>
              <span className="text-xs text-[#404040]" style={{ fontFamily: 'Geist, sans-serif' }}>{url}</span>
            </div>
          </div>
          {title && (
            <span className="text-xs text-[#404040]" style={{ fontFamily: 'Geist, sans-serif' }}>{title}</span>
          )}
        </div>
        <button className="flex items-center justify-center p-2.5 rounded-full border border-[#EFEFEF] backdrop-blur-sm">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12L12 4M12 4H6.66667M12 4V9.33333" stroke="#404040" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="rounded-xl bg-[#F6F6F6] p-[3px] pt-10">
        <div className="rounded-t-xl bg-white max-w-[438.36px] mx-auto">
          <div className="flex items-center gap-0.5 p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
          </div>
          <img 
            src={image} 
            alt="Project preview" 
            className="w-full h-80 object-cover rounded-t-xl"
          />
        </div>
      </div>
    </div>
  );
}
