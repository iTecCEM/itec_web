import { useEffect, useState } from "react";
import img1 from "../../assets/historyimg1.jpg";
import img2 from "../../assets/historyimg2.jpg";
import img3 from "../../assets/historyimg3.jpg";

const carouselImages = [img1, img2, img3];

const History = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % carouselImages.length);
    }, 3000);

    return () => {
      window.clearInterval(timerId);
    };
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % carouselImages.length);
  };

  return (
    <section className="historySection">
      <div className="historyContent">
        <div className="historyText">
          <h1>Historia</h1>

          <p>
            A vibrant student community based at Tecnológico de Monterrey CEM, 
            dedicated to exploring and engaging with Apple&apos;s latest software 
            and hardware innovations. Built on a shared passion for technology, 
            this community brings together curious minds, creators, beginners, and 
            developers who seek to learn, collaborate, and stay at the forefront of 
            the Apple ecosystem. Through continuous experimentation, knowledge sharing, 
            and creative problem-solving, its members aim to transform ideas into impactful 
            projects, fostering an environment where innovation thrives and the boundaries 
            of technology are constantly reimagined.
          </p>
        </div>

        {/* Carrusel en historia */}
        <div className="historyCarouselFrame" aria-label="Community carrusel">
          <button
            type="button"
            className="historyCarouselButton previous"
            onClick={goToPrevious}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <button
            type="button"
            className="historyCarouselButton next"
            onClick={goToNext}
            aria-label="Next photo"
          >
            ›
          </button>

          <div className="historyCarousel">
            <div
              className="historyCarouselTrack"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {carouselImages.map((image, index) => (
                <div className="historyCarouselSlide" key={image}>
                  <img
                    src={image}
                    alt={`Community memory ${index + 1}`}
                    className="historyCarouselImage"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;