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
                <p className="description">Week of Innovation full of </p>

                <div className='buttonContainer'>
                    <BlueButton text='Aprende más'></BlueButton>
                    <WhiteButton text='Contactanos'></WhiteButton>
                </div>
            </div>
        </>
    )
}


export default main_event;