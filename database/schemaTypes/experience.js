import { defineField, defineType } from 'sanity'

export const ExperienceType = defineType({
    name: 'experience',
    type: 'document',
    title: 'Experience',
    fields: [
        defineField({
            name: 'designation',
            type: 'string',
            title: 'Designation',
        }),
        defineField({
            name: 'company',
            type: 'string',
            title: 'Company Name',
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
            name: 'icon',
            type: 'string',
            title: 'Icon',
        }),
        defineField({
            name: 'startDate',
            type: 'datetime',
            title: 'Start Date',
        }),
        defineField({
            name: 'endDate',
            type: 'datetime',
            title: 'End Date',
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
