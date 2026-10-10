import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Code2, ExternalLink, Package, Skull, Flame, Sun, Moon, Wrench } from 'lucide-react';

const GithubIcon = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const CONTENT = {
  en: {
    role: "BACKEND ENGINEER & MEME CONNOISSEUR",
    heroSub: "I write clean C# by day, and break my CachyOS install by night.",
    aboutTitle: "WHO IS THIS GUY?",
    aboutText: "I'm a software engineer who builds serious enterprise SaaS platforms using .NET 8 and Clean Architecture, but mentally, I'm just this Link avatar. When I'm not writing memory-safe Rust plugins or AUR packages, I'm probably playing heavy guitar riffs.",
    projectsTitle: "STUFF THAT ACTUALLY WORKS",
    skillsTitle: "MY SURVIVAL KIT",
    downloadBtn: "DOWNLOAD CV",
    marqueeText: "⚠️ CACHYOS SUPERUSER • RUST BORROW CHECKER SURVIVOR • .NET 8 ENTHUSIAST • AUR PACKAGER",
    footerCopy: "© 2026 İzzet Aydın",
    doNotPushBtn: "START EARTHQUAKE",
    repairBtn: "STOP & REPAIR SITE",
    footerPowered: "POWERED BY CACHYOS & PURE STUBBORNNESS",
    projects: [
      {
        name: "NoxStock",
        badge: "ENTERPRISE BEAST",
        desc: "A multi-tenant ERP/Accounting engine built with Clean Architecture & DDD. Features multi-warehouse stock audits and bulletproof RBAC.",
        tech: ["C#", ".NET 8", "PostgreSQL", "Docker", "DDD"],
        liveUrl: "https://noxstock.duckdns.org/",
        githubUrl: "https://github.com/ZondaX63/NexStock-backend",
        lightBg: "bg-orange-400",
        darkShadow: "shadow-[8px_8px_0px_#ff6b00]"
      },
      {
        name: "Warp-GUI (WarpPulse)",
        badge: "AUR OFFICIAL",
        desc: "Cloudflare Warp GUI client for Linux. Engineered with Rust and Tauri for zero memory bloat. Yes, it's on the Arch User Repository.",
        tech: ["Rust", "Tauri", "Linux IPC", "PKGBUILD"],
        githubUrl: "https://github.com/ZondaX63/Warp-GUI",
        aurUrl: "https://aur.archlinux.org/packages/warppulse",
        lightBg: "bg-green-400",
        darkShadow: "shadow-[8px_8px_0px_#00ff41]"
      },
      {
        name: "GlobalMenu",
        badge: "SYSTEM76 DE",
        desc: "Wayland global menu extension for System76's Cosmic Desktop Environment. Built via DBus interception.",
        tech: ["Rust", "Cosmic DE", "DBus", "Wayland"],
        githubUrl: "https://github.com/ZondaX63/GlobalMenu",
        lightBg: "bg-yellow-400",
        darkShadow: "shadow-[8px_8px_0px_#fde047]"
      },
      {
        name: "Riders App",
        badge: "REAL-TIME GPS",
        desc: "Low-latency social tracking for motorcycle crews. Real-time GPS broadcasting powered by WebSockets.",
        tech: ["Flutter", "Node.js", "MongoDB", "Socket.IO"],
        githubUrl: "https://github.com/ZondaX63/riders-app-backend",
        lightBg: "bg-blue-400",
        darkShadow: "shadow-[8px_8px_0px_#3b82f6]"
      }
    ],
    skills: [
      { category: "THE MONEY MAKERS", items: "C#, .NET 8, Node.js, REST APIs, Clean Architecture, DDD" },
      { category: "NIGHT SHIFT", items: "Rust, Tauri, DBus, Wayland, Shell Scripting, AUR" },
      { category: "DEVOPS & CLOUD", items: "AWS (S3/CloudFront), Docker, GitHub Actions, Linux Admin" },
      { category: "BUILDS CHARACTER", items: "CachyOS, Neovim, Heavy Metal, Push-ups, Unhealthy amounts of Coffee" }
    ]
  },
  tr: {
    role: "BACKEND MÜHENDİSİ & ARCH BAĞIMLISI",
    heroSub: "Gündüzleri kurumsal C# yazar, geceleri CachyOS çekirdeğini bozarım.",
    aboutTitle: "BU ADAM KİM?",
    aboutText: "Clean Architecture ve .NET 8 ile ciddi kurumsal SaaS platformları geliştiren bir yazılım mühendisiyim, ama ruhen tam olarak bu profil fotoğrafıyım. Bellek güvenli Rust eklentileri veya AUR paketleri yazmadığım zamanlarda muhtemelen elektro gitarımla ağır riffler çalıyorum.",
    projectsTitle: "GERÇEKTEN ÇALIŞAN PROJELER",
    skillsTitle: "HAYATTA KALMA KİTİ",
    downloadBtn: "CV'Yİ İNDİR (VİRÜS YOK)",
    marqueeText: "⚠️ CACHYOS KULLANICISI • RUST BELLEK YÖNETİMİ GAZİSİ • .NET 8 TUTKUNU • AUR PAKETLEYİCİ",
    footerCopy: "© 2026 İzzet Aydın",
    doNotPushBtn: "DEPREMİ BAŞLAT (SAKIN BASMA)",
    repairBtn: "DEPREMİ DURDUR VE ONAR",
    footerPowered: "CACHYOS VE SAF İNATLA GÜÇLENDİRİLDİ",
    projects: [
      {
        name: "NoxStock",
        badge: "KURUMSAL CANAVAR",
        desc: "Clean Architecture ve DDD ile geliştirilmiş çok kiracılı ERP motoru. Gelişmiş RBAC ve çoklu depo stok denetimi içerir.",
        tech: ["C#", ".NET 8", "PostgreSQL", "Docker", "DDD"],
        liveUrl: "https://noxstock.duckdns.org/",
        githubUrl: "https://github.com/ZondaX63/NexStock-backend",
        lightBg: "bg-orange-400",
        darkShadow: "shadow-[8px_8px_0px_#ff6b00]"
      },
      {
        name: "Warp-GUI (WarpPulse)",
        badge: "RESMİ AUR",
        desc: "Linux için Cloudflare Warp masaüstü aracı. Sıfır RAM tüketimi için Rust ve Tauri ile yazıldı. Arch User Repository'de yayında.",
        tech: ["Rust", "Tauri", "Linux IPC", "PKGBUILD"],
        githubUrl: "https://github.com/ZondaX63/Warp-GUI",
        aurUrl: "https://aur.archlinux.org/packages/warppulse",
        lightBg: "bg-green-400",
        darkShadow: "shadow-[8px_8px_0px_#00ff41]"
      },
      {
        name: "GlobalMenu",
        badge: "SYSTEM76 DE",
        desc: "System76'nın Cosmic Masaüstü için DBus protokolüyle yazılmış üst panel global menü eklentisi.",
        tech: ["Rust", "Cosmic DE", "DBus", "Wayland"],
        githubUrl: "https://github.com/ZondaX63/GlobalMenu",
        lightBg: "bg-yellow-400",
        darkShadow: "shadow-[8px_8px_0px_#fde047]"
      },
      {
        name: "Riders App",
        badge: "GERÇEK ZAMANLI",
        desc: "Motosiklet grupları için WebSocket tabanlı anlık konum ve telemetri paylaşım ağı.",
        tech: ["Flutter", "Node.js", "MongoDB", "Socket.IO"],
        githubUrl: "https://github.com/ZondaX63/riders-app-backend",
        lightBg: "bg-blue-400",
        darkShadow: "shadow-[8px_8px_0px_#3b82f6]"
      }
    ],
    skills: [
      { category: "PARA KAZANDIRANLAR", items: "C#, .NET 8, Node.js, REST API, Clean Architecture, DDD" },
      { category: "GECE MESAİSİ", items: "Rust, Tauri, DBus, Wayland, Shell Scripting, AUR Paketleme" },
      { category: "DEVOPS", items: "AWS (S3/CloudFront), Docker, GitHub Actions, Linux Sunucu" },
      { category: "KARAKTER GELİŞİMİ", items: "CachyOS, Neovim, Elektro Gitar, Şınav, Fazla Miktarda Kahve" }
    ]
  }
};

// Yavaşlatılmış, Tek Tek Dökülme Fiziği
const dropVariants = {
  normal: { y: 0, x: 0, rotate: 0, opacity: 1 },
  destroyed: (i) => {
    const isEven = i % 2 === 0;
    const direction = isEven ? 1 : -1;
    const rotation = direction * (15 + (i * 3)); // Her eleman farklı açıyla düşer
    const xOffset = direction * (20 + (i * 6));

    return {
      y: ["0%", "-4vh", "120vh"], // Önce havaya sıçrar, sonra aşağıya çakılır
      x: [0, xOffset * 0.1, xOffset],
      rotate: [0, rotation * 0.2, rotation],
      opacity: [1, 1, 0], // En altta kaybolsun ki site çok uzamasın
      transition: {
        delay: i * 0.25, // CRITICAL: Her parça arasında 0.25 saniye gecikme (Tek tek düşme)
        duration: 1.5,
        times: [0, 0.15, 1],
        ease: ["easeOut", "easeIn"]
      }
    };
  }
};

const FallObj = ({ children, i, rageMode, className = "" }) => (
  <motion.div
    custom={i}
    variants={dropVariants}
    initial="normal"
    animate={rageMode ? "destroyed" : "normal"}
    className={className}
    style={{ transformOrigin: "center" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');
  
  // Tek bir state: Aç/Kapa mantığı
  const [rageMode, setRageMode] = useState(false);
  const content = CONTENT[lang];

  const isDark = theme === 'dark';
  const bgMain = isDark ? 'bg-[#0a0a0a]' : 'bg-[#fcf9f2]';
  const textMain = isDark ? 'text-white' : 'text-black';
  const borderCol = isDark ? 'border-white' : 'border-black';
  const bgCard = isDark ? 'bg-[#171717]' : 'bg-white';
  const shadowBase = isDark ? 'shadow-[8px_8px_0px_#ffffff]' : 'shadow-[8px_8px_0px_#000000]';
  const shadowBtn = isDark ? 'shadow-[4px_4px_0px_#ffffff]' : 'shadow-[4px_4px_0px_#000000]';

  // Aç/Kapa Tetikleyicisi
  const toggleDestruction = () => {
    setRageMode(currentMode => !currentMode);
  };

  return (
    <div className={`min-h-screen selection:bg-green-400 selection:text-black ${bgMain} ${textMain} transition-colors duration-300 overflow-hidden relative ${rageMode ? 'shake-screen' : ''}`}>
      
      {/* Navbar -> [Index: 0] */}
      <FallObj i={0} rageMode={rageMode} className={`fixed w-full p-4 md:px-8 flex justify-between items-center z-50 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'} border-b-4 ${borderCol}`}>
        <div className={`font-black text-2xl tracking-tighter ${textMain}`}>
          ZONDAKS<span className={isDark ? 'text-[#00ff41]' : 'text-orange-500'}>_</span>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className={`p-2 border-4 ${borderCol} font-black transition-all ${shadowBtn} active:shadow-none active:translate-y-1 ${isDark ? 'bg-[#171717] hover:bg-white hover:text-black' : 'bg-white hover:bg-black hover:text-white'}`}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setLang(l => l === 'en' ? 'tr' : 'en')} className={`px-4 py-1.5 ${isDark ? 'bg-[#fde047] text-black' : 'bg-yellow-400 text-black'} border-4 ${borderCol} font-black hover:bg-orange-500 hover:text-white hover:-translate-y-1 transition-all ${shadowBtn} active:shadow-none active:translate-y-1`}>
            {lang === 'en' ? 'TÜRKÇE' : 'ENGLISH'}
          </button>
        </div>
      </FallObj>

      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 px-6 border-b-4 ${borderCol} ${isDark ? 'bg-[#0a0a0a]' : 'bg-orange-500'} min-h-[95vh] flex items-center justify-center`}>
        <div 
          className={`absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat ${isDark ? 'opacity-[0.08] grayscale' : 'opacity-25'}`}
          style={{ backgroundImage: `url('/banner.jpg')` }}
        />

        <div className={`relative z-10 max-w-3xl w-full ${bgCard} border-4 ${borderCol} p-8 md:p-12 flex flex-col items-center text-center transform rotate-1 transition-transform duration-300 ${isDark ? 'shadow-[12px_12px_0px_#ff6b00]' : 'shadow-[12px_12px_0px_#000000]'}`}>
          
          <FallObj i={1} rageMode={rageMode}>
            <div className={`w-40 h-40 rounded-full border-4 ${borderCol} overflow-hidden ${isDark ? 'bg-[#00ff41]' : 'bg-green-400'} -mt-28 mb-6 ${isDark ? 'shadow-[6px_6px_0px_#ffffff]' : 'shadow-[6px_6px_0px_#000000]'}`}>
              <img src="/avatar.png" alt="Zondaks Meme Avatar" className="w-full h-full object-cover" />
            </div>
          </FallObj>

          <FallObj i={2} rageMode={rageMode}>
            <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter leading-none">
              İzzet Aydın
            </h1>
          </FallObj>

          <FallObj i={3} rageMode={rageMode}>
            <div className={`inline-block px-4 py-2 font-black text-lg md:text-xl mb-6 transform -skew-x-6 border-2 ${borderCol} ${isDark ? 'bg-[#00ff41] text-black' : 'bg-black text-white'}`}>
              {content.role}
            </div>
          </FallObj>
          
          <FallObj i={4} rageMode={rageMode}>
            <p className={`text-xl md:text-2xl font-bold mb-10 border-b-4 ${borderCol} pb-4 inline-block ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
              {content.heroSub}
            </p>
          </FallObj>

          <FallObj i={5} rageMode={rageMode} className="flex flex-wrap justify-center gap-4 w-full">
             <a href="/cv-en_v1.pdf" download="Izzet_Aydin_CV.pdf" className={`flex items-center gap-2 px-6 py-3 border-4 ${borderCol} font-black text-black hover:-translate-y-1 transition-all active:shadow-none active:translate-y-1 text-lg ${isDark ? 'bg-[#00ff41] shadow-[6px_6px_0px_#ffffff]' : 'bg-green-400 shadow-[6px_6px_0px_#000000]'}`}>
              <Download strokeWidth={3} /> {content.downloadBtn}
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/ZondaX63" target="_blank" rel="noreferrer" className={`flex items-center justify-center p-3 border-4 ${borderCol} hover:-translate-y-1 transition-all active:shadow-none active:translate-y-1 ${isDark ? 'bg-white text-black shadow-[6px_6px_0px_#ff6b00]' : 'bg-yellow-400 text-black shadow-[6px_6px_0px_#000000]'}`}>
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/izzet-aydin-556087203" target="_blank" rel="noreferrer" className={`flex items-center justify-center p-3 border-4 ${borderCol} hover:-translate-y-1 transition-all active:shadow-none active:translate-y-1 ${isDark ? 'bg-white text-black shadow-[6px_6px_0px_#00ff41]' : 'bg-blue-400 text-black shadow-[6px_6px_0px_#000000]'}`}>
                <LinkedinIcon />
              </a>
            </div>
          </FallObj>
        </div>
      </section>

      <FallObj i={6} rageMode={rageMode} className={`${isDark ? 'bg-[#ff6b00]' : 'bg-yellow-400'} border-b-4 ${borderCol} overflow-hidden py-3 flex whitespace-nowrap font-black text-xl text-black`}>
        <div className="animate-marquee flex gap-8 items-center">
          <span>{content.marqueeText}</span> <span>•</span>
          <span>{content.marqueeText}</span> <span>•</span>
          <span>{content.marqueeText}</span> <span>•</span>
          <span>{content.marqueeText}</span> <span>•</span>
        </div>
      </FallObj>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <FallObj i={7} rageMode={rageMode} className={`${bgCard} border-4 ${borderCol} p-8 ${shadowBase}`}>
          <h3 className="text-3xl font-black mb-6 flex items-center gap-3 uppercase">
            <Skull size={36} className={isDark ? 'text-[#00ff41]' : 'text-orange-500'} /> {content.aboutTitle}
          </h3>
          <p className={`text-xl font-medium leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
            {content.aboutText}
          </p>
        </FallObj>
      </section>

      <section className={`py-20 px-6 border-y-4 ${borderCol} ${isDark ? 'bg-[#050505]' : 'bg-[#f4f0ea]'}`}>
        <div className="max-w-6xl mx-auto">
          <FallObj i={8} rageMode={rageMode}>
            <h3 className="text-4xl font-black mb-12 text-center uppercase">
              {content.projectsTitle}
            </h3>
          </FallObj>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.projects.map((project, idx) => (
              <FallObj i={9 + idx} rageMode={rageMode} key={idx} className={`border-4 ${borderCol} p-6 md:p-8 hover:-translate-y-2 transition-all flex flex-col justify-between ${isDark ? `bg-[#171717] ${project.darkShadow} hover:shadow-[12px_12px_0px_#ffffff]` : `${project.lightBg} shadow-[8px_8px_0px_#000000] hover:shadow-[12px_12px_0px_#000000]`}`}>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-black uppercase">{project.name}</h4>
                    <span className={`text-xs font-black px-2 py-1 transform rotate-3 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                      {project.badge}
                    </span>
                  </div>
                  <p className={`text-lg font-medium mb-6 font-sans ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className={`text-sm font-bold px-3 py-1 border-2 ${borderCol} ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-4 py-2 border-4 ${borderCol} font-black transition-colors text-sm ${isDark ? 'bg-[#00ff41] text-black hover:bg-white' : 'bg-white text-black hover:bg-black hover:text-white'}`}>
                        <ExternalLink size={16} strokeWidth={3} /> {content.liveDemoBtn || "DEMO"}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-4 py-2 border-4 ${borderCol} font-black transition-colors text-sm ${isDark ? 'bg-transparent text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'}`}>
                        <Code2 size={16} strokeWidth={3} /> {content.sourceBtn || "SOURCE"}
                      </a>
                    )}
                    {project.aurUrl && (
                      <a href={project.aurUrl} target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-4 py-2 border-4 ${borderCol} font-black transition-colors text-sm ${isDark ? 'bg-[#fde047] text-black hover:bg-white' : 'bg-black text-white hover:bg-white hover:text-black'}`}>
                        <Package size={16} strokeWidth={3} /> AUR
                      </a>
                    )}
                  </div>
                </div>
              </FallObj>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <FallObj i={13} rageMode={rageMode}>
          <h3 className="text-4xl font-black mb-12 text-center uppercase">
            {content.skillsTitle}
          </h3>
        </FallObj>

        <div className="space-y-6">
          {content.skills.map((skill, idx) => (
            <FallObj i={14 + idx} rageMode={rageMode} key={idx} className={`flex flex-col md:flex-row ${bgCard} border-4 ${borderCol} p-4 ${isDark ? 'shadow-[6px_6px_0px_#00ff41]' : 'shadow-[6px_6px_0px_#000000]'}`}>
              <div className={`md:w-1/3 border-b-4 md:border-b-0 md:border-r-4 ${borderCol} pb-2 md:pb-0 md:pr-4 mb-2 md:mb-0`}>
                <span className={`font-black text-lg uppercase px-2 leading-none inline-block transform -rotate-1 ${isDark ? 'bg-white text-black' : 'bg-yellow-400 text-black'}`}>
                  {skill.category}
                </span>
              </div>
              <div className={`md:w-2/3 md:pl-4 flex items-center font-bold text-lg ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                {skill.items}
              </div>
            </FallObj>
          ))}
        </div>
      </section>
      
      {/* Footer & Toggle Butonu (Sarsılmaz, onarmak için sabit kalır) */}
      <footer className={`relative z-50 py-16 border-t-4 ${borderCol} ${isDark ? 'bg-[#0a0a0a]' : 'bg-orange-500'} text-center font-black flex flex-col items-center`}>
        <p className={`text-xl inline-block px-4 py-2 border-4 ${borderCol} transform rotate-1 mb-8 ${isDark ? 'bg-[#ff6b00] text-black shadow-[4px_4px_0px_#ffffff]' : 'bg-white text-black shadow-[4px_4px_0px_#000000]'}`}>
          {content.footerCopy}
        </p>
        
        {/* The Toggle Switch */}
        <button 
          onClick={toggleDestruction}
          className={`flex items-center gap-2 px-6 py-4 text-xl ${rageMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-red-600 hover:bg-red-500'} text-white border-4 ${borderCol} font-black active:translate-y-1 active:shadow-none transition-all ${isDark ? 'shadow-[6px_6px_0px_#ffffff]' : 'shadow-[6px_6px_0px_#000000]'}`}
        >
          {rageMode ? <Wrench size={24} /> : <Flame size={24} />} 
          {rageMode ? content.repairBtn : content.doNotPushBtn}
        </button>

        <p className={`text-sm mt-8 uppercase ${isDark ? 'text-gray-500' : 'text-black'}`}>
          {content.footerPowered}
        </p>
      </footer>
    </div>
  );
}