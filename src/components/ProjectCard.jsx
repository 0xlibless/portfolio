import '../assets/Home.css';
import { FaGithub, FaGlobe, FaCodeBranch, FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ title, description, tags, url, icon }) {
    const navigate = useNavigate();
    const isInternal = url && url.startsWith('#/');

    const handleClick = (e) => {
        if (isInternal) {
            e.preventDefault();
            navigate(url.slice(1)); // '#/keepit' → '/keepit'
        }
    };

    return (
        <a
            href={isInternal ? undefined : url}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noopener noreferrer"}
            onClick={handleClick}
            className="project-card glass"
            style={{ cursor: 'pointer' }}
        >
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                {icon == "github" && (
                    <FaGithub size={30} style={{position: 'absolute', top: '60px', right: '30px'}} color="#fff" />
                )}
                {icon == "globe" && (
                    <FaGlobe size={30} style={{position: 'absolute', top: '60px', right: '30px'}} color="#fff" />
                )}
                {icon == "branch" && (
                    <FaCodeBranch size={30} style={{position: 'absolute', top: '60px', right: '30px'}} color="#fff" />
                )}
                {icon == "detail" && (
                    <FaArrowRight size={30} style={{position: 'absolute', top: '60px', right: '30px'}} color="#df99ff" />
                )}
                <p className="project-description">{description}</p>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span 
                            key={index} 
                            className="tag" 
                            style={{ 
                                color: tag.color,
                                border: `1px solid ${tag.color}`,
                                backgroundColor: `${tag.color}20` // 20% opacity
                            }}
                        >
                            #{tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}
