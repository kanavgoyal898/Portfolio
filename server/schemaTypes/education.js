import { defineField, defineType } from 'sanity'

export const educationType = defineType({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        defineField({
            name: 'degree',
            type: 'string',
            title: 'Degree',
            validation: (Rule) => Rule.required(),
            initialValue: 'Bachelors',
        }),
        defineField({
            name: 'degreeAcronym',
            type: 'string',
            title: 'Acronym',
        }),
        defineField({
            name: 'major',
            type: 'string',
            title: 'Major',
            initialValue: 'Computer Science & Engineering',
        }),
        defineField({
            name: 'school',
            type: 'string',
            title: 'School',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logo',
            type: 'image',
            title: 'Logo',
            options: { hotspot: true, },
        }),
        defineField({
            name: 'location',
            type: 'string',
            title: 'Location',
        }),
        defineField({
            name: 'startYear',
            type: 'number',
            title: 'Start Year',
            validation: (Rule) => Rule.min(1900).max(new Date().getFullYear()).integer(),
            initialValue: new Date().getFullYear(),
        }),
        defineField({
            name: 'endYear',
            type: 'number',
            title: 'End Year',
            validation: (Rule) => Rule.min(1900).max(new Date().getFullYear()).integer(),
            initialValue: new Date().getFullYear(),
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'subjects',
            type: 'array',
            of: [{ type: 'string' }],
            title: 'Subjects',
        }),
        defineField({
            name: 'link',
            type: 'url',
            title: 'Link',
            validation: (Rule) => Rule.uri({
                scheme: ['http', 'https'],
            }),
        }),
        defineField({
            name: 'proof',
            type: 'url',
            title: 'Proof',
            validation: (Rule) => Rule.uri({
                scheme: ['http', 'https'],
            }),
        }),
    ],
})
