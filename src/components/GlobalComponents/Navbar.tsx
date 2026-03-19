import logo from '../../assets/logo_itec.png'
import './GlobalComponents.css'

const Navbar = () => {
    return (
        <header className = "navbar-container">
                <nav className = 'navbar-content'>
                    <a href="#" className="navbar-logo">
                        <img src = {logo} alt= "iTec logo"/>
                    </a>
                    <ul className = "navbar-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">About us</a></li>
                    </ul>
                </nav>
        </header>
    );
};

export default Navbar