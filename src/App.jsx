import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Terminal, Code2, ExternalLink, Package } from 'lucide-react';

const GithubIcon = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const CONTENT = {
  en: {
    role: "Software Engineer | Backend & Full Stack",
    heroLine: "> Building scalable SaaS by day, hacking the Linux desktop by night.",
    aboutTitle: "About Me",
    aboutText: "Software Engineer focused on backend and full-stack development. I build enterprise SaaS platforms using ASP.NET Core and Clean Architecture, while exploring native system programming with Rust and Linux. When I'm not configuring CachyOS or packaging tools for AUR, you can find me playing the electric guitar.",
    projectsTitle: "Featured Projects",
    skillsTitle: "Skills & Tech Stack",
    downloadBtn: "Download CV",
    liveDemoBtn: "Live Demo",
    sourceBtn: "Source Code",
    aurBtn: "AUR Package",
    projects: [
      {
        name: "NoxStock",
        subtitle: "Multi-tenant SaaS Inventory & Accounting Platform",
        desc: "Enterprise ERP/SaaS platform engineered for SMEs. Features multi-warehouse stock audits, invoicing pipelines, role-based authorization (RBAC), and high-performance REST APIs structured around Clean Architecture and Domain-Driven Design.",
        tech: ["C#", ".NET 8", "ABP Framework", "PostgreSQL", "Docker", "DDD"],
        liveUrl: "https://noxstock.duckdns.org/",
        githubUrl: "https://github.com/ZondaX63/NexStock-backend",
        aurUrl: null
      },
      {
        name: "Warp-GUI (WarpPulse)",
        subtitle: "Cloudflare Warp Desktop Client for Linux",
        desc: "Open-source desktop utility providing intuitive connection management and system tray integration for Cloudflare Warp on Linux distributions. Built with Rust & Tauri, and packaged officially on Arch User Repository (AUR).",
        tech: ["Rust", "Tauri", "Linux IPC", "TypeScript", "PKGBUILD"],
        liveUrl: null,
        githubUrl: "https://github.com/ZondaX63/Warp-GUI",
        aurUrl: "https://aur.archlinux.org/packages/warppulse"
      },
      {
        name: "GlobalMenu",
        subtitle: "Wayland Applet & Protocol Integration",
        desc: "Native global menu extension crafted for System76's Rust-based Cosmic Desktop Environment. Intercepts application window DBus menu models to deliver a cohesive top-panel menu bar experience.",
        tech: ["Rust", "Cosmic DE", "DBus", "Wayland"],
        liveUrl: null,
        githubUrl: "https://github.com/ZondaX63/GlobalMenu",
        aurUrl: null
      },
      {
        name: "Riders App",
        subtitle: "Real-Time Social Platform for Motorcyclists",
        desc: "Community platform enabling riders to coordinate group rides, share live GPS telemetry, and communicate in real time via low-latency WebSocket connections.",
        tech: ["Flutter", "Node.js", "Express", "MongoDB", "Socket.IO"],
        liveUrl: null,
        githubUrl: "https://github.com/ZondaX63/riders-app-backend",
        aurUrl: null
      },
      {
        name: "dotfiles",
        subtitle: "Linux Workstation & Kernel Configurations",
        desc: "Personal dotfiles repository documenting tailor-made shell scripts, window manager keybinds, and optimization setups for CachyOS / Arch Linux workflows.",
        tech: ["Shell", "Linux", "CachyOS", "Fish"],
        liveUrl: null,
        githubUrl: "https://github.com/ZondaX63/dotfiles",
        aurUrl: null
      },
      {
        name: "cuML Feature Selection",
        subtitle: "GPU-Accelerated Machine Learning Pipeline",
        desc: "Optimization research project testing meta-heuristic feature selection algorithms on the high-dimensional ISOLET dataset using NVIDIA cuML for accelerated GPU processing.",
        tech: ["Python", "cuML", "CUDA", "Machine Learning"],
        liveUrl: null,
        githubUrl: "https://github.com/ZondaX63/cuml_feature_selection",
        aurUrl: null
      }
    ],
    skills: [
      { category: "Backend & Systems", items: "C#, .NET 8, Node.js, Python, Rust" },
      { category: "Architecture", items: "Microservices, Clean Architecture, DDD, REST API" },
      { category: "Cloud & DevOps", items: "AWS (S3/CloudFront), Docker, GitHub Actions, Linux, AUR" },
      { category: "Frontend", items: "React, TypeScript, Tailwind CSS" }
    ]
  },
  tr: {
    role: "Yazılım Mühendisi | Backend & Full Stack",
    heroLine: "> Gündüzleri ölçeklenebilir SaaS mimarileri kurar, geceleri Linux masaüstünü hackler.",
    aboutTitle: "Hakkımda",
    aboutText: "Backend ve full-stack geliştirmeye odaklanmış bir yazılım mühendisiyim. ASP.NET Core ve Clean Architecture ile kurumsal ölçekte SaaS uygulamaları geliştirirken, bir yandan da Rust ve Linux ile sistem programlamanın derinliklerine iniyorum. CachyOS yapılandırmadığım veya AUR paketleri hazırlamadığım zamanlarda elektro gitar çalıyorum.",
    projectsTitle: "Öne Çıkan Projeler",
    skillsTitle: "Yetenekler & Teknolojiler",
    downloadBtn: "CV İndir",
    liveDemoBtn: "Canlı Demo",
    sourceBtn: "Kaynak Kod",
    aurBtn: "AUR Paketi",
    projects: [
      {
        name: "NoxStock",
        subtitle: "Çok Kiracılı (Multi-Tenant) SaaS Envanter ve Muhasebe Platformu",
        desc: "KOBİ'ler için geliştirilmiş kurumsal ERP/SaaS platformu. Clean Architecture ve Domain-Driven Design (DDD) prensipleriyle kurgulanmış çok modüllü stok sayımı, fatura takibi, rol tabanlı yetkilendirme (RBAC) ve REST API altyapısı sunar.",
        tech: ["C#", ".NET 8", "ABP Framework", "PostgreSQL", "Docker", "DDD"],
        liveUrl: "https://noxstock.duckdns.org/",
        githubUrl: "https://github.com/ZondaX63/NexStock-backend",
        aurUrl: null
      },
      {
        name: "Warp-GUI (WarpPulse)",
        subtitle: "Linux için Cloudflare Warp Masaüstü İstemcisi",
        desc: "Linux dağıtımlarında Cloudflare Warp bağlantısını kontrol etmeyi ve sistem tepsisinden yönetmeyi sağlayan açık kaynaklı araç. Rust & Tauri ile geliştirildi ve resmi olarak Arch User Repository (AUR) üzerinde yayınlandı.",
        tech: ["Rust", "Tauri", "Linux IPC", "TypeScript", "PKGBUILD"],
        liveUrl: null,
        githubUrl: "https://github.com/ZondaX63/Warp-GUI",
        aurUrl: "https://aur.archlinux.org/packages/warppulse"
      },
      {
        name: "GlobalMenu",
        subtitle: "Wayland Applet ve Protokol Entegrasyonu",
        desc: "System76'nın Rust tabanlı Cosmic Masaüstü Ortamı için tasarlanmış yerel eklenti. Uygulama pencerelerinin DBus menü çağrılarını yakalayarak üst panelde ergonomik bir global menü çubuğu sunar.",
        tech: ["Rust", "Cosmic DE", "DBus", "Wayland"],
        liveUrl: null,
        githubUrl: "https://github.com/ZondaX63/GlobalMenu",
        aurUrl: null
      },
      {
        name: "Riders App",
        subtitle: "Motosiklet Kullanıcıları için Gerçek Zamanlı Sosyal Ağ",
        desc: "Motosiklet sürücülerinin toplu sürüşler organize etmesini, canlı GPS telemetrisi ve rota paylaşmasını sağlayan platform. Düşük gecikmeli WebSocket protokolü ile anlık mesajlaşma altyapısı içerir.",
        tech: ["Flutter", "Node.js", "Express", "MongoDB", "Socket.IO"],
        liveUrl: null,
        githubUrl: "https://github.com/ZondaX63/riders-app-backend",
        aurUrl: null
      },
      {
        name: "dotfiles",
        subtitle: "Linux İş İstasyonu ve Çekirdek Yapılandırmaları",
        desc: "CachyOS / Arch Linux üzerinde kullanılan kişisel terminal yapılandırmaları, pencere yöneticisi kısayolları ve sistem optimizasyon betiklerini içeren konfigürasyon deposu.",
        tech: ["Shell", "Linux", "CachyOS", "Fish"],
        liveUrl: null,
        githubUrl: "https://github.com/ZondaX63/dotfiles",
        aurUrl: null
      },
      {
        name: "cuML Feature Selection",
        subtitle: "GPU Hızlandırmalı Makine Öğrenmesi Hattı",
        desc: "Yüksek boyutlu ISOLET veri setinde sezgisel özellik seçimi optimizasyonlarını NVIDIA cuML kütüphanesi kullanarak GPU üzerinde hızlandıran araştırma projesi.",
        tech: ["Python", "cuML", "CUDA", "Machine Learning"],
        liveUrl: null,
        githubUrl: "https://github.com/ZondaX63/cuml_feature_selection",
        aurUrl: null
      }
    ],
    skills: [
      { category: "Backend ve Sistem", items: "C#, .NET 8, Node.js, Python, Rust" },
      { category: "Mimari", items: "Mikroservisler, Clean Architecture, DDD, REST API" },
      { category: "Cloud ve DevOps", items: "AWS (S3/CloudFront), Docker, GitHub Actions, Linux, AUR" },
      { category: "Frontend", items: "React, TypeScript, Tailwind CSS" }
    ]
  }
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [isGlitching, setIsGlitching] = useState(false);
  const [typedText, setTypedText] = useState("");
  
  const content = CONTENT[lang];

  useEffect(() => {
    setTypedText("");
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < content.heroLine.length) {
        setTypedText(prev => prev + content.heroLine.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 45);
    return () => clearInterval(typingInterval);
  }, [lang]);

  const toggleLanguage = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setLang(lang === 'en' ? 'tr' : 'en');
      setTimeout(() => setIsGlitching(false), 300);
    }, 150); 
  };

  return (
    <div className={`min-h-screen bg-cyber-dark text-gray-300 font-mono transition-colors ${isGlitching ? 'glitch-active' : ''}`}>
      
      {/* Navbar / Lang Switcher */}
      <nav className="fixed w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
        <div className="text-cyber-green font-bold text-xl tracking-tighter">zondaks_</div>
        <button 
          onClick={toggleLanguage}
          aria-label="Toggle language"
          className="px-3 py-1 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all cursor-pointer"
        >
          {lang === 'en' ? '[ TR ]' : '[ EN ]'}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-6 border-b border-cyber-light relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-4 tracking-tight">
            İzzet Aydın
          </h1>
          <h2 className="text-xl md:text-2xl text-cyber-green mb-8">
            {content.role}
          </h2>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-lg md:text-xl text-gray-400">
              {typedText}<span className="animate-pulse text-cyber-blue">_</span>
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a href="https://github.com/ZondaX63" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="hover:text-cyber-blue transition-colors">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/izzet-aydin-556087203" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="hover:text-cyber-blue transition-colors">
              <LinkedinIcon />
            </a>
            <a href="mailto:izaydin0@gmail.com" aria-label="Send Email" className="hover:text-cyber-blue transition-colors">
              <Mail size={28} />
            </a>
          </div>
          
          <div className="mt-8">
             <a href={`${import.meta.env.BASE_URL}cv-en_v1.pdf`} download="Izzet_Aydin_CV.pdf" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all group font-bold">
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              {content.downloadBtn}
            </a>
          </div>
        </motion.div>
        
        <div className="absolute opacity-5 pointer-events-none w-full h-full flex items-center justify-center">
           <Terminal size={800} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-24 bg-cyber-light">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 border-l-4 border-cyber-blue pl-4">
            {content.aboutTitle}
          </h3>
          <p className="text-lg leading-relaxed text-gray-400">
            {content.aboutText}
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 md:px-24 border-t border-cyber-light">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 border-l-4 border-cyber-green pl-4 flex items-center gap-3">
            <Code2 size={32} className="text-cyber-green"/> {content.projectsTitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, borderColor: '#00f0ff' }}
                className="p-6 border border-gray-800 bg-cyber-dark/60 hover:bg-cyber-light transition-all group relative flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors mb-1">
                    {project.name}
                  </h4>
                  <h5 className="text-xs text-cyber-green mb-4 font-semibold">
                    {project.subtitle}
                  </h5>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 bg-black/60 text-cyber-blue border border-gray-800 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-800/80">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 bg-cyber-green text-black hover:bg-white transition-colors"
                      >
                        <ExternalLink size={13} />
                        {content.liveDemoBtn}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 border border-gray-700 hover:border-cyber-blue hover:text-cyber-blue transition-colors text-gray-300"
                      >
                        <GithubIcon size={13} />
                        {content.sourceBtn}
                      </a>
                    )}
                    {project.aurUrl && (
                      <a 
                        href={project.aurUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 border border-cyber-blue/60 text-cyber-blue hover:bg-cyber-blue hover:text-black transition-colors"
                      >
                        <Package size={13} />
                        {content.aurBtn}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 md:px-24 bg-cyber-light border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-cyber-blue pl-4">
            {content.skillsTitle}
          </h3>
          <div className="space-y-4">
            {content.skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center gap-2 border-b border-gray-800 pb-4">
                <span className="text-cyber-blue md:w-1/3">~/ {skill.category}</span>
                <span className="text-gray-400">{skill.items}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-cyber-light text-gray-600 text-sm">
        <p>© 2026 İzzet Aydın. Built with React & Terminal vibes.</p>
      </footer>
    </div>
  );
}