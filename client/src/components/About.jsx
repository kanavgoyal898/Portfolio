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
    const currentYear = new Date().getFullYear()

    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-4 p-4 w-full">
            <div className="flex items-start justify-start"></div>
            <div className="flex items-start justify-start">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores nemo illo quod, repellat dolorem nostrum facere at laborum, officiis, magnam impedit est recusandae debitis illum dolore eius vel cum? Nam corrupti soluta modi quae quaerat, tenetur, unde explicabo nulla, voluptatibus perferendis voluptatem laborum? Quaerat voluptatum atque voluptatibus praesentium cumque inventore laborum dolores reiciendis corporis laboriosam, eaque repudiandae hic blanditiis enim tempora possimus laudantium? Eligendi minima vel quis deserunt illo totam provident dolores voluptate. Ut aperiam in soluta suscipit doloribus sapiente neque, architecto voluptas aspernatur ex consectetur. Temporibus totam deleniti nostrum consequuntur soluta consequatur at ea impedit ducimus, aperiam iure ullam dolore adipisci quis facilis odio inventore est sequi ratione ab quod possimus reprehenderit aliquam? Iste sequi culpa architecto, cum nesciunt maxime earum, explicabo doloribus vero odit perferendis.
            </div>
            <div className="flex flex-col items-start justify-start gap-4 mt-10">
                <h2 className="text-2xl">Column Title 1</h2>
                {awards.map((award, index) => (
                    <div key="{index}" className="flex flex-col gap-[2px]">
                        <p className="text-base">{ award.title }</p>
                        <p className="text-sm">{ award.description1 }</p>
                        <p className="text-sm">{ award.description2 }</p>
                        <a href="{ award.link }" className="text-sm underline">{ award.linkText }</a>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-start justify-start gap-4 mt-10">
                <h2 className="text-2xl">Column Title 2</h2>
                {articles.map((article, index) => (
                    <div key="{index}" className="flex flex-col gap-[2px]">
                        <p className="text-base">{ article.title }</p>
                        <p className="text-sm">{ article.description }</p>
                        <p className="text-sm">{ article.date }</p>
                        <a href="{ article.link }" className="text-sm underline">{ article.linkText }</a>
                    </div>
                ))}
            </div>
            <div className="flex items-start justify-start"></div>
            <div className="flex flex-col items-start justify-start gap-4 mt-10">
                <h2 className="text-2xl">Credentials</h2>
                <div className="flex flex-col gap-[2px]">
                    <p className="text-sm">Design & code by Kanav Goyal</p>
                    <p className="text-sm">Credentials</p>
                    <p className="text-sm py-4">&copy; { currentYear }</p>
                </div>
            </div>
        </div>
    )
}

export default About
