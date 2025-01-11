import { defineField, defineType } from 'sanity'

export const AccomplishmentType = defineType({
    name: 'accomplishment',
    type: 'document',
    title: 'Accomplishment',
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
            name: 'date',
            type: 'string',
            title: 'Date',
        }),
        defineField({
            name: 'link',
            type: 'string',
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
