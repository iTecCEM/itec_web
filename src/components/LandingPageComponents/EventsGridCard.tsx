
import './EventsGridCard.css'
import BlueButton from '../GlobalComponents/BlueButton.tsx';
import WhiteButton from '../GlobalComponents/WhiteButton.tsx'


function EventsGridCard({ titulo, descripcion,color, bgColor, imagen}: { titulo: string, descripcion: string, bgColor: string, imagen: string, color: string}){

    
    return(
        
            <div className='contentContainer' style={{ backgroundColor: bgColor, color: color }}>
                <h1 className='title'>{titulo}</h1>
                <p className="descriptionWidget">{descripcion}</p>
                <div className='buttonContainer'>
                    <BlueButton text='Aprende más'></BlueButton>
                    <WhiteButton text='Registrate'></WhiteButton>
                </div>

                <img src={imagen} alt='Mac image'/>
            </div>
        
    )
}

export default EventsGridCard;