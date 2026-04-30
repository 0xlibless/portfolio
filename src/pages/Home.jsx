import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";import StackCard from "../components/StackCard";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiLinux,
  SiGit,
  SiAndroid
} from "react-icons/si";
import { FaNetworkWired, FaTools, FaGithub, FaTwitter } from "react-icons/fa";

const stackList = [
  {
    title: "Lenguajes",
    items: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "C++", icon: <SiCplusplus /> },
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "Android", icon: <SiAndroid /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    title: "Herramientas & SO",
    items: [
      { name: "Linux", icon: <SiLinux /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
    ],
  },
  {
    title: "Ciberseguridad",
    items: [
      { name: "OSINT", icon: <FaTools /> },
      { name: "Redes", icon: <FaNetworkWired /> },
    ],
  },
];
const PROJECTS_DATA = [
  {
    title: "KeepIt",
    description:
      "Aplicación Android enfocada en la gestión de fotos, utilizando gestos tipo swipe para decidir de forma rápida qué imágenes conservar o eliminar, optimizando el espacio de almacenamiento.",
    url: "https://github.com/0xlibless/KeepIt",
    tags: [
      { name: "JavaScript", color: "#fbd719" },
      { name: "Android", color: "#3DDC84" },
      { name: "React Native", color: "#61dafb" },
    ],
    icon: "github",
  },
  {
    title: "Chatty.cpp",
    description:
      "Aplicación Android para inferencia de modelos LLM locales, escrita en JavaScript. Pensado para gente mayor de poco conocimiento técnico.",
    url: "https://github.com/0xlibless/Chatty.cpp",
    tags: [
      { name: "JavaScript", color: "#fbd719" },
      { name: "AI", color: "#ff66cc" },
      { name: "Android", color: "#3DDC84" },
      { name: "React Native", color: "#61dafb" },
    ],
    icon: "github",
  },
  {
    title: "WI-HI?",
    description:
      "Herramienta para identificar dispositivos vivos en una red wifi sin utilizar ningun tipo de libreria externa, solo con sockets y raw packets",
    url: "https://github.com/0xlibless/WI-HI",
    tags: [
      { name: "C++", color: "#00599c" },
      { name: "Ciberseguridad", color: "rgba(255, 255, 255, 1)" },
    ],
    icon: "github",
  },
  {
    title: "ProxyScrapper",
    description:
      "Automatización en Python para recolectar y validar proxies desde fuentes públicas.",
    url: "https://github.com/0xlibless/FreeProxyScraper",
    tags: [
      { name: "Python", color: "#3776ab" },
      { name: "OSINT", color: "#ff4d4d" },
      { name: "Ciberseguridad", color: "rgba(255, 255, 255, 1)" },
    ],
    icon: "github",
  },
  {
    title: "IgForAnons",
    description:
      "Herramienta para anonimizar la actividad en Instagram, permitiendo la visualizacion y la descarga de Historias. Función opcional de proxy",
    url: "https://github.com/0xlibless/IgForAnons",
    tags: [
      { name: "Python", color: "#3776ab" },
      { name: "OSINT", color: "#ff4d4d" },
    ],
    icon: "github",
  },
  {
    title: "Snake Game",
    description:
      "Clásico juego de la serpiente desarrollado en C++. Mis primeros pasos dentro del lenguaje",
    url: "https://github.com/0xlibless/SnakeGame",
    tags: [{ name: "C++", color: "#00599c" }],
    icon: "github",
  },
  {
    title: "Super TaTeTi",
    description:
      "Una idea propia reimaginada del TicTacToe, pero con un nivel más alto de dificultad. Desarrollado en React Native, con backend multijugador",
    url: "https://github.com/0xlibless/SuperTaTeTi/",
    tags: [
      { name: "JavaScript", color: "#fbd719" },
      { name: "Android", color: "#3DDC84" },
      { name: "React Native", color: "#61dafb" },
    ],
    icon: "github",
  },
];

const PHRASES = [
  " まだ・まだ・早い ・ ", // Todavía es muy pronto / No es suficiente
  " 夢を・追いかけて ・ ", // Persigue tus sueños
  " 限界を・超えて ・ ", // Supera los límites
  " 未来を・作る ・ ", // Crea el futuro
  " 創造・破壊 ・ ", // Creación y destrucción
  " 今を・生きる ・ ", // Vive el momento
];

const RANDOM_PHRASE = PHRASES[Math.floor(Math.random() * PHRASES.length)];
const TAPE_CONTENT = RANDOM_PHRASE.repeat(20);

function HeroImage({ containerRef }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const relX = e.clientX - left;
      const relY = e.clientY - top;

      const movement = -30;
      const x = ((relX - width / 2) / width) * movement + 10;
      const y = ((relY - height / 2) / height) * movement + 10;

      gsap.to(imageRef.current, {
        x,
        y,
        duration: 1,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);

  return (
    <div
      className="hero-image"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, black 80%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        overflow: "hidden",
      }}
    >
      <img
        ref={imageRef}
        src="/hero-image.png"
        alt="Hero"
        style={{
          width: "100%",
          filter: "grayscale(100%)",
          justifyContent: "center",
          alignItems: "center",
          scale: "0.7",
        }}
      />
    </div>
  );
}

export default function Home() {
  const mainRef = useRef(null);
  const [activeSection, setActiveSection] = useState({ number: "01", name: "ABOUT" });

  useEffect(() => {
    const sectionList = ["about", "projects", "stack", "contact"];

    const handleScroll = () => {
      let current = "about";
      
      for (let i = sectionList.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionList[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            current = sectionList[i];
            break;
          }
        }
      }

      setActiveSection((prev) => {
        const newName = current.toUpperCase();
        if (prev.name !== newName) {
          return {
            number: String(sectionList.indexOf(current) + 1).padStart(2, "0"),
            name: newName,
          };
        }
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      gsap
        .timeline({ delay: 0.15 })
        .from(".tape-band", {
          xPercent: -110,
          duration: 0.75,
          stagger: 0.09,
          ease: "power3.out",
        })
        .from(".hero-label", { y: 22, opacity: 0, duration: 0.35 }, "-=.4")
        .from(
          ".hero-name",
          { y: 80, opacity: 0, duration: 1.1, ease: "power4.out" },
          "-=.3",
        )
        .from(
          ".hero-name-outline",
          { y: 60, opacity: 0, duration: 0.9, ease: "power3.out" },
          "-=.7",
        )
        .from(
          ".hero-tags .hero-tag",
          { y: 20, opacity: 0, stagger: 0.08, duration: 0.5 },
          "-=.3",
        )
        .from(
          ".hero-image",
          { scale: 0.9, opacity: 0, duration: 1.2, ease: "power2.out" },
          0.6,
        )
        .from(
          ".hero-index, .hero-scroll",
          { opacity: 0, duration: 0.7 },
          "-=.4",
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".hero-container",
            end: "+=300%",
            scrub: 1,
            pin: true,
          },
        })
        .fromTo(
          "#logomask",
          {
            maskSize: "clamp(10000vh, 3500%, 0vh)",
            WebkitMaskSize: "clamp(10000vh, 3500%, 0vh)",
            maskPosition: "50% 39%",
            WebkitMaskPosition: "50% 39%",
          },
          {
            maskSize: "clamp(2vh, 25%, 20vh)",
            WebkitMaskSize: "clamp(2vh, 25%, 20vh)",
            maskPosition: "50% 39%",
            WebkitMaskPosition: "50% 39%",
            ease: "power2.out",
            backgroundColor: "#0a0a0a",
            delay: 0.3,
          },
        )
        .to("#logomask", { maskPosition: "50% 20%", duration: 0.05 })
        .to(".aboutme", { opacity: 1, duration: 0.05 })
        .to(
          ".subtitle",
          { opacity: 1, zIndex: 1, duration: 0.05, ease: "power2.out" },
          "<=",
        );

      gsap.from("#projects", {
        scrollTrigger: {
          trigger: "#projects",
          start: "top 90%",

        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from("#stack", {
        scrollTrigger: {
          trigger: "#stack",
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from("#contact", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: mainRef },
  );

  return (
    <div ref={mainRef}>
      <Navbar />

      <div className="hero-index">
        {activeSection.number} / {activeSection.name}
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll
      </div>

      <div className="hero-container" style={{ position: "relative" }}>
        <div
          id="logomask"
          className="hero"
          style={{
            WebkitMaskImage: 'url("/favicon.svg")',
            maskImage: 'url("/favicon.svg")',
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        >
          <section id="about">
            <div className="grain" />

            <div className="tape-band">
              <span className="tape-text">{TAPE_CONTENT}</span>
            </div>

            <div className="hero-content">
              <p className="hero-label">Portfolio 2026</p>
              <h1>
                <span className="hero-name">AGUS</span>
                <span className="hero-name-outline">
                  DEV
                  <em
                    style={{
                      fontStyle: "normal",
                      color: "transparent",
                      WebkitTextStroke: "2px #0a0a0a",
                    }}
                  >
                    .
                  </em>
                </span>
              </h1>
              <div className="hero-tags">
                <span className="hero-tag filled">Dev</span>
                <span className="hero-tag">Estudiante</span>
                <span className="hero-tag">Programador</span>
              </div>
            </div>

            <HeroImage containerRef={mainRef} />
          </section>
        </div>

        <div className="aboutme box">
          <h1 className="subtitle">Sobre mi</h1>
          <p>
            Soy un joven apasionado por la tecnología. Desde chico exploré la
            computadora por mi cuenta, lo que me llevó a aprender de forma
            autodidacta programación, interfaces, terminales y sistemas
            operativos, especialmente Linux.
          </p>
          <p>
            Profundicé en desarrollo web y mobile con Python, JavaScript,
            Node.js y React, siempre buscando entender el funcionamiento
            interno. Además, me formé en ciberseguridad y pentesting, aplicando
            técnicas de OSINT y herramientas como Shodan, Nmap y Burp Suite.
          </p>
          <p>
            Actualmente estudio Ciencias de la Computación en la Universidad
            Nacional del Comahue.
          </p>
        </div>
      </div>

      <section id="projects" className="section-container">
        <div className="box projects">
          <h1 className="subtitle">Projects</h1>
          <div className="projects-grid">
            {PROJECTS_DATA.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="section-container">
        <div className="box projects">
          <h1 className="subtitle">Stack</h1>
          <div className="stack-grid">
            {stackList.map((category, index) => (
              <StackCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-container">
        <div className="box projects">
          <h1 className="subtitle">Contacto</h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginTop: "30px", width: "100%" }}>
            <a
              href="https://github.com/0xlibless/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "30px 40px",
                border: "1px solid #0a0a0a",
                color: "#0a0a0a",
                textDecoration: "none",
                minHeight: "160px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0a0a0a";
                e.currentTarget.style.color = "#eeede8";
                e.currentTarget.querySelector(".contact-icon").style.transform = "scale(1.1) rotate(5deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#0a0a0a";
                e.currentTarget.querySelector(".contact-icon").style.transform = "scale(1) rotate(0deg)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3.5rem", letterSpacing: "2px", margin: 0, lineHeight: 1 }}>GITHUB</span>
                <FaGithub className="contact-icon" size={40} style={{ transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }} />
              </div>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "1rem", letterSpacing: "1px", marginTop: "40px" }}>/0xlibless</span>
            </a>

            <a
              href="https://x.com/aguatiiin"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "30px 40px",
                border: "1px solid #0a0a0a",
                color: "#0a0a0a",
                textDecoration: "none",
                minHeight: "160px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0a0a0a";
                e.currentTarget.style.color = "#eeede8";
                e.currentTarget.querySelector(".contact-icon").style.transform = "scale(1.1) rotate(-5deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#0a0a0a";
                e.currentTarget.querySelector(".contact-icon").style.transform = "scale(1) rotate(0deg)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3.5rem", letterSpacing: "2px", margin: 0, lineHeight: 1 }}>TWITTER</span>
                <FaTwitter className="contact-icon" size={40} style={{ transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }} />
              </div>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "1rem", letterSpacing: "1px", marginTop: "40px" }}>@aguatiiin</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
