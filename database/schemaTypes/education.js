import { defineField, defineType } from 'sanity'

export const EducationType = defineType({
    name: 'education',
    type: 'document',
    title: 'Education',
    fields: [
        defineField({
            name: 'school',
            type: 'string',
            title: 'School',
        }),
        defineField({
            name: 'location',
            type: 'string',
            title: 'Location',
        }),
        defineField({
            name: 'icon',
            type: 'string',
            title: 'Icon',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'level',
            type: 'string',
            title: 'Level',
        }),
        defineField({
            name: 'field',
            type: 'string',
            title: 'Field',
        }),
        defineField({
            name: 'start',
            type: 'date',
            title: 'Start Date',
        }),
        defineField({
            name: 'end',
            type: 'date',
            title: 'End Date',
        }),
        defineField({
            name: 'gpa',
            type: 'string',
            title: 'GPA',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'courses',
            type: 'array',
            title: 'Courses',
            of: [
                { type: 'string', },
            ],
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
        }),
    ]
})
