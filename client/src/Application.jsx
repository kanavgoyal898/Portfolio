import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import App from "./App";

const Application = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/query`, {
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

  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return showSplash ? <SplashScreen onFinish={handleSplashFinish} /> : <App />;
};

export default Application;
