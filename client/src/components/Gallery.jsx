import { useState, useEffect } from "react";
import "./Gallery.css";

const Work = () => {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/pictures`)
      .then((response) => response.json())
      .then((data) => setPictures(data.sort((a, b) => a.priority - b.priority)))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(window.innerHeight);
    window.addEventListener("resize", () => setWidth(window.innerHeight));
  }, []);
    
  return (
    <div className="work">
      <div className="work-gallery">
        {pictures && pictures.map((picture) => (
          <div key={picture.id} className="work-picture" >
            <img src={picture.url} alt="Work" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
