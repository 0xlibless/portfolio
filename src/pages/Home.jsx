import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "../components/navbar";

const PHRASES = [
  " まだ・まだ・早い ・ ", // Todavía es muy pronto / No es suficiente
  " 夢を・追いかけて ・ ",   // Persigue tus sueños
  " 限界を・超えて ・ ",     // Supera los límites
  " 未来を・作る ・ ",       // Crea el futuro
  " 創造・破壊 ・ ",         // Creación y destrucción
  " 今を・生きる ・ ",       // Vive el momento
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
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef]);

  return (
    <div
      className="hero-image"
      style={{
        WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        overflow: "hidden",
      }}
    >
      <img
        ref={imageRef}
        style={{
          width: "100%",
          filter: "grayscale(100%)",
          justifyContent: "center",
          alignItems: "center", 
          scale: "0.7",
        }}
        src="/hero-image.png"
        alt="Hero"
      />
    </div>
  );
}

export default function Home() {
  const mainRef = useRef(null);
  const [activeSection, setActiveSection] = useState({});

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const sectionList = ["about", "work", "stack", "contact"];
          const index = sectionList.indexOf(id);
          
          if (index !== -1) {
            setActiveSection({
              number: String(index + 1).padStart(2, "0"),
              name: id.toUpperCase(),
            });
          }
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.15 });

    tl.from(".tape-band", {
      xPercent: -110,
      duration: 0.75,
      stagger: 0.09,
      ease: "power3.out",
    })
      .from(
        ".hero-label",
        { y: 22, opacity: 0, duration: 0.35 },
        "-=.4"
      )
      .from(
        ".hero-name",
        { y: 80, opacity: 0, duration: 1.1, ease: "power4.out" },
        "-=.3"
      )
      .from(
        ".hero-name-outline",
        { y: 60, opacity: 0, duration: 0.9, ease: "power3.out" },
        "-=.7"
      )
      .from(
        ".hero-tags .hero-tag",
        { y: 20, opacity: 0, stagger: 0.08, duration: 0.5 },
        "-=.3"
      )
      .from(
        ".hero-image",
        { scale: 0.9, opacity: 0, duration: 1.2, ease: "power2.out" },
        0.6
      )
      .from(
        ".hero-index, .hero-scroll",
        { opacity: 0, duration: 0.7 },
        "-=.4"
      );
  }, { scope: mainRef });

  return (
    <div ref={mainRef}>
      <Navbar />
      <div className="hero-index">{activeSection.number} / {activeSection.name}</div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll
      </div>

      <section id="about" className="hero">
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
            <span className="hero-tag">Student</span>
            <span className="hero-tag">Builder</span>
          </div>
        </div>

        <HeroImage containerRef={mainRef} />

      </section>

      <section id="work" style={{ minHeight: '100vh', background: '#e0e0e0', padding: '100px 20px' }}>

      </section>

      <section id="stack" style={{ minHeight: '100vh', background: '#eeede8', padding: '100px 20px' }}>

      </section>

      <section id="contact" style={{ minHeight: '100vh', background: '#e0e0e0', padding: '100px 20px' }}>
      </section>
    </div>
  );
}