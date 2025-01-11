import goyalImage from "../assets/goyal.jpg";
import { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [tagStatement, setTagStatement] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: '*[_type == "statement" && title == "Tag Statement"]',
          }),
        });
        const result = await response.json();
        setTagStatement(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [mails, setMails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: '*[_type == "mail"]',
          }),
        });
        const result = await response.json();
        const sortedResult = result.sort((a, b) => a.priority - b.priority);
        setMails(sortedResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [socials, setSocials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: '*[_type == "social"]',
          }),
        });
        const result = await response.json();
        const sortedResult = result.sort((a, b) => a.priority - b.priority);
        setSocials(sortedResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-details">
        <div className="contact-description">
          <div className="contact-subheading">{tagStatement[0]?.statement}</div>
          <div className="contact-heading">kanavgoyal898</div>
        </div>
        <div className="socials-container">
          <div className="social-container">
            {mails.map((mail, index) => (
              <a
                key={index}
                href={mail.link}
                target="_blank"
                className="link-text"
              >
                {mail.email}
              </a>
            ))}
          </div>
          <div className="social-container">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                className="link-text"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="contact-image">
        <img
          src={goyalImage}
          alt="Kanav Goyal"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Contact;
