import { useParams, useNavigate } from 'react-router-dom';
import './EventInfo.css';

import foundationsImg from '../assets/foundationsmodel.png';
import visionImg from '../assets/vision.png';

import NavBar from '../components/GlobalComponents/Navbar.tsx'
import Footer from '../components/GlobalComponents/Footer.tsx';


interface EventData {
  titulo: string;
  descripcion: string[];
  fecha: string; //DATE is different from schedule
  horario: string; 
  modalidad: string;
  lugar: string;
  deadline: string;
  imagen: string;
}

const eventData: Record<string, EventData> = {
  'foundations-model': {
    titulo: 'Foundations Model',
    descripcion: [
      'Aprende a crear tu propio chatbot con inteligencia artificial utilizando herramientas de Apple Intelligence. En esta sesión de 2 horas, explorarás los fundamentos de los modelos de lenguaje y cómo integrarlos en apps iOS.',
      'Trae tu iPhone y tu MacBook para participar en los ejercicios prácticos. Se recomienda tener conocimientos básicos de Swift.',
      'Los cupos son limitados. Regístrate antes de la fecha límite para asegurar tu lugar.',
    ],
    fecha: '15 de Abril, 2026',
    horario: '4:00 PM – 6:00 PM (CST)',
    modalidad: 'Presencial',
    lugar: 'S-CDT2 04L01',
    deadline: 'Regístrate antes del 12 de Abril, 11:59 PM (CST).',
    imagen: foundationsImg,
  },
  'vision-pro': {
    titulo: 'Vision Pro Experience',
    descripcion: [
      'Experimenta de primera mano el Apple Vision Pro y aprende sobre Spatial Computing. En esta sesión interactiva, explorarás visionOS y sus posibilidades para crear experiencias inmersivas.',
      'Tendrás la oportunidad de probar el dispositivo y ver demos de apps creadas con RealityKit y SwiftUI para visionOS.',
      'No se requiere experiencia previa con VR o AR. Ven con curiosidad y ganas de explorar el futuro de la computación.',
    ],
    fecha: '22 de Abril, 2026',
    horario: '3:00 PM – 5:30 PM (CST)',
    modalidad: 'Presencial',
    lugar: 'Laboratorio XR, Edificio B',
    deadline: 'Regístrate antes del 19 de Abril, 11:59 PM (CST).',
    imagen: visionImg,
  },
  'vision-pro-2': {
    titulo: 'Vision Pro - Sesión 2',
    descripcion: [
      'Continuamos explorando visionOS con ejercicios prácticos de desarrollo. En esta segunda sesión construirás tu primera app espacial con SwiftUI y RealityKit.',
      'Requisito: haber asistido a la primera sesión de Vision Pro o tener experiencia previa con SwiftUI.',
      'Se proporcionarán los archivos base del proyecto. Trae tu MacBook con Xcode 16 instalado.',
    ],
    fecha: '29 de Abril, 2026',
    horario: '3:00 PM – 5:30 PM (CST)',
    modalidad: 'Presencial',
    lugar: 'Laboratorio XR, Edificio B',
    deadline: 'Regístrate antes del 26 de Abril, 11:59 PM (CST).',
    imagen: visionImg,
  },
  'foundations-model-2': {
    titulo: 'Foundations Model - Sesión 2',
    descripcion: [
      'Lleva tu chatbot al siguiente nivel. En esta segunda sesión, optimizarás tu modelo con fine-tuning e integrarás Retrieval-Augmented Generation (RAG) para respuestas más precisas.',
      'Aprenderás a desplegar tu chatbot para que otros puedan usarlo, y explorarás técnicas avanzadas de prompt engineering.',
      'Requisito: haber asistido a la primera sesión de Foundations Model.',
    ],
    fecha: '6 de Mayo, 2026',
    horario: '4:00 PM – 6:00 PM (CST)',
    modalidad: 'Presencial',
    lugar: 'Sala de Innovación, Campus Principal',
    deadline: 'Regístrate antes del 3 de Mayo, 11:59 PM (CST).',
    imagen: foundationsImg,
  },
};

function EventInfo() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const evento = id ? eventData[id] : null;

  if (!evento) {
    return (
      <div className="eventPage">
        <NavBar />
        <div className="eventCard">
          <h1 className="eventTitulo">Evento no encontrado</h1>
          <p className="eventBody">El evento que buscas no existe.</p>
          <button className="eventRequestBtn" onClick={() => navigate('/')}>Volver al inicio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="eventPage">
      <NavBar />
      <div className="eventCard">
        <div className="eventLayout">
          <div className="eventMain">
            <img src={evento.imagen} alt={evento.titulo} />
            <h1 className="eventTitulo">{evento.titulo}</h1>

            {evento.descripcion.map((parrafo, i) => (
              <p key={i} className="eventBody">{parrafo}</p>
            ))}

            <p className="eventDeadline">{evento.deadline}</p>

            <button className="eventRequestBtn" onClick={() => navigate(`/registro/${id}`)}>
              Registrate
            </button>

            <div className="eventDateBlock">
              <span className="eventDateIcon">📅</span>
              <div>
                <p className="eventDateMain">{evento.fecha}</p>
                <p className="eventDateSub">{evento.horario}</p>
              </div>
            </div>
          </div>

          <aside className="eventSidebar">
            <div className="eventMetaItem">
            </div>

            <div className="eventMetaItem">
              <span className="eventMetaIcon">📍</span>
              <div>
                <p className="eventMetaLabel">{evento.modalidad}</p>
              </div>
            </div>

            <div className="eventMetaItem">
              <span className="eventMetaIcon">🏛️</span>
              <div>
                <p className="eventMetaLabel">{evento.lugar}</p>
              </div>
            </div>

          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventInfo;
