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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores nemo illo quod, repellat dolorem nostrum facere at laborum, officiis, magnam impedit est recusandae debitis illum dolore eius vel cum? Nam corrupti soluta modi quae quaerat, tenetur, unde explicabo nulla, voluptatibus perferendis voluptatem laborum? Quaerat voluptatum atque voluptatibus praesentium cumque inventore laborum dolores reiciendis corporis laboriosam, eaque repudiandae hic blanditiis enim tempora possimus laudantium? Eligendi minima vel quis deserunt illo totam provident dolores voluptate. Ut aperiam in soluta suscipit doloribus sapiente neque, architecto voluptas aspernatur ex consectetur. Temporibus totam deleniti nostrum consequuntur soluta consequatur at ea impedit ducimus, aperiam iure ullam dolore adipisci quis facilis odio inventore est sequi ratione ab quod possimus reprehenderit aliquam? Iste sequi culpa architecto, cum nesciunt maxime earum, explicabo doloribus vero odit perferendis.
            </div>
            <div className="about-column">
                <h2 className="about-title">Column Title 1</h2>
                {awards.map((award, index) => (
                    <div key={index} className="about-cell">
                        <p>{ award.title }</p>
                        <p className="about-description">{ award.description1 }</p>
                        <p className="about-description">{ award.description2 }</p>
                        <a href={ award.link } className="about-description">{ award.linkText }</a>
                    </div>
                ))}
            </div>
            <div className="about-column">
                <h2 className="about-title">Column Title 2</h2>
                {articles.map((article, index) => (
                    <div key={index} className="about-cell">
                        <p>{ article.title }</p>
                        <p className="about-description">{ article.description }</p>
                        <p className="about-description">{ article.date }</p>
                        <a href={ article.link } className="about-description">{ article.linkText }</a>
                    </div>
                ))}
            </div>
            <div className="box"></div>
            <div className="about-column my-8">
                <h2 className="about-title">Credentials</h2>
                <div className="about-cell">
                    <p className="about-description">Design & code by Kanav Goyal</p>
                    <p className="about-description">Credentials</p>
                    <p className="about-description my-8">&copy; { currentYear }</p>
                </div>
            </div>
        </div>
    )
}

export default About
