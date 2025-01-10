import { defineField, defineType } from 'sanity'

export const ProjectType = defineType({
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Project Name',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Project Description',
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
            name: 'source',
            type: 'url',
            title: 'Source Repository',
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
