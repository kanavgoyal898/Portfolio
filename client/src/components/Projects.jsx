import { useState, useEffect } from 'react'
import './Projects.css'

const references = [
    {
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
        author: "John Doe",
        authorLink: "https://example.com/johndoe",
        designation: "CEO, Example Corp",
    },
    {
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
        author: "Jane Smith",
        authorLink: "https://example.com/janesmith",
        designation: "Project Manager, Tech Solutions",
    },
    {
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
        author: "Robert Brown",
        authorLink: "https://example.com/robertbrown",
        designation: "Lead Developer, DevWorks",
    },
    {
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
        author: "Emily Johnson",
        authorLink: "https://example.com/emilyjohnson",
        designation: "Product Designer, Creativ Solutions",
    },
    {
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui sit amet purus laoreet euismod.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
        author: "Michael Lee",
        authorLink: "https://example.com/michaellee",
        designation: "Senior Engineer, Innovate Inc",
    },
]

const References = () => {
    const [projects, setProjects] = useState([])
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/query', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                    query: '*[_type == "project"]',
                    }),
                })
                const result = await response.json()
                setProjects(result)
                } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="references-section">
            {projects.map((project, index) => (
                <div key={ index } className="reference-container">
                    <div className="reference-remark">{ project.title }</div>
                    <div className="reference-description-1">{ project.description }</div>
                    <div className="reference-description-2">{ project.techstack }</div>
                    <p className="reference-details">
                        <a href={ project.link } target="_blank">Source Code</a>
                        &nbsp; { project.technologies }
                    </p>
                </div>
            ))}
        </div>
    )
}

export default References
