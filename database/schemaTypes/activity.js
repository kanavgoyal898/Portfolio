import { defineField, defineType } from 'sanity'

export const ActivityType = defineType({
    name: 'activity',
    type: 'document',
    title: 'Activity',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Activity Name',
        }),
        defineField({
            name: 'description',
            type: 'string',
            title: 'Activity Description',
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
