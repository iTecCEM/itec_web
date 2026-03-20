import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo_itec.png'
import './NavBar.css'

interface MenuItem {
    section: string;
    links: { label: string; href: string }[];
}

interface NavItem {
    label: string;
    href: string;
    menu: MenuItem[] | null;
}

const navItems: NavItem[] = [
    {
        label: 'Eventos',
        href: '#',
        menu: [
            {
                section: 'Explorar eventos',
                links: [
                    { label: 'Foundations Model', href: '/evento/foundations-model' },
                    { label: 'Vision Pro', href: '/evento/vision-pro' },
                ]
            }
        ]
    },
    {
        label: 'Comunidad',
        href: '/community',
        menu: null
    },
]


const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null)
    const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [renderedMenu, setRenderedMenu] = useState<MenuItem[] | null>(null);

    const handleEnter = (label: string) => {
        if (leaveTimer.current !== null) {
            clearTimeout(leaveTimer.current);
            leaveTimer.current = null;
        }
        setActiveItem(label)
    }

    const handleLeave = () => {
        leaveTimer.current = setTimeout(() => setActiveItem(null), 150)
    }

    const activeMenu = navItems.find(i => i.label === activeItem)

    useEffect(() => {
        if (activeMenu?.menu) {
            setRenderedMenu(activeMenu.menu);
        }
    }, [activeMenu]);

    const isOpen = !!activeMenu?.menu;

    return (
        <>
            { }
            <div className={`dropdown-backdrop ${isOpen ? 'open' : ''}`} />

            <header className={`navbar-container ${isOpen ? 'open' : ''}`} onMouseLeave={handleLeave}>
                <nav className='navbar-content'>
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="iTec logo" />
                    </Link>
                    <ul className="navbar-links">
                        {navItems.map(item => (
                            <li
                                key={item.label}
                                className={activeItem === item.label ? 'active' : ''}
                                onMouseEnter={() => handleEnter(item.label)}>
                                <Link to={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                { }
                <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
                    <div className="dropdown-inner">
                        <div className="dropdown-content">
                            {renderedMenu?.map((section, idx) => (
                                <div key={idx} className="dropdown-section">
                                    <h3 className="dropdown-section-title">{section.section}</h3>
                                    <ul className="dropdown-links">
                                        {section.links.map((link, linkIdx) => (
                                            <li key={linkIdx}>
                                                <Link to={link.href}>{link.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar