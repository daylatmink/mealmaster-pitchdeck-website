import buttonSvg from "../../assets/Subtract.svg";
import './Button.css'

export default function IconButton({ href, label }) {
    return (
        <a href={href} className="icon-button">
            {/*<img src={buttonSvg} alt="" className="shape" />*/}
            <span className="label">{label}</span>
        </a>
    );
}