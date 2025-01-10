import { useEffect, useState } from 'react'
import './Values.css'

const Values = () => {
    const [personalStatement, setPersonalStatement] = useState([])
            
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/query', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                    query: '*[_type == "statement" && title == "Personal Statement"]',
                    }),
                })
                const result = await response.json()
                setPersonalStatement(result)
                } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    const [researchStatement, setResearchStatement] = useState([])
            
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/query', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                    query: '*[_type == "statement" && title == "Research Statement"]',
                    }),
                })
                const result = await response.json()
                console.log(result)
                setResearchStatement(result)
                } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="values-container">
            <div className="box">
                <p className="values-title">
                    { personalStatement[0]?.statement }
                </p>
            </div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box">
                { researchStatement[0]?.statement }
            </div>
        </div>
    )
}

export default Values
