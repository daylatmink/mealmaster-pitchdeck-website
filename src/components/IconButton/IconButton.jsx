import Subtract from "./Subtract.svg";
import "./IconButton.css";

export default function IconButton({ href, label, className }) {
    return (
        <a href={href} className={`icon-button ${className}`}>
            <span className="label">{label}</span>
            <span className="icon">▶</span>
        </a>
    );
}
