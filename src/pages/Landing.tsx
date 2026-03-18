import logo from '../assets/logo_itec.png'
import './Landing.css'


function Landing(){

    return(
        <div className='landingContainer'>
            <img src={logo} alt="iTec Logo" className='logo' />
            <h1 className='title'>iTec</h1>
        </div>
    )   


}

export default Landing;