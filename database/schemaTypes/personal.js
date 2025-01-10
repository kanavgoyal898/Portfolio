import { defineField, definePlugin, defineType } from 'sanity'

export const PersonalType = defineType({
    name: 'personal',
    type: 'document',
    title: 'Personal',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Full Name',
        }),
        defineField({
            name: 'username',
            type: 'string',
            title: 'Username',
        }),
        defineField({
            name: 'profile',
            type: 'image',
            title: 'Profile',
        }),
        defineField({
            name: 'bio',
            type: 'text',
            title: 'Bio',
        }),
        defineField({
            name: 'location',
            type: 'string',
            title: 'Location',
        }),
        defineField({
            name: 'emails',
            title: 'Emails',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'email',
                            type: 'email',
                            title: 'Email',
                        }),
                        defineField({
                            name: 'icon',
                            type: 'string',
                            title: 'Icon',
                        }),
                        defineField({
                            name: 'description',
                            type: 'string',
                            title: 'Description',
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
                }
            ]
        }),
        defineField({
            name: 'descriptions',
            title: 'Descriptions',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            type: 'string',
                            title: 'Title',
                        }),
                        defineField({
                            name: 'description',
                            type: 'text',
                            title: 'Description',
                        }),
                        defineField({
                            name: 'priority',
                            type: 'number',
                            title: 'Priority',
                            initialValue: 0,
                        }),
                    ]
                }
            ]
        }),
        defineField({
            name: 'quotes',
            title: 'Quotes',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'quote',
                            type: 'text',
                            title: 'Quote',
                        }),
                        defineField({
                            name: 'description',
                            type: 'string',
                            title: 'Description',
                        }),
                        defineField({
                            name: 'priority',
                            type: 'number',
                            title: 'Priority',
                            initialValue: 0,
                        }),
                    ]
                }
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
