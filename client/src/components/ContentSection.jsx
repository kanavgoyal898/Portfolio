import { useEffect, useRef, useState } from "react";
import LogoSection from "./LogoSection";
import "./ContentSection.css";

const ContentSection = ({ navigationItems }) => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    if (contentRef.current) {
      contentRef.current.classList.add("animate-scroll");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="content-container" ref={contentRef}>
      {isVisible && <LogoSection />}
      {navigationItems.map((navigationItem, index) => (
        <div key={index} id={navigationItem.id} className="content-section">
          {navigationItem.componentName}
        </div>
      ))}
    </div>
  );
};

export default ContentSection;
