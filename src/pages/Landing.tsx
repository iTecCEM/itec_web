import logo from '../assets/logo_itec.png'
import './Landing.css'
import BlueButton from '../components/BlueButton'
import WhiteButton from '../components/WhiteButton'
import MainEvent from '../components/MainEvent'

function Landing(){

    return(
        <div className='landingContainer'>
            <img src={logo} alt="iTec Logo" className='logo' />
            <h1 className="title">iTec</h1>
            <p className="description">Student community based on Tecnologico de Monterrey CEM focused on <br/>
            Apple’s latest Software and Hardware innovations.<br/>Driven by innovation and creativity, pushing the boundries of the technology </p>

            <div className='buttonContainer'>
                <BlueButton text='Aprende más'></BlueButton>
                <WhiteButton text='Contactanos'></WhiteButton>
            </div>


            <MainEvent></MainEvent>
        </div>

        
    )   


}

export default Landing;