import { useState, useEffect, useRef } from "react";
import img1 from "../../assets/historyimg1.jpg";
import img2 from "../../assets/historyimg2.jpg";
import img3 from "../../assets/historyimg3.jpg";

const ProjectReel = () => {
  interface Event {
    id: number;
    img: string;
    title: string;
    desc: string;
    details: string;
  }

  const pastEvents: Event[] = [
    {
      id: 1,
      img: img1,
      title: "Workshops",
      desc: "Talleres para enseñar tecnologías para el desarrollo de software de Apple",
      details: `Se han llevado a cabo talleres con las tecnologías de Apple: SwiftUI, CoreML, Playgrounds y el desarrollo de Spatial Computing con los Apple Vision Pro, teniendo en cuenta la ideología del grupo de hacer a Swift más accesible para los alumnos, utilizando para ello laboratorios con iMac's`,
    },
    {
      id: 2,
      img: img2,
      title: "Workshops",
      desc: "Talleres para enseñar tecnologías para el desarrollo de software de Apple",
      details: `Se han llevado a cabo talleres con las tecnologías de Apple: SwiftUI, CoreML, Playgrounds y el desarrollo de Spatial Computing con los Apple Vision Pro, teniendo en cuenta la ideología del grupo de hacer a Swift más accesible para los alumnos, utilizando para ello laboratorios con iMac's`,
    },
    {
      id: 3,
      img: img3,
      title: "Workshops",
      desc: "Talleres para enseñar tecnologías para el desarrollo de software de Apple",
      details: `Se han llevado a cabo talleres con las tecnologías de Apple: SwiftUI, CoreML, Playgrounds y el desarrollo de Spatial Computing con los Apple Vision Pro, teniendo en cuenta la ideología del grupo de hacer a Swift más accesible para los alumnos, utilizando para ello laboratorios con iMac's`,
    },
    {
      id: 4,
      img: img3,
      title: "Workshops",
      desc: "Talleres para enseñar tecnologías para el desarrollo de software de Apple",
      details: `Se han llevado a cabo talleres con las tecnologías de Apple: SwiftUI, CoreML, Playgrounds y el desarrollo de Spatial Computing con los Apple Vision Pro, teniendo en cuenta la ideología del grupo de hacer a Swift más accesible para los alumnos, utilizando para ello laboratorios con iMac's`,
    },
    {
      id: 5,
      img: img3,
      title: "Workshops",
      desc: "Talleres para enseñar tecnologías para el desarrollo de software de Apple",
      details: `Se han llevado a cabo talleres con las tecnologías de Apple: SwiftUI, CoreML, Playgrounds y el desarrollo de Spatial Computing con los Apple Vision Pro, teniendo en cuenta la ideología del grupo de hacer a Swift más accesible para los alumnos, utilizando para ello laboratorios con iMac's`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const scrollLock = useRef(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollLock.current) return;

    const sensitivity = 15;
    const absX = Math.abs(e.deltaX);
    if (absX > sensitivity) {
      if (e.deltaX > 0) {
        if (activeIndex < pastEvents.length - 1) {
          setActiveIndex((prev) => prev + 1);
          lockScroll();
        }
      } else {
        if (activeIndex > 0) {
          setActiveIndex((prev) => prev - 1);
          lockScroll();
        }
      }
    }
  };

  const lockScroll = () => {
    scrollLock.current = true;
    setTimeout(() => {
      scrollLock.current = false;
    }, 800);
  };

  const translate = isMobile ? 95 : 80;
  const offset = isMobile ? 2.5 : 10;

  return (
    <section 
      className="pReelSection" 
      onWheel={handleWheel} // 6. Evento anclado al contenedor principal
    >
      <h1>Trayectoria</h1>
      <div
        className="track"
        style={{
          transform: `translateX(calc(-${activeIndex * translate}% + ${offset}%))`,
        }}
      >
        {pastEvents.map((item, index) => (
          <figure
            key={item.id}
            className={`slide ${index === activeIndex ? "active" : ""}`}
          >
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
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </nav>
    </section>
  );
};

export default ProjectReel;