import { defineField, defineType } from 'sanity'

export const ProjectType = defineType({
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'techstack',
            type: 'string',
            title: 'Tech Stack',
        }),
        defineField({
            name: 'technologies',
            type: 'string',
            title: 'Technologies',
        }),
        defineField({
            name: 'link',
            type: 'string',
            title: 'Link',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
        }),
        defineField({
            name: 'priority',
            type: 'number',
            title: 'Priority',
            initialValue: 0,
        })
    ]
})