import { useState } from "react";
import img1 from "../../assets/historyimg1.jpg";
import img2 from "../../assets/historyimg2.jpg";
import img3 from "../../assets/historyimg3.jpg";


const ProjectReel = () => {
  interface Event {
    id : number,
    img : string,
    title : string,
    desc : string,
    details : string
  };

  const pastEvents : Event [] = [
    {id : 1,
     img : img1,
     title : 'Workshops',
     desc : 'Talleres para enseñar tecnologías para el desarrollo de software de Apple',
     details : `Se han llevado a cabo talleres con las tecnologías de Apple: SwiftUI, CoreML, Playgrounds y el desarrollo de Spatial Computing con los Apple Vision Pro, teniendo en cuenta la ideología del grupo de hacer a Swift más accesible para los alumnos, utilizando para ello laboratorios con iMac's`
    },
    {id : 2,
     img : img2,
     title : 'Workshops',
     desc : 'Talleres para enseñar tecnologías para el desarrollo de software de Apple',
     details : `Se han llevado a cabo talleres con las tecnologías de Apple: SwiftUI, CoreML, Playgrounds y el desarrollo de Spatial Computing con los Apple Vision Pro, teniendo en cuenta la ideología del grupo de hacer a Swift más accesible para los alumnos, utilizando para ello laboratorios con iMac's`

    },
    {id : 3,
     img : img3,
     title : 'Workshops',
     desc : 'Talleres para enseñar tecnologías para el desarrollo de software de Apple',
     details : `Se han llevado a cabo talleres con las tecnologías de Apple: SwiftUI, CoreML, Playgrounds y el desarrollo de Spatial Computing con los Apple Vision Pro, teniendo en cuenta la ideología del grupo de hacer a Swift más accesible para los alumnos, utilizando para ello laboratorios con iMac's`
    },
    {id : 4,
     img : img3,
     title : 'Workshops',
     desc : 'Talleres para enseñar tecnologías para el desarrollo de software de Apple',
     details : `Se han llevado a cabo talleres con las tecnologías de Apple: SwiftUI, CoreML, Playgrounds y el desarrollo de Spatial Computing con los Apple Vision Pro, teniendo en cuenta la ideología del grupo de hacer a Swift más accesible para los alumnos, utilizando para ello laboratorios con iMac's`
    },
    {id : 5,
     img : img3,
     title : 'Workshops',
     desc : 'Talleres para enseñar tecnologías para el desarrollo de software de Apple',
     details : `Se han llevado a cabo talleres con las tecnologías de Apple: SwiftUI, CoreML, Playgrounds y el desarrollo de Spatial Computing con los Apple Vision Pro, teniendo en cuenta la ideología del grupo de hacer a Swift más accesible para los alumnos, utilizando para ello laboratorios con iMac's`
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = window.innerWidth <= 768 ;
  const offset = isMobile ? 95 : 80; 

  return (
    <section className="pReelSection"> 
      <h1>Trayectoria</h1>
        <div className="track" style={{ transform: `translateX(calc(-${activeIndex * offset}% + ${isMobile ? 2.5 : 10}%))` }}>
          {pastEvents.map((item, index) => (
            <figure key={item.id} className={`slide ${index === activeIndex ? 'active' : ''}`}>
              <img src={item.img} alt={item.title} />
              <figcaption className="overlay">
                <h2>{item.title}</h2>
                <p className="desc">{item.desc}</p>
                <p className="details">{item.details}</p>
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