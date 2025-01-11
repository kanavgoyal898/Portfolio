import { useEffect, useState } from "react";
import "./Intro.css";

const Intro = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: '*[_type == "description"]',
          }),
        });
        const result = await response.json();
        const sortedResult = result.sort((a, b) => a.priority - b.priority);
        setSlides(sortedResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleHeadingClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="intro-section">
      <div className="intro-titles">
        {slides.map((slide, index) => (
          <p
            key={index}
            className={`cursor-pointer ${
              index === currentIndex ? "text-black dark:text-white" : ""
            } text-accentLight dark:text-accentDark`}
            onClick={() => handleHeadingClick(index)}
          >
            {slide.to}
          </p>
        ))}
      </div>

      <div className="intro-section">
        <div
          className="intro-description"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="intro-description-box"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                pointerEvents: index === currentIndex ? "auto" : "none",
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <p>{slide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
