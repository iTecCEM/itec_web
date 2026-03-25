import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Card from './EventsGridCard.tsx';
import './LandingPageStyle.css';

interface Event {
  id: string;
  name: string;
  short_description: string;
  img_url: string;
  color: string;
}

function EventsGrid() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase
        .from('events')
        .select('id, name, short_description, img_url, color');

      if (error) {
        console.error('Error fetching events:', error);
        return;
      }

      if (data) setEvents(data);
    }

    fetchEvents();
  }, []);

  return (
    <div className="eventsGrid">
      {events.map((evento) => (
        <Card
          key={evento.id}
          id={evento.id}
          titulo={evento.name}
          descripcion={evento.short_description}
          bgColor={evento.color}
          color={evento.color === '#d6d6d6' ? 'black' : 'white'}
          imagen={evento.img_url}
        />
      ))}
    </div>
  );
}

export default EventsGrid;