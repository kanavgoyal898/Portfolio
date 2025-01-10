import { defineField, defineType } from 'sanity'

export const profileType = defineType({
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        defineField({
            name: 'fullName',
            type: 'string',
            title: 'Full Name',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'username',
            type: 'string',
            title: 'Username',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tagline',
            type: 'string',
            title: 'Tagline',
            validation: (Rule) => Rule.max(96),
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: (Rule) => Rule.max(96),
        }),
        defineField({
            name: 'bio',
            type: 'text',
            title: 'Bio',
            validation: (Rule) => Rule.max(512),
        }),
        defineField({
            name: 'profilePicture',
            type: 'image',
            title: 'Profile Picture',
            options: { hotspot: true, },
        }),
        defineField({
            name: 'emails',
            type: 'array',
            of: [{ type: 'string', title: 'Email' }],
            title: 'Emails',
            validation: (Rule) => Rule.unique(),
        }),
        defineField({
            name: 'links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Link',
                    fields: [
                        defineField({
                            name: 'favicon',
                            type: 'image',
                            title: 'Font Awesome Icon',
                        }),                       
                        defineField({
                            name: 'title',
                            type: 'string',
                            title: 'Title',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'url',
                            type: 'url',
                            title: 'URL',
                            validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
                        }),
                    ],
                },
            ],
            title: 'Links',
        }),
        defineField({
            name: 'images',
            type: 'array',
            of: [{ type: 'image' }],
            title: 'Images',
            options: { hotspot: true, },
        }),
    ],
})
