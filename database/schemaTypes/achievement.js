import { defineField, defineType } from 'sanity'

export const AchievementType = defineType({
    name: 'achievement',
    type: 'document',
    title: 'Achievement',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Achievement Name',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Achievement Description',
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
