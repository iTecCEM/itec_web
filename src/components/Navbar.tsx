import logo from '../assets/logo_itec.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <header className = "navbar-container">
                <div className = "navbar-logo">
                    <img src = {logo} alt= "iTec logo"/>
                </div>
                <nav>
                    <ul className = "navbar-links">
                        {[
                            { label: 'Home' },
                            { label: 'Projects' },
                            { label: 'Events'},
                            { label: 'About us'},
                        ].map(({ label }) => (
                            <li key={label}>
                                <a href='#'>{label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="navbar-spacer"></div>
        </header>
    );
};

export default Navbar