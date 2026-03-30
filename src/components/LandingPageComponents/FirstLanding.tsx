import logo from '../../assets/logo_itec.png'
import './LandingPageStyle.css'
import BlueButton from '../GlobalComponents/BlueButton'
import WhiteButton from '../GlobalComponents/WhiteButton'

function FirstLanding(){
    return(
        <>
            <div className='firstLanding'>
                <img src={logo} alt="iTec Logo" className='logo' />
                <h1 className="title">iTec</h1>
                <p className="description">Comunidad estudiantil del Tecnológico de Monterrey CEM enfocada <br/>en las últimas innovaciones de software y hardware de Apple.<br/>Impulsada por la innovación y la creatividad, llevando los límites de la tecnología más allá.
</p>

                <div className='buttonContainer'>
                    <BlueButton text='Aprende más'></BlueButton>
                    <WhiteButton text='Contactanos'></WhiteButton>
                </div>
            </div>
        </>
    )
}

export default FirstLanding;
