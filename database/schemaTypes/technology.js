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
            name: 'icon',
            type: 'string',
            title: 'Icon',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'link',
            type: 'url',
            title: 'Link',
        }),
        defineField({
            name: 'priority',
            type: 'number',
            title: 'Priority',
            initialValue: 0,
        })
    ]
})
