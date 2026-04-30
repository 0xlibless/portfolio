import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from './Logo';
import '../pages/Home.css';
import './css/navbar.css';

export default function Navbar() {
    const container = useRef();

    useGSAP(() => {
        gsap.from(container.current, {
            y: -60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
        });

        gsap.to(".nav-links a", {
            y: -20,
            opacity: 100,
            duration: 0.6,
            stagger: 0.08,
            delay: 0.9,
            ease: "power2.out",
        });
    }, { scope: container });

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar" ref={container}>
        <div className="nav-logo">
            <Link style={{height: "30px"}} to="/">
                <Logo color="#eeede8" size="30px" />
            </Link>
        </div>

        <ul className="nav-links">
            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>Sobre mi</a></li>
            <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Proyectos</a></li>
            <li><a href="#stack" onClick={(e) => handleScroll(e, 'stack')}>Stack</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contacto</a></li>
        </ul>
        </nav>
    );
}