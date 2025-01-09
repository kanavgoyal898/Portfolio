import './Background.css'

const experiences = [
    {
        logo: "/path/to/logo1.png",
        companyName: "Company A",
        designation: "Software Engineer",
        year: "2022 - Present",
        location: "New York, USA",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    },
    {
        logo: "/path/to/logo2.png",
        companyName: "Company B",
        designation: "Frontend Developer",
        year: "2020 - 2022",
        location: "San Francisco, USA",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla facilisi.",
    },
    {
        logo: "/path/to/logo3.png",
        companyName: "Company C",
        designation: "Junior Developer",
        year: "2018 - 2020",
        location: "London, UK",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Sed euismod tortor id nulla consequat.",
    },
    {
        logo: "/path/to/logo4.png",
        companyName: "Company D",
        designation: "Intern",
        year: "2017 - 2018",
        location: "Toronto, Canada",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Ut sed justo eget ligula sollicitudin fringilla.",
    },
    {
        logo: "/path/to/logo5.png",
        companyName: "Company E",
        designation: "Tech Support",
        year: "2016 - 2017",
        location: "Sydney, Australia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla facilisi. Mauris mollis leo sed velit lacinia, non volutpat libero malesuada.",
    },
]

const Background = () => {
    return (
        <div className="grid grid-rows-auto grid-cols-2 background-container">
            <div className="box">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores nemo illo quod, repellat dolorem nostrum facere at laborum, officiis, magnam impedit est recusandae debitis illum dolore eius vel cum? Nam corrupti soluta modi quae quaerat, tenetur, unde explicabo nulla, voluptatibus perferendis voluptatem laborum? Quaerat voluptatum atque voluptatibus praesentium cumque inventore laborum dolores reiciendis corporis laboriosam, eaque repudiandae hic blanditiis enim tempora possimus laudantium? Eligendi minima vel quis deserunt illo totam provident dolores voluptate. Ut aperiam in soluta suscipit doloribus sapiente neque, architecto voluptas aspernatur ex consectetur. Temporibus totam deleniti nostrum consequuntur soluta consequatur at ea impedit ducimus, aperiam iure ullam dolore adipisci quis facilis odio inventore est sequi ratione ab quod possimus reprehenderit aliquam? Iste sequi culpa architecto, cum nesciunt maxime earum, explicabo doloribus vero odit perferendis.
            </div>
            <div className="box"></div>
            {experiences.map((experience, index) => (
                <>
                    <div key={ index } className="background-box">
                        <div className="background-picture">
                        </div>
                        <h3 className="background-name">{ experience.companyName }</h3>
                        <h2 className="background-designation">{ experience.designation }</h2>
                        <p>{ experience.year } { experience.designation }</p>
                        <p className="background-description">{ experience.description }</p>
                    </div>
                    <div className="box"></div>
                </>
            ))}
        </div>
    )
}

export default Background
