import logo from '../../assets/logo_itec.png'
import './NavBar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className = "navbar-container">
                <nav className = 'navbar-content'>
                    <Link to="/" className="navbar-logo">
                        <img src = {logo} alt= "iTec logo"/>
                    </Link>
                    <ul className = "navbar-links">
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Events</a></li>
                        <li><Link to="/community">About us</Link></li>
                    </ul>
                </nav>
        </header>

        
    );
};

export default Navbar