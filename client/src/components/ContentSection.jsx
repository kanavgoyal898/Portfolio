const sections = [
    { id: 'section1', content: 'Content for Section 1' },
    { id: 'section2', content: 'Content for Section 2' },
    { id: 'section3', content: 'Content for Section 3' },
    { id: 'section4', content: 'Content for Section 4' },
    { id: 'section5', content: 'Content for Section 5' },
    { id: 'section6', content: 'Content for Section 6' },
    { id: 'section7', content: 'Content for Section 7' },
  ]
  
const ContentSection = () => {
    return (
        <div className="ml-[33.3%] w-[66.6%] h-screen bg-green-500 pe-10 overflow-y-auto">
            {sections.map((section) => (
                <div key={ section.id } id={ section.id } className="mb-8 min-h-full">
                <h2 className="text-lg font-bold">{ section.id }</h2>
                <p>{ section.content }</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente voluptatem neque ex hic, vero quod labore fuga dignissimos harum modi ea, vitae eligendi consectetur libero accusantium ad dicta magnam possimus voluptas amet expedita nihil dolor? Vero neque voluptatem quia illum nostrum est atque provident non harum maxime ratione blanditiis doloribus ab eligendi sequi adipisci quibusdam, earum vitae officiis in consectetur magni. Eius aliquid saepe repellat, cupiditate facere assumenda non voluptatem praesentium perferendis velit enim aut quod, consectetur quaerat. Facere iusto, nam provident explicabo asperiores perspiciatis unde omnis praesentium voluptas cum temporibus nemo voluptatem ipsam incidunt repudiandae ullam recusandae eligendi sapiente tenetur quo ex illum quasi officiis dicta. Suscipit a similique consequuntur nesciunt cupiditate facilis aliquid, dicta nemo praesentium totam. Sequi placeat aspernatur illo ex, quia iusto dignissimos. Obcaecati sint eum ad maxime facilis cumque quibusdam tempora provident similique a. Aliquam nobis delectus dolorem pariatur at accusantium molestiae unde repellat amet consectetur sit quos fugiat, culpa, minima animi ipsam facilis totam eveniet aliquid expedita, voluptatibus voluptate doloribus! Molestiae eos voluptates dolores accusantium voluptate culpa ut hic laborum doloremque placeat quos labore non repellat consequuntur harum officia accusamus, corporis asperiores itaque totam. Et harum provident ipsum quod repellat, voluptatum eligendi. Quod, quasi, perferendis, autem iusto modi beatae maxime fugit natus dolorum delectus harum amet adipisci? Quam similique rem ut distinctio laudantium esse? Veritatis fuga recusandae nostrum ab ipsa. Officiis veritatis culpa laborum. Cum laborum sint officia vitae quae molestias! Cum laboriosam necessitatibus expedita quod dolores assumenda libero nobis rerum, explicabo perspiciatis facere possimus laudantium laborum, officiis aperiam?</p>
                </div>
            ))}
        </div>
    )
}
  
export default ContentSection