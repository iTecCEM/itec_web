
import './EventsGridCard.css'
import BlueButton from '../GlobalComponents/BlueButton.tsx';
import WhiteButton from '../GlobalComponents/WhiteButton.tsx'
import { useNavigate } from 'react-router-dom';


function EventsGridCard({ id, titulo, fecha, descripcion, color, bgColor, imagen }: { id: string, titulo: string, fecha: string, descripcion: string, bgColor: string, imagen: string, color: string }){

    const navigate = useNavigate();

    return(
            <div className='contentContainer' style={{ backgroundColor: bgColor, color: color }}>
                <h1 className='title'>{titulo}</h1>
                <h2 style={{color: color}}>{`${new Date(fecha).getDate()} de ${new Date(fecha).toLocaleDateString('es-MX', { month: 'long' })}, ${new Date(fecha).getFullYear()}`}</h2>
                <p style={{color: color}}>{descripcion}</p>
                <div className='buttonContainer'>
                    <BlueButton text='Aprende más' onClick={() => navigate(`/evento/${id}`)}></BlueButton>
                    <WhiteButton text='Registrate' onClick={() => navigate(`/evento/${id}`)}></WhiteButton>
                </div>

                <img src={imagen} alt='Mac image'/>
            </div>
    )
}

export default EventsGridCard;