import "./Footer.css";
// import { CiInstagram } from "react-icons/ci";
// import { CiMail } from "react-icons/ci";

function Footer(){
    return (
        <>
            {/* <div className="footerLine"></div> */}
            <footer className="footerContainer">
                <p>Copyright © 2026  iTec. Todos los derechos reservados</p>
                <div className="socialsContainer">
                    <a href={"https://www.instagram.com/itec.cem/"}><p>Instagram</p></a>
                    <a href={"mailto:iteccem25@gmail.com"}><p>Contactanos</p></a>
                </div>
            </footer>
        </>

);
}

export default Footer;