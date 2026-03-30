import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

// Icons:
import { IoCalendarOutline } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import './EventInfo.css';

import NavBar from '../components/GlobalComponents/Navbar.tsx'
import Footer from '../components/GlobalComponents/Footer.tsx';

interface EventData {
  id: string;
  name: string;
  date: string;
  schedules: string[];
  description: string;
  location: string;
  dead_line: string;
  img_url: string;
}

function EventInfo() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [evento, setEvento] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvent() {
      if (!id) return;

      const { data, error } = await supabase
        .from('events')
        .select('id, name, date, schedules, description, location, dead_line, img_url')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching event:', error);
      } else {
        setEvento(data);
      }
      setLoading(false);
    }

    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="eventPage">
        <NavBar />
        <div className="eventCard">
          <p className="eventBody">Cargando evento...</p>
        </div>
      </div>
    );
  }

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
            <img src={evento.img_url} alt={evento.name} />
            <h1 className="eventTitulo">{evento.name}</h1>

            <p className="eventBody">{evento.description}</p>

            <p className="eventDeadline">
              Regístrate antes del {new Date(evento.dead_line).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <button className="eventRequestBtn eventRequestBtn--desktop" onClick={() => navigate(`/registro/${id}`)}>
              Registrate
            </button>

            <div className="eventDateBlock">
              <div>
                <p className="eventDateMain">
                  <IoCalendarOutline /> {new Date(evento.date).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <p className="eventDateSub">
                  {evento.schedules?.join(' & ')}
                </p>
              </div>
            </div>
          </div>

          <aside className="eventSidebar">
            <div className="eventMetaItem">
             
                <FaUsers />
                <p className="eventMetaLabel">Sesión presencial</p>
             
            </div>

            <div className="eventMetaItem">
              <FaMapPin />
              <div>
                <p className="eventMetaLabel">{evento.location}</p>
              </div>
            </div>
          </aside>

          <button className="eventRequestBtn eventRequestBtn--mobile" onClick={() => navigate(`/registro/${id}`)}>
            Registrate
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventInfo;
