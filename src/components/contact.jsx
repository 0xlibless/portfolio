import '../assets/Home.css';
import { FaGithub, FaTwitter} from "react-icons/fa";

export function Contact() {
    return (
        <div className="contact scroll-animate">
            <a href="https://github.com/0xlibless" target="_blank" rel="noopener noreferrer">
                <FaGithub size={50} color="#fff"/>
            </a>
            <a href="https://x.com/aguatiiin" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={50} color="#fff"/>
            </a>
        </div>
    );
}