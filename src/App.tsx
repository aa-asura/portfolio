/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, 
  Server, 
  Link, 
  Database, 
  Terminal, 
  GitBranch, 
  Globe, 
  Code, 
  Compass, 
  ArrowUpRight, 
  Github, 
  Instagram, 
  ArrowRight, 
  BookOpen, 
  Target, 
  Search, 
  Calendar, 
  ChevronRight, 
  X, 
  Sparkles, 
  CornerDownRight,
  BookOpenCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData, timelineEvents, projectsData } from './data';
import { Skill, TimelineEvent, Project } from './types';
import photoImg from './assets/images/photo.jpg';
import BackgroundMists from './components/BackgroundMists';
import InteractiveCard from './components/InteractiveCard';
import ArchitectureVisualizer from './components/ArchitectureVisualizer';

// Custom Hook for Typing Effect
function useTypewriter(words: string[], speed: number = 80, delay: number = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
      }, speed / 1.5);
    } else {
      // Typing characters
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
      }, speed);
    }

    // Handle word transitions
    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return currentText;
}

export default function App() {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<'all' | 'AI Integration' | 'Backend Architecture' | 'Data Systems' | 'Vector Retrieval'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(skillsData[0]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactMessage, setContactMessage] = useState({ name: '', email: '', subject: 'Collaboration', text: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);

  // Monitor cursor movement for the reactive spotlight background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Monitor scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing roles list
  const roles = ["AI Learner", "Backend Developer", "Future AI Developer", "Software Contributor"];
  const typingRole = useTypewriter(roles, 80, 2500);

  // Map icon names to Lucide Icon components
  const getIcon = (name: string, className: string = "w-5 h-5") => {
    switch (name) {
      case 'Cpu': return <Cpu className={className} />;
      case 'Server': return <Server className={className} />;
      case 'Link': return <Link className={className} />;
      case 'Database': return <Database className={className} />;
      case 'Terminal': return <Terminal className={className} />;
      case 'GitBranch': return <GitBranch className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'Code': return <Code className={className} />;
      case 'Compass': return <Compass className={className} />;
      default: return <Code className={className} />;
    }
  };

  // Filter projects based on tab and search query
  const filteredProjects = projectsData.filter(project => {
    const matchesTab = activeTab === 'all' || project.tag === activeTab;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactMessage.name && contactMessage.email && contactMessage.text) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setContactMessage({ name: '', email: '', subject: 'Collaboration', text: '' });
      }, 5000);
    }
  };

  return (
    <div className="relative min-h-screen bg-mountain-black text-mountain-ice selection:bg-mountain-cyan/30 selection:text-white noise-overlay">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-mountain-cyan to-mountain-ice z-50 transition-all duration-75"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Atmospheric Canvas Mist particles */}
      <BackgroundMists />

      {/* Structural Vertical Thread Guides */}
      <div className="hidden xl:block fixed left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-mountain-cyan/15 via-mountain-ice/5 to-transparent pointer-events-none z-10">
        <div 
          className="absolute w-2 h-2 rounded-full bg-mountain-cyan shadow-[0_0_8px_#06B6D4] -translate-x-1/2 transition-all duration-75"
          style={{ top: `${scrollProgress * 100}%` }}
        />
        <span 
          className="absolute top-24 left-3 text-[8px] font-mono tracking-[0.2em] text-mountain-fog/40 select-none uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Aashish Adhikary • Portfolio Guide
        </span>
      </div>
      <div className="hidden xl:block fixed right-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-mountain-cyan/15 via-mountain-ice/5 to-transparent pointer-events-none z-10">
        <div 
          className="absolute w-2 h-2 rounded-full bg-mountain-cyan shadow-[0_0_8px_#06B6D4] -translate-x-1/2 transition-all duration-75"
          style={{ top: `${scrollProgress * 100}%` }}
        />
        <span 
          className="absolute bottom-24 right-3 text-[8px] font-mono tracking-[0.2em] text-mountain-fog/40 select-none uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          BUILDING QUIETLY • v2026.06
        </span>
      </div>

      {/* Reactive Cursor Spotlight (Desaturated Frost/Cyan Glow) */}
      <div 
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(550px at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(6, 182, 212, 0.035), rgba(226, 241, 255, 0.005) 50%, transparent 100%)`
        }}
      />

      {/* Misty Ambient Background Layer (Parallax fog elements) */}
      <div className="absolute top-0 left-0 w-full h-[120vh] overflow-hidden pointer-events-none z-0">
        {/* Soft mountain silhouette background SVG */}
        <svg className="absolute bottom-0 w-full h-[50%] opacity-15 text-mountain-slate" viewBox="0 0 1440 320" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,186.7C840,203,960,181,1080,160C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[30%] bg-radial from-mountain-slate/10 via-transparent to-transparent blur-[120px] rounded-full fog-drift-slow" />
        <div className="absolute top-[35%] right-[15%] w-[35%] h-[25%] bg-radial from-mountain-cyan/5 via-transparent to-transparent blur-[100px] rounded-full fog-drift-fast" />
        <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-[60%] h-[15%] bg-gradient-to-b from-mountain-slate/5 to-transparent blur-xl" />
      </div>

      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-mountain-ice/5 bg-mountain-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center space-x-2 group">
            <span className="font-display font-bold text-lg tracking-wider heading-gradient group-hover:text-mountain-cyan transition-colors">A.A.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-mountain-cyan animate-pulse"></span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-widest uppercase font-medium text-mountain-fog">
            <a href="#about" className="hover:text-mountain-ice transition-colors">About</a>
            <a href="#skills" className="hover:text-mountain-ice transition-colors">Skills</a>
            <a href="#timeline" className="hover:text-mountain-ice transition-colors">Timeline</a>
            <a href="#projects" className="hover:text-mountain-ice transition-colors">Projects</a>
            <a href="#philosophy" className="hover:text-mountain-ice transition-colors">Philosophy</a>
            <a href="#goals" className="hover:text-mountain-ice transition-colors">Goals</a>
            <a href="#contact" className="hover:text-mountain-ice transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/aa-asura" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full border border-mountain-ice/10 hover:border-mountain-cyan/30 hover:bg-mountain-slate/20 text-mountain-fog hover:text-mountain-ice transition-all"
              id="header-github"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center space-x-1 px-4 py-2 rounded-full glass-card hover:bg-mountain-slate/30 border border-mountain-ice/10 text-xs tracking-wider uppercase font-medium hover:text-mountain-cyan transition-all"
              id="header-contact"
            >
              <span>Connect</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-20 max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-32 md:space-y-48">
        
        {/* HERO SECTION */}
        <section id="hero" ref={heroRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-6 md:py-12">
          {/* Hero details */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-mountain-ice/5 text-xs text-mountain-fog font-mono">
              <span className="w-2 h-2 rounded-full bg-mountain-cyan/80"></span>
              <span className="tracking-wide">Active Learning Status: 2026 Season</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] heading-gradient">
              Building Intelligent Software,<br className="hidden sm:block" />
              <span className="accent-gradient">One Project at a Time.</span>
            </h1>

            {/* Typewriter text space */}
            <div className="h-8 flex items-center justify-center lg:justify-start font-mono text-mountain-cyan text-sm sm:text-base tracking-widest uppercase">
              <span className="text-mountain-fog mr-2">&gt;</span>
              <span>{typingRole}</span>
              <span className="w-1.5 h-4 bg-mountain-cyan ml-1 animate-pulse"></span>
            </div>

            <p className="text-mountain-fog max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed font-sans">
              Hi, I am <strong className="text-mountain-ice font-medium">Aashish Adhikary</strong>. I explore machine learning foundations, design performant backend systems, and contribute to software ecosystems with continuous curiosity and structured focus.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-mountain-ice text-mountain-black font-display font-medium text-xs tracking-wider uppercase text-center hover:bg-white hover:shadow-[0_0_20px_rgba(226,241,255,0.4)] transition-all"
                id="hero-cta-projects"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-6 py-3.5 rounded-full glass-card border border-mountain-ice/10 text-mountain-ice font-display font-medium text-xs tracking-wider uppercase text-center hover:bg-mountain-slate/40 hover:border-mountain-cyan/30 transition-all"
                id="hero-cta-contact"
              >
                Contact Me
              </a>
            </div>

            {/* Social credentials */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6 text-mountain-fog">
              <span className="text-xs font-mono tracking-widest uppercase">Directories</span>
              <div className="w-8 h-[1px] bg-mountain-ice/10"></div>
              <a href="https://github.com/aa-asura" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-mountain-ice transition-colors">
                <Github className="w-4 h-4" />
                <span className="text-xs font-mono">GitHub</span>
              </a>
              <a href="https://www.instagram.com/ashish_adhikaryy/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-mountain-ice transition-colors">
                <Instagram className="w-4 h-4" />
                <span className="text-xs font-mono">Instagram</span>
              </a>
            </div>
          </div>

          {/* Hero Profile Photo */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 select-none">
              {/* Pulsing ambient border rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-mountain-cyan/10 via-transparent to-mountain-ice/5 blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse" />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-mountain-cyan/5 to-mountain-ice/10 opacity-30 group-hover:opacity-60 transition-all duration-700 border border-mountain-ice/10" />
              
              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-mountain-ice/15 group-hover:border-mountain-cyan/30 bg-mountain-obsidian shadow-2xl transition-all duration-700">
                <img 
                  src={photoImg} 
                  alt="Aashish Adhikary looking over desaturated foggy mountains" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05] brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mountain-black/40 via-transparent to-transparent pointer-events-none" />
                {/* Visual glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-mountain-ice/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>

              {/* Decorative status badge */}
              <div className="absolute -bottom-2 right-4 sm:right-6 bg-mountain-obsidian border border-mountain-ice/10 text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full text-mountain-fog flex items-center space-x-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-mountain-cyan animate-pulse"></span>
                <span>Aashish</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs font-mono tracking-widest text-mountain-cyan uppercase">&gt; About Me</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight heading-gradient">
                  The Mindset of a Disciplined Learner.
                </h2>
                <div className="w-12 h-0.5 bg-mountain-cyan/30"></div>
              </div>
              
              <div className="lg:col-span-8 space-y-6 text-mountain-fog text-sm sm:text-base leading-relaxed">
                <p>
                  I am an aspiring <strong className="text-mountain-ice font-medium">AI Developer and Backend Specialist</strong> driven by a fundamental curiosity about how complex, intelligent systems function under the hood. Currently navigating the intersection of machine learning algorithms and robust backend architectures, I view software engineering not just as writing code, but as a discipline of continuous problem-solving and structured design.
                </p>
                <p>
                  My experience spans building scalable API services, designing clean databases, and contributing to both open-source and closed-source software ecosystems. Rather than claiming decades of mastery, I am proud to represent myself as a dedicated learner: someone who spends hours diving deep into documentation, testing limits, making mistakes, and emerging with a clearer understanding of modern technology.
                </p>
                <p>
                  Every day, I strive to build software that is resilient, performant, and truly beneficial. Whether I am writing desaturated, clean CSS layouts, scaling an Express backend, or exploring new AI capabilities with modern SDKs, my focus remains on absolute precision, humble collaboration, and a quiet, relentless work ethic.
                </p>
              </div>
            </div>

            {/* Quick core metric banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {[
                { label: 'Role Focus', value: 'AI & Backend' },
                { label: 'Core Language', value: 'Python / TS' },
                { label: 'Workflow', value: 'Git / GitHub' },
                { label: 'Open Source', value: 'Contributor' }
              ].map((stat, i) => (
                <div key={i} className="glass-card border border-mountain-ice/5 rounded-xl p-4 text-center">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-mountain-fog mb-1">{stat.label}</span>
                  <span className="font-display font-semibold text-sm sm:text-base text-mountain-ice tracking-wider">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-mono tracking-widest text-mountain-cyan uppercase">&gt; Skillsets</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight heading-gradient">
                Constructing a Technical Foundation
              </h2>
              <p className="text-mountain-fog text-xs sm:text-sm max-w-lg mx-auto">
                Click on any skill card below to examine my learning objectives, interest vectors, and current practical improvements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Glass cards grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skillsData.map((skill) => {
                  const isActive = selectedSkill?.id === skill.id;
                  return (
                    <InteractiveCard
                      key={skill.id}
                      onClick={() => setSelectedSkill(skill)}
                      className={`p-5 flex flex-col justify-between h-40 group cursor-pointer text-left ${
                        isActive 
                          ? 'border-mountain-cyan/40 bg-mountain-slate/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] text-mountain-ice' 
                          : 'border-mountain-ice/5 bg-mountain-obsidian/40 hover:border-mountain-ice/20 text-mountain-fog hover:text-mountain-ice'
                      }`}
                    >
                      <div className="flex flex-col justify-between h-full w-full">
                        <div className="space-y-3">
                          <div className={`p-2 w-fit rounded-lg border transition-colors ${
                            isActive 
                              ? 'bg-mountain-cyan/15 border-mountain-cyan/20 text-mountain-cyan' 
                              : 'bg-mountain-slate/10 border-mountain-ice/5 text-mountain-fog group-hover:text-mountain-ice'
                          }`}>
                            {getIcon(skill.iconName)}
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-widest opacity-80 block">{skill.category}</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <h3 className="font-display font-medium text-xs sm:text-sm tracking-wide">{skill.title}</h3>
                          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-90 text-mountain-cyan' : 'group-hover:translate-x-1'}`} />
                        </div>
                      </div>
                    </InteractiveCard>
                  );
                })}
              </div>

              {/* Right Column: Skill details panel */}
              <div className="lg:col-span-5 h-full">
                <AnimatePresence mode="wait">
                  {selectedSkill ? (
                    <motion.div
                      key={selectedSkill.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="glass-card rounded-2xl border border-mountain-ice/10 p-6 sm:p-8 space-y-6 relative overflow-hidden"
                    >
                      {/* Glowing highlight anchor */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-mountain-cyan/5 blur-xl rounded-full" />
                      
                      <div className="flex items-center space-x-3 pb-4 border-b border-mountain-ice/5">
                        <div className="p-3 rounded-xl bg-mountain-cyan/15 border border-mountain-cyan/20 text-mountain-cyan">
                          {getIcon(selectedSkill.iconName, "w-6 h-6")}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-mountain-cyan">{selectedSkill.category}</span>
                          <h3 className="font-display font-bold text-lg text-mountain-ice">{selectedSkill.title}</h3>
                        </div>
                      </div>

                      <div className="space-y-4 text-xs sm:text-sm text-mountain-fog leading-relaxed">
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono tracking-widest uppercase text-mountain-ice/70 flex items-center space-x-1">
                            <Code className="w-3 h-3 text-mountain-cyan" />
                            <span>Technical Focus</span>
                          </span>
                          <p>{selectedSkill.description}</p>
                        </div>

                        <div className="space-y-1.5 pt-2">
                          <span className="text-[10px] font-mono tracking-widest uppercase text-mountain-ice/70 flex items-center space-x-1">
                            <Sparkles className="w-3 h-3 text-mountain-cyan" />
                            <span>Why it interests me</span>
                          </span>
                          <p className="italic">"{selectedSkill.whyItInterestsMe}"</p>
                        </div>

                        <div className="space-y-1.5 pt-2">
                          <span className="text-[10px] font-mono tracking-widest uppercase text-mountain-ice/70 flex items-center space-x-1">
                            <CornerDownRight className="w-3 h-3 text-mountain-cyan" />
                            <span>How I'm improving</span>
                          </span>
                          <p className="bg-mountain-slate/20 border border-mountain-ice/5 p-3 rounded-lg font-mono text-xs text-mountain-ice/90">
                            {selectedSkill.howImImproving}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="glass-card rounded-2xl border border-mountain-ice/5 p-8 text-center text-mountain-fog flex flex-col items-center justify-center h-80">
                      <Compass className="w-8 h-8 text-mountain-cyan/40 animate-spin mb-4" />
                      <p className="text-xs font-mono tracking-wider">Select a skill grid item to inspect active vectors</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE TIMELINE SECTION */}
        <section id="timeline" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-mono tracking-widest text-mountain-cyan uppercase">&gt; Journey Timeline</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight heading-gradient">
                Experience & Focus Areas
              </h2>
              <p className="text-mountain-fog text-xs sm:text-sm">
                An authentic representation of my learning trajectories, open source participation, and closed-source software contributions.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0">
              {/* Center spine on desktop */}
              <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-mountain-cyan/40 via-mountain-slate to-transparent -translate-x-1/2" />

              <div className="space-y-12">
                {timelineEvents.map((event, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={event.id} className={`relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 items-start ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                      
                      {/* Spine circle marker */}
                      <div className="absolute left-6 sm:left-1/2 w-3.5 h-3.5 rounded-full bg-mountain-black border-2 border-mountain-cyan shadow-[0_0_10px_rgba(6,182,212,0.8)] -translate-x-1/2 z-30 top-1" />

                      {/* Timeline Event Card */}
                      <div className={`space-y-3 sm:col-span-1 ${isEven ? 'sm:order-1' : 'sm:order-2 sm:col-start-2'}`}>
                        <div className={`inline-flex items-center space-x-2 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider ${
                          event.type === 'learning' 
                            ? 'bg-mountain-cyan/10 text-mountain-cyan border border-mountain-cyan/20' 
                            : event.type === 'contribution' 
                            ? 'bg-mountain-ice/10 text-mountain-ice border border-mountain-ice/25'
                            : 'bg-mountain-slate/40 text-mountain-fog border border-mountain-ice/10'
                        }`}>
                          <span>{event.period}</span>
                        </div>
                        
                        <h3 className="font-display font-bold text-lg text-mountain-ice">{event.title}</h3>
                        <p className="text-mountain-fog text-xs sm:text-sm max-w-md ml-0 mr-auto sm:mx-auto lg:mx-0 leading-relaxed">{event.description}</p>
                        
                        {/* Vertical details bullets */}
                        <ul className={`space-y-1.5 text-xs text-mountain-fog/80 font-mono list-none ${isEven ? 'sm:flex sm:flex-col sm:items-end' : 'sm:flex sm:flex-col sm:items-start'}`}>
                          {event.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-left">
                              <span className="text-mountain-cyan mt-1 select-none">▪</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Visual spacer for desktop alignment */}
                      <div className="hidden sm:block sm:col-span-1" />
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-mono tracking-widest text-mountain-cyan uppercase">&gt; Code Repositories</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight heading-gradient">
                Realistic Learning Projects
              </h2>
              <p className="text-mountain-fog text-xs sm:text-sm">
                An index of active microservices and applications I've engineered to explore server architectures, APIs, and AI retrieval algorithms.
              </p>
            </div>

            {/* Search and filter rail */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-mountain-ice/5 pb-6">
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 justify-center">
                {(['all', 'AI Integration', 'Backend Architecture', 'Data Systems', 'Vector Retrieval'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                      activeTab === tab 
                        ? 'bg-mountain-slate/40 border border-mountain-cyan/30 text-mountain-cyan shadow-sm' 
                        : 'border border-mountain-ice/5 text-mountain-fog hover:text-mountain-ice hover:bg-mountain-slate/10'
                    }`}
                  >
                    {tab === 'all' ? 'All Modules' : tab}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mountain-fog" />
                <input
                  type="text"
                  placeholder="Search modules..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-mountain-obsidian border border-mountain-ice/10 rounded-full py-2 pl-10 pr-4 text-xs font-mono focus:border-mountain-cyan focus:outline-none text-mountain-ice placeholder:text-mountain-fog"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-mountain-fog hover:text-mountain-ice">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <InteractiveCard
                      onClick={() => setSelectedProject(project)}
                      className="p-6 flex flex-col justify-between group h-full min-h-[340px]"
                    >
                      <div className="flex flex-col justify-between h-full w-full">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-mountain-cyan bg-mountain-cyan/5 border border-mountain-cyan/15 px-2.5 py-1 rounded-full">
                              {project.tag}
                            </span>
                            <span className="text-[10px] font-mono text-mountain-fog">React 19 / Py</span>
                          </div>

                          <h3 className="font-display font-bold text-lg text-mountain-ice group-hover:text-mountain-cyan transition-colors">
                            {project.name}
                          </h3>
                          
                          <p className="text-mountain-fog text-xs sm:text-sm leading-relaxed">
                            {project.overview}
                          </p>

                          <div className="space-y-1.5 pt-2">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-mountain-ice/60 block">Problem Solved:</span>
                            <p className="text-mountain-fog/80 text-xs italic">
                              "{project.problemSolved}"
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 pt-6 mt-6 border-t border-mountain-ice/5">
                          {/* Technology badge list */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 3).map((tech, idx) => (
                              <span key={idx} className="bg-mountain-slate/20 text-mountain-ice/85 text-[9px] font-mono px-2 py-0.5 rounded border border-mountain-ice/5">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="bg-mountain-slate/20 text-mountain-fog text-[9px] font-mono px-1.5 py-0.5 rounded border border-mountain-ice/5">
                                +{project.technologies.length - 3} more
                              </span>
                            )}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                            className="w-full inline-flex items-center justify-center space-x-1.5 py-2.5 rounded-lg border border-mountain-ice/10 hover:border-mountain-cyan/30 text-xs font-mono tracking-wider hover:text-mountain-cyan bg-mountain-slate/10 hover:bg-mountain-slate/30 cursor-pointer transition-all"
                          >
                            <span>Examine Architecture</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </InteractiveCard>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredProjects.length === 0 && (
                <div className="col-span-full py-16 text-center text-mountain-fog font-mono text-xs">
                  <p>No active modules matching "{searchQuery}" under "{activeTab}"</p>
                </div>
              )}
            </div>
          </motion.div>
        </section>

        {/* LEARNING PHILOSOPHY SECTION */}
        <section id="philosophy" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left side: Graphic / Core Concept */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono tracking-widest text-mountain-cyan uppercase">&gt; Core Manifesto</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight heading-gradient">
                  Learning Philosophy & Engineering Discipline
                </h2>
                <p className="text-mountain-fog text-sm sm:text-base leading-relaxed">
                  I believe software engineering is more about understanding core constraints and deep documentation than copy-pasting quick fixes. Here is how I frame my daily practice.
                </p>

                {/* Minimal aesthetic notebook graphic */}
                <div className="glass-card border border-mountain-ice/10 rounded-xl p-5 space-y-4 font-mono text-xs text-mountain-fog">
                  <div className="flex items-center justify-between border-b border-mountain-ice/5 pb-2">
                    <span className="text-mountain-cyan text-[10px] tracking-wider uppercase flex items-center space-x-1">
                      <BookOpenCheck className="w-3.5 h-3.5" />
                      <span>manifesto.log</span>
                    </span>
                    <span>v2026.06</span>
                  </div>
                  <div className="space-y-2 select-none text-[11px] leading-relaxed">
                    <p className="text-mountain-ice/90"># Rule 1: Master the foundations before abstractions.</p>
                    <p># Rule 2: Curiosity triggers ideas; discipline delivers products.</p>
                    <p className="text-mountain-cyan/80"># Rule 3: Error logs are system architectural tutorials.</p>
                    <p># Rule 4: Write self-decoupling code to save future sanity.</p>
                  </div>
                </div>
              </div>

              {/* Right side: Paragraph Blocks */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-mountain-ice flex items-center space-x-2">
                    <span className="text-mountain-cyan">01.</span>
                    <span>Curiosity & Decoupling Discipline</span>
                  </h3>
                  <p className="text-mountain-fog text-sm sm:text-base leading-relaxed pl-6 sm:pl-8">
                    Curiosity is my primary engine, but discipline is my steering wheel. While curiosity prompts me to ask "Why does this database query block under high loads?", discipline ensures I sit down, read the database query execution planner, inspect index nodes, and refactor structural anomalies until it runs predictably.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-mountain-ice flex items-center space-x-2">
                    <span className="text-mountain-cyan">02.</span>
                    <span>Continuous Improvement from Breakages</span>
                  </h3>
                  <p className="text-mountain-fog text-sm sm:text-base leading-relaxed pl-6 sm:pl-8">
                    I believe software development is a trade learned through structured struggle. The best architectural insights often come from failing systems, corrupted git merges, or broken routing middlewares. Encountering compilation errors is not a setback, but a valuable structural blueprint showing the exact operational limits.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-mountain-ice flex items-center space-x-2">
                    <span className="text-mountain-cyan">03.</span>
                    <span>Official Documentation Over Speculation</span>
                  </h3>
                  <p className="text-mountain-fog text-sm sm:text-base leading-relaxed pl-6 sm:pl-8">
                    Rather than relying on rapid internet searching and copying snippets I don't fully understand, I prioritize reading the official documentation and source repositories first. Gaining a granular grasp of a package's design intentions shifts it from an unpredictable black box into a reliable tool.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </section>

        {/* CAREER GOALS SECTION */}
        <section id="goals" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass-card border border-mountain-ice/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-mountain-cyan/5 blur-3xl rounded-full" />
            
            <div className="max-w-3xl space-y-8 relative z-10">
              <div className="space-y-3">
                <span className="text-xs font-mono tracking-widest text-mountain-cyan uppercase">&gt; Core Aspirations</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight heading-gradient">
                  Stepping Forward as an AI Developer
                </h2>
              </div>

              <div className="space-y-6 text-mountain-fog text-sm sm:text-base leading-relaxed">
                <p>
                  My long-term career ambition is to evolve into a highly proficient <strong className="text-mountain-ice font-medium">AI Developer</strong> capable of designing intelligent, desaturated services that seamlessly fuse desaturated frontend interactions, reliable server middleware, and statistical machine learning endpoints.
                </p>
                <p>
                  Instead of simply stacking APIs on superficial layers, I am determined to master the deep underlying systems. Specifically, I am investing my practice hours in:
                </p>

                {/* Bullet layout of focus goals */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm font-mono text-mountain-ice">
                  {[
                    'Scaling Backend API Interfaces',
                    'Context-Aware AI Automation Systems',
                    'Vector embeddings & Semantic parsing',
                    'Asynchronous job queue distributions',
                    'Secure Double-Entry ledger schemes',
                    'Decoupled system architecture patterns'
                  ].map((goal, i) => (
                    <div key={i} className="flex items-center space-x-2.5">
                      <Target className="w-4 h-4 text-mountain-cyan" />
                      <span>{goal}</span>
                    </div>
                  ))}
                </div>

                <p className="pt-4 border-t border-mountain-ice/5">
                  I seek to join collaborative environments that value technical rigor, continuous review loops, honest communication, and high standard boundaries.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-mono tracking-widest text-mountain-cyan uppercase">&gt; Reach Out</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight heading-gradient">
                Let's Connect and Collaborate
              </h2>
              <p className="text-mountain-fog text-xs sm:text-sm">
                I am always eager to discuss backend architecture patterns, AI frameworks, open source tasks, or simple engineering philosophies. Reach out through the desaturated channel below.
              </p>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Contact details */}
            <div className="lg:col-span-5 glass-card border border-mountain-ice/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h3 className="font-display font-bold text-lg text-mountain-ice">Connection Channels</h3>
                <p className="text-mountain-fog text-xs sm:text-sm leading-relaxed">
                  I maintain a quiet, focused online footprint. You can review my code repositories or follow my visual captures. Let's learn together.
                </p>

                <div className="space-y-4 font-mono text-xs sm:text-sm">
                  <a 
                    href="https://github.com/aa-asura" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-3 p-3.5 rounded-xl border border-mountain-ice/5 bg-mountain-slate/10 hover:border-mountain-cyan/30 text-mountain-fog hover:text-mountain-ice transition-all"
                  >
                    <Github className="w-5 h-5 text-mountain-cyan" />
                    <div>
                      <span className="block text-[10px] text-mountain-fog/80 font-mono">GitHub Profile</span>
                      <span>github.com/aa-asura</span>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/ashish_adhikaryy/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-3 p-3.5 rounded-xl border border-mountain-ice/5 bg-mountain-slate/10 hover:border-mountain-cyan/30 text-mountain-fog hover:text-mountain-ice transition-all"
                  >
                    <Instagram className="w-5 h-5 text-mountain-cyan" />
                    <div>
                      <span className="block text-[10px] text-mountain-fog/80 font-mono">Instagram Handle</span>
                      <span>@ashish_adhikaryy</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-mountain-ice/5 text-[10px] font-mono text-mountain-fog uppercase tracking-widest text-center sm:text-left">
                No secondary social platforms integrated.
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-7 glass-card border border-mountain-ice/10 rounded-2xl p-6 sm:p-8">
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-lg text-mountain-ice">Dispatch a Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-mountain-fog">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={contactMessage.name}
                      onChange={(e) => setContactMessage({ ...contactMessage, name: e.target.value })}
                      placeholder="e.g. Aashish" 
                      className="w-full bg-mountain-obsidian border border-mountain-ice/10 rounded-lg py-2.5 px-4 text-xs font-mono focus:border-mountain-cyan focus:outline-none text-mountain-ice"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-mountain-fog">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={contactMessage.email}
                      onChange={(e) => setContactMessage({ ...contactMessage, email: e.target.value })}
                      placeholder="e.g. learner@domain.com" 
                      className="w-full bg-mountain-obsidian border border-mountain-ice/10 rounded-lg py-2.5 px-4 text-xs font-mono focus:border-mountain-cyan focus:outline-none text-mountain-ice"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-mountain-fog">Inquiry Subject</label>
                  <select 
                    value={contactMessage.subject}
                    onChange={(e) => setContactMessage({ ...contactMessage, subject: e.target.value })}
                    className="w-full bg-mountain-obsidian border border-mountain-ice/10 rounded-lg py-2.5 px-4 text-xs font-mono focus:border-mountain-cyan focus:outline-none text-mountain-ice"
                  >
                    <option value="Collaboration">Collaboration Idea</option>
                    <option value="AI / ML Systems">AI / ML Systems Talk</option>
                    <option value="Backend Development">Backend Server Queries</option>
                    <option value="Software Project">Development Project</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-mountain-fog">Message Details</label>
                  <textarea 
                    rows={4}
                    required
                    value={contactMessage.text}
                    onChange={(e) => setContactMessage({ ...contactMessage, text: e.target.value })}
                    placeholder="Describe your project, ideas, or questions here..." 
                    className="w-full bg-mountain-obsidian border border-mountain-ice/10 rounded-lg py-2.5 px-4 text-xs font-mono focus:border-mountain-cyan focus:outline-none text-mountain-ice resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-lg bg-mountain-ice text-mountain-black hover:bg-white text-xs font-mono tracking-wider uppercase font-semibold cursor-pointer transition-all"
                >
                  <span>Transmit message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {formSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3 bg-mountain-cyan/10 border border-mountain-cyan/25 rounded-lg text-center text-xs text-mountain-cyan font-mono"
                    >
                      ✓ Message simulated transmission successful. Let's build quietly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-mountain-ice/5 bg-mountain-obsidian/40 py-12 mt-32 text-center text-mountain-fog">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-1">
              <h4 className="font-display font-bold text-base text-mountain-ice tracking-wider">Aashish Adhikary</h4>
              <p className="text-xs font-mono">AI Learner • Backend Developer</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com/aa-asura" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-mountain-ice/5 hover:border-mountain-cyan/30 hover:text-mountain-ice transition-colors">
                <Github className="w-4.5 h-4.5" />
              </a>
              <a href="https://www.instagram.com/ashish_adhikaryy/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-mountain-ice/5 hover:border-mountain-cyan/30 hover:text-mountain-ice transition-colors">
                <Instagram className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          <div className="py-4 border-t border-b border-mountain-ice/5">
            <blockquote className="font-mono text-xs italic text-mountain-ice/80">
              "Building quietly. Learning continuously. Improving every day."
            </blockquote>
          </div>

          <p className="text-[10px] font-mono tracking-widest uppercase">
            © 2026 Aashish Adhikary. All rights reserved.
          </p>
        </div>
      </footer>

      {/* DETAILED PROJECT DRAWER / MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mountain-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="w-full max-w-2xl bg-mountain-obsidian border border-mountain-ice/15 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-y-auto max-h-[90vh] glass-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full border border-mountain-ice/10 hover:border-mountain-cyan/40 hover:bg-mountain-slate/20 text-mountain-fog hover:text-mountain-ice transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title & Tag */}
              <div className="space-y-2 pr-8">
                <span className="text-[10px] font-mono uppercase tracking-widest text-mountain-cyan">{selectedProject.tag}</span>
                <h3 className="font-display font-bold text-2xl heading-gradient">{selectedProject.name}</h3>
              </div>

              {/* Grid content */}
              <div className="space-y-5 text-xs sm:text-sm text-mountain-fog leading-relaxed">
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-mountain-ice flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-mountain-cyan"></span>
                    <span>System Overview</span>
                  </h4>
                  <p>{selectedProject.overview}</p>
                </div>

                {/* ARCHITECTURE VISUALIZER */}
                <div className="py-2">
                  <ArchitectureVisualizer projectId={selectedProject.id} />
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-mountain-ice flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-mountain-cyan"></span>
                    <span>Problem Solved</span>
                  </h4>
                  <p className="italic bg-mountain-slate/20 border border-mountain-ice/5 p-3 rounded-lg text-mountain-ice/95">
                    "{selectedProject.problemSolved}"
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-mountain-ice flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-mountain-cyan"></span>
                    <span>Implemented Features</span>
                  </h4>
                  <ul className="space-y-1.5 font-mono text-xs list-none pl-1">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-mountain-cyan select-none">✔</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Future Roadmap */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-mountain-ice flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-mountain-cyan"></span>
                    <span>Future Improvements Roadmap</span>
                  </h4>
                  <ul className="space-y-1.5 font-mono text-xs list-none pl-1">
                    {selectedProject.futureImprovements.map((improvement, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-mountain-cyan select-none">▪</span>
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="space-y-2 pt-4 border-t border-mountain-ice/5">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-mountain-ice">Technologies Integrated</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-mountain-slate/30 text-mountain-cyan text-[10px] font-mono px-3 py-1 rounded border border-mountain-cyan/15">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
