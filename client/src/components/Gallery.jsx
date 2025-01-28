import { useState, useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/pictures`)
      .then((response) => response.json())
      .then((data) => setPictures(data.sort((a, b) => a.priority - b.priority)))
      .catch((error) => console.error("Error fetching images:", error));
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

export default Gallery;
