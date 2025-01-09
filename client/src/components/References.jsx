const references = [
    {
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
        author: "John Doe",
        authorLink: "https://example.com/johndoe",
        designation: "CEO, Example Corp",
    },
    {
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        author: "Jane Smith",
        authorLink: "https://example.com/janesmith",
        designation: "Project Manager, Tech Solutions",
    },
    {
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus.",
        author: "Robert Brown",
        authorLink: "https://example.com/robertbrown",
        designation: "Lead Developer, DevWorks",
    },
    {
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.",
        author: "Emily Johnson",
        authorLink: "https://example.com/emilyjohnson",
        designation: "Product Designer, Creativ Solutions",
    },
    {
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui sit amet purus laoreet euismod.",
        author: "Michael Lee",
        authorLink: "https://example.com/michaellee",
        designation: "Senior Engineer, Innovate Inc",
    },
]

const References = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-auto gap-12 p-4 w-full">
            {references.map((reference, index) => (
                <div key={index} className="flex flex-col items-start justify-start">
                    <div className="text-2xl">{ reference.remark }</div>
                    <p className="text-accentLight dark:text-accentDark">
                        <a href={ reference.authorLink }>{ reference.author }</a>
                        &nbsp; { reference.designation }
                    </p>
                </div>
            ))}
        </div>
    )
}

export default References
