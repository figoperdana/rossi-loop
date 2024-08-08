
import './LinkButton.css';
import PropTypes from 'prop-types';

export default function LinkButton ({children, href, variant, icon}){
    return(
        <a className={`btn btn--${variant}`} href={href}>
            {children} {icon}
        </a>

);
}

LinkButton.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    icon: PropTypes.node
};
