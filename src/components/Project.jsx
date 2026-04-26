import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./css/Project.css";
import { FaGithub } from "react-icons/fa";

export default function Project({ title, description, url, tags }) {
    const cardRef = useRef(null);

    const { contextSafe } = useGSAP({ scope: cardRef });

    const handleMouseEnter = contextSafe(() => {
        gsap.to(cardRef.current, {
            backgroundColor: "#0a0a0a",
            color: "#eeede8",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(".project-title", {
            color: "#eeede8",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(".project-description", {
            color: "#ccc",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(".project-icon", {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "back.out(1.7)",
        });
    });

    const handleMouseLeave = contextSafe(() => {
        gsap.to(cardRef.current, {
            backgroundColor: "transparent",
            color: "#0a0a0a",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(".project-title", {
            color: "#0a0a0a",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(".project-description", {
            color: "#333",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(".project-icon", {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
        });
    });

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="project-header">
                <h2 className="project-title">{title}</h2>
                <FaGithub className="project-icon" />
            </div>
            <p className="project-description">{description}</p>
            <div className="project-tags">
                {tags &&
                    tags.map((tag, index) => (
                        <span key={index} className="project-tag">
                            <span
                                className="tag-dot"
                                style={{ backgroundColor: tag.color }}
                            ></span>
                            {tag.name}
                        </span>
                    ))}
            </div>
        </a>
    );
}
