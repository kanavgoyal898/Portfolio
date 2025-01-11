import { defineField, defineType } from 'sanity'

export const EducationType = defineType({
    name: 'education',
    type: 'document',
    title: 'Education',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'field',
            type: 'text',
            title: 'Field of Study',
        }),
        defineField({
            name: 'school',
            type: 'text',
            title: 'School',
        }),
        defineField({
            name: 'startDate',
            type: 'string',
            title: 'Start Date',
        }),
        defineField({
            name: 'endDate',
            type: 'string',
            title: 'End Date',
        }),
        defineField({
            name: 'gpa',
            type: 'string',
            title: 'GPA',
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
