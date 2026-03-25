
import { useState } from "react";
import img1 from "../../assets/historyimg1.jpg";
import img2 from "../../assets/historyimg2.jpg";
import img3 from "../../assets/historyimg3.jpg";


const ProjectReel = () => {
  interface Event {
    id : number,
    img : string,
    title : string,
    desc : string
  };

  const pastEvents : Event [] = [
    {id : 1,
     img : img1,
     title : 'Workshops',
     desc : 'Talleres para enseñar tecnologías para el desarrollo de software de Apple'
    },
    {id : 2,
     img : img2,
     title : 'Workshops',
     desc : 'Talleres para enseñar tecnologías para el desarrollo de software de Apple'
    },
    {id : 3,
     img : img3,
     title : 'Workshops',
     desc : 'Talleres para enseñar tecnologías para el desarrollo de software de Apple'
    },
    {id : 4,
     img : img3,
     title : 'Workshops',
     desc : 'Talleres para enseñar tecnologías para el desarrollo de software de Apple'
    },
    {id : 5,
     img : img3,
     title : 'Workshops',
     desc : 'Talleres para enseñar tecnologías para el desarrollo de software de Apple'
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <section className="pReelSection"> 
      <h1>Trayectoria</h1>
        <div className="track" style={{ transform: `translateX(calc(-${activeIndex * 87}% + 7.5%))` }}>
          {pastEvents.map((item, index) => (
            <figure key={item.id} className={`slide ${index === activeIndex ? 'active' : ''}`}>
              <img src={item.img} alt={item.title} />
              <figcaption className="overlay">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>


  <nav className="carouselPagination" aria-label="Carousel navigation">
    {pastEvents.map((_, index) => (
      <button
        key={index}
        className={`dot ${index === activeIndex ? 'active' : ''}`}
        onClick={() => setActiveIndex(index)}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </nav>

    </section>
  );
}

export default ProjectReel;