import logo from '../assets/logo_itec.png'
import itec_week from '../assets/itec_week_landing.png'
import './Landing.css'
import BlueButton from '../components/BlueButton'
import WhiteButton from '../components/WhiteButton'

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

            <div className="mainEventSection">
                <img src={itec_week} alt='Texto hack'/>
                <div className='buttonContainer'>
                    <BlueButton text='Aprende más'></BlueButton>
                    <WhiteButton text='Registrate'></WhiteButton>
                </div>
            </div>
            
            <div>

            </div>


        </div>

        
    )   


}

export default Landing;