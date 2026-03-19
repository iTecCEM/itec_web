import './Landing.css'
import FirstLanding from '../components/FirstLanding'
import MainEvent from '../components/MainEvent'

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
