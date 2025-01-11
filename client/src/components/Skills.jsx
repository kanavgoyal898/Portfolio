import { useEffect, useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [developerStatement, setDeveloperStatement] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/query`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: '*[_type == "statement" && title == "Developer Statement"]',
          }),
        });
        const result = await response.json();
        setDeveloperStatement(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/query`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: '*[_type == "technology"]',
          }),
        });
        const result = await response.json();
        const sortedResult = result.sort((a, b) => a.priority - b.priority);
        setSkills(sortedResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="background-container">
      <div className="box"></div>
      <div className="box">{developerStatement[0]?.statement}</div>
      {skills.map((skill, index) => (
        <>
          <div key={index} className="background-box">
            <div className="background-picture">
              <i className={`${skill.image} text-4xl`} alt={skill.name} />
            </div>
            <h3 className="background-name">{skill.languages}</h3>
            <h2 className="background-designation">{skill.name}</h2>
            <p>{skill.tools}</p>
            <p className="background-description">{skill.description}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Skills;
