import Spline from '@splinetool/react-spline';
import '../assets/Home.css';
import Navbar from '../components/navbar';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const projects = [
    {
      title: "KeepIt",
      description: "Aplicación de Android para deslizar fotos (swipe) y decidir si mantenerlas o eliminarlas, ayudando a liberar espacio de almacenamiento de manera divertida.",
      url: "https://github.com/0xlibless/KeepIt",
      tags: [
        { name: "JavaScript", color: "#fbd719" }, 
        { name: "Android", color: "#3DDC84" },   
        { name: "React Native", color: "#61dafb" }
      ]
    },
    {
      title: "Chatty.cpp",
      description: "Una app de Android para inferencia de modelos LLM locales, escrita en JavaScript. LLMs privados y rápidos en tu dispositivo.",
      url: "https://github.com/0xlibless/Chatty.cpp",
      tags: [
        { name: "JavaScript", color: "#fbd719" },
        { name: "AI", color: "#ff66cc" },
        { name: "Android", color: "#3DDC84" },   
      ]
    },
    {
      title: "ProxyScrapper",
      description: "Script para extraer proxies utiles a partir de repositorios abiertos en Github",
      url: "https://github.com/0xlibless/FreeProxyScraper",
      tags: [
        { name: "Python", color: "#3776ab" }, 
        { name: "OSINT", color: "#ff4d4d" },
        { name: "Ciberseguridad", color: "rgba(255, 255, 255, 1)" }
      ]
    },
    {
      title:"LEDBLELIB",
      description: "Una libreria escrita en Python para poder controlar dispositivos Led BLE",
      url: "https://github.com/0xlibless/LEDBLELIB",
      tags: [
        { name: "Python", color: "#3776ab" }
      ]
    }
  ];

  return (
    <main>
      <Navbar />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
         <Spline className="robot" scene="/robot.splinecode" />
      </div>

      <section id="inicio" style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
        <div className="intro scroll-animate">
            <h1 style={{ fontFamily: 'Interphases Pro', color: '#fff', fontSize: '55px', fontWeight: 'bold', marginBottom: '-15px' }}>Bienvenido! Soy <span className="text-neon">Agustín</span></h1>
            <p style={{ fontFamily: 'Interphases Pro', color: '#fff', fontSize: '30px', fontWeight: 'bold', width: '615px' }}><span className="text-neon">Desarrollador de Software</span> enfocado en Web, Mobile y Seguridad Informática. 
            <br /> Principiante, en busca de aprender y crecer.
            <br /> <span className="text-neon">18 años</span>, made in <span style={{color: '#66ffff'}}>Argentina</span>
            </p>
        </div>
      </section>

      <section id="sobre-mi" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, padding: '2rem' }}>
        <div className="scroll-animate glass" style={{ padding: '3rem', maxWidth: '800px', textAlign: 'left', width:'120vh' }}>
            <h2 style={{ fontFamily: 'Interphases Pro', fontSize: '3rem', marginBottom: '1.5rem', background: 'linear-gradient(90deg, #fff, #ccc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sobre mí</h2>
            <div style={{ fontFamily: 'Interphases Pro', fontSize: '1.1rem', lineHeight: '1.6', color: '#e0e0e0', display: 'flex', flexDirection: 'column', gap: '1.2rem'}}>
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

      <section id="proyectos" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, padding: '4rem 2rem' }}>
          <h2 className="scroll-animate" style={{ fontSize: '4rem', marginBottom: '3rem' }}>Proyectos</h2>
          <div className="projects-grid scroll-animate">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
      </section>

      <section id="contacto" style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <h2 className="scroll-animate" style={{ fontSize: '4rem' }}>Contacto</h2>
      </section>
    </main>
  );
}
