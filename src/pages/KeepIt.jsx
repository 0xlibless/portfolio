import '../assets/Home.css';
import '../assets/KeepIt.css';
import Navbar from '../components/navbar';
import { FaGithub, FaDownload, FaCheckCircle, FaCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CatWithDog from '../assets/KeepIt/CatWithDog.png';
import {getLatestRelease, getLatestApkUrl} from '../utils/KeepItGetRepo';


export default function KeepIt() {
    const navigate = useNavigate();
    const [version, setVersion] = useState('v1.3.1');
    const [apkUrl, setApkUrl] = useState('https://github.com/AguuZzz/KeepIt/releases/');

    useEffect(() => {
        getLatestRelease().then(v => setVersion(v)).catch(() => {});
        getLatestApkUrl().then(url => { if (url) setApkUrl(url); }).catch(() => {});
    }, []);

    return (
        <main className="keepit-main">
            <Navbar />

            <section className="keepit-hero">
                <div className="keepit-hero-content scroll-animate">
                    <div className="keepit-badge-row">
                        <span className="keepit-version-badge">{version}</span>
                        <span className="keepit-lang-badge" style={{ color: '#fbd719', borderColor: '#fbd719', backgroundColor: '#fbd71920' }}>#JavaScript</span>
                        <span className="keepit-lang-badge" style={{ color: '#3DDC84', borderColor: '#3DDC84', backgroundColor: '#3DDC8420' }}>#Android</span>
                        <span className="keepit-lang-badge" style={{ color: '#61dafb', borderColor: '#61dafb', backgroundColor: '#61dafb20' }}>#ReactNative</span>
                    </div>
                    <h1 className="keepit-title">
                        Keep<span className="text-neon">It</span>
                    </h1>
                    <p className="keepit-tagline">
                        Swipeá tu galería, liberá tu espacio.
                    </p>
                    <p className="keepit-desc">
                        ¿Cuántas veces viste la misma foto <strong>30 veces</strong> sin poder decidir si borrarla?<br />
                        KeepIt toma el concepto de <span className="text-neon">Tinder</span> y lo aplica a tu galería.<br />
                        Sin menús raros. Sin mil botones. <span className="text-neon">Decisión rápida, limpia y consciente.</span>
                    </p>
                    <div className="keepit-hero-btns">
                        <a href={apkUrl} target="_blank" rel="noopener noreferrer" className="keepit-btn keepit-btn-primary">
                            <FaDownload size={18} /> Descargar APK
                        </a>
                        <a href="https://github.com/0xlibless/KeepIt" target="_blank" rel="noopener noreferrer" className="keepit-btn keepit-btn-outline">
                            <FaGithub size={18} /> Ver en GitHub
                        </a>
                    </div>
                </div>

                <div className="keepit-mockup-wrap scroll-animate">
                    <div className="phone-frame glass">
                        <div className="phone-screen">
                            <div className="phone-status-bar">
                                <span>KeepIt</span>
                                <span className="keepit-counter">1 / 128</span>
                            </div>
                            <div className="swipe-demo-area">
                                <div className="swipe-card-demo glass">
                                    <div className="photo-placeholder">
                                        <img src={CatWithDog} alt="KeepIt screenshot" className="mockup-screenshot" />
                                    </div>
                                    <div className="photo-meta">
                                        <span className="photo-name">IMG_20241205.jpg</span>
                                        <span className="photo-date">5 dic 2024 · 3.2 MB</span>
                                    </div>
                                </div>
                                <div className="swipe-indicators">
                                    <span className="app-btn swipe-left-hint">🔥</span>
                                    <span className="app-btn swipe-right-hint">✅</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="keepit-section">
                <h2 className="keepit-section-title scroll-animate">¿Cómo funciona?</h2>
                <div className="keepit-how-grid">
                    <div className="keepit-how-card glass scroll-animate">
                        <span className="keepit-how-icon swipe-right-icon">👉</span>
                        <h3>Swipe derecha</h3>
                        <p>La imagen <span className="text-neon">se queda</span> en tu galería.</p>
                    </div>
                    <div className="keepit-how-card glass scroll-animate">
                        <span className="keepit-how-icon swipe-left-icon">👈</span>
                        <h3>Swipe izquierda</h3>
                        <p>La imagen se va para <span style={{ color: '#ff6b6b' }}>papelera</span>.</p>
                    </div>
                    <div className="keepit-how-card glass scroll-animate">
                        <span className="keepit-how-icon">🎲</span>
                        <h3>Sin repeticion</h3>
                        <p>Las fotos aparecen en <span className="text-neon">orden aleatorio</span> para mejores decisiones.</p>
                    </div>
                </div>
            </section>

            <section className="keepit-section">
                <h2 className="keepit-section-title scroll-animate">¿Cuál es su función?</h2>
                <div className="keepit-goals-row scroll-animate">
                    {[
                        { icon: '📦', text: 'Liberar espacio de almacenamiento' },
                        { icon: '🗂️', text: 'Ordenar tu galería' },
                        { icon: '🛡️', text: 'Evitar pasar horas para obtener solo +1mb extra' },
                    ].map((g, i) => (
                        <div key={i} className="keepit-goal-item glass">
                            <span className="keepit-goal-icon">{g.icon}</span>
                            <span>{g.text}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="keepit-section">
                <h2 className="keepit-section-title scroll-animate">Lo que sigue</h2>
                <div className="keepit-todo-list glass scroll-animate">
                    {[
                        { label: 'Swipe para eliminar/conservar fotos', done: true },
                        { label: 'Contador de imágenes procesadas', done: true },
                        { label: 'Modo noche', done: true },
                        { label: 'Selección de carpetas', done: false },
                        { label: 'Papelera de reciclaje', done: true },
                        { label: 'Soporte multiidioma (inglés / otros)', done: false },
                    ].map((item, i) => (
                        <div key={i} className={`keepit-todo-item ${item.done ? 'done' : ''}`}>
                            {item.done
                                ? <FaCheckCircle size={18} color="#df99ff" />
                                : <FaCircle size={18} color="rgba(255,255,255,0.2)" />
                            }
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="keepit-footer-section">
                <div className="keepit-footer-btns">
                    <a href={apkUrl} target="_blank" rel="noopener noreferrer" className="keepit-btn keepit-btn-primary">
                        <FaDownload size={18} /> Descargar APK
                    </a>
                    <a href="https://github.com/0xlibless/KeepIt" target="_blank" rel="noopener noreferrer" className="keepit-btn keepit-btn-outline">
                        <FaGithub size={18} /> Repositorio
                    </a>
                </div>
                <p className="footer-copy">
                    © {new Date().getFullYear()} KeepIt · Hecho con React Native & ❤️
                </p>
            </section>
        </main>
    );
}
