import { defineField, defineType } from 'sanity'

export const AwardType = defineType({
    name: 'award',
    type: 'document',
    title: 'Award',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Award Name',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Award Description',
        }),
        defineField({
            name: 'date',
            type: 'datetime',
            title: 'Date',
        }),
        defineField({
            name: 'link',
            type: 'url',
            title: 'Link',
        }),
        defineField({
            name: 'attachments',
            type: 'array',
            title: 'Attachments',
            of: [
                { type: 'image', title: 'Image File' },
                { type: 'file', title: 'Document or File' },
            ]
        }),
        defineField({
            name: 'priority',
            type: 'number',
            title: 'Priority',
            initialValue: 0,
        }),
    ]
})
