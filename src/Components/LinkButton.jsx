
import './LinkButton.css';

export default function LinkButton ({children, href, variant},{icon}){
    return(
        <a className={`btn btn--${variant}`} href={href}>
            {children} {icon}
        </a>

);
}
