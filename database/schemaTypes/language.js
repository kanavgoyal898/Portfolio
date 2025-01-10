import { defineField, defineType } from 'sanity'

export const LanguageType = defineType({
    name: 'language',
    type: 'document',
    title: 'Language',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Language Name',
        }),
        defineField({
            name: 'icon',
            type: 'image',
            title: 'Icon',
        }),
        defineField({
            name: 'link',
            type: 'url',
            title: 'Link',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'frameworks',
            type: 'array',
            title: 'Frameworks',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            type: 'string',
                            title: 'Framework Name',
                        }),
                        defineField({
                            name: 'icon',
                            type: 'image',
                            title: 'Icon',
                        }),
                        defineField({
                            name: 'link',
                            type: 'url',
                            title: 'Link',
                        }),
                        defineField({
                            name: 'description',
                            type: 'string',
                            title: 'Framework Description',
                        }),
                        defineField({
                            name: 'priority',
                            type: 'number',
                            title: 'Priority',
                            initialValue: 0,
                        }),
                    ],  
                },
            ]
        }),
        defineField({
            name: 'libaries',
            type: 'array',
            title: 'Libaries',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            type: 'string',
                            title: 'Libary Name',
                        }),
                        defineField({
                            name: 'icon',
                            type: 'image',
                            title: 'Icon',
                        }),
                        defineField({
                            name: 'link',
                            type: 'url',
                            title: 'Link',
                        }),
                        defineField({
                            name: 'description',
                            type: 'string',
                            title: 'Library Description',
                        }),
                        defineField({
                            name: 'priority',
                            type: 'number',
                            title: 'Priority',
                            initialValue: 0,
                        }),
                    ],  
                },
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
