import Subtract from "./Subtract.svg";
import "./IconButton.css";


const IconButton = ({ href, label, className }) => (
    <a href={href} className={`icon-button ${className}`}>
        <span className="label">{label}</span>
        <span className="icon">▶</span>
    </a>
)

export default IconButton;

