import { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { FaCodeBranch, FaFire, FaGithub } from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiLinux, SiHtml5, SiCss3, SiGnubash, SiCplusplus } from 'react-icons/si';
import '../assets/Home.css';
import Navbar from '../components/navbar';
import ProjectCard from '../components/projectcard';
import { Contact } from '../components/contact';
import { fetchGitHubStats } from '../utils/GitHubStats';

export default function Home() {
  const [stats, setStats] = useState(null);
  const [statsLoading, setStatsLoading] = useState(true);
  const [statsError, setStatsError] = useState(null);

  useEffect(() => {
    fetchGitHubStats()
      .then(data => setStats(data))
      .catch(() => setStatsError('-'))
      .finally(() => setStatsLoading(false));
  }, []);

  const cursorDot = useRef(null);
  const cursorRing = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (cursorDot.current) {
        cursorDot.current.style.left = e.clientX + 'px';
        cursorDot.current.style.top = e.clientY + 'px';
      }
      if (cursorRing.current) {
        cursorRing.current.style.left = e.clientX + 'px';
        cursorRing.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const isDraggingRef = useRef(false);
  const lastClientX = useRef(0);

  useEffect(() => {
    const speed = 0.6;
    const animate = () => {
      const track = trackRef.current;
      if (track && !isDraggingRef.current) {
        const halfWidth = track.scrollWidth / 2;
        posRef.current -= speed;
        if (Math.abs(posRef.current) >= halfWidth) posRef.current = 0;
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onDragStart = (clientX) => {
    isDraggingRef.current = true;
    lastClientX.current = clientX;
    if (carouselRef.current) carouselRef.current.style.cursor = 'grabbing';
  };
  const onDragMove = (clientX) => {
    if (!isDraggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    const delta = clientX - lastClientX.current;
    lastClientX.current = clientX;
    const halfWidth = track.scrollWidth / 2;
    posRef.current += delta;
    if (posRef.current > 0) posRef.current -= halfWidth;
    if (Math.abs(posRef.current) >= halfWidth) posRef.current = 0;
    track.style.transform = `translateX(${posRef.current}px)`;
  };
  const onDragEnd = () => {
    isDraggingRef.current = false;
    if (carouselRef.current) carouselRef.current.style.cursor = 'grab';
  };

  const stack = [
    { icon: <SiPython size={29} color="#3776ab" />, label: 'Python' },
    { icon: <SiJavascript size={29} color="#f7df1e" />, label: 'JavaScript' },
    { icon: <SiNodedotjs size={29} color="#339933" />, label: 'Node.js' },
    { icon: <SiReact size={29} color="#61dafb" />, label: 'React' },
    { icon: <SiReact size={29} color="#00b4d8" />, label: 'React Native' },
    { icon: <SiHtml5 size={29} color="#e34f26" />, label: 'HTML' },
    { icon: <SiCss3 size={29} color="#1572b6" />, label: 'CSS' },
    { icon: <SiGnubash size={29} color="#4eaa25" />, label: 'Bash' },
    { icon: <SiLinux size={29} color="#fff" />, label: 'Linux' },
  ];

  const projects = [
    {
      title: "KeepIt",
      description: "Aplicación Android enfocada en la gestión de fotos, utilizando gestos tipo swipe para decidir de forma rápida qué imágenes conservar o eliminar, optimizando el espacio de almacenamiento.",
      url: "#/keepit",
      tags: [
        { name: "JavaScript", color: "#fbd719" }, 
        { name: "Android", color: "#3DDC84" },   
        { name: "React Native", color: "#61dafb" }
      ],
      icon: "detail"
    },
    {
      title: "Chatty.cpp",
      description: "Aplicación Android para inferencia de modelos LLM locales, escrita en JavaScript. Pensado para gente mayor de poco conocimiento técnico.",
      url: "https://github.com/0xlibless/Chatty.cpp",
      tags: [
        { name: "JavaScript", color: "#fbd719" },
        { name: "AI", color: "#ff66cc" },
        { name: "Android", color: "#3DDC84" }, 
        { name: "React Native", color: "#61dafb" }
  
      ],
      icon: "github"
    },
    {
      title: "ProxyScrapper",
      description: "Automatización en Python para recolectar y validar proxies desde fuentes públicas.",
      url: "https://github.com/0xlibless/FreeProxyScraper",
      tags: [
        { name: "Python", color: "#3776ab" }, 
        { name: "OSINT", color: "#ff4d4d" },
        { name: "Ciberseguridad", color: "rgba(255, 255, 255, 1)" }
      ],
      icon: "github"
    },
    {
      title:"LEDBLELIB",
      description: "Librería en Python para la comunicación y control de dispositivos LED mediante Bluetooth Low Energy (BLE), orientada a automatizar pruebas y prototipos. Ejemplos en el repositorio",
      url: "https://github.com/0xlibless/LEDBLELIB",
      tags: [
        { name: "Python", color: "#3776ab" }
      ],
      icon: "github"
    },
    {
      title: "IgForAnons",
      description: "Herramienta para anonimizar la actividad en Instagram, permitiendo la visualizacion y la descarga de Historias. Función opcional de proxy",
      url: "https://github.com/0xlibless/IgForAnons",
      tags: [
        { name: "Python", color: "#3776ab" },
        { name: "OSINT", color: "#ff4d4d" },
      ],
      icon: "github"
    }
  ];

  return (
    <main>
      <div ref={cursorDot} className="cursor-dot" />
      <div ref={cursorRing} className="cursor-ring" />
      <Navbar />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, mixBlendMode: 'lighten', transform: 'scale(0.8)', transformOrigin: 'top center' }}>
         <Spline className="robot" scene={`${import.meta.env.BASE_URL}robot.splinecode`} />
      </div>

      <section id="inicio" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
        <div className="intro intro-fadein">
            <h1 className="intro-title">Bienvenido! Soy <span className="text-neon">Agustín</span></h1>
            <p className="intro-text"><span className="text-neon">Desarrollador de Software</span> enfocado en Web, Mobile y Seguridad Informática.
            <br /> Principiante, en busca de aprender y crecer.
            <br /> <span className="text-neon">18 años</span>, made in <span style={{color: '#66ffff'}}>Argentina</span>
            </p>
        </div>
      </section>

      <section id="sobre-mi" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, padding: '2rem' }}>
        <div className="scroll-animate glass glass-sobre-mi" style={{ padding: '2.4rem', maxWidth: '640px', textAlign: 'left', width:'120vh' }}>
            <h2 style={{ fontFamily: 'Interphases Pro', fontSize: '2.4rem', marginBottom: '1.2rem', background: 'linear-gradient(90deg, #fff, #ccc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sobre mí</h2>
            <div style={{ fontFamily: 'Interphases Pro', fontSize: '0.88rem', lineHeight: '1.6', color: '#e0e0e0', display: 'flex', flexDirection: 'column', gap: '0.96rem'}}>
                <p>
                    Soy un joven apasionado por la tecnología. Desde chico exploré la computadora por mi cuenta, lo que me llevó a aprender de forma autodidacta programación, interfaces, terminales y sistemas operativos, especialmente <span className="text-neon">Linux</span>.
                </p>
                <p>
                    Profundicé en desarrollo web y mobile con <span className="text-neon">Python, JavaScript, Node.js y React</span>, siempre buscando entender el funcionamiento interno. Además, me formé en <span className="text-neon">ciberseguridad y pentesting</span>, aplicando técnicas de OSINT y herramientas como Shodan, Nmap y Burp Suite.
                </p>
                <p>
                    Hoy sigo siendo el mismo curioso, pero con una <span className="text-neon">mirada renovada</span> y ganas de encarar <span className="text-neon">proyectos grandes y desafiantes</span>. <br />
                </p>
            </div>
        </div>      
      </section>

      <section id="stack" style={{ minHeight: '35vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, padding: '3rem 0' }}>
        <h2 className="scroll-animate" style={{ fontSize: '2.4rem', marginBottom: '2rem' }}>Stack</h2>
        <div className="scroll-animate carousel-wrapper"
          ref={carouselRef}
          onMouseDown={e => onDragStart(e.clientX)}
          onMouseMove={e => onDragMove(e.clientX)}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={e => onDragStart(e.touches[0].clientX)}
          onTouchMove={e => onDragMove(e.touches[0].clientX)}
          onTouchEnd={onDragEnd}
          style={{ cursor: 'grab' }}
        >
          <div className="carousel-track" ref={trackRef}>
            {[...stack, ...stack].map((item, i) => (
              <div key={i} className="stack-item">
                {item.icon}
                <span className="stack-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, padding: '3.2rem 1.6rem' }}>
          <h2 className="scroll-animate" style={{ fontSize: '3.2rem', marginBottom: '2.4rem' }}>Proyectos</h2>
          <div className="projects-grid projects-grid-animate">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
            <div className="project-card glass" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', padding: '1.6rem' }}>
              <h3 style={{ fontFamily: 'Interphases Pro', color: '#fff', fontSize: '1.04rem', margin: 0, letterSpacing: '0.5px' }}>GitHub Stats</h3>
              {statsLoading && (
                <p style={{ fontFamily: 'Interphases Pro', color: '#aaa', margin: 0 }}>Cargando...</p>
              )}
              {statsError && (
                <p style={{ fontFamily: 'Interphases Pro', color: '#ff6b6b', fontSize: '0.85rem', margin: 0 }}>{statsError}</p>
              )}
              {stats && (
                <div style={{ display: 'flex', gap: '1.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.32rem' }}>
                    <FaCodeBranch size={22} color="#df99ff" />
                    <span style={{ fontFamily: 'Interphases Pro', fontSize: '1.6rem', fontWeight: 'bold', color: '#df99ff', textShadow: '0 0 12px rgba(223,153,255,0.7)', lineHeight: 1 }}>{stats.mergedPRs}</span>
                    <span style={{ fontFamily: 'Interphases Pro', fontSize: '0.68rem', color: '#ccc' }}>PRs merged</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.32rem' }}>
                    <FaFire size={22} color="#df99ff" />
                    <span style={{ fontFamily: 'Interphases Pro', fontSize: '1.6rem', fontWeight: 'bold', color: '#df99ff', textShadow: '0 0 12px rgba(223,153,255,0.7)', lineHeight: 1 }}>{stats.currentStreak}</span>
                    <span style={{ fontFamily: 'Interphases Pro', fontSize: '0.68rem', color: '#ccc' }}>días seguidos</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.32rem' }}>
                    <FaGithub size={22} color="#df99ff" />
                    <span style={{ fontFamily: 'Interphases Pro', fontSize: '1.6rem', fontWeight: 'bold', color: '#df99ff', textShadow: '0 0 12px rgba(223,153,255,0.7)', lineHeight: 1 }}>{stats.totalContribs}</span>
                    <span style={{ fontFamily: 'Interphases Pro', fontSize: '0.68rem', color: '#ccc' }}>contribuciones {new Date().getFullYear()}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
      </section>

      <section id="contacto" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, padding: '3.2rem 1.6rem' }}>
          <h2 className="scroll-animate" style={{ fontSize: '3.2rem', marginBottom: '1.6rem' }}>Contacto</h2>
          <Contact/>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-label">Visitors</span>
          <img
            src="https://hits.sh/github.com/0xlibless/Portfolio.svg?label=&color=df99ff&labelColor=111111&style=flat-square"
            alt="Visitors"
            className="footer-hits"
          />
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Aguatiin · Hecho con React & ❤️</p>
      </footer>
    </main>
  );
}