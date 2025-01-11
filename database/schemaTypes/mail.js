import { defineField, defineType } from 'sanity'

export const MailType = defineType({
    name: 'mail',
    type: 'document',
    title: 'Mail',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
        }),
        defineField({
            name: 'icon',
            type: 'string',
            title: 'Icon',
        }),
        defineField({
            name: 'link',
            type: 'string',
            title: 'Link',
        }),
        defineField({
            name: 'email',
            type: 'email',
            title: 'Mail',
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
