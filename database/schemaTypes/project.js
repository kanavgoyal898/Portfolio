import { defineField, defineType } from 'sanity'

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Project Image',
            options: { hotspot: true, },
        }),
        defineField({
            name: 'link',
            type: 'url',
            title: 'Project Link',
            validation: (Rule) => Rule.uri({
                scheme: ['http', 'https'],
            }),
        }),
        defineField({
            name: 'deployedLink',
            type: 'url',
            title: 'Website Link',
            validation: (Rule) => Rule.uri({
                scheme: ['http', 'https'],
            }),
        }),
        defineField({
            name: 'technologies',
            type: 'array',
            of: [{ type: 'string' }],
            title: 'Technologies Used',
        }),
    ],
})
