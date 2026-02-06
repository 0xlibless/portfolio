import Spline from '@splinetool/react-spline';
import '../assets/Home.css';
import Navbar from '../components/navbar';

export default function Home() {
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

      <section id="proyectos" style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
          <h2 className="scroll-animate" style={{ fontSize: '4rem' }}>Proyectos</h2>
      </section>

      <section id="contacto" style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <h2 className="scroll-animate" style={{ fontSize: '4rem' }}>Contacto</h2>
      </section>
    </main>
  );
}
