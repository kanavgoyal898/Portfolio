import { useState, useEffect } from "react";
import "./Projects.css";

const References = () => {
  const [workStatement, setWorkStatement] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: '*[_type == "statement" && title == "Work Statement"]',
          }),
        });
        const result = await response.json();
        setWorkStatement(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: '*[_type == "project"]',
          }),
        });
        const result = await response.json();
        const sortedResult = result.sort((a, b) => a.priority - b.priority);
        setProjects(sortedResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="references-section">
      <div className="box"></div>
      <div className="box">{workStatement[0]?.statement}</div>
      {projects.map((project, index) => (
        <div key={index} className="reference-container">
          <div className="reference-remark">{project.title}</div>
          <div className="reference-description-2">{project.techstack}</div>
          <div className="reference-details">{project.technologies}</div>
          <div className="reference-description-1">
            {project.description} &nbsp;
            <a href={project.link} target="_blank">
              Source Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default References;
