import './index.scss'
import {Link, NavLink } from 'react-router-dom'
import K_logo from '../../assets/images/k-logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser, faLink, faGithub, faMedium, faInstagram} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);


const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={K_logo} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="kanehall"/>
        </Link>
        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true"  activeClassName="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true"  activeClassName="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>


        </nav>
        <ul>
            <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kanehall/"/>
                <FontAwesomeIcon icon={['fab', 'linkedin']} color="#4d4d4e" />
            </li>
            
            <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/KaneHall/"/>
                <FontAwesomeIcon icon={['fab', 'github']} color="#4d4d4e" />
            </li>
            
            <li>
            <a target="_blank" rel="noreferrer" href="https://medium.com/@kanehall45/"/>
                <FontAwesomeIcon icon={['fab', 'medium']} color="#4d4d4e" />
            </li>

            <li>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/reviewsbydru"/>
                <FontAwesomeIcon icon={['fab', 'instagram']} color="#4d4d4e" />
            </li>
        </ul>
    </div>
)

export default Sidebar;