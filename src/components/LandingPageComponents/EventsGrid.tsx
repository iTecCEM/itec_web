
import Card from './EventsGridCard.tsx'
import widget1Imagen from '../../assets/foundationsmodel.png'
import widget2Imagen from '../../assets/vision.png'

import './LandingPageStyle.css'

function EventsGrid(){



    return(
        <div className="eventsGrid">
            <Card titulo='Foundations Model' descripcion='Crea tu propio chatbot con AI. Corriendo solo con tu iPhone' bgColor='#d6d6d6' color='black' imagen={widget1Imagen}></Card>
            <Card titulo='Vision Pro' descripcion='Explora VR y Spatial Computing con iTec' bgColor='black' color='white' imagen={widget2Imagen}></Card>

        </div>
    )
}

export default EventsGrid;
