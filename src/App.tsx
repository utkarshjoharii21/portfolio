import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUpRight, 
  MapPin, 
  Layers, 
  Zap, 
  Type,
  Code2, 
  Sparkles, 
  MessageSquare, 
  Mail, 
  Command,
  Globe,
  Clock,
  ExternalLink,
  ChevronRight,
  Check,
  Atom,
  Cpu,
  Wind,
  Terminal,
  Database,
  Share2,
  Video,
  Box,
  GitBranch,
  Triangle,
  Cloud,
  HardDrive,
  Server,
  X,
  PlayCircle,
  Activity,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

// --- Components ---

const ProjectDetailsModal = ({ project, onClose, isLight }: { project: any, onClose: () => void, isLight: boolean }) => {
  if (!project) return null;

  const seeds = project.imageSeeds || [project.title + '1', project.title + '2', project.title + '3'];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 200,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 40,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-2xl overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative w-full max-w-6xl rounded-[40px] overflow-hidden shadow-2xl bg-[#0A0A0A] text-white border border-white/5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-8 right-8 z-50 p-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 backdrop-blur-md transition-all"
        >
          <X className="w-6 h-6" />
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] h-full max-h-[90vh] overflow-y-auto custom-scrollbar">
          {/* Left Side: Visuals */}
          <div className="p-8 md:p-12 space-y-8 bg-white/[0.02]">
            <motion.div variants={itemVariants} className="aspect-video rounded-3xl overflow-hidden shadow-lg group relative">
              <img 
                src={`https://picsum.photos/seed/${seeds[0]}/1200/800`} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="flex items-center gap-3 text-white/80 text-sm font-mono uppercase tracking-widest">
                  <Activity className="w-5 h-5 text-accent animate-pulse" /> System Operational
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="aspect-square rounded-3xl overflow-hidden shadow-md group">
                <img 
                  src={`https://picsum.photos/seed/${seeds[1]}/600/600`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div variants={itemVariants} className="aspect-square rounded-3xl overflow-hidden shadow-md group">
                <img 
                  src={`https://picsum.photos/seed/${seeds[2]}/600/600`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-muted">Core Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-muted flex items-center gap-2 hover:border-accent/50 transition-colors">
                    <Zap className="w-3 h-3 text-accent" /> {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="p-8 md:p-12 space-y-12 overflow-y-auto">
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Case Study</span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-6xl font-black tracking-tighter uppercase leading-[0.9]">{project.title}</motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-muted leading-relaxed font-medium">
                {project.longDescription || project.description}
              </motion.p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <motion.h4 variants={itemVariants} className="text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-accent" /> Key Features & Impact
                </motion.h4>
                <div className="grid grid-cols-1 gap-4">
                  {project.highlights.map((h: string, i: number) => (
                    <motion.div 
                      key={i}
                      variants={itemVariants}
                      className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 flex gap-4 items-start hover:border-white/10 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <p className="text-muted text-sm leading-relaxed">{h}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <motion.h4 variants={itemVariants} className="text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" /> How it Works
                </motion.h4>
                <motion.div variants={itemVariants} className="space-y-4 text-muted text-sm leading-relaxed">
                  {project.howItWorks ? project.howItWorks.map((step: string, i: number) => (
                    <div key={i} className="flex gap-4">
                      <span className="font-mono text-accent font-bold">0{i + 1}.</span>
                      <p>{step}</p>
                    </div>
                  )) : (
                    <p>This project leverages a modern tech stack to deliver high performance and scalability. From real-time data synchronization to secure authentication, every component is optimized for user experience.</p>
                  )}
                </motion.div>
              </div>
            </div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-8">
              <motion.button 
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(project.githubUrl || 'https://github.com', '_blank')}
                className="w-full py-5 bg-accent text-white rounded-3xl font-bold text-sm flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:bg-accent/90 transition-colors"
              >
                VIEW SOURCE CODE <Github className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Navbar = ({ isLight }: { isLight: boolean }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-ink/5 backdrop-blur-xl border border-ink/10 p-1.5 rounded-full"
    >
      <div className="flex items-center gap-1 px-2">
        {['Home', 'About', 'Work', 'Blogs'].map((item) => (
          <motion.button 
            key={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(item)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === item ? (isLight ? 'bg-black text-white' : 'bg-white text-black') : 'text-muted hover:text-ink'}`}
          >
            {item}
          </motion.button>
        ))}
      </div>
      <div className="h-6 w-[1px] bg-ink/10 mx-1" />
      <motion.button 
        whileHover={{ scale: 1.05, backgroundColor: '#93C5FD' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open('https://calendly.com', '_blank')}
        className="bg-accent text-white px-5 py-2 rounded-full text-sm font-medium transition-all"
      >
        Book a Call
      </motion.button>
      <motion.button 
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          alert('Command Palette Coming Soon!');
        }}
        className="p-2 bg-ink/5 border border-ink/10 rounded-full text-muted hover:text-ink transition-all"
      >
        <Command className="w-4 h-4" />
      </motion.button>
    </motion.nav>
  );
};

const Marquee = ({ text }: { text: string[] }) => {
  return (
    <div className="marquee-container -rotate-2 scale-105 my-24">
      <div className="marquee-content">
        {Array(4).fill(text).flat().map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    highlights: string[];
    tags: string[];
    imageSeeds?: string[];
    githubUrl?: string;
    longDescription?: string;
    howItWorks?: string[];
  };
  index: number;
  isLight: boolean;
  onViewDetails: (project: any) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isLight, onViewDetails }) => {
  const seeds = project.imageSeeds || [project.title + '1', project.title + '2', project.title + '3'];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 py-24 border-t border-ink/5"
    >
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-accent" />
          <h3 className="text-4xl font-bold tracking-tight">{project.title}</h3>
        </div>
        <p className="text-muted text-lg leading-relaxed">
          <span className="text-ink">🚀</span> {project.description}
        </p>
        <ul className="space-y-4">
          {project.highlights.map((h: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-muted">
              <Sparkles className="w-4 h-4 text-accent mt-1 shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-4 py-1.5 bg-ink/5 border border-ink/10 rounded-full text-xs font-mono text-muted flex items-center gap-2">
              <Zap className="w-3 h-3" /> {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="relative group">
        <div className="absolute inset-0 bg-accent/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative glass-card aspect-video flex items-center justify-center bg-gradient-to-br from-ink/5 to-transparent">
          <div className="grid grid-cols-2 gap-4 p-8 w-full h-full">
            <div className="glass-card bg-ink/5 flex items-center justify-center overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/${seeds[0]}/800/600`} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="glass-card bg-ink/5 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${seeds[1]}/800/600`} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="glass-card bg-ink/5 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${seeds[2]}/800/600`} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 right-8">
            <motion.button 
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onViewDetails(project)}
              className={`${isLight ? 'bg-black text-white' : 'bg-white text-black'} px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-accent hover:text-white transition-all shadow-xl`}
            >
              View Project <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

const ShootingStars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep Space Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.05),transparent_70%)]" />
      
      {/* Background Twinkling Stars */}
      {[...Array(80)].map((_, i) => {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        
        return (
          <motion.div
            key={`star-${i}`}
            initial={{ 
              left: `${x}%`, 
              top: `${y}%`,
              opacity: Math.random() * 0.3 + 0.1,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              opacity: [0.1, 0.7, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut"
            }}
            className={`absolute rounded-full ${Math.random() > 0.8 ? 'bg-blue-200' : 'bg-white'}`}
            style={{ 
              width: size, 
              height: size,
              boxShadow: size > 2 ? '0 0 10px rgba(96,165,250,0.5)' : 'none'
            }}
          />
        );
      })}

      {/* Shooting Stars */}
      {[...Array(5)].map((_, i) => {
        const duration = Math.random() * 3 + 4; // 4 to 7 seconds
        const delay = Math.random() * 30;
        const angle = Math.random() * 15 + 20; // 20 to 35 degrees
        
        return (
          <motion.div
            key={`shooting-${i}`}
            initial={{ 
              top: `${Math.random() * 40}%`,
              left: "-10%",
              opacity: 0,
              scale: 0,
              rotate: angle
            }}
            animate={{ 
              left: "110%",
              top: `${Math.random() * 80 + 20}%`,
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1.1, 0]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: [0.16, 1, 0.3, 1] // Elegant cubic-bezier
            }}
            className="absolute w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          >
            {/* The Trail */}
            <div 
              className="absolute top-1/2 right-0 w-[400px] h-[1.5px] origin-right -translate-y-1/2 blur-[1px]"
              style={{
                background: 'linear-gradient(to left, rgba(255,255,255,0.6), rgba(96,165,250,0.2), transparent)'
              }}
            />
            {/* Secondary Glow Trail */}
            <div 
              className="absolute top-1/2 right-0 w-[200px] h-[3px] origin-right -translate-y-1/2 blur-[3px] opacity-20"
              style={{
                background: 'linear-gradient(to left, rgba(96,165,250,0.5), transparent)'
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLight, setIsLight] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: "Uber Clone",
      description: "Full Stack Ride Sharing Platform built with real-time tracking and WebSocket-based matching.",
      longDescription: "A comprehensive ride-sharing ecosystem featuring real-time driver tracking, dynamic pricing, and seamless ride matching. Built with scalability in mind to handle high-concurrency traffic.",
      highlights: [
        "Built ride-sharing platform supporting 100+ simulated users with real-time tracking.",
        "Reduced confirmation time by 40% using WebSocket-based ride matching.",
        "Developed 15+ REST APIs for secure authentication and comprehensive ride management."
      ],
      howItWorks: [
        "User requests a ride through the React client, sending location data to the server.",
        "Socket.io broadcasts the request to nearby drivers based on geospatial indexing.",
        "Once a driver accepts, a real-time connection is established for live tracking.",
        "MongoDB stores ride history and user profiles for future reference."
      ],
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io"],
      imageSeeds: ["taxi", "map", "car"],
      githubUrl: "https://github.com/utkarshjoharii21"
    },
    {
      title: "CodeSphere",
      description: "Real-time interview platform supporting 50+ concurrent sessions with low latency.",
      longDescription: "CodeSphere is a collaborative coding environment designed for technical interviews. It features a shared code editor, video conferencing, and real-time compilation.",
      highlights: [
        "Optimized signaling architecture to reduce latency by 30%.",
        "Implemented secure meeting rooms and screen sharing features.",
        "Improved overall collaboration efficiency by 35%."
      ],
      howItWorks: [
        "Users join a unique room ID which initializes a WebRTC peer connection.",
        "Socket.io handles the signaling process for video and audio streams.",
        "The shared editor uses operational transformation to sync code changes instantly.",
        "A backend service executes code snippets in a sandboxed environment."
      ],
      tags: ["React.js", "Node.js", "WebRTC", "Socket.io"],
      imageSeeds: ["video", "meeting", "webcam"],
      githubUrl: "https://github.com/utkarshjoharii21/CodeSphere"
    },
    {
      title: "AI Ads Generator",
      description: "AI-powered SaaS platform using Gemini API to generate marketing video scripts.",
      longDescription: "A powerful marketing tool that transforms product descriptions into high-converting video scripts using advanced LLMs. Designed for content creators and marketing agencies.",
      highlights: [
        "Generates marketing video scripts in under 10 seconds, improving speed by 80%.",
        "Developed 12+ backend APIs to support automated ad generation workflows.",
        "Robust project management and content creation dashboard."
      ],
      howItWorks: [
        "User inputs product details and target audience into the dashboard.",
        "The server constructs a prompt and calls the Gemini API for script generation.",
        "The generated content is parsed and formatted into a professional script layout.",
        "Users can edit, save, and export scripts directly from the platform."
      ],
      tags: ["React.js", "Node.js", "Gemini API", "Express"],
      imageSeeds: ["ai", "robot", "marketing"],
      githubUrl: "https://github.com/utkarshjoharii21"
    },
    {
      title: "PingMe",
      description: "High-performance messaging platform with real-time presence and typing indicators.",
      longDescription: "A modern chat application built for speed and reliability. It supports private messaging, group chats, and real-time status updates.",
      highlights: [
        "Developed real-time chat system handling 200+ messages per minute with <100ms latency.",
        "Implemented typing indicators and user presence tracking using Socket.io.",
        "Built 10+ REST APIs for secure user authentication and scalable chat management."
      ],
      howItWorks: [
        "Messages are sent via WebSockets for instantaneous delivery.",
        "Redis is used for caching active sessions and presence data.",
        "MongoDB persists message history with optimized indexing for fast retrieval.",
        "JWT-based authentication ensures secure access to private conversations."
      ],
      tags: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      imageSeeds: ["chat", "message", "communication"],
      githubUrl: "https://github.com/utkarshjoharii21/PingMe"
    }
  ];

  const skills = [
    { name: "ReactJS", icon: <Atom className="w-4 h-4" /> },
    { name: "NextJS", icon: <Cpu className="w-4 h-4" /> },
    { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
    { name: "Tailwind CSS", icon: <Wind className="w-4 h-4" /> },
    { name: "Motion", icon: <Zap className="w-4 h-4" /> },
    { name: "NodeJS", icon: <Server className="w-4 h-4" /> },
    { name: "ExpressJS", icon: <Terminal className="w-4 h-4" /> },
    { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
    { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
    { name: "Prisma", icon: <Layers className="w-4 h-4" /> },
    { name: "Socket.io", icon: <Share2 className="w-4 h-4" /> },
    { name: "WebRTC", icon: <Video className="w-4 h-4" /> },
    { name: "Docker", icon: <Box className="w-4 h-4" /> },
    { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
    { name: "GitHub", icon: <Github className="w-4 h-4" /> },
    { name: "Vercel", icon: <Triangle className="w-4 h-4" /> },
    { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
    { name: "Linux", icon: <HardDrive className="w-4 h-4" /> }
  ];

  return (
    <div className={`min-h-screen selection:bg-accent selection:text-white ${isLight ? 'light' : ''}`}>
      <Navbar isLight={isLight} />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <ShootingStars />
        <div className="absolute top-24 left-12 flex items-center gap-4">
          <div className="text-2xl font-black tracking-tighter">UJ</div>
          <div className="h-8 w-[1px] bg-ink/10" />
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted">
            <div className="text-accent">Full Stack Developer</div>
            <div>Building Scalable Solutions</div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-4"
        >
          <h1 className="text-[15vw] font-black leading-[0.8] tracking-tighter uppercase">
            Utkarsh
          </h1>
          <div className="flex flex-col items-center">
            <p className="text-xl md:text-2xl font-medium text-muted tracking-widest uppercase">
              I design and build products that
            </p>
            <p className="text-5xl md:text-7xl font-serif italic font-light tracking-tight mt-2">
              deliver <span className="text-ink">real impact.</span>
            </p>
          </div>
        </motion.div>

        <div className="absolute bottom-12 left-12 flex items-center gap-3 text-xs font-mono text-muted">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="uppercase tracking-widest">Based in Gurgaon, India</span>
        </div>

        <div className="absolute bottom-12 right-12 flex items-center gap-3 text-xs font-mono text-muted text-right">
          <div className="uppercase tracking-widest">
            Full Stack Dev, <br /> & AI Enthusiast
          </div>
          <Layers className="w-4 h-4 text-accent" />
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Profile Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-3 glass-card p-8 flex flex-col justify-between aspect-[4/5]"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Utkarsh <span className="font-serif italic font-light text-muted">Johari</span></h2>
            <div className="flex items-center gap-2 text-muted text-sm font-mono">
              <MapPin className="w-3 h-3" /> Gurgaon, IN • {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-ink/5">
            <img 
              src="https://picsum.photos/seed/utkarsh/400/400" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex gap-4 pt-4">
            <motion.div whileHover={{ y: -3, color: 'var(--ink)' }} onClick={() => window.open('https://linkedin.com', '_blank')}>
              <Linkedin className="w-5 h-5 text-muted hover:text-ink cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ y: -3, color: 'var(--ink)' }} onClick={() => window.open('https://github.com', '_blank')}>
              <Github className="w-5 h-5 text-muted hover:text-ink cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ y: -3, color: 'var(--ink)' }} onClick={() => window.open('https://twitter.com', '_blank')}>
              <Twitter className="w-5 h-5 text-muted hover:text-ink cursor-pointer" />
            </motion.div>
          </div>
        </motion.div>

        {/* Philosophy Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-6 glass-card p-12 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Zap className="w-32 h-32" />
          </div>
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted">
              <Command className="w-3 h-3" /> DETAIL-DRIVEN UI
            </div>
            <h2 className="text-6xl font-bold tracking-tighter">
              Interfaces <br />
              <span className="font-serif italic font-light text-muted">you can feel.</span>
            </h2>
            <p className="text-muted text-lg max-w-md">
              I strive to create digital experiences that feel organic and human, where every pixel has a purpose.
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-8 relative z-10">
            {[
              { label: 'Motion', icon: <Zap className="w-3 h-3" /> },
              { label: 'Type', icon: <Type className="w-3 h-3" /> },
              { label: 'Feedback', icon: <MessageSquare className="w-3 h-3" /> },
              { label: 'Craft', icon: <Sparkles className="w-3 h-3" /> }
            ].map(item => (
              <span key={item.label} className="px-4 py-1.5 bg-ink/5 border border-ink/10 rounded-full text-[10px] font-mono text-muted uppercase flex items-center gap-2 hover:bg-ink/10 hover:text-ink transition-all cursor-default">
                {item.icon} {item.label}
              </span>
            ))}
          </div>

          {/* Functional Attractive Clock */}
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 border border-ink/5 rounded-full flex items-center justify-center bg-gradient-to-b from-ink/[0.02] to-transparent">
            <div className="w-80 h-80 border border-ink/10 rounded-full relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              {/* Clock Face Markers */}
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute top-1/2 left-1/2 w-0.5 h-3 bg-ink/20 origin-bottom -translate-x-1/2"
                  style={{ 
                    transform: `rotate(${i * 30}deg) translateY(-140px)`,
                    height: i % 3 === 0 ? '12px' : '6px',
                    backgroundColor: i % 3 === 0 ? 'var(--ink)' : 'var(--ink)',
                    opacity: i % 3 === 0 ? 0.4 : 0.1
                  }}
                />
              ))}
              
              {/* Hour Hand */}
              <motion.div 
                className="absolute top-1/2 left-1/2 w-1.5 h-20 bg-ink/40 rounded-full origin-bottom -translate-x-1/2 -translate-y-full"
                animate={{ rotate: (currentTime.getHours() % 12) * 30 + currentTime.getMinutes() * 0.5 }}
                transition={{ type: "spring", stiffness: 50 }}
              />
              
              {/* Minute Hand */}
              <motion.div 
                className="absolute top-1/2 left-1/2 w-1 h-28 bg-ink/20 rounded-full origin-bottom -translate-x-1/2 -translate-y-full"
                animate={{ rotate: currentTime.getMinutes() * 6 }}
                transition={{ type: "spring", stiffness: 50 }}
              />
              
              {/* Second Hand */}
              <motion.div 
                className="absolute top-1/2 left-1/2 w-0.5 h-32 bg-accent rounded-full origin-bottom -translate-x-1/2 -translate-y-full"
                animate={{ rotate: currentTime.getSeconds() * 6 }}
                transition={{ type: "tween", ease: "linear" }}
              />
              
              {/* Center Dot */}
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-ink rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg z-10" />
              <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 z-20" />
              
              {/* Micro-labels */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[8px] font-mono text-muted tracking-widest opacity-30 uppercase">Precision</div>
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[8px] font-mono text-muted tracking-widest opacity-30 uppercase">Crafted</div>
            </div>
          </div>
        </motion.div>

        {/* Status Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-3 glass-card p-8 flex flex-col justify-between"
          id="about"
        >
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 bg-ink/5 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            </div>
            <div className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Available for work
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold leading-tight">
              LET'S BUILD <br /> SOMETHING <br />
              <span className="font-serif italic font-light text-muted">that actually works.</span>
            </h3>
            <div className="space-y-1">
              <motion.div 
                whileHover={{ x: 5 }}
                onClick={() => {
                  navigator.clipboard.writeText('utkarshjohari21@gmail.com');
                  const toast = document.getElementById('copy-toast');
                  if (toast) {
                    toast.style.opacity = '1';
                    setTimeout(() => toast.style.opacity = '0', 2000);
                  }
                }}
                className="flex items-center gap-2 text-muted hover:text-ink transition-colors cursor-pointer group"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">utkarshjohari21@gmail.com</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              <p className="text-[10px] text-muted/50 uppercase tracking-widest">Tap to copy email</p>
              <div id="copy-toast" className="text-[10px] text-accent uppercase tracking-widest opacity-0 transition-opacity flex items-center gap-1">
                <Check className="w-3 h-3" /> Copied to clipboard
              </div>
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: '#60A5FA' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = 'mailto:utkarshjohari21@gmail.com'}
            className={`w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${isLight ? 'bg-black text-white' : 'bg-white text-black'}`}
          >
            CONNECT NOW <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </section>

      <Marquee text={['PROTECTED', 'DEPENDABLE', 'CAPTIVATING', 'USER-FRIENDLY', 'ADAPTIVE', 'FLUID', 'FUTURE-PROOF']} />

      {/* Work Showcase */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center mb-24 space-y-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Crafting Modern Experiences</div>
          <h2 className="text-8xl font-black uppercase tracking-tighter">
            Venture <span className="font-serif italic font-light text-gradient">Showcase</span>
          </h2>
        </div>

        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} isLight={isLight} onViewDetails={setSelectedProject} />
        ))}
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            isLight={isLight} 
          />
        )}
      </AnimatePresence>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">My Skillset</div>
          <h2 className="text-7xl font-black uppercase tracking-tighter">
            The Magic <span className="font-serif italic font-light text-gradient">Behind</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mt-12">
            {skills.map((skill) => (
              <motion.span 
                key={skill.name}
                whileHover={{ scale: 1.05, backgroundColor: 'var(--ink-10)' }}
                className="px-6 py-3 bg-ink/5 border border-ink/10 rounded-full text-sm font-medium text-muted hover:text-ink transition-all flex items-center gap-2"
              >
                <span className="text-accent">{skill.icon}</span> {skill.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="blogs" className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-24 space-y-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">What Others Say</div>
          <h2 className="text-7xl font-black uppercase tracking-tighter">
            The Voices <span className="font-serif italic font-light text-gradient">Behind</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Akshit Malik", role: "Software Engineer III, Google", text: "Utkarsh stands out as a reliable frontend contributor. His clean code and user-friendly interfaces consistently add value." },
            { name: "Gulshan Sharma", role: "SDE II, BIG4", text: "Utkarsh's attention to detail and focus on creating smooth interfaces helped refine our work significantly." },
            { name: "Shashank Kumar", role: "Senior Software Engineer, Cognizant", text: "Working with Utkarsh has been genuinely positive. He brings strong frontend knowledge and fresh perspective." }
          ].map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-10 space-y-8"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-ink/5 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-[10px] text-muted uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
                <MessageSquare className="w-6 h-6 text-ink/10" />
              </div>
              <p className="text-muted italic leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-ink/5 overflow-hidden">
              <img src="https://picsum.photos/seed/utkarsh/200/200" alt="Utkarsh" referrerPolicy="no-referrer" />
            </div>
            <h2 className="text-8xl font-black uppercase tracking-tighter">
              Let's create <br />
              <span className="text-muted/20">something real.</span>
            </h2>
            <div className="w-32 h-32 rounded-full border-2 border-accent/20 flex items-center justify-center relative">
              <div className="absolute inset-0 border-2 border-accent rounded-full animate-ping opacity-20" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-purple-600 blur-2xl opacity-50" />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 text-left pt-24 border-t border-ink/5">
            <div className="space-y-6">
              <h3 className="text-4xl font-black uppercase">Utkarsh</h3>
              <p className="text-muted text-sm leading-relaxed">
                Building digital experiences that matter, one line of code at a time. Crafting interfaces that feel alive, solving problems that make a difference.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted">General</div>
              <ul className="space-y-3 text-sm font-medium">
                {['Home', 'Blogs', 'Guestbook', 'Uses'].map(item => (
                  <motion.li 
                    key={item} 
                    whileHover={{ x: 5, color: 'var(--ink)' }}
                    onClick={() => {
                      if (item === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' });
                      else alert(`${item} page coming soon!`);
                    }}
                    className="text-muted cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted">About</div>
              <ul className="space-y-3 text-sm font-medium">
                {['About Me', 'Projects', 'Contact'].map(item => (
                  <motion.li 
                    key={item} 
                    whileHover={{ x: 5, color: 'var(--ink)' }}
                    onClick={() => {
                      const sectionId = item === 'About Me' ? 'about' : item === 'Projects' ? 'work' : 'about';
                      const element = document.getElementById(sectionId);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-muted cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted">Legal</div>
              <ul className="space-y-3 text-sm font-medium">
                {['Privacy Policy', 'Terms & Conditions'].map(item => (
                  <motion.li 
                    key={item} 
                    whileHover={{ x: 5, color: 'var(--ink)' }}
                    onClick={() => alert(`${item} coming soon!`)}
                    className="text-muted cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="pt-6">
                <img src="https://via.placeholder.com/100x30/111/fff?text=DMCA+PROTECTED" alt="DMCA" className="opacity-30" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          <div className="w-full pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted uppercase tracking-[0.3em]">
            <div>© 2026 Utkarsh Johari. All rights reserved.</div>
            <div className="flex gap-8">
              {[
                { name: 'LinkedIn', link: 'https://linkedin.com' },
                { name: 'GitHub', link: 'https://github.com' },
                { name: 'Twitter', link: 'https://twitter.com' }
              ].map(social => (
                <motion.a 
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, color: 'var(--ink)' }}
                  className="transition-colors"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
