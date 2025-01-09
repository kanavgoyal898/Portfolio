const sections = [
    { id: 'section1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus sed pariatur facere? Quasi enim, at libero, sed est repellendus officia suscipit id eos, sapiente voluptate sunt officiis eaque voluptatem in consequatur!' },
    { id: 'section2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus sed pariatur facere? Quasi enim, at libero, sed est repellendus officia suscipit id eos, sapiente voluptate sunt officiis eaque voluptatem in consequatur!' },
    { id: 'section3', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus sed pariatur facere? Quasi enim, at libero, sed est repellendus officia suscipit id eos, sapiente voluptate sunt officiis eaque voluptatem in consequatur!' },
    { id: 'section4', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus sed pariatur facere? Quasi enim, at libero, sed est repellendus officia suscipit id eos, sapiente voluptate sunt officiis eaque voluptatem in consequatur!' },
    { id: 'section5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus sed pariatur facere? Quasi enim, at libero, sed est repellendus officia suscipit id eos, sapiente voluptate sunt officiis eaque voluptatem in consequatur!' },
    { id: 'section6', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus sed pariatur facere? Quasi enim, at libero, sed est repellendus officia suscipit id eos, sapiente voluptate sunt officiis eaque voluptatem in consequatur!' },
    { id: 'section7', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus sed pariatur facere? Quasi enim, at libero, sed est repellendus officia suscipit id eos, sapiente voluptate sunt officiis eaque voluptatem in consequatur!' },
]
  
const ContentSection = () => {
    return (
        <div className="ml-[33.3%] w-[66.6%] h-screen pe-10 overflow-y-auto">
            {sections.map((section) => (
                <div key={ section.id } id={ section.id } className="mb-8 min-h-full flex items-center">
                    <p className="text-6xl">{ section.content }</p>
                </div>
            ))}
        </div>
    )
}
  
export default ContentSection
