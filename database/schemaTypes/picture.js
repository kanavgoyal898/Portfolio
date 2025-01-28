import { defineField, defineType } from 'sanity'

export const PictureType = defineType({
    name: 'picture',
    type: 'document',
    title: 'Picture',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Picture Name',
        }),
        defineField({
            name: 'media',
            type: 'image',
            title: 'Media',
        }),
        defineField({
            name: 'description',
            type: 'string',
            title: 'Description',
        }),
        defineField({
            name: 'date',
            type: 'date',
            title: 'Date',
        }),
        defineField({
            name: 'priority',
            type: 'number',
            title: 'Priority',
            initialValue: 0,
        }),
    ]
})
