import '../assets/Home.css';

export default function Navbar() {
    return (
        <nav className="navbar glass">
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre-mi">Sobre mi</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    );
}