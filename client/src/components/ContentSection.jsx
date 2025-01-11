import { useEffect, useRef } from "react";
import "./ContentSection.css";

const ContentSection = ({ navigationItems }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.classList.add("animate-scroll");
    }
  }, []);

  return (
    <div className="content">
      <div className="intro-logo">
          Kanav Goyal
      </div>
      <div className="content-container" ref={contentRef}>
        {navigationItems.map((navigationItem, index) => (
          <div key={index} id={navigationItem.id} className="content-section">
            {navigationItem.componentName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
