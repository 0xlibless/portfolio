import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./css/StackCard.css";

export default function StackCard({ title, items }) {
    const cardRef = useRef(null);
    const { contextSafe } = useGSAP({ scope: cardRef });

    const handleMouseEnter = contextSafe(() => {
        gsap.to(cardRef.current, {
            backgroundColor: "#0a0a0a",
            color: "#eeede8",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(cardRef.current.querySelectorAll(".stack-title, .stack-item"), {
            color: "#eeede8",
            borderColor: "#eeede8",
            duration: 0.3,
            ease: "power2.out",
        });
    });

    const handleMouseLeave = contextSafe(() => {
        gsap.to(cardRef.current, {
            backgroundColor: "transparent",
            color: "#0a0a0a",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(cardRef.current.querySelectorAll(".stack-title, .stack-item"), {
            color: "#0a0a0a",
            borderColor: "#0a0a0a",
            duration: 0.3,
            ease: "power2.out",
        });
    });

    return (
        <div 
            className="stack-card" 
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="stack-title">{title}</h2>
            <div className="stack-items">
                {items.map((item, index) => (
                    <div key={index} className="stack-item">
                        <span className="stack-icon">{item.icon}</span>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
