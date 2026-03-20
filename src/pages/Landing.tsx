import './Landing.css'
import FirstLanding from '../components/LandingPageComponents/FirstLanding'
import MainEvent from '../components/LandingPageComponents/MainEvent'
import EventsGrid from '../components/LandingPageComponents/EventsGrid'
import NavBar from '../components/GlobalComponents/Navbar.tsx'
import Footer from '../components/GlobalComponents/Footer.tsx'

function Landing(){

    return(
        <div className='landingContainer'>
            <NavBar/>
            <FirstLanding />
            <hr className="Divider" />
            <MainEvent />
            <EventsGrid />
            <Footer />
        </div>
    )
}

export default Landing;
