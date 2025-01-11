import { defineField, defineType } from 'sanity'

export const TechnologyType = defineType({
    name: 'technology',
    type: 'document',
    title: 'Technology',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'languages',
            type: 'text',
            title: 'Languages',
        }),
        defineField({
            name: 'tools',
            type: 'text',
            title: 'Tools',
        }),
        defineField({
            name: 'image',
            type: 'string',
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
