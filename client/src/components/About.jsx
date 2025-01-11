import { useState, useEffect } from 'react'
import './About.css'

const awards = [
    {
        title: 'Article 1',
        description1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: '#',
        linkText: 'View Award',
    },
    {
        title: 'Article 2',
        description1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: '#',
        linkText: 'View Award',
    },
    {
        title: 'Article 3',
        description1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: '#',
        linkText: 'View Award',
    },
    {
        title: 'Article 4',
        description1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: '#',
        linkText: 'View Award',
    },
    {
        title: 'Article 5',
        description1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: '#',
        linkText: 'View Award',
    },
]

const articles = [
    {
        title: 'Press 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: 'April 6, 2004',
        link: '#',
        linkText: 'View Article',
    },
    {
        title: 'Press 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: 'April 6, 2004',
        link: '#',
        linkText: 'View Article',
    },
    {
        title: 'Press 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: 'April 6, 2004',
        link: '#',
        linkText: 'View Article',
    },
]

const About = () => {
    const [accomplishments, setAccomplishments] = useState([])
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/query', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                    query: '*[_type == "accomplishment"]',
                    }),
                })
                const result = await response.json()
                console.log(result)
                setAccomplishments(result)
                } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    const [education, setEducation] = useState([])
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/query', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                    query: '*[_type == "education"]',
                    }),
                })
                const result = await response.json()
                setEducation(result)
                } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    const [ethicalStatement, setEthicalStatement] = useState([])
            
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/query', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                    query: '*[_type == "statement" && title == "Ethical Statement"]',
                    }),
                })
                const result = await response.json()
                setEthicalStatement(result)
                } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    const [versionStatement, setVersionStatement] = useState([])
            
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/query', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                    query: '*[_type == "statement" && title == "Version Statement"]',
                    }),
                })
                const result = await response.json()
                    setVersionStatement(result)
                } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getFullYear();
            if (now !== currentYear) {
                setCurrentYear(now);
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [currentYear])

    return (
        <div className="about-container">
            <div className="box"></div>
            <div className="box">
                { ethicalStatement[0]?.statement }
            </div>
            <div className="about-column">
                <h2 className="about-title">Awards & Achievements</h2>
                {accomplishments.map((accomplishment, index) => (
                    <div key={index} className="about-cell">
                        <p>{ accomplishment.title }</p>
                        <p className="about-description-1">{ accomplishment.description }</p>
                        <p className="about-description-2">{ accomplishment.date }</p>
                        {accomplishment.link && 
                            <a href={ accomplishment.link } target="_blank" className="about-description-1">{ Link }</a>
                        }
                    </div>
                ))}
            </div>
            <div className="about-column">
                <h2 className="about-title">Education</h2>
                {education.map((grade, index) => (
                    <div key={index} className="about-cell">
                        <p>{ grade.field }</p>
                        <span className="about-description-1">{ grade.title }</span>
                        <span className="about-description-2">{ grade.school }</span>
                        <span className="about-description-2">{ grade.startDate } - { grade.endDate }</span>
                        {grade.link && 
                            <a href={ grade.link } target="_blank" className="about-description-1">Certificate</a>
                        }
                    </div>
                ))}
            </div>
            <div className="box"></div>
            <div className="about-column mt-8">
                <h2 className="about-title">Colophon</h2>
                <div className="about-cell">
                    <p className="about-description-1">Code by Kanav Goyal</p>
                    <p className="about-description-1">{ `Version ${versionStatement[0]?.statement}` }</p>
                    <p className="about-description-2 mt-8">&copy; { currentYear }</p>
                </div>
            </div>
        </div>
    )
}

export default About
