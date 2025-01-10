import { defineField, defineType } from 'sanity'

export const DescriptionType = defineType({
    name: 'description',
    type: 'document',
    title: 'Description',
    fields: [
        defineField({
            name: 'to',
            type: 'string',
            title: 'To',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'priority',
            type: 'number',
            title: 'Priority',
            initialValue: 0,
        })
    ]
})
