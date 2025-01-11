import { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  const [animate, setAnimate] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => setAnimate(true), 100);

    const exitTimer = setTimeout(() => {
      setExit(true);
      setTimeout(() => onFinish(), 700);
    }, 2000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash-screen ${animate ? 'animate' : ''} ${exit ? 'exit' : ''}`}>
      <div className="splash-screen-box">Kanav Goyal—</div>
      <div className="splash-screen-box">Computer Science Undergraduate</div>
    </div>
  );
};

export default SplashScreen;
