import vision from '../../assets/vision.png'
import './LandingPageStyle.css'
import BlueButton from '../GlobalComponents/BlueButton'
import WhiteButton from '../GlobalComponents/WhiteButton'

function EventsGrid(){
    return(
        <div className="eventsGrid">
            <div className="eventCard">
                <img src={vision} alt="Event 1" />
                <div className="eventCardButtons">
                    <BlueButton text='Inscribirse' />
                    <WhiteButton text='Conocer más' />
                </div>
            </div>
            <div className="eventCard">
                <img src={vision} alt="Event 2" />
                <div className="eventCardButtons">
                    <BlueButton text='Inscribirse' />
                    <WhiteButton text='Conocer más' />
                </div>
            </div>
            <div className="eventCard">
                <img src={vision} alt="Event 3" />
                <div className="eventCardButtons">
                    <BlueButton text='Inscribirse' />
                    <WhiteButton text='Conocer más' />
                </div>
            </div>
            <div className="eventCard">
                <img src={vision} alt="Event 4" />
                <div className="eventCardButtons">
                    <BlueButton text='Inscribirse' />
                    <WhiteButton text='Conocer más' />
                </div>
            </div>
        </div>
    )
}

export default EventsGrid;
