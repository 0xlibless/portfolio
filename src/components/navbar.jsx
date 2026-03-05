import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/Home.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isProject = location.pathname !== '/';

    const scrollTo = (id) => {
        setIsOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const goHome = () => {
        setIsOpen(false);
        navigate('/');
    };

    return (
        <nav className={`navbar glass${isOpen ? ' open' : ''}`}>
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
                {isOpen ? '✕' : '☰'}
            </button>
            <ul className={isOpen ? 'open' : ''}>
                <li className="pfp-item">
                    <a href="https://github.com/0xlibless" target="_blank" rel="noopener noreferrer">
                        <img src="https://github.com/0xlibless.png" alt="0xlibless pfp" className="pfp" />
                    </a>
                </li>
                {isProject ? (
                    <li><button className="nav-back" onClick={goHome}>← Inicio</button></li>
                ) : (
                    <>
                        <li><button className="nav-btn" onClick={() => scrollTo('inicio')}>Inicio</button></li>
                        <li><button className="nav-btn" onClick={() => scrollTo('sobre-mi')}>Sobre mi</button></li>
                        <li><button className="nav-btn" onClick={() => scrollTo('proyectos')}>Proyectos</button></li>
                        <li><button className="nav-btn" onClick={() => scrollTo('contacto')}>Contacto</button></li>
                    </>
                )}
            </ul>
        </nav>
    );
}