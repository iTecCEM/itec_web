import './Landing.css'
import FirstLanding from '../components/LandingPageComponents/FirstLanding'
import MainEvent from '../components/LandingPageComponents/MainEvent'
import EventsGrid from '../components/LandingPageComponents/EventsGrid'

function Landing(){

    return(
        <div className='landingContainer'>
            <FirstLanding />
            <hr className="Divider" />
            <MainEvent />
            <hr className="Divider" />
            <EventsGrid />
        </div>
    )
}

export default Landing;
