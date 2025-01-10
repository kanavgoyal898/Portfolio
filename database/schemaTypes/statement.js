import { defineField, defineType } from 'sanity'

export const StatementType = defineType({
    name: 'statement',
    type: 'document',
    title: 'Statement',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'statement',
            type: 'text',
            title: 'Statement',
        }),
        defineField({
            name: 'priority',
            type: 'number',
            title: 'Priority',
            initialValue: 0,
        })
    ]
})
