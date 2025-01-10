import { defineField, defineType } from 'sanity'

export const SocialType = defineType({
    name: 'social',
    type: 'document',
    title: 'Social',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Social Platform Name',
        }),
        defineField({
            name: 'icon',
            type: 'string',
            title: 'Icon',
        }),
        defineField({
            name: 'link',
            type: 'url',
            title: 'Link',
        }),
        defineField({
            name: 'username',
            type: 'string',
            title: 'Username',
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
})
