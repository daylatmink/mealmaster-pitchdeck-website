import buttonSvg from "../../assets/Subtract.svg";
import './Button.css'

export default function IconButton({ href, label, className }) {
    return (
        <a href={href} className={`icon-button ${className}`}>
            <span className="label">{label}</span>
        </a>
    );
}
