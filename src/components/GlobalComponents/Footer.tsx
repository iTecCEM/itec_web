import "./Footer.css";
import instagramSVG from '../../assets/instagram.svg';
import emailSVG from '../../assets/email.svg';

function Footer(){
    return (
        <>
            <div className="footerLine"></div>
            <footer className="footerContainer">
                <p>Copyright © 2026  iTec. Todos los derechos reservados</p>
                <div className="socialsContainer">
                    <a href={"https://www.instagram.com/itec.cem/"} target="_blank"><img src={instagramSVG} alt="Instagram"></img></a>
                    <a href={"mailto:iteccem25@gmail.com"} target="_blank"><img src={emailSVG} alt="Correo iTec"></img></a>
                </div>
            </footer>
        </>

);
}

export default Footer;