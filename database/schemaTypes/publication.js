import { defineField, defineType } from 'sanity'

export const PublicationType = defineType({
    name: 'publication',
    type: 'document',
    title: 'Publication',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'abstract',
            type: 'text',
            title: 'Abstract',
        }),
        defineField({
            name: 'link',
            type: 'url',
            title: 'Link',
        }),
        defineField({
            name: 'authors',
            type: 'array',
            title: 'Authors',
            of: [ { type: 'string', }, ],
        }),
        defineField({
            name: 'date',
            type: 'date',
            title: 'Date',
        }),
    ],
})
