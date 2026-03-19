import './Landing.css'
import FirstLanding from '../components/LandingPageComponents/FirstLanding'
import MainEvent from '../components/LandingPageComponents/MainEvent'

function Landing(){

    return(
        <div className='landingContainer'>
            <FirstLanding />
            <hr className="Divider" />
            <MainEvent />
            <hr className="Divider" />

        </div>
    )
}

export default Landing;
