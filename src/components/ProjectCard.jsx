import '../assets/Home.css';
import { FaGithub, FaGlobe, FaCodeBranch } from "react-icons/fa";

export default function ProjectCard({ title, description, tags, url, icon }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="project-card glass">
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
