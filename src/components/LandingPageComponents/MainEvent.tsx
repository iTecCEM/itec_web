import logo_itec_week from '../../assets/itec_week.png'
import './LandingPageStyle.css'
import BlueButton from '../GlobalComponents/BlueButton'
import WhiteButton from '../GlobalComponents/WhiteButton'

function main_event(){
    return(
        <>
            <div className='mainEvent'>
                <img src={logo_itec_week} alt="iTec Logo" className='logo' />
                <h1 className="title">iTec Week</h1>
                <h2>4-8 de abril, 2026</h2>
                <p className="description">Únete a iTec Week y construye con nosotros: innovación, <br/>comunidad y talleres para desarrollar con Swift en el Tec CEM.</p>

                <div className='buttonContainer'>
                    <BlueButton text='Aprende más'></BlueButton>
                    {/* <WhiteButton text='Contactanos'></WhiteButton> */}
                </div>
            </div>
        </>
    )
}


export default main_event;